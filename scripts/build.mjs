import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { articles, site } from "../content/articles.mjs";

export const rootDir = fileURLToPath(new URL("../", import.meta.url));
export const distDir = path.join(rootDir, "dist");
const localeEntries = Object.entries(site.locales);
const updatesBaseUrl = `${site.productionOrigin}${site.updatesPath}`;
const updatesOutputPrefix = site.updatesPath.replace(/^\/+|\/+$/g, "");
const publishedArticles = [...articles].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));

function bodyIntegrity(bodyBlocks) {
  return createHash("sha256").update(JSON.stringify(bodyBlocks)).digest("hex");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeXml(value) {
  return escapeHtml(value);
}

function safeJson(value) {
  return JSON.stringify(value, null, 2)
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026")
    .replaceAll("\u2028", "\\u2028")
    .replaceAll("\u2029", "\\u2029");
}

function canonicalUrl(localeKey, slug = "") {
  const locale = site.locales[localeKey];
  const localizedBase = locale.pathPrefix
    ? `${updatesBaseUrl}/${locale.pathPrefix}`
    : updatesBaseUrl;
  return slug ? `${localizedBase}/${slug}/` : `${localizedBase}/`;
}

function feedUrl(localeKey) {
  return `${canonicalUrl(localeKey)}feed.xml`;
}

function alternateLinks(slug = "") {
  return [
    { hreflang: "en", href: canonicalUrl("en", slug) },
    { hreflang: "zh-CN", href: canonicalUrl("zh", slug) },
    { hreflang: "x-default", href: canonicalUrl("en", slug) }
  ];
}

function pagePaths(localeKey, slug = "") {
  const isChinese = localeKey === "zh";
  const isArticle = Boolean(slug);

  if (!isArticle && !isChinese) {
    return {
      assetPrefix: "assets/",
      updatesHref: "./",
      languageHrefs: { en: "./", zh: "./zh/" }
    };
  }

  if (!isArticle && isChinese) {
    return {
      assetPrefix: "../assets/",
      updatesHref: "./",
      languageHrefs: { en: "../", zh: "./" }
    };
  }

  if (!isChinese) {
    return {
      assetPrefix: "../assets/",
      updatesHref: "../",
      languageHrefs: { en: "./", zh: `../zh/${slug}/` }
    };
  }

  return {
    assetPrefix: "../../assets/",
    updatesHref: "../",
    languageHrefs: { en: `../../${slug}/`, zh: "./" }
  };
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

function renderLanguageSwitch(localeKey, hrefs) {
  const activeLocale = site.locales[localeKey];
  return `<div class="language-switch" aria-label="${escapeHtml(activeLocale.languageLabel)}">
    ${localeEntries.map(([key, locale]) => {
      const current = key === localeKey ? ' aria-current="page"' : "";
      return `<a class="language-switch__button" href="${escapeHtml(hrefs[key])}" hreflang="${escapeHtml(locale.htmlLang)}" lang="${escapeHtml(locale.htmlLang)}"${current}>${escapeHtml(locale.shortName)}</a>`;
    }).join("\n    ")}
  </div>`;
}

function renderHeader(localeKey, paths) {
  const locale = site.locales[localeKey];
  return `<header class="site-header">
    <div class="site-header__inner">
      <a class="brand" href="${escapeHtml(site.homeUrl)}" aria-label="${escapeHtml(locale.brandAria)}">${escapeHtml(site.brandName)}</a>
      <div class="header-actions">
        ${renderLanguageSwitch(localeKey, paths.languageHrefs)}
        <a class="app-link" href="${escapeHtml(site.appUrl)}">${escapeHtml(locale.openApp)}</a>
      </div>
    </div>
  </header>`;
}

function renderFooter(localeKey) {
  const locale = site.locales[localeKey];
  return `<footer class="site-footer">
    <div class="site-footer__inner">© ${site.currentYear} ${escapeHtml(site.brandName)}. ${escapeHtml(locale.footer)}</div>
  </footer>`;
}

function renderHead({
  localeKey,
  title,
  description,
  socialDescription,
  twitterTitle = title,
  canonical,
  type,
  structuredData,
  paths,
  publishedAt,
  modifiedAt,
  slug = ""
}) {
  const locale = site.locales[localeKey];
  const alternates = alternateLinks(slug);
  const articleMeta = publishedAt
    ? `\n  <meta property="article:published_time" content="${escapeHtml(publishedAt)}">\n  <meta property="article:modified_time" content="${escapeHtml(modifiedAt)}">`
    : "";

  return `<!doctype html>
<html lang="${escapeHtml(locale.htmlLang)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="icon" href="${escapeHtml(paths.assetPrefix)}favicon.svg" type="image/svg+xml">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  ${alternates.map(({ hreflang, href }) => `<link rel="alternate" hreflang="${escapeHtml(hreflang)}" href="${escapeHtml(href)}">`).join("\n  ")}
  <link rel="alternate" type="application/rss+xml" title="${escapeHtml(locale.feedTitle)}" href="${escapeHtml(feedUrl(localeKey))}">

  <meta property="og:type" content="${escapeHtml(type)}">
  <meta property="og:site_name" content="${escapeHtml(site.brandName)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(socialDescription)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(site.socialImageUrl)}">
  <meta property="og:image:alt" content="${escapeHtml(site.brandName)}">${articleMeta}

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(twitterTitle)}">
  <meta name="twitter:description" content="${escapeHtml(socialDescription)}">
  <meta name="twitter:image" content="${escapeHtml(site.socialImageUrl)}">

  <link rel="stylesheet" href="${escapeHtml(paths.assetPrefix)}styles.css">
  <script type="application/ld+json">${safeJson(structuredData)}</script>
  <script src="${escapeHtml(paths.assetPrefix)}site.js" defer></script>
</head>`;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": site.organizationId,
    name: site.brandName,
    url: site.homeUrl
  };
}

function collectionSchema(localeKey) {
  const locale = site.locales[localeKey];
  const url = canonicalUrl(localeKey);
  return {
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: locale.listTitle,
    description: locale.listDescription,
    url,
    inLanguage: locale.htmlLang,
    publisher: { "@id": site.organizationId }
  };
}

function listStructuredData(localeKey) {
  const locale = site.locales[localeKey];
  const collectionUrl = canonicalUrl(localeKey);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      collectionSchema(localeKey),
      {
        "@type": "ItemList",
        "@id": `${collectionUrl}#articles`,
        name: locale.listTitle,
        itemListElement: publishedArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: canonicalUrl(localeKey, article.slug),
          name: article.translations[localeKey].headline
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${collectionUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale.homeLabel,
            item: site.homeUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale.updatesLabel,
            item: collectionUrl
          }
        ]
      }
    ]
  };
}

function articleStructuredData(article, localeKey) {
  const locale = site.locales[localeKey];
  const copy = article.translations[localeKey];
  const articleUrl = canonicalUrl(localeKey, article.slug);
  const collectionUrl = canonicalUrl(localeKey);
  const faqId = `${articleUrl}#faq`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      collectionSchema(localeKey),
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        url: articleUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl
        },
        isPartOf: { "@id": `${collectionUrl}#collection` },
        headline: copy.headline,
        description: copy.pageDescription,
        image: site.socialImageUrl,
        datePublished: article.publishedAt,
        dateModified: article.modifiedAt,
        inLanguage: locale.htmlLang,
        articleSection: copy.category,
        author: { "@id": site.organizationId },
        publisher: { "@id": site.organizationId },
        about: { "@id": site.organizationId },
        isBasedOn: article.primarySource,
        citation: article.sources.map((source) => source.url),
        hasPart: { "@id": faqId }
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: faqId,
        inLanguage: locale.htmlLang,
        isPartOf: { "@id": `${articleUrl}#article` },
        mainEntity: copy.faqs.map((faq, index) => ({
          "@type": "Question",
          "@id": `${articleUrl}#faq-${index + 1}`,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale.homeLabel,
            item: site.homeUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale.updatesLabel,
            item: collectionUrl
          },
          {
            "@type": "ListItem",
            position: 3,
            name: copy.twitterTitle,
            item: articleUrl
          }
        ]
      }
    ]
  };
}

function renderMemo(localeKey) {
  const memo = site.locales[localeKey].memo;
  return `<div class="memo-backdrop" data-memo-backdrop aria-hidden="true"></div>
  <aside class="memo-drawer" data-memo-drawer aria-label="${escapeHtml(memo.asideAria)}">
    <button class="memo-handle" type="button" data-memo-toggle aria-controls="publishing-memo" aria-expanded="false" aria-label="${escapeHtml(memo.openAria)}" data-open-label="${escapeHtml(memo.openAria)}" data-close-label="${escapeHtml(memo.closeAria)}">
      <span>${escapeHtml(memo.handle)}</span>
    </button>
    <div class="memo-panel" id="publishing-memo" data-memo-panel aria-hidden="true" inert>
      <div class="memo-panel__topline">
        <p class="memo-panel__eyebrow">${escapeHtml(memo.eyebrow)}</p>
        <button class="memo-close" type="button" data-memo-close>${escapeHtml(memo.close)}</button>
      </div>
      <h2>${escapeHtml(memo.title)}</h2>
      <p class="memo-intro">${escapeHtml(memo.intro)}</p>
      <ol class="memo-list">
        ${memo.items.map((item) => `<li><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div></li>`).join("\n        ")}
      </ol>
      <span class="memo-panel__footer">${escapeHtml(memo.footer)}</span>
    </div>
  </aside>`;
}

function articleListItem(article, localeKey) {
  const locale = site.locales[localeKey];
  const copy = article.translations[localeKey];
  return `<article class="update-card">
    <p class="update-card__meta">${escapeHtml(locale.listDatePrefix)} · <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(displayDate(article.publishedAt, localeKey))}</time></p>
    <h2><a href="./${escapeHtml(article.slug)}/">${escapeHtml(copy.headline)}</a></h2>
    <p>${escapeHtml(copy.pageDescription)}</p>
    <a class="update-card__link" href="./${escapeHtml(article.slug)}/">${escapeHtml(locale.readArticle)}<span aria-hidden="true"> →</span></a>
  </article>`;
}

function renderListPage(localeKey) {
  const locale = site.locales[localeKey];
  const paths = pagePaths(localeKey);
  const canonical = canonicalUrl(localeKey);
  const cards = publishedArticles.length
    ? publishedArticles.map((article) => articleListItem(article, localeKey)).join("\n")
    : `<p class="empty-state">${escapeHtml(locale.emptyState)}</p>`;

  return `${renderHead({
    localeKey,
    title: locale.listTitle,
    description: locale.listDescription,
    socialDescription: locale.listSocialDescription,
    canonical,
    type: "website",
    structuredData: listStructuredData(localeKey),
    paths
  })}
<body>
  ${renderHeader(localeKey, paths)}
  ${renderMemo(localeKey)}
  <main class="updates-index" id="main-content">
    <header class="index-hero">
      <h1>${escapeHtml(locale.listTitle)}</h1>
      <p class="dek">${escapeHtml(locale.listDescription)}</p>
    </header>
    <section class="updates-list" aria-label="${escapeHtml(locale.listTitle)}">
      ${cards}
    </section>
  </main>
  ${renderFooter(localeKey)}
</body>
</html>
`;
}

function renderSegments(segments) {
  return segments.map((segment) => {
    const text = escapeHtml(segment.text);
    if (!segment.href) return text;
    return `<a href="${escapeHtml(segment.href)}" rel="noopener noreferrer">${text}</a>`;
  }).join("");
}

function renderArticleBlock(block) {
  if (block.type === "heading") {
    return `<h2>${escapeHtml(block.text)}</h2>`;
  }
  if (block.type === "callout") {
    return `<aside class="callout"><p>${escapeHtml(block.text)}</p></aside>`;
  }
  if (block.type === "paragraph") {
    const content = block.segments ? renderSegments(block.segments) : escapeHtml(block.text);
    return `<p>${content}</p>`;
  }
  throw new Error(`Unsupported article block type: ${block.type}`);
}

function renderOriginalSource(article, localeKey) {
  const locale = site.locales[localeKey];
  const source = resolvePrimarySource(article);
  const sourceDate = displayDate(article.sourceDocument.publishedAt, localeKey);
  const sourceByline = localeKey === "zh"
    ? `${locale.sourceAuthorPrefix}${article.sourceDocument.author}`
    : `${locale.sourceAuthorPrefix} ${article.sourceDocument.author}`;
  return `<p class="original-source">
    <span class="original-source__label">${escapeHtml(locale.originalSourcePrefix)}</span>
    <a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label[localeKey])}</a>
    <span>· ${escapeHtml(sourceByline)}</span>
    <span>· <time datetime="${escapeHtml(article.sourceDocument.publishedAt)}">${escapeHtml(sourceDate)}</time></span>
  </p>`;
}

function renderArticleBody(article, copy, localeKey) {
  return `<section class="article-body" aria-label="${escapeHtml(copy.headline)}">
    ${renderOriginalSource(article, localeKey)}
    <div class="article-body__content">
      ${copy.bodyBlocks.map(renderArticleBlock).join("\n      ")}
    </div>
  </section>`;
}

function renderSummary(summaryItems, locale) {
  return `<section class="content-summary" aria-labelledby="content-summary-title">
    <h2 id="content-summary-title">${escapeHtml(locale.summaryTitle)}</h2>
    <ul>
      ${summaryItems.map((item) => `<li><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.text)}</span></li>`).join("\n      ")}
    </ul>
  </section>`;
}

function renderFaq(faqs, locale) {
  return `<section class="faq" id="faq" aria-labelledby="faq-title">
    <h2 id="faq-title">${escapeHtml(locale.faqTitle)}</h2>
    <div class="faq__list">
      ${faqs.map((faq, index) => `<article class="faq__item" aria-labelledby="faq-${index + 1}">
        <h3 id="faq-${index + 1}">${escapeHtml(faq.question)}</h3>
        <p>${escapeHtml(faq.answer)}</p>
      </article>`).join("\n      ")}
    </div>
  </section>`;
}

function renderSources(article, localeKey) {
  const locale = site.locales[localeKey];
  return `<section class="sources" aria-labelledby="sources-title">
    <h2 id="sources-title">${escapeHtml(locale.sourcesTitle)}</h2>
    <ul>
      ${article.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label[localeKey])}</a></li>`).join("\n      ")}
    </ul>
  </section>`;
}

function resolvePrimarySource(article) {
  const matches = article.sources.filter((candidate) => candidate.url === article.primarySource);
  assertBuild(matches.length === 1, `${article.slug}: primarySource must match exactly one article source`);
  return matches[0];
}

function renderRelated(article, localeKey) {
  const locale = site.locales[localeKey];
  const related = (article.relatedSlugs || [])
    .map((slug) => articles.find((candidate) => candidate.slug === slug))
    .filter(Boolean);
  if (!related.length) return "";
  return `<nav class="related-updates" aria-labelledby="related-updates-title">
    <h2 id="related-updates-title">${escapeHtml(locale.relatedTitle)}</h2>
    <ul>
      ${related.map((candidate) => `<li><a href="../${escapeHtml(candidate.slug)}/">${escapeHtml(candidate.translations[localeKey].headline)}</a></li>`).join("\n      ")}
    </ul>
  </nav>`;
}

function renderAboutTurboFlow(localeKey) {
  const locale = site.locales[localeKey];
  const about = locale.aboutTurboFlow;
  return `<section class="about-turboflow" aria-labelledby="about-turboflow-title">
    <h2 id="about-turboflow-title">${escapeHtml(about.title)}</h2>
    <p>${escapeHtml(about.body)}</p>
    <nav aria-label="${escapeHtml(about.title)}">
      <a href="${escapeHtml(site.homeUrl)}">${escapeHtml(about.homeLabel)}</a>
      <a href="${escapeHtml(site.appUrl)}">${escapeHtml(about.appLabel)}</a>
      <a href="${escapeHtml(site.docsUrl)}" rel="noopener noreferrer">${escapeHtml(about.docsLabel)}</a>
    </nav>
  </section>`;
}

function renderArticlePage(article, localeKey) {
  const locale = site.locales[localeKey];
  const copy = article.translations[localeKey];
  const paths = pagePaths(localeKey, article.slug);
  const canonical = canonicalUrl(localeKey, article.slug);
  const published = displayDate(article.publishedAt, localeKey);
  const modified = displayDate(article.modifiedAt, localeKey);
  const showModified = article.modifiedAt.slice(0, 10) !== article.publishedAt.slice(0, 10);
  const byline = localeKey === "zh"
    ? `${locale.bylinePrefix}${article.author}`
    : `${locale.bylinePrefix} ${article.author}`;
  const metaItems = [
    `<span>${escapeHtml(locale.publishedPrefix)} <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(published)}</time></span>`,
    showModified
      ? `<span>${escapeHtml(locale.updatedPrefix)} <time datetime="${escapeHtml(article.modifiedAt)}">${escapeHtml(modified)}</time></span>`
      : null,
    `<span>${escapeHtml(byline)}</span>`,
    copy.metaNote ? `<span>${escapeHtml(copy.metaNote)}</span>` : null
  ].filter(Boolean).join("\n          ");

  return `${renderHead({
    localeKey,
    title: copy.pageTitle,
    description: copy.pageDescription,
    socialDescription: copy.socialDescription,
    twitterTitle: copy.twitterTitle,
    canonical,
    type: "article",
    structuredData: articleStructuredData(article, localeKey),
    paths,
    publishedAt: article.publishedAt,
    modifiedAt: article.modifiedAt,
    slug: article.slug
  })}
<body>
  ${renderHeader(localeKey, paths)}
  <main id="main-content">
    <nav class="breadcrumbs" aria-label="${escapeHtml(locale.breadcrumbAria)}">
      <ol>
        <li><a href="${escapeHtml(site.homeUrl)}">${escapeHtml(locale.homeLabel)}</a></li>
        <li><a href="${escapeHtml(paths.updatesHref)}">${escapeHtml(locale.updatesLabel)}</a></li>
        <li aria-current="page">${escapeHtml(copy.breadcrumbCurrent)}</li>
      </ol>
    </nav>
    <article class="update-article">
      <header>
        <p class="eyebrow">${escapeHtml(copy.category)}</p>
        <h1>${escapeHtml(copy.headline)}</h1>
        <p class="dek">${escapeHtml(copy.dek)}</p>
        <div class="meta">
          ${metaItems}
        </div>
      </header>
      ${renderArticleBody(article, copy, localeKey)}
      ${renderSummary(copy.summaryItems, locale)}
      ${renderFaq(copy.faqs, locale)}
      <aside class="risk-note" aria-label="${escapeHtml(locale.riskAria)}"><strong>${escapeHtml(locale.riskAria)}</strong><span>${escapeHtml(copy.riskNotice)}</span></aside>
      ${renderSources(article, localeKey)}
      ${renderRelated(article, localeKey)}
      ${renderAboutTurboFlow(localeKey)}
    </article>
  </main>
  ${renderFooter(localeKey)}
</body>
</html>
`;
}

function renderFeed(localeKey) {
  const locale = site.locales[localeKey];
  const channelUrl = canonicalUrl(localeKey);
  const selfUrl = feedUrl(localeKey);
  const lastBuildDate = publishedArticles.length
    ? new Date(Math.max(...publishedArticles.map((article) => Date.parse(article.modifiedAt)))).toUTCString()
    : new Date(0).toUTCString();

  const items = publishedArticles.map((article) => {
    const copy = article.translations[localeKey];
    const url = canonicalUrl(localeKey, article.slug);
    return `    <item>
      <title>${escapeXml(copy.headline)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${escapeXml(new Date(article.publishedAt).toUTCString())}</pubDate>
      <description>${escapeXml(copy.pageDescription)}</description>
    </item>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(locale.feedTitle)}</title>
    <link>${escapeXml(channelUrl)}</link>
    <description>${escapeXml(locale.feedDescription)}</description>
    <language>${escapeXml(locale.rssLanguage)}</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

function sitemapEntry(localeKey, slug, lastModified) {
  const url = canonicalUrl(localeKey, slug);
  const alternates = alternateLinks(slug);
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${escapeXml(lastModified)}</lastmod>
    ${alternates.map(({ hreflang, href }) => `<xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}" />`).join("\n    ")}
  </url>`;
}

function renderSitemap() {
  const latestDate = articles.length
    ? articles.map((article) => article.modifiedAt.slice(0, 10)).sort().at(-1)
    : `${site.currentYear}-01-01`;
  const entries = [];
  for (const [localeKey] of localeEntries) {
    entries.push(sitemapEntry(localeKey, "", latestDate));
    for (const article of articles) {
      entries.push(sitemapEntry(localeKey, article.slug, article.modifiedAt.slice(0, 10)));
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
}

function renderRobotsSnippet() {
  return `# Merge these directives into the production origin's /robots.txt.
User-agent: *
Allow: ${site.updatesPath}/

Sitemap: ${site.sitemapUrl}
`;
}

function ensureSafeRelativePath(relativePath) {
  assertBuild(
    typeof relativePath === "string" && relativePath.length > 0,
    "generated artifact path must be a non-empty string"
  );
  assertBuild(!path.isAbsolute(relativePath), `generated artifact path must be relative: ${relativePath}`);
  const normalized = relativePath.replaceAll("\\", "/");
  assertBuild(
    !normalized.split("/").includes(".."),
    `generated artifact path cannot traverse directories: ${relativePath}`
  );
  return normalized;
}

function resolveInside(baseDir, relativePath) {
  const normalized = ensureSafeRelativePath(relativePath);
  const target = path.resolve(baseDir, ...normalized.split("/"));
  const relative = path.relative(baseDir, target);
  assertBuild(
    relative !== "" && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative),
    `generated artifact escapes output directory: ${relativePath}`
  );
  return target;
}

function assertBuild(condition, message) {
  if (!condition) throw new Error(message);
}

export function validateBuildInput() {
  assertBuild(site.productionOrigin === "https://tf.xyz", "productionOrigin must remain the apex https://tf.xyz host");
  assertBuild(site.homeUrl === `${site.productionOrigin}/`, "homeUrl must use the production apex host");
  assertBuild(site.organizationId === `${site.productionOrigin}/#organization`, "organizationId must use the production apex host");
  assertBuild(site.sitemapUrl === `${site.productionOrigin}/sitemap-updates.xml`, "sitemapUrl must use the production apex host");
  assertBuild(site.socialImageUrl.startsWith(`${site.productionOrigin}/`), "socialImageUrl must use the production apex host");
  assertBuild(site.updatesPath === "/updates", "updatesPath must remain /updates");
  assertBuild(updatesOutputPrefix === "updates", "updatesPath must map to the updates output directory");
  assertBuild(articles.length > 0, "at least one reviewed article is required");

  const slugs = new Set();
  for (const article of articles) {
    assertBuild(
      typeof article.slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug),
      `invalid article slug: ${article.slug}`
    );
    assertBuild(!slugs.has(article.slug), `duplicate article slug: ${article.slug}`);
    slugs.add(article.slug);
    assertBuild(!Number.isNaN(Date.parse(article.publishedAt)), `${article.slug}: invalid publishedAt`);
    assertBuild(!Number.isNaN(Date.parse(article.modifiedAt)), `${article.slug}: invalid modifiedAt`);
    assertBuild(
      typeof article.primarySource === "string" && /^https:\/\//.test(article.primarySource),
      `${article.slug}: primarySource must use HTTPS`
    );
    assertBuild(
      article.sourceDocument && typeof article.sourceDocument.author === "string" && article.sourceDocument.author.length > 0,
      `${article.slug}: sourceDocument author is required`
    );
    assertBuild(!Number.isNaN(Date.parse(article.sourceDocument.publishedAt)), `${article.slug}: invalid sourceDocument publishedAt`);
    assertBuild(
      ["owned-release", "attributed-adaptation", "licensed-republication"].includes(article.sourceDocument.rightsMode),
      `${article.slug}: invalid sourceDocument rightsMode`
    );
    assertBuild(Array.isArray(article.sources) && article.sources.length > 0, `${article.slug}: sources are required`);
    const sourceUrls = article.sources.map((source) => source.url);
    assertBuild(new Set(sourceUrls).size === sourceUrls.length, `${article.slug}: source URLs must be unique`);
    resolvePrimarySource(article);
    for (const [localeKey] of localeEntries) {
      const copy = article.translations?.[localeKey];
      assertBuild(copy && typeof copy === "object", `${article.slug}: translation is required for ${localeKey}`);
      assertBuild(
        !Object.hasOwn(copy, "facts") && !Object.hasOwn(copy, "blocks") && !Object.hasOwn(copy, "sourceBlocks"),
        `${article.slug}/${localeKey}: legacy facts, blocks, and sourceBlocks are forbidden`
      );
      assertBuild(Array.isArray(copy.bodyBlocks) && copy.bodyBlocks.length > 0, `${article.slug}/${localeKey}: bodyBlocks are required`);
      assertBuild(
        article.sourceDocument.bodyIntegrity?.[localeKey] === bodyIntegrity(copy.bodyBlocks),
        `${article.slug}/${localeKey}: locked body changed; review the source and update bodyIntegrity deliberately`
      );
      assertBuild(Array.isArray(copy.summaryItems) && copy.summaryItems.length > 0, `${article.slug}/${localeKey}: summaryItems are required`);
      assertBuild(Array.isArray(copy.faqs) && copy.faqs.length > 0, `${article.slug}/${localeKey}: faqs are required`);
      for (const block of copy.bodyBlocks) {
        if (!Array.isArray(block.segments)) continue;
        for (const segment of block.segments) {
          assertBuild(!segment.href || sourceUrls.includes(segment.href), `${article.slug}/${localeKey}: body link must be registered in sources`);
        }
      }
    }
  }

  for (const [localeKey, locale] of localeEntries) {
    assertBuild(/^[a-z]{2}(?:-[A-Z]{2})?$/.test(locale.htmlLang), `invalid htmlLang for ${localeKey}`);
    assertBuild(typeof locale.listDatePrefix === "string" && locale.listDatePrefix.length > 0, `listDatePrefix is required for ${localeKey}`);
    assertBuild(typeof locale.originalSourcePrefix === "string" && locale.originalSourcePrefix.length > 0, `originalSourcePrefix is required for ${localeKey}`);
    assertBuild(typeof locale.sourceAuthorPrefix === "string" && locale.sourceAuthorPrefix.length > 0, `sourceAuthorPrefix is required for ${localeKey}`);
    assertBuild(typeof locale.summaryTitle === "string" && locale.summaryTitle.length > 0, `summaryTitle is required for ${localeKey}`);
    assertBuild(typeof locale.faqTitle === "string" && locale.faqTitle.length > 0, `faqTitle is required for ${localeKey}`);
    assertBuild(
      locale.aboutTurboFlow && ["title", "body", "homeLabel", "appLabel", "docsLabel"].every((key) => typeof locale.aboutTurboFlow[key] === "string" && locale.aboutTurboFlow[key].length > 0),
      `aboutTurboFlow copy is required for ${localeKey}`
    );
    assertBuild(
      locale.pathPrefix === "" || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(locale.pathPrefix),
      `invalid pathPrefix for ${localeKey}`
    );
  }
}

function addArtifact(artifacts, relativePath, contents) {
  const normalized = ensureSafeRelativePath(relativePath);
  assertBuild(!artifacts.has(normalized), `duplicate generated artifact: ${normalized}`);
  artifacts.set(normalized, contents);
}

export async function generateArtifacts() {
  validateBuildInput();
  const artifacts = new Map();

  for (const [localeKey, locale] of localeEntries) {
    const listPath = locale.pathPrefix
      ? path.posix.join(updatesOutputPrefix, locale.pathPrefix, "index.html")
      : path.posix.join(updatesOutputPrefix, "index.html");
    addArtifact(artifacts, listPath, renderListPage(localeKey));

    for (const article of articles) {
      const relativePath = locale.pathPrefix
        ? path.posix.join(updatesOutputPrefix, locale.pathPrefix, article.slug, "index.html")
        : path.posix.join(updatesOutputPrefix, article.slug, "index.html");
      addArtifact(artifacts, relativePath, renderArticlePage(article, localeKey));
    }

    const rssPath = locale.pathPrefix
      ? path.posix.join(updatesOutputPrefix, locale.pathPrefix, "feed.xml")
      : path.posix.join(updatesOutputPrefix, "feed.xml");
    addArtifact(artifacts, rssPath, renderFeed(localeKey));
  }

  for (const assetName of ["styles.css", "site.js", "favicon.svg"]) {
    const contents = await readFile(path.join(rootDir, "assets", assetName), "utf8");
    addArtifact(artifacts, path.posix.join(updatesOutputPrefix, "assets", assetName), contents);
  }

  addArtifact(artifacts, "sitemap-updates.xml", renderSitemap());
  addArtifact(artifacts, "robots-updates.txt", renderRobotsSnippet());

  return artifacts;
}

async function writeBuild() {
  const artifacts = await generateArtifacts();
  const stagingDir = path.join(rootDir, `.dist-stage-${process.pid}`);
  const stagingRelative = path.relative(rootDir, stagingDir);
  const distRelative = path.relative(rootDir, distDir);
  assertBuild(
    stagingRelative && !stagingRelative.startsWith(`..${path.sep}`) && !path.isAbsolute(stagingRelative),
    "staging directory must remain inside the repository"
  );
  assertBuild(
    distRelative === "dist",
    "distribution directory must resolve to the repository's dist directory"
  );

  await rm(stagingDir, { recursive: true, force: true });
  try {
    for (const [relativePath, contents] of artifacts) {
      const target = resolveInside(stagingDir, relativePath);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, contents, "utf8");
    }

    await rm(distDir, { recursive: true, force: true });
    await rename(stagingDir, distDir);
  } finally {
    await rm(stagingDir, { recursive: true, force: true });
  }

  console.log(`Generated ${artifacts.size} files from ${articles.length} article${articles.length === 1 ? "" : "s"}.`);
  for (const file of artifacts.keys()) console.log(`- dist/${file}`);
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) await writeBuild();
