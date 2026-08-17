import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { articles, site } from "../content/articles.mjs";
import { distDir, generateArtifacts, rootDir } from "./build.mjs";

const localeEntries = Object.entries(site.locales);
const checkedFiles = new Set();

function bodyIntegrity(bodyBlocks) {
  return createHash("sha256").update(JSON.stringify(bodyBlocks)).digest("hex");
}

function canonicalUrl(localeKey, slug = "") {
  const locale = site.locales[localeKey];
  const base = `${site.productionOrigin}${site.updatesPath}${locale.pathPrefix ? `/${locale.pathPrefix}` : ""}`;
  return slug ? `${base}/${slug}/` : `${base}/`;
}

function outputRelativePath(localeKey, slug = "") {
  const prefix = site.locales[localeKey].pathPrefix;
  return ["updates", prefix, slug, "index.html"].filter(Boolean).join("/");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function countMatches(text, expression) {
  return [...text.matchAll(expression)].length;
}

function normalizeMarkup(value) {
  return value.replace(/>\s+</g, "><").trim();
}

function displayDate(dateTime, localeKey) {
  const [year, month, day] = dateTime.slice(0, 10).split("-").map(Number);
  return new Intl.DateTimeFormat(site.locales[localeKey].locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function parseJsonLd(html, relativePath) {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(match, `${relativePath}: missing JSON-LD`);
  assert.doesNotThrow(() => JSON.parse(match[1]), `${relativePath}: invalid JSON-LD`);
  return JSON.parse(match[1]);
}

async function read(relativePath) {
  const normalized = relativePath.replaceAll("\\", "/");
  checkedFiles.add(normalized);
  return readFile(path.join(distDir, normalized), "utf8");
}

async function listFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(absolutePath, relativePath));
    } else {
      assert(entry.isFile(), `dist contains an unsupported filesystem entry: ${relativePath}`);
      files.push(relativePath);
    }
  }
  return files.sort();
}

async function validateGeneratedArtifacts() {
  const expected = await generateArtifacts();
  await assert.doesNotReject(
    () => access(distDir),
    "dist is missing; run npm run build before npm run check"
  );

  const expectedPaths = [...expected.keys()].sort();
  const actualPaths = await listFiles(distDir);
  assert.deepEqual(
    actualPaths,
    expectedPaths,
    "dist contains stale, missing, or unexpected artifacts; run npm run build"
  );

  for (const [relativePath, expectedContents] of expected) {
    const actualContents = await read(relativePath);
    assert.equal(
      actualContents,
      expectedContents,
      `${relativePath}: generated output is stale; run npm run build`
    );
  }
}

async function assertLocalReferencesExist(html, relativePath) {
  const directory = path.dirname(path.join(distDir, relativePath));
  const references = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  for (const reference of references) {
    if (
      reference.startsWith("http://") ||
      reference.startsWith("https://") ||
      reference.startsWith("mailto:") ||
      reference.startsWith("#")
    ) {
      continue;
    }

    const cleanReference = reference.split(/[?#]/, 1)[0];
    const candidate = path.resolve(directory, cleanReference || ".");
    const target = cleanReference.endsWith("/") ? path.join(candidate, "index.html") : candidate;
    const relativeToRoot = path.relative(distDir, target);
    assert(
      relativeToRoot === "" || (!relativeToRoot.startsWith(`..${path.sep}`) && !path.isAbsolute(relativeToRoot)),
      `${relativePath}: local reference escapes the project root: ${reference}`
    );
    await assert.doesNotReject(
      () => access(target),
      `${relativePath}: missing local reference ${reference}`
    );
  }
}

function validateEditorialData() {
  assert.equal(site.productionOrigin, "https://tf.xyz", "productionOrigin must remain the apex https://tf.xyz host");
  assert.equal(site.homeUrl, `${site.productionOrigin}/`, "homeUrl must use the production apex host");
  assert.equal(site.organizationId, `${site.productionOrigin}/#organization`, "organizationId must use the production apex host");
  assert.equal(site.sitemapUrl, `${site.productionOrigin}/sitemap-updates.xml`, "sitemapUrl must use the production apex host");
  assert(site.socialImageUrl.startsWith(`${site.productionOrigin}/`), "socialImageUrl must use the production apex host");
  assert.match(site.productionOrigin, /^https:\/\//, "productionOrigin must use HTTPS");
  assert.equal(site.updatesPath, "/updates", "updatesPath must remain /updates");
  assert(articles.length > 0, "at least one reviewed article is required");
  for (const [localeKey, locale] of localeEntries) {
    assert(locale.listDatePrefix, `listDatePrefix is required for ${localeKey}`);
    assert(locale.originalSourcePrefix, `originalSourcePrefix is required for ${localeKey}`);
    assert(locale.sourceAuthorPrefix, `sourceAuthorPrefix is required for ${localeKey}`);
    assert(locale.summaryTitle, `summaryTitle is required for ${localeKey}`);
    assert(locale.faqTitle, `faqTitle is required for ${localeKey}`);
    assert(locale.aboutTurboFlow?.title, `aboutTurboFlow is required for ${localeKey}`);
  }

  const slugs = new Set();
  for (const article of articles) {
    const isSourceRepublication = article.format === "source-republication";
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `invalid slug: ${article.slug}`);
    assert(!slugs.has(article.slug), `duplicate slug: ${article.slug}`);
    slugs.add(article.slug);
    assert(!Object.hasOwn(article, "author"), `${article.slug}: top-level author is retired`);
    assert(!Number.isNaN(Date.parse(article.publishedAt)), `${article.slug}: invalid publishedAt`);
    assert(!Number.isNaN(Date.parse(article.modifiedAt)), `${article.slug}: invalid modifiedAt`);
    assert(
      Date.parse(article.modifiedAt) >= Date.parse(article.publishedAt),
      `${article.slug}: modifiedAt precedes publishedAt`
    );
    assert(Array.isArray(article.sources) && article.sources.length > 0, `${article.slug}: sources are required`);
    assert.match(article.primarySource, /^https:\/\//, `${article.slug}: primarySource must use HTTPS`);
    assert(article.format === undefined || isSourceRepublication, `${article.slug}: invalid article format`);
    assert(article.sourceDocument && typeof article.sourceDocument === "object", `${article.slug}: sourceDocument is required`);
    assert(
      [article.sourceDocument.author, article.sourceDocument.platform].some((value) => typeof value === "string" && value.length > 0),
      `${article.slug}: sourceDocument author or platform is required`
    );
    assert(
      ["owned-release", "attributed-adaptation", "licensed-republication", "verbatim-republication"].includes(article.sourceDocument?.rightsMode),
      `${article.slug}: sourceDocument rightsMode is invalid`
    );
    if (isSourceRepublication) {
      assert.equal(article.sourceDocument.rightsMode, "verbatim-republication", `${article.slug}: source republication rightsMode drift`);
      assert(article.sourceDocument.title, `${article.slug}: source title is required`);
      assert(article.sourceDocument.platform, `${article.slug}: source platform is required`);
      assert.match(article.sourceDocument.language, /^[a-z]{2}(?:-[A-Z]{2})?$/, `${article.slug}: source language is invalid`);
      assert(
        article.sourceDocument.localizedBodies === undefined || typeof article.sourceDocument.localizedBodies === "boolean",
        `${article.slug}: localizedBodies must be boolean when provided`
      );
      assert(
        article.sourceDocument.includesAboutTurboFlow === undefined || typeof article.sourceDocument.includesAboutTurboFlow === "boolean",
        `${article.slug}: includesAboutTurboFlow must be boolean when provided`
      );
    }
    const sourceUrls = article.sources.map((source) => source.url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length, `${article.slug}: source URLs must be unique`);
    const bodyLinks = article.bodyLinks || [];
    assert(Array.isArray(bodyLinks), `${article.slug}: bodyLinks must be an array when provided`);
    assert(bodyLinks.every((url) => typeof url === "string" && /^https:\/\//.test(url)), `${article.slug}: bodyLinks must use HTTPS`);
    assert.equal(new Set(bodyLinks).size, bodyLinks.length, `${article.slug}: bodyLinks must be unique`);
    assert(bodyLinks.every((url) => !sourceUrls.includes(url)), `${article.slug}: bodyLinks must not duplicate citation sources`);
    const allowedBodyLinks = new Set([...sourceUrls, ...bodyLinks]);
    assert.equal(
      article.sources.filter((source) => source.url === article.primarySource).length,
      1,
      `${article.slug}: primarySource must match exactly one article source`
    );
    assert(Array.isArray(article.relatedSlugs), `${article.slug}: relatedSlugs must be an array`);

    for (const relatedSlug of article.relatedSlugs) {
      assert.notEqual(relatedSlug, article.slug, `${article.slug}: article cannot relate to itself`);
    }

    for (const source of article.sources) {
      assert.match(source.url, /^https:\/\//, `${article.slug}: source must use HTTPS`);
      assert(!/[?&]utm_/i.test(source.url), `${article.slug}: remove tracking parameters from source URLs`);
      for (const [localeKey] of localeEntries) {
        assert(source.label?.[localeKey], `${article.slug}: source label missing for ${localeKey}`);
      }
    }

    for (const [localeKey] of localeEntries) {
      const copy = article.translations?.[localeKey];
      assert(copy, `${article.slug}: translation missing for ${localeKey}`);
      for (const field of [
        "pageTitle",
        "pageDescription",
        "socialDescription",
        "twitterTitle",
        "category",
        "breadcrumbCurrent",
        "headline",
        "dek"
      ]) {
        assert(copy[field], `${article.slug}/${localeKey}: missing ${field}`);
      }
      assert(!Object.hasOwn(copy, "facts"), `${article.slug}/${localeKey}: legacy facts are forbidden`);
      assert(!Object.hasOwn(copy, "blocks"), `${article.slug}/${localeKey}: legacy blocks are forbidden`);
      assert(!Object.hasOwn(copy, "sourceBlocks"), `${article.slug}/${localeKey}: legacy sourceBlocks are forbidden`);
      if (isSourceRepublication) {
        assert(!Object.hasOwn(copy, "summaryItems"), `${article.slug}/${localeKey}: source republication must not add a summary section`);
        assert(!Object.hasOwn(copy, "riskNotice"), `${article.slug}/${localeKey}: source republication must not add an editorial risk section`);
        if (article.sourceDocument.includesAboutTurboFlow) {
          const expectedAboutHeading = article.sourceDocument.localizedBodies
            ? site.locales[localeKey].aboutTurboFlow.title
            : site.locales.en.aboutTurboFlow.title;
          assert(
            copy.bodyBlocks.some((block) => block.type === "heading" && block.text === expectedAboutHeading),
            `${article.slug}/${localeKey}: source body must contain the declared About TurboFlow heading`
          );
        }
      } else {
        assert(Array.isArray(copy.summaryItems) && copy.summaryItems.length > 0, `${article.slug}/${localeKey}: summaryItems are required`);
        assert(copy.riskNotice, `${article.slug}/${localeKey}: riskNotice is required`);
      }
      assert(Array.isArray(copy.bodyBlocks) && copy.bodyBlocks.length > 0, `${article.slug}/${localeKey}: bodyBlocks are required`);
      assert.equal(
        article.sourceDocument.bodyIntegrity?.[localeKey],
        bodyIntegrity(copy.bodyBlocks),
        `${article.slug}/${localeKey}: locked body integrity mismatch`
      );
      assert(Array.isArray(copy.faqs) && copy.faqs.length > 0, `${article.slug}/${localeKey}: faqs are required`);
      if (isSourceRepublication) {
        assert.equal(copy.faqs.length, 5, `${article.slug}/${localeKey}: source republication requires exactly five FAQs`);
      }

      for (const item of copy.summaryItems || []) {
        assert(item.title && item.text, `${article.slug}/${localeKey}: summary items require title and text`);
      }

      const questions = new Set();
      for (const faq of copy.faqs) {
        assert(faq.question && faq.answer, `${article.slug}/${localeKey}: FAQ items require question and answer`);
        assert(!questions.has(faq.question), `${article.slug}/${localeKey}: FAQ questions must be unique`);
        questions.add(faq.question);
      }

      for (const block of copy.bodyBlocks) {
        assert(["paragraph", "heading", "callout"].includes(block.type), `${article.slug}/${localeKey}: unsupported block ${block.type}`);
        if (block.type === "paragraph" || block.type === "heading") {
          assert(
            (typeof block.text === "string" && block.text.length > 0) ||
              (Array.isArray(block.segments) && block.segments.length > 0),
            `${article.slug}/${localeKey}: empty ${block.type} block`
          );
        } else {
          assert(
            typeof block.text === "string" && block.text.length > 0,
            `${article.slug}/${localeKey}: ${block.type} blocks require text`
          );
        }
        for (const segment of block.segments || []) {
          assert(!segment.href || allowedBodyLinks.has(segment.href), `${article.slug}/${localeKey}: body link must be registered in sources or bodyLinks`);
        }
      }
    }
    if (isSourceRepublication && !article.sourceDocument.localizedBodies) {
      assert.deepEqual(
        article.translations.en.bodyBlocks,
        article.translations.zh.bodyBlocks,
        `${article.slug}: source republication body must remain identical across language pages unless localizedBodies is enabled`
      );
    }
  }

  for (const article of articles) {
    for (const relatedSlug of article.relatedSlugs) {
      assert(slugs.has(relatedSlug), `${article.slug}: unknown related slug ${relatedSlug}`);
    }
  }
}

async function validateHtmlPage({ relativePath, localeKey, slug = "" }) {
  const html = await read(relativePath);
  const locale = site.locales[localeKey];
  const expectedCanonical = canonicalUrl(localeKey, slug);
  const expectedType = slug ? "article" : "website";

  assert(html.startsWith("<!doctype html>"), `${relativePath}: missing doctype`);
  assert(html.includes(`<html lang="${locale.htmlLang}">`), `${relativePath}: wrong html language`);
  assert.equal(countMatches(html, /<h1(?:\s|>)/g), 1, `${relativePath}: expected exactly one h1`);
  assert.equal(countMatches(html, /<link rel="canonical"/g), 1, `${relativePath}: expected one canonical link`);
  assert(html.includes(`<link rel="canonical" href="${expectedCanonical}">`), `${relativePath}: wrong canonical URL`);
  assert(html.includes('<meta name="robots" content="index,follow,max-image-preview:large">'), `${relativePath}: missing index directive`);
  assert(html.includes(`<meta property="og:type" content="${expectedType}">`), `${relativePath}: wrong Open Graph type`);
  assert(html.includes(`<meta property="og:image" content="${site.socialImageUrl}">`), `${relativePath}: missing Open Graph image`);
  assert(html.includes('<meta name="twitter:card" content="summary_large_image">'), `${relativePath}: wrong Twitter card type`);
  assert(html.includes(`<meta name="twitter:image" content="${site.socialImageUrl}">`), `${relativePath}: missing Twitter image`);
  assert(html.includes('hreflang="en"'), `${relativePath}: missing English alternate`);
  assert(html.includes('hreflang="zh-CN"'), `${relativePath}: missing Chinese alternate`);
  assert(html.includes('hreflang="x-default"'), `${relativePath}: missing x-default alternate`);
  assert(html.includes('type="application/rss+xml"'), `${relativePath}: missing RSS discovery link`);
  assert(!html.includes("data-i18n"), `${relativePath}: browser-only translation hooks must not remain`);
  assert(!html.includes("utm_source="), `${relativePath}: tracking parameters must not appear in sources`);

  const jsonLd = parseJsonLd(html, relativePath);
  assert.equal(jsonLd["@context"], "https://schema.org", `${relativePath}: wrong schema context`);
  assert(Array.isArray(jsonLd["@graph"]), `${relativePath}: JSON-LD graph is required`);

  if (slug) {
    const article = articles.find((candidate) => candidate.slug === slug);
    const copy = article.translations[localeKey];
    const isSourceRepublication = article.format === "source-republication";
    const sourceIncludesAboutTurboFlow = isSourceRepublication && article.sourceDocument.includesAboutTurboFlow === true;
    const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
    assert(mainMatch, `${relativePath}: missing main content`);
    const main = mainMatch[1];
    assert(main.includes(escapeHtml(copy.headline)), `${relativePath}: visible HTML does not contain the headline`);
    assert(main.includes(escapeHtml(copy.dek)), `${relativePath}: visible HTML does not contain the dek`);
    const headerMatch = main.match(/<header>([\s\S]*?)<\/header>/);
    assert(headerMatch, `${relativePath}: article header is missing`);
    const articleHeader = headerMatch[1];
    assert.equal(countMatches(articleHeader, /class="meta"/g), 0, `${relativePath}: retired article metadata row must not render`);
    const kickerMatches = [...articleHeader.matchAll(/<div class="article-kicker">([\s\S]*?)<\/div>/g)];
    assert.equal(kickerMatches.length, 1, `${relativePath}: expected one article kicker`);
    const expectedKicker = `<p class="eyebrow">${escapeHtml(copy.category)}</p>
    <span class="article-kicker__separator" aria-hidden="true">·</span>
    <p class="article-date"><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(displayDate(article.publishedAt, localeKey))}</time></p>`;
    assert.equal(normalizeMarkup(kickerMatches[0][1]), normalizeMarkup(expectedKicker), `${relativePath}: article publication kicker drift`);
    assert.equal(countMatches(articleHeader, /<time\b/g), 1, `${relativePath}: article header must expose exactly one publication time`);
    assert.equal(countMatches(articleHeader, /class="primary-source"/g), 0, `${relativePath}: duplicate header source must not render`);
    const primarySource = article.sources.find((source) => source.url === article.primarySource);
    const sourceTitle = article.sourceDocument.title || primarySource.label[localeKey];
    const sourceCredit = article.sourceDocument.author || article.sourceDocument.platform;
    const sourceByline = localeKey === "zh"
      ? `${locale.sourceAuthorPrefix}${sourceCredit}`
      : `${locale.sourceAuthorPrefix} ${sourceCredit}`;
    const expectedOriginalSource = `<span class="original-source__label">${escapeHtml(locale.originalSourcePrefix)}</span>
    <a href="${escapeHtml(primarySource.url)}" rel="noopener noreferrer">${escapeHtml(sourceTitle)}</a>
    <span>· ${escapeHtml(sourceByline)}</span>`;
    const expectedOriginalSourceHtml = `<p class="original-source">${expectedOriginalSource}</p>`;
    const expectedHeader = `<div class="article-kicker">${expectedKicker}</div>
        <h1>${escapeHtml(copy.headline)}</h1>
        <p class="dek">${escapeHtml(copy.dek)}</p>
        ${expectedOriginalSourceHtml}`;
    assert.equal(normalizeMarkup(articleHeader), normalizeMarkup(expectedHeader), `${relativePath}: article header structure drift`);
    const originalSourceMatches = [...articleHeader.matchAll(/<p class="original-source">([\s\S]*?)<\/p>/g)];
    assert.equal(originalSourceMatches.length, 1, `${relativePath}: expected one original source reference in the header`);
    assert.equal(normalizeMarkup(originalSourceMatches[0][1]), normalizeMarkup(expectedOriginalSource), `${relativePath}: original source reference drift`);
    assert.equal(countMatches(main, /class="original-source"/g), 1, `${relativePath}: original source must render exactly once`);
    assert.equal(countMatches(html, /property="article:published_time"/g), 1, `${relativePath}: expected one Open Graph publication time`);
    assert(html.includes(`<meta property="article:published_time" content="${escapeHtml(article.publishedAt)}">`), `${relativePath}: Open Graph publication time drift`);
    assert.equal(countMatches(html, /property="article:modified_time"/g), 1, `${relativePath}: expected one Open Graph modified time`);
    assert(html.includes(`<meta property="article:modified_time" content="${escapeHtml(article.modifiedAt)}">`), `${relativePath}: Open Graph modified time drift`);
    const articleBodyMatches = [...main.matchAll(/<section class="article-body" aria-label="([^"]+)">[\s\S]*?<\/section>/g)];
    const summaryMatches = [...main.matchAll(/<section class="content-summary"[\s\S]*?<\/section>/g)];
    const faqMatches = [...main.matchAll(/<section class="faq"[\s\S]*?<\/section>/g)];
    const riskMatches = [...main.matchAll(/<aside class="risk-note" aria-label="([^"]+)"><strong>([\s\S]*?)<\/strong><span>([\s\S]*?)<\/span><\/aside>/g)];
    const sourcesMatches = [...main.matchAll(/<section class="sources"[\s\S]*?<\/section>/g)];
    const aboutMatches = [...main.matchAll(/<section class="about-turboflow"[\s\S]*?<\/section>/g)];
    assert.equal(articleBodyMatches.length, 1, `${relativePath}: expected one article body`);
    assert.equal(articleBodyMatches[0][1], escapeHtml(copy.headline), `${relativePath}: article body accessible label drift`);
    assert.equal(faqMatches.length, 1, `${relativePath}: expected one FAQ section`);
    assert.equal(aboutMatches.length, sourceIncludesAboutTurboFlow ? 0 : 1, `${relativePath}: About TurboFlow section count drift`);
    if (isSourceRepublication) {
      assert.equal(summaryMatches.length, 0, `${relativePath}: source republication must not render a summary section`);
      assert.equal(riskMatches.length, 0, `${relativePath}: source republication must not render an editorial risk section`);
      assert.equal(sourcesMatches.length, 0, `${relativePath}: source republication must not repeat sources below the article`);
      assert(
        main.indexOf('class="article-body"') < main.indexOf('class="faq"'),
        `${relativePath}: source republication sections are out of order`
      );
      if (article.relatedSlugs.length) {
        if (sourceIncludesAboutTurboFlow) {
          assert(main.indexOf('class="faq"') < main.indexOf('class="related-updates"'), `${relativePath}: related updates must follow the FAQ`);
        } else {
          assert(
            main.indexOf('class="faq"') < main.indexOf('class="about-turboflow"') &&
              main.indexOf('class="about-turboflow"') < main.indexOf('class="related-updates"'),
            `${relativePath}: related updates must follow About TurboFlow`
          );
        }
      }
    } else {
      assert.equal(summaryMatches.length, 1, `${relativePath}: expected one content-summary section`);
      assert.equal(riskMatches.length, 1, `${relativePath}: expected one risk notice`);
      assert.equal(riskMatches[0][1], escapeHtml(locale.riskAria), `${relativePath}: risk notice label drift`);
      assert.equal(riskMatches[0][2], escapeHtml(locale.riskAria), `${relativePath}: visible risk notice label drift`);
      assert.equal(riskMatches[0][3], escapeHtml(copy.riskNotice), `${relativePath}: risk notice drift`);
      assert.equal(sourcesMatches.length, 1, `${relativePath}: expected one bottom sources section`);
      assert(
        main.indexOf('class="article-body"') < main.indexOf('class="content-summary"') &&
          main.indexOf('class="content-summary"') < main.indexOf('class="faq"') &&
          main.indexOf('class="faq"') < main.indexOf('class="risk-note"') &&
          main.indexOf('class="risk-note"') < main.indexOf('class="sources"') &&
          main.indexOf('class="sources"') < main.indexOf('class="about-turboflow"'),
        `${relativePath}: editorial sections are out of order`
      );
      if (article.relatedSlugs.length) {
        assert(
          main.indexOf('class="sources"') < main.indexOf('class="related-updates"') &&
            main.indexOf('class="related-updates"') < main.indexOf('class="about-turboflow"'),
          `${relativePath}: About TurboFlow must remain the final article section`
        );
      }
    }
    assert(!main.includes('class="fact-card"'), `${relativePath}: legacy fact card must not render`);
    assert(!main.includes('class="source-content__note"'), `${relativePath}: retired source disclosure must not render`);
    assert(!main.includes("This section preserves the source's facts"), `${relativePath}: retired English disclosure must not render`);
    assert(!main.includes("以下正文依照所链接来源的事实"), `${relativePath}: retired Chinese disclosure must not render`);
    const articleBodyHtml = articleBodyMatches[0][0];
    assert(!articleBodyHtml.includes('id="article-body-title"'), `${relativePath}: visible article body title must not render`);
    assert(!articleBodyHtml.includes('class="original-source"'), `${relativePath}: source reference must remain above the divider`);
    const bodyContentMatches = [...articleBodyHtml.matchAll(/<div class="article-body__content" lang="([^"]+)">([\s\S]*?)<\/div>/g)];
    assert.equal(bodyContentMatches.length, 1, `${relativePath}: expected one article body content container`);
    const expectedBodyLanguage = isSourceRepublication && !article.sourceDocument.localizedBodies
      ? article.sourceDocument.language
      : locale.htmlLang;
    assert.equal(bodyContentMatches[0][1], expectedBodyLanguage, `${relativePath}: article body language drift`);
    const expectedBodyContent = copy.bodyBlocks.map((block) => {
      const body = block.segments
        ? block.segments.map((segment) => segment.href
          ? `<a href="${escapeHtml(segment.href)}" rel="noopener noreferrer">${escapeHtml(segment.text)}</a>`
          : escapeHtml(segment.text)).join("")
        : escapeHtml(block.text);
      if (block.type === "heading") return `<h2>${body}</h2>`;
      if (block.type === "paragraph") return `<p>${body}</p>`;
      if (block.type === "callout") return `<aside class="callout"><p>${body}</p></aside>`;
      throw new Error(`${relativePath}: unsupported body block type ${block.type}`);
    }).join("\n      ");
    assert.equal(normalizeMarkup(bodyContentMatches[0][2]), normalizeMarkup(expectedBodyContent), `${relativePath}: body block structure or order drift`);
    if (!isSourceRepublication) {
      const summaryHtml = summaryMatches[0][0];
      const renderedSummaryItems = [...summaryHtml.matchAll(/<li><strong>([\s\S]*?)<\/strong><span>([\s\S]*?)<\/span><\/li>/g)]
        .map((match) => ({ title: match[1], text: match[2] }));
      assert.deepEqual(
        renderedSummaryItems,
        copy.summaryItems.map((item) => ({ title: escapeHtml(item.title), text: escapeHtml(item.text) })),
        `${relativePath}: visible summary drift`
      );
    }
    const faqHtml = faqMatches[0][0];
    const renderedFaqs = [...faqHtml.matchAll(/<article class="faq__item" aria-labelledby="faq-(\d+)">\s*<h3 id="faq-\1">([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>\s*<\/article>/g)]
      .map((match) => ({ question: match[2], answer: match[3] }));
    assert.deepEqual(
      renderedFaqs,
      copy.faqs.map((faq) => ({ question: escapeHtml(faq.question), answer: escapeHtml(faq.answer) })),
      `${relativePath}: visible FAQ drift`
    );
    if (!isSourceRepublication) {
      const sourcesHtml = sourcesMatches[0][0];
      const renderedSources = [...sourcesHtml.matchAll(/<li><a href="([^"]+)" rel="noopener noreferrer">([\s\S]*?)<\/a><\/li>/g)]
        .map((match) => ({ url: match[1], label: match[2] }));
      assert.deepEqual(
        renderedSources,
        article.sources.map((source) => ({ url: source.url, label: escapeHtml(source.label[localeKey]) })),
        `${relativePath}: bottom sources drift`
      );
      const expectedSourcesHtml = `<section class="sources" aria-labelledby="sources-title">
    <h2 id="sources-title">${escapeHtml(locale.sourcesTitle)}</h2>
    <ul>
      ${article.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label[localeKey])}</a></li>`).join("\n      ")}
    </ul>
  </section>`;
      assert.equal(normalizeMarkup(sourcesHtml), normalizeMarkup(expectedSourcesHtml), `${relativePath}: bottom sources markup drift`);
    }
    if (!sourceIncludesAboutTurboFlow) {
      const about = locale.aboutTurboFlow;
      const expectedAboutHtml = `<section class="about-turboflow" aria-labelledby="about-turboflow-title">
    <h2 id="about-turboflow-title">${escapeHtml(about.title)}</h2>
    <p>${escapeHtml(about.body)}</p>
    <nav aria-label="${escapeHtml(about.title)}">
      <a href="${escapeHtml(site.homeUrl)}">${escapeHtml(about.homeLabel)}</a>
      <a href="${escapeHtml(site.appUrl)}">${escapeHtml(about.appLabel)}</a>
      <a href="${escapeHtml(site.docsUrl)}" rel="noopener noreferrer">${escapeHtml(about.docsLabel)}</a>
    </nav>
  </section>`;
      assert.equal(normalizeMarkup(aboutMatches[0][0]), normalizeMarkup(expectedAboutHtml), `${relativePath}: About TurboFlow markup drift`);
    }
    for (const relatedSlug of article.relatedSlugs) {
      assert(main.includes(`../${relatedSlug}/`), `${relativePath}: visible related link missing: ${relatedSlug}`);
    }
    const articleSchema = jsonLd["@graph"].find((item) => item["@type"] === "Article");
    assert(articleSchema, `${relativePath}: Article schema is required`);
    assert.equal(articleSchema.datePublished, article.publishedAt, `${relativePath}: schema published date drift`);
    assert.equal(articleSchema.dateModified, article.modifiedAt, `${relativePath}: schema modified date drift`);
    assert.equal(articleSchema.image, site.socialImageUrl, `${relativePath}: schema image drift`);
    assert.deepEqual(articleSchema.about, { "@id": site.organizationId }, `${relativePath}: schema About TurboFlow relationship drift`);
    assert.equal(articleSchema.isBasedOn, article.primarySource, `${relativePath}: schema primary source drift`);
    assert.deepEqual(
      articleSchema.citation,
      article.sources.map((source) => source.url),
      `${relativePath}: schema citations drift`
    );
    const faqSchemas = jsonLd["@graph"].filter((item) => item["@type"] === "FAQPage");
    assert.equal(faqSchemas.length, 1, `${relativePath}: expected one FAQPage schema node`);
    const faqSchema = faqSchemas[0];
    assert.equal(faqSchema["@id"], `${expectedCanonical}#faq`, `${relativePath}: FAQ schema id drift`);
    assert.equal(faqSchema.url, `${expectedCanonical}#faq`, `${relativePath}: FAQ schema URL drift`);
    assert.equal(faqSchema.inLanguage, locale.htmlLang, `${relativePath}: FAQ schema language drift`);
    assert.deepEqual(articleSchema.hasPart, { "@id": `${expectedCanonical}#faq` }, `${relativePath}: Article FAQ relationship drift`);
    assert.deepEqual(faqSchema.isPartOf, { "@id": `${expectedCanonical}#article` }, `${relativePath}: FAQ Article relationship drift`);
    assert.deepEqual(
      faqSchema.mainEntity,
      copy.faqs.map((faq, index) => ({
        "@type": "Question",
        "@id": `${expectedCanonical}#faq-${index + 1}`,
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      })),
      `${relativePath}: FAQ schema and visible copy drift`
    );
  } else {
    assert(html.includes("data-memo-drawer"), `${relativePath}: publishing notes drawer is required on indexes`);
    assert(!html.includes("data-i18n"), `${relativePath}: list should be independently localized`);
    const collection = jsonLd["@graph"].find((item) => item["@type"] === "CollectionPage");
    assert(collection, `${relativePath}: CollectionPage schema is required`);

    const cards = [...html.matchAll(/<article class="update-card">([\s\S]*?)<\/article>/g)].map((match) => match[1]);
    let previousPosition = -1;
    for (const article of [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))) {
      const position = html.indexOf(`./${article.slug}/`);
      assert(position >= 0, `${relativePath}: missing article link ${article.slug}`);
      assert(position > previousPosition, `${relativePath}: article list is not newest first`);
      previousPosition = position;
      const card = cards.find((candidate) => candidate.includes(`./${article.slug}/`));
      assert(card, `${relativePath}: missing article card ${article.slug}`);
      const cardMetaMatches = [...card.matchAll(/<p class="update-card__meta">([\s\S]*?)<\/p>/g)];
      assert.equal(cardMetaMatches.length, 1, `${relativePath}: expected one metadata row for ${article.slug}`);
      assert.equal(
        cardMetaMatches[0][1],
        `${escapeHtml(locale.listDatePrefix)} · <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(displayDate(article.publishedAt, localeKey))}</time>`,
        `${relativePath}: article card publication metadata drift for ${article.slug}`
      );
    }
  }

  await assertLocalReferencesExist(html, relativePath);
}

async function validateFeeds() {
  for (const [localeKey, locale] of localeEntries) {
    const relativePath = locale.pathPrefix ? `updates/${locale.pathPrefix}/feed.xml` : "updates/feed.xml";
    const feed = await read(relativePath);
    assert(feed.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), `${relativePath}: missing XML declaration`);
    assert(feed.includes("<rss version=\"2.0\""), `${relativePath}: invalid RSS root`);
    assert(feed.includes(`<language>${locale.rssLanguage}</language>`), `${relativePath}: wrong feed language`);
    for (const article of articles) {
      assert(feed.includes(canonicalUrl(localeKey, article.slug)), `${relativePath}: missing ${article.slug}`);
      assert(feed.includes(escapeHtml(article.translations[localeKey].headline)), `${relativePath}: missing translated title`);
    }
  }
}

async function validateSitemapAndRobots() {
  const sitemap = await read("sitemap-updates.xml");
  assert(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), "sitemap: missing sitemap namespace");
  assert(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'), "sitemap: missing xhtml namespace");
  for (const [localeKey] of localeEntries) {
    assert(sitemap.includes(`<loc>${canonicalUrl(localeKey)}</loc>`), `sitemap: missing ${localeKey} index`);
    for (const article of articles) {
      assert(sitemap.includes(`<loc>${canonicalUrl(localeKey, article.slug)}</loc>`), `sitemap: missing ${localeKey}/${article.slug}`);
    }
  }

  const robots = await read("robots-updates.txt");
  assert(robots.includes(`Allow: ${site.updatesPath}/`), "robots: Updates allow directive missing");
  assert(robots.includes(`Sitemap: ${site.sitemapUrl}`), "robots: sitemap URL missing");
}

async function validatePackage() {
  const packageJson = JSON.parse(await readFile(path.join(rootDir, "package.json"), "utf8"));
  assert.equal(packageJson.type, "module", "package must use ESM");
  assert.equal(packageJson.scripts?.build, "node scripts/build.mjs", "build script drift");
  assert.equal(packageJson.scripts?.check, "node scripts/check.mjs", "check script drift");
  assert.equal(packageJson.scripts?.preview, "node scripts/serve.mjs", "preview script drift");
  assert(!packageJson.dependencies, "runtime dependencies are not allowed");
  assert(!packageJson.devDependencies, "development dependencies are not allowed");
}

validateEditorialData();
await validatePackage();
await validateGeneratedArtifacts();

for (const [localeKey] of localeEntries) {
  await validateHtmlPage({
    relativePath: outputRelativePath(localeKey),
    localeKey
  });
  for (const article of articles) {
    await validateHtmlPage({
      relativePath: outputRelativePath(localeKey, article.slug),
      localeKey,
      slug: article.slug
    });
  }
}

await validateFeeds();
await validateSitemapAndRobots();
await access(path.join(distDir, "updates", "assets", "styles.css"));
await access(path.join(distDir, "updates", "assets", "site.js"));
await access(path.join(distDir, "updates", "assets", "favicon.svg"));

console.log(`Validated ${articles.length} article${articles.length === 1 ? "" : "s"} across ${localeEntries.length} locales.`);
console.log(`Checked ${checkedFiles.size} generated/source files with no external packages.`);
