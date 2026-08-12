import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { articles, site } from "../content/articles.mjs";
import { distDir, generateArtifacts, rootDir } from "./build.mjs";

const localeEntries = Object.entries(site.locales);
const checkedFiles = new Set();

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
  assert.match(site.productionOrigin, /^https:\/\//, "productionOrigin must use HTTPS");
  assert.equal(site.updatesPath, "/updates", "updatesPath must remain /updates");
  assert(articles.length > 0, "at least one reviewed article is required");
  for (const [localeKey, locale] of localeEntries) {
    assert(locale.sourcePrefix, `sourcePrefix is required for ${localeKey}`);
  }

  const slugs = new Set();
  for (const article of articles) {
    assert.match(article.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `invalid slug: ${article.slug}`);
    assert(!slugs.has(article.slug), `duplicate slug: ${article.slug}`);
    slugs.add(article.slug);
    assert(!Number.isNaN(Date.parse(article.publishedAt)), `${article.slug}: invalid publishedAt`);
    assert(!Number.isNaN(Date.parse(article.modifiedAt)), `${article.slug}: invalid modifiedAt`);
    assert(
      Date.parse(article.modifiedAt) >= Date.parse(article.publishedAt),
      `${article.slug}: modifiedAt precedes publishedAt`
    );
    assert(Array.isArray(article.sources) && article.sources.length > 0, `${article.slug}: sources are required`);
    assert.match(article.primarySource, /^https:\/\//, `${article.slug}: primarySource must use HTTPS`);
    const sourceUrls = article.sources.map((source) => source.url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length, `${article.slug}: source URLs must be unique`);
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
        "dek",
        "riskNotice"
      ]) {
        assert(copy[field], `${article.slug}/${localeKey}: missing ${field}`);
      }
      assert(Array.isArray(copy.facts) && copy.facts.length > 0, `${article.slug}/${localeKey}: facts are required`);
      assert(Array.isArray(copy.blocks) && copy.blocks.length > 0, `${article.slug}/${localeKey}: body blocks are required`);

      for (const block of copy.blocks) {
        assert(["paragraph", "heading", "callout"].includes(block.type), `${article.slug}/${localeKey}: unsupported block ${block.type}`);
        if (block.type === "paragraph") {
          assert(
            (typeof block.text === "string" && block.text.length > 0) ||
              (Array.isArray(block.segments) && block.segments.length > 0),
            `${article.slug}/${localeKey}: empty paragraph block`
          );
        } else {
          assert(
            typeof block.text === "string" && block.text.length > 0,
            `${article.slug}/${localeKey}: ${block.type} blocks require text`
          );
        }
      }
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
    const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
    assert(mainMatch, `${relativePath}: missing main content`);
    const main = mainMatch[1];
    assert(main.includes(escapeHtml(copy.headline)), `${relativePath}: visible HTML does not contain the headline`);
    assert(main.includes(escapeHtml(copy.dek)), `${relativePath}: visible HTML does not contain the dek`);
    assert(main.includes(escapeHtml(copy.riskNotice)), `${relativePath}: visible HTML does not contain the risk notice`);
    const headerMatch = main.match(/<header>([\s\S]*?)<\/header>/);
    assert(headerMatch, `${relativePath}: article header is missing`);
    const articleHeader = headerMatch[1];
    const primaryMatches = [...articleHeader.matchAll(/<p class="primary-source">([\s\S]*?)<\/p>/g)];
    assert.equal(primaryMatches.length, 1, `${relativePath}: expected one primary source in article header`);
    const primarySourceHtml = primaryMatches[0][1];
    const primarySource = article.sources.find((source) => source.url === article.primarySource);
    assert(primarySourceHtml.includes(escapeHtml(locale.sourcePrefix)), `${relativePath}: primary source label is missing`);
    assert(primarySourceHtml.includes(article.primarySource), `${relativePath}: primary source URL is missing`);
    assert(primarySourceHtml.includes(escapeHtml(primarySource.label[localeKey])), `${relativePath}: primary source name is missing`);
    assert(
      articleHeader.indexOf('class="meta"') < articleHeader.indexOf('class="primary-source"'),
      `${relativePath}: primary source must follow article metadata`
    );
    const sourcesMatch = main.match(/<section class="sources"[\s\S]*?<\/section>/);
    assert(sourcesMatch, `${relativePath}: bottom sources section is missing`);
    const sourcesHtml = sourcesMatch[0];
    for (const fact of copy.facts) {
      assert(main.includes(escapeHtml(fact.label)), `${relativePath}: visible fact label missing: ${fact.label}`);
      assert(main.includes(escapeHtml(fact.value)), `${relativePath}: visible fact value missing: ${fact.value}`);
    }
    for (const block of copy.blocks) {
      if (block.text) {
        assert(main.includes(escapeHtml(block.text)), `${relativePath}: visible article block is missing`);
      }
      for (const segment of block.segments || []) {
        assert(main.includes(escapeHtml(segment.text)), `${relativePath}: visible article segment is missing`);
      }
    }
    for (const source of article.sources) {
      assert(sourcesHtml.includes(source.url), `${relativePath}: bottom source URL missing: ${source.url}`);
      assert(sourcesHtml.includes(escapeHtml(source.label[localeKey])), `${relativePath}: bottom source label missing: ${source.label[localeKey]}`);
    }
    for (const relatedSlug of article.relatedSlugs) {
      assert(main.includes(`../${relatedSlug}/`), `${relativePath}: visible related link missing: ${relatedSlug}`);
    }
    const articleSchema = jsonLd["@graph"].find((item) => item["@type"] === "Article");
    assert(articleSchema, `${relativePath}: Article schema is required`);
    assert.equal(articleSchema.datePublished, article.publishedAt, `${relativePath}: schema published date drift`);
    assert.equal(articleSchema.dateModified, article.modifiedAt, `${relativePath}: schema modified date drift`);
    assert.equal(articleSchema.isBasedOn, article.primarySource, `${relativePath}: schema primary source drift`);
    assert.deepEqual(
      articleSchema.citation,
      article.sources.map((source) => source.url),
      `${relativePath}: schema citations drift`
    );
  } else {
    assert(html.includes("data-memo-drawer"), `${relativePath}: publishing notes drawer is required on indexes`);
    assert(!html.includes("data-i18n"), `${relativePath}: list should be independently localized`);
    const collection = jsonLd["@graph"].find((item) => item["@type"] === "CollectionPage");
    assert(collection, `${relativePath}: CollectionPage schema is required`);

    let previousPosition = -1;
    for (const article of [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))) {
      const position = html.indexOf(`./${article.slug}/`);
      assert(position >= 0, `${relativePath}: missing article link ${article.slug}`);
      assert(position > previousPosition, `${relativePath}: article list is not newest first`);
      previousPosition = position;
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
      assert(feed.includes(article.translations[localeKey].headline), `${relativePath}: missing translated title`);
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
