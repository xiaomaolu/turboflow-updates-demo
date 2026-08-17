# TurboFlow Updates Demo

A dependency-free static generator for the proposed TurboFlow Updates section.
It produces server-readable English and Simplified Chinese pages, RSS feeds, an
Updates sitemap, and a scoped robots file from one reviewed article dataset.

Live demo: <https://xiaomaolu.github.io/turboflow-updates-demo/>

The generated pages use canonical URLs under `https://tf.xyz/updates/`.
Deploy them at those paths before treating the canonical URLs as live.

## Requirements

- Node.js 20 or newer
- No npm packages are required

## Commands

```powershell
npm run build
npm run check
```

`npm run build` replaces `dist/` with one clean, convergent build. Run the check
after every content or template change. It byte-compares every generated file
with a fresh in-memory render, rejects missing or obsolete artifacts, and then
validates article data, canonical and alternate URLs, visible static copy,
JSON-LD, local assets, feeds, the sitemap, and the robots merge snippet.

## Source layout

```text
content/articles.mjs   Reviewed site copy and article data
scripts/build.mjs      Static HTML, RSS, sitemap, and robots generator
scripts/check.mjs      Data and generated-output validation
scripts/serve.mjs      Dependency-free local preview server
assets/styles.css      Shared editorial visual system
assets/site.js         Publishing-notes drawer interaction
assets/favicon.svg     Shared TurboFlow demo favicon
dist/                  Clean publish artifact written by the build
```

## Generated layout

```text
dist/
  updates/
    index.html
    feed.xml
    assets/
    {article-slug}/index.html
    zh/index.html
    zh/feed.xml
    zh/{article-slug}/index.html
  sitemap-updates.xml
  robots-updates.txt
```

Do not edit generated HTML or XML directly. Edit `content/articles.mjs`, the
shared assets, or the generator and rebuild.

## Adding an article

Add one object to `articles` in `content/articles.mjs`. Each article requires:

- a unique lowercase slug;
- the original public release time of the news item as `publishedAt`, using a
  full timestamp and time-zone offset when a primary source exposes one;
- the actual date of the latest substantive page revision as `modifiedAt`;
- a `primarySource` URL that matches exactly one entry in `sources`; its full
  title and author are shown once below the description, while the original public
  release time appears once in the article header, and the URL is emitted as
  JSON-LD `isBasedOn`;
- source-document title, author (or platform when no person is credited), and a reviewed `rightsMode`;
- English and Chinese header copy, locked `bodyBlocks`, and FAQs;
- descriptive English and Chinese labels for every HTTPS source;
- an explicit `relatedSlugs` array (it may be empty).

Material product, financing, partnership, infrastructure, and performance
claims must be reviewed against current official or primary sources before the
article is added. Keep Event Contracts and Turbo Perps mechanics separate.
`bodyBlocks` are the source-locked article body. GEO or SEO work must not rewrite
that body; links, FAQs, related updates, and the shared About TurboFlow module
are maintained as separate sections. Use
`owned-release` for TurboFlow-owned copy, `attributed-adaptation` for an
independently worded account of a third-party source, and
`licensed-republication` only when written republication rights are on file.
Each language body has a reviewed SHA-256 value in `sourceDocument.bodyIntegrity`;
an accidental body edit fails both the build and checker until the source is
reviewed and that value is deliberately refreshed.
Editorial summaries and FAQs must not introduce facts or causal claims that
the cited sources do not support. The build rejects retired content fields and
the checker verifies the body order, original-source reference, fixed brand
module, visible FAQ copy, and `FAQPage` JSON-LD.

For a source-led page that preserves a supplied source article verbatim, set
`format: "source-republication"`, provide `sourceDocument.title`, `platform`,
`language`, and use `rightsMode: "verbatim-republication"`. Both language URLs
must use the exact same `bodyBlocks`; the build rejects translation or editorial
changes. This format renders the source title and author in the header, a light
divider, the original-language body with its registered inline links, exactly
five FAQs, About TurboFlow, and related updates. It intentionally omits the
summary card, editorial risk box, and duplicate bottom source list. Confirm the
publication basis for third-party material before production deployment.
If the supplied source already contains its own `About TurboFlow` section, set
`sourceDocument.includesAboutTurboFlow: true`; the source body remains intact
and the generator suppresses the otherwise duplicated shared brand module.

## Preview

Serve `dist` as the local web root, then open the URL printed by the command:

```powershell
npm run preview
```

Set `TURBOFLOW_PREVIEW_PORT` if port 4173 is already in use.

## Production integration

The build makes the deployment boundaries explicit:

1. Deploy the contents of `dist/updates/` at the origin path `/updates/`.
2. Deploy `dist/sitemap-updates.xml` at `/sitemap-updates.xml` and add it to the
   root sitemap index.
3. Merge `dist/robots-updates.txt` into the existing origin-level `/robots.txt`.
   It is deliberately a merge snippet and must not replace the site's current
   robots rules.

Article URLs consistently use trailing slashes across internal links,
canonicals, hreflang, RSS, and the sitemap. The generated directory layout is
therefore suitable for ordinary static hosting without canonical URLs pointing
at redirects.
