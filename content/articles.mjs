/**
 * This file is the single source of truth for generated Updates pages.
 *
 * Article body blocks deliberately use structured text segments instead of raw
 * HTML. That keeps links explicit and lets the generator escape all editorial
 * copy. Add a new article object only after every material claim and source has
 * passed the TurboFlow content review workflow.
 */

export const site = {
  brandName: "TurboFlow",
  productionOrigin: "https://tf.xyz",
  updatesPath: "/updates",
  homeUrl: "https://tf.xyz/",
  appUrl: "https://app.tf.xyz/",
  docsUrl: "https://turboflow.gitbook.io/whitepaper/",
  socialImageUrl: "https://tf.xyz/og-image.png",
  sitemapUrl: "https://tf.xyz/sitemap-updates.xml",
  organizationId: "https://tf.xyz/#organization",
  currentYear: 2026,
  locales: {
    en: {
      htmlLang: "en",
      rssLanguage: "en",
      pathPrefix: "",
      locale: "en-US",
      name: "English",
      shortName: "EN",
      languageLabel: "Language",
      brandAria: "TurboFlow home",
      breadcrumbAria: "Breadcrumb",
      openApp: "Open App",
      homeLabel: "Home",
      updatesLabel: "Updates",
      readArticle: "Read update",
      listDatePrefix: "Published",
      originalSourcePrefix: "Original source:",
      sourceAuthorPrefix: "By",
      summaryTitle: "Summary",
      faqTitle: "Frequently asked questions",
      sourcesTitle: "Sources",
      relatedTitle: "Related updates",
      aboutTurboFlow: {
        title: "About TurboFlow",
        body: "TurboFlow is an on-chain trading platform for retail users, combining prediction markets and perpetual contracts to build the next generation of on-chain trading experiences.",
        homeLabel: "Visit TurboFlow",
        appLabel: "Open the app",
        docsLabel: "Read the docs"
      },
      riskAria: "Risk notice",
      footer: "This update is provided for informational purposes.",
      listTitle: "TurboFlow Updates",
      listDescription: "Company announcements, product updates, and supporting sources from TurboFlow.",
      listSocialDescription: "Official TurboFlow company announcements and product updates.",
      emptyState: "No updates have been published yet.",
      feedTitle: "TurboFlow Updates",
      feedDescription: "Company announcements and product updates from TurboFlow.",
      memo: {
        asideAria: "Publishing notes",
        openAria: "Open publishing notes",
        closeAria: "Close publishing notes",
        handle: "Notes",
        eyebrow: "Publishing memo",
        close: "Close",
        title: "Why this section is built this way",
        intro: "A compact rationale for the editorial, GEO, and localization choices behind TurboFlow Updates.",
        items: [
          {
            title: "First-party source of record",
            body: "An official Updates section gives search engines, AI systems, journalists, and partners one canonical page to cite."
          },
          {
            title: "Structured facts are easier to quote",
            body: "Source-based copy comes first. Separate summaries and FAQs then expose entities, dates, and material details in forms that are easier to retrieve and quote."
          },
          {
            title: "Citations strengthen trust",
            body: "Official and independent sources make each announcement verifiable and connect TurboFlow to consistent entity signals across the web."
          },
          {
            title: "Separate language URLs improve discovery",
            body: "English and Chinese pages are independently indexable, connected with hreflang, and built from the same reviewed facts."
          },
          {
            title: "Production deployment",
            body: "Deploy these generated files under tf.xyz/updates, merge the generated robots directives with the site-wide robots file, and include the Updates sitemap in the root sitemap index."
          }
        ],
        footer: "Internal publishing note"
      }
    },
    zh: {
      htmlLang: "zh-CN",
      rssLanguage: "zh-CN",
      pathPrefix: "zh",
      locale: "zh-CN",
      name: "简体中文",
      shortName: "中文",
      languageLabel: "语言",
      brandAria: "TurboFlow 首页",
      breadcrumbAria: "面包屑导航",
      openApp: "打开应用",
      homeLabel: "首页",
      updatesLabel: "最新动态",
      readArticle: "阅读更新",
      listDatePrefix: "发布时间",
      originalSourcePrefix: "原文：",
      sourceAuthorPrefix: "作者：",
      summaryTitle: "内容总结",
      faqTitle: "常见问题",
      sourcesTitle: "来源",
      relatedTitle: "相关动态",
      aboutTurboFlow: {
        title: "关于 TurboFlow",
        body: "TurboFlow 是一个面向全球散户的链上交易平台，融合预测市场与永续合约，致力于打造下一代链上交易体验。",
        homeLabel: "访问 TurboFlow 官网",
        appLabel: "打开应用",
        docsLabel: "阅读产品文档"
      },
      riskAria: "风险提示",
      footer: "本页面信息仅供参考。",
      listTitle: "TurboFlow 最新动态",
      listDescription: "汇集 TurboFlow 公司公告、产品更新及其支持来源。",
      listSocialDescription: "TurboFlow 官方公司公告与产品更新。",
      emptyState: "目前还没有已发布的更新。",
      feedTitle: "TurboFlow 最新动态",
      feedDescription: "TurboFlow 公司公告与产品更新。",
      memo: {
        asideAria: "发布说明",
        openAria: "展开发布说明",
        closeAria: "收起发布说明",
        handle: "说明",
        eyebrow: "发布备忘",
        close: "收起",
        title: "为什么这样设计 Updates 栏目",
        intro: "这里简要说明 TurboFlow Updates 在编辑结构、GEO 与多语言呈现上的设计理由。",
        items: [
          {
            title: "建立第一方事实源",
            body: "官网 Updates 栏目为搜索引擎、AI 系统、媒体与合作方提供一个可统一引用的权威页面。"
          },
          {
            title: "结构化事实更容易被引用",
            body: "页面先呈现基于来源的正文，再用独立的内容总结与常见问题提取实体、日期和重要细节，避免编辑判断混入来源内容。"
          },
          {
            title: "来源链接增强可信度",
            body: "官方来源与独立媒体报道让每篇公告可核验，并帮助 TurboFlow 在不同网站之间形成一致的品牌实体信号。"
          },
          {
            title: "独立语言 URL 扩大内容发现范围",
            body: "中英文页面均可单独索引，并通过 hreflang 关联；两个版本使用同一组经过审校的事实。"
          },
          {
            title: "正式部署方式",
            body: "将生成文件部署到 tf.xyz/updates，把 robots 指令合并进全站 robots.txt，并在根 Sitemap 索引中加入 Updates Sitemap。"
          }
        ],
        footer: "内部发布备忘"
      }
    }
  }
};

const panteraUrl = "https://panteracapital.com/investing-in-turboflow/";
const fundingAnnouncementUrl = "https://www.prnewswire.com/news-releases/turboflow-raises-6-million-seed-led-by-pantera-capital-to-bring-institutional-trading-infrastructure-to-everyday-users-302806950.html";
const susquehannaPartnershipUrl = "https://x.com/TurboFlow_xyz/status/2054487210691563718";
const telegramXUrl = "https://x.com/@telegram";
const chainlinkAnnouncementUrl = "https://x.com/chainlink/status/2065132282780774419";
const turboFlowChainlinkAnnouncementUrl = "https://x.com/TurboFlow_xyz/status/2065131952802234386";
const theBlockTurboFlowUrl = "https://www.theblock.co/post/405706/turboflow-funding-crypto-pantera-capital";
const theBlockPredictionMarketsFundingUrl = "https://www.theblock.co/post/369737/why-crypto-vcs-betting-on-prediction-markets-funding";
const theBlockPerpDexFundingUrl = "https://www.theblock.co/post/373464/the-funding-why-perp-dexs-getting-vc-attention-now";
const theBlockPredictionMarketsDataUrl = "https://www.theblock.co/data/decentralized-finance/prediction-markets";

const theBlockTurboFlowBody = [
  {
    type: "paragraph",
    text: "TurboFlow, an onchain trading platform offering prediction markets and perpetual futures, has raised $6 million in a seed funding round."
  },
  {
    type: "paragraph",
    text: "Pantera Capital led the round, with Susquehanna Crypto and Digital Currency Group participating, TurboFlow said Monday. Those are the only three investors in the round, which closed in March after fundraising began earlier this year, founder Tony He, former co-founder and partner at Amber Group, told The Block. The round was structured as a simple agreement for future equity (SAFE) with token warrants, He said, declining to disclose valuation."
  },
  {
    type: "paragraph",
    segments: [
      { text: "TurboFlow's fundraise comes as both " },
      { text: "prediction markets", href: theBlockPredictionMarketsFundingUrl },
      { text: " and " },
      { text: "perpetual futures", href: theBlockPerpDexFundingUrl },
      { text: " continue to grow and attract investor interest. Based in Hong Kong, the platform aims to become the \"Kalshi of APAC [Asia-Pacific].\" He said prediction markets have gained " },
      { text: "significant traction", href: theBlockPredictionMarketsDataUrl },
      { text: " through platforms such as Kalshi and Polymarket in Western markets, but remain largely underdeveloped across Asia. TurboFlow aims to fill that gap through localization and a stronger regional presence." }
    ]
  },
  {
    type: "paragraph",
    text: "\"We see a large unfilled gap between Asian users and proper institutional-grade liquidity, and we’re striving to become that bridge,\" He said. \"People here are interested in different topics and assets to trade. It’s about staying close to users and being able to deliver the products they want, fast.\""
  },
  {
    type: "paragraph",
    text: "When asked what licenses TurboFlow holds or is pursuing, He said regulatory frameworks for prediction markets \"vary significantly across APAC and are still evolving,\" but TurboFlow is \"proactively building toward a compliant, legitimate setup\" and working with advisors to evaluate compliant paths with a market-by-market approach."
  },
  {
    type: "paragraph",
    text: "As for how TurboFlow plans to build liquidity, He pointed to relationships with firms including Susquehanna Crypto and his own background in market making. He also said the team has deep experience in user acquisition across Asia and plans to compete through liquidity, pricing, service quality, and trusted infrastructure."
  },
  {
    type: "paragraph",
    text: "TurboFlow said it has been running its beta for more than six months and has attracted over 15,000 registered beta users. The platform said it has processed more than $19 billion in trading volume to date."
  },
  {
    type: "paragraph",
    text: "\"Perps have traditionally been the most popular product among crypto users, but our fastest-growing segment is coming entirely from prediction markets — which proves to us that offering a genuinely new trading experience is what matters most,\" He said."
  },
  {
    type: "paragraph",
    text: "TurboFlow describes its approach as \"high-velocity event trading,\" allowing users to participate in markets with entry sizes as small as $2. Other claimed features include fast settlement infrastructure for short-duration contracts and a consumer-focused interface."
  },
  {
    type: "paragraph",
    text: "TurboFlow currently has more than 30 employees, with most of the core team based in Hong Kong. He said the firm plans to remain \"relatively lean\" as it looks to grow."
  }
];

const susquehannaPartnershipBody = [
  {
    type: "paragraph",
    text: "At TurboFlow, we believe everyone gets a seat at the table. Market access, trading tools, and execution quality should not be reserved for a small group of professionals. TurboFlow is built to make trading simple, accessible, and highly participatory for everyday users."
  },
  {
    type: "paragraph",
    text: "Today, TurboFlow announces a strategic partnership with Susquehanna Crypto, a leading global proprietary digital asset trading firm. Through this partnership, Susquehanna Crypto will support TurboFlow’s product lines as an on-chain liquidity provider, bringing institutional experience in professional trading, market structure, price discovery, and risk management into the TurboFlow ecosystem."
  },
  {
    type: "paragraph",
    text: "This partnership marks an important milestone in TurboFlow’s development. As TurboFlow continues to expand its product suite, including perpetual contracts and recently launched Event Contracts with trading cycles as short as 30 seconds, deeper liquidity, efficient price discovery, and market stability are becoming increasingly important to the user experience."
  },
  {
    type: "paragraph",
    text: "In particular, within the Event Contracts market, TurboFlow is moving beyond traditional fixed-odds mechanisms toward a more dynamic and market-driven odds structure. Dynamic odds will adjust based on real-time market conditions, liquidity depth, directional demand, volatility, and risk exposure, allowing Event Contracts pricing to better reflect real market structure."
  },
  {
    type: "heading",
    text: "Susquehanna Crypto’s Role: Strengthening TurboFlow’s Market Infrastructure"
  },
  {
    type: "paragraph",
    text: "As one of the world’s most established options and derivatives market makers, Susquehanna Crypto will support TurboFlow’s liquidity infrastructure and market-making capabilities."
  },
  {
    type: "paragraph",
    text: "For TurboFlow users, this means a stronger foundation behind the trading experience: deeper liquidity, improved market quality, more efficient price discovery, and a more reliable environment for both perpetual contracts, event contracts, and future product lines."
  },
  {
    type: "paragraph",
    text: "By introducing institutional market-making capabilities, TurboFlow is strengthening the core layer behind its products while keeping the user experience simple, accessible, and retail-friendly."
  },
  {
    type: "heading",
    text: "Future Vision: Trading, made simple."
  },
  {
    type: "paragraph",
    text: "Moving forward, TurboFlow plans to bring in more top-tier institutional market makers and build a diversified liquidity network. With this foundation, TurboFlow will continue expanding its product ecosystem across multiple trading verticals:"
  },
  {
    type: "paragraph",
    text: "Event Contracts: Currently built around major crypto assets such as BTC and ETH, with trading cycles as short as 30 seconds. TurboFlow aims to gradually expand into more global market assets such as oil and gold, while delivering a more market-driven pricing experience through dynamic odds."
  },
  {
    type: "paragraph",
    segments: [
      { text: "Prediction Markets and " },
      { text: "@telegram", href: telegramXUrl },
      { text: " Mini App: Upcoming prediction-style products and mobile-first trading experiences built on TurboFlow’s expanding liquidity and pricing infrastructure." }
    ]
  },
  {
    type: "paragraph",
    text: "Perpetual Contracts: High-leverage perpetual trading supported by deeper institutional liquidity."
  },
  {
    type: "heading",
    text: "About TurboFlow"
  },
  {
    type: "paragraph",
    text: "TurboFlow is an on-chain trading platform built to redefine the trading experience for everyday users. TurboFlow is committed to making trading a simple game within everyone’s reach, allowing retail users to truly lead the second half of the market."
  },
  {
    type: "paragraph",
    text: "The platform currently offers high-leverage perpetual contracts and Event Contracts, combining professional-grade trading infrastructure with a retail-friendly product experience."
  },
  {
    type: "heading",
    text: "About Susquehanna Crypto"
  },
  {
    type: "paragraph",
    text: "Susquehanna Crypto is a leading global proprietary digital asset trading firm, registered and headquartered in Nassau, Bahamas, with offices in London, Hong Kong, New York City, and Bala Cynwyd. Susquehanna Crypto draws on decades of experience to bridge the gap between traditional finance and digital assets, providing liquidity across the digital asset ecosystem through a range of complementary business lines, including digital asset derivatives, on-chain strategies (including on-chain prediction markets), early-stage venture investments, and token market-making."
  }
];

export const articles = [
  {
    slug: "turboflow-raises-6m-seed-round",
    relatedSlugs: [
      "why-pantera-invested-in-turboflow",
      "turboflow-kalshi-of-apac-seed-round",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-06-22T20:05:00-04:00",
    modifiedAt: "2026-08-13",
    primarySource: fundingAnnouncementUrl,
    sourceDocument: {
      author: "TurboFlow",
      rightsMode: "owned-release",
      bodyIntegrity: {
        en: "4d5ce874e64d3db80e0a1a047c3e5e0ba5ef01fa50d2927a664e72e637e63b0d",
        zh: "83102f343bac2397244b59e057125c9439ad108290ba11e16e0905eba9e6c012"
      }
    },
    sources: [
      {
        url: fundingAnnouncementUrl,
        label: {
          en: "TurboFlow: $6 Million Seed Round Announcement",
          zh: "TurboFlow：600 万美元种子轮融资公告"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Raises $6 Million Seed Round Led by Pantera Capital",
        pageDescription: "TurboFlow has raised $6 million in seed funding led by Pantera Capital, with participation from Susquehanna Crypto and Digital Currency Group.",
        socialDescription: "The funding will support product development, liquidity infrastructure, and global user growth.",
        twitterTitle: "TurboFlow Raises $6 Million Seed Round",
        category: "Company Update",
        breadcrumbCurrent: "Funding Announcement",
        headline: "TurboFlow Raises $6 Million Seed Round Led by Pantera Capital",
        dek: "TurboFlow announced a $6 million seed round led by Pantera Capital, with participation from Susquehanna Crypto and Digital Currency Group. The company said the capital will support product development, liquidity infrastructure, and global user growth.",
        summaryItems: [
          { title: "$6 million seed round", text: "Pantera Capital led the round, with participation from Susquehanna Crypto and Digital Currency Group." },
          { title: "Use of funds", text: "TurboFlow will expand product development, strengthen liquidity infrastructure, and accelerate global user growth." },
          { title: "Reported platform activity", text: "TurboFlow reported $19.15 billion in total trading volume across more than 14,540 users as of the announcement." }
        ],
        bodyBlocks: [
          { type: "heading", text: "TurboFlow closes a $6 million seed round" },
          {
            type: "paragraph",
            text: "TurboFlow has closed a $6 million seed funding round led by Pantera Capital, with participation from Susquehanna Crypto and Digital Currency Group."
          },
          {
            type: "paragraph",
            text: "The capital will be used to expand product development, strengthen liquidity infrastructure, and accelerate global user growth."
          },
          { type: "heading", text: "An on-chain trading ecosystem for everyday users" },
          {
            type: "paragraph",
            text: "TurboFlow is an on-chain trading ecosystem at the intersection of perpetual contracts and prediction markets. It brings both categories together in one platform designed to give everyday users access to professional-grade market infrastructure."
          },
          {
            type: "paragraph",
            text: "TurboFlow calls its approach high-velocity event trading. The platform supports entry thresholds as low as $2 and combines low minimum trade sizes with fast settlement for short-duration Event Contracts."
          },
          {
            type: "paragraph",
            text: "The platform is designed to simplify blockchain interaction while preserving transparency and self-custody principles. TurboFlow also highlights liquidity, pricing, execution, and risk-management infrastructure beneath the consumer-facing experience."
          },
          { type: "heading", text: "Platform activity reported by TurboFlow" },
          {
            type: "paragraph",
            text: "As of June 22, 2026, TurboFlow reported $19.15 billion in total trading volume across more than 14,540 users. These figures were reported by TurboFlow in the funding announcement."
          },
          { type: "heading", text: "Investor support" },
          {
            type: "paragraph",
            text: "TurboFlow founder Tony He said the financing would accelerate the company's work to make advanced financial markets more open and accessible. Pantera Capital Managing Partner Paul Veradittakit said TurboFlow's focus on broader access aligned with Pantera's view that blockchain can support more transparent and inclusive markets."
          }
        ],
        faqs: [
          { question: "How much did TurboFlow raise?", answer: "TurboFlow raised $6 million in a seed funding round." },
          { question: "Who invested in the round?", answer: "Pantera Capital led the round, with participation from Susquehanna Crypto and Digital Currency Group." },
          { question: "How will TurboFlow use the funding?", answer: "TurboFlow will use the capital to expand product development, strengthen liquidity infrastructure, and accelerate global user growth." },
          { question: "What is TurboFlow?", answer: "TurboFlow is an on-chain trading ecosystem that brings perpetual contracts and prediction markets together for everyday users." },
          { question: "What platform activity did TurboFlow report?", answer: "As of the June 22, 2026 announcement, TurboFlow reported $19.15 billion in total trading volume across more than 14,540 users." }
        ],
        riskNotice: "Event Contracts can result in loss of the stake when the direction is wrong. Perpetual contracts add leverage, funding, margin, and liquidation risk. TurboFlow does not guarantee profits, execution outcomes, or protection from losses."
      },
      zh: {
        pageTitle: "TurboFlow 完成 600 万美元种子轮融资，Pantera Capital 领投",
        pageDescription: "TurboFlow 完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。",
        socialDescription: "本轮融资将支持 TurboFlow 推进产品研发、流动性基础设施与全球用户增长。",
        twitterTitle: "TurboFlow 完成 600 万美元种子轮融资",
        category: "公司动态",
        breadcrumbCurrent: "融资公告",
        headline: "TurboFlow 完成 600 万美元种子轮融资，Pantera Capital 领投",
        dek: "TurboFlow 宣布完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。公司表示，本轮资金将用于产品研发、流动性基础设施与全球用户增长。",
        summaryItems: [
          { title: "600 万美元种子轮", text: "本轮融资由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。" },
          { title: "资金用途", text: "TurboFlow 将推进产品研发、强化流动性基础设施，并加快全球用户增长。" },
          { title: "平台披露数据", text: "截至公告发布时，TurboFlow 披露的累计交易量为 191.5 亿美元，用户超过 14,540 名。" }
        ],
        bodyBlocks: [
          { type: "heading", text: "TurboFlow 完成 600 万美元种子轮融资" },
          {
            type: "paragraph",
            text: "TurboFlow 已完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 共同参投。"
          },
          {
            type: "paragraph",
            text: "本轮资金将用于推进产品研发、强化流动性基础设施，并加快全球用户增长。"
          },
          { type: "heading", text: "面向日常用户的链上交易生态" },
          {
            type: "paragraph",
            text: "TurboFlow 是一个处于永续合约与预测市场交汇处的链上交易生态。平台将两类产品整合在同一场所，旨在让日常用户使用专业级市场基础设施。"
          },
          {
            type: "paragraph",
            text: "TurboFlow 将这种模式称为“高速度事件交易”。平台参与门槛低至 2 美元，并通过较低的最低交易金额与快速结算能力支持短周期事件合约。"
          },
          {
            type: "paragraph",
            text: "平台旨在简化链上操作，同时保留透明度与自托管原则。消费级界面背后还包括流动性、定价、执行与风险管理基础设施。"
          },
          { type: "heading", text: "TurboFlow 披露的平台数据" },
          {
            type: "paragraph",
            text: "截至 2026 年 6 月 22 日，TurboFlow 披露的平台累计交易量为 191.5 亿美元，用户超过 14,540 名。上述数据来自 TurboFlow 融资公告。"
          },
          { type: "heading", text: "投资方支持" },
          {
            type: "paragraph",
            text: "TurboFlow 创始人 Tony He 表示，本轮融资将加快公司扩大先进金融市场覆盖范围的工作。Pantera Capital 管理合伙人 Paul Veradittakit 表示，TurboFlow 扩大市场参与范围的目标，与 Pantera 对区块链推动市场透明度与包容性的判断一致。"
          }
        ],
        faqs: [
          { question: "TurboFlow 本轮融资金额是多少？", answer: "TurboFlow 完成了 600 万美元种子轮融资。" },
          { question: "哪些机构参与了本轮融资？", answer: "Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 共同参投。" },
          { question: "本轮资金将用于哪些方面？", answer: "资金将用于推进产品研发、强化流动性基础设施，并加快全球用户增长。" },
          { question: "TurboFlow 是什么平台？", answer: "TurboFlow 是一个整合永续合约与预测市场、面向日常用户的链上交易生态。" },
          { question: "融资公告披露了哪些平台数据？", answer: "截至 2026 年 6 月 22 日，TurboFlow 披露的累计交易量为 191.5 亿美元，用户超过 14,540 名。" }
        ],
        riskNotice: "事件合约方向错误时可能损失投入金额；永续合约还涉及杠杆、资金费、保证金与清算风险。TurboFlow 不保证盈利、成交结果或避免损失。"
      }
    }
  },
  {
    slug: "turboflow-kalshi-of-apac-seed-round",
    format: "source-republication",
    relatedSlugs: [
      "turboflow-raises-6m-seed-round",
      "why-pantera-invested-in-turboflow",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-06-22T20:00:00-04:00",
    modifiedAt: "2026-08-17",
    primarySource: theBlockTurboFlowUrl,
    sourceDocument: {
      title: "TurboFlow, aiming to be the 'Kalshi of APAC,' raises $6 million seed led by Pantera Capital",
      author: "Yogita Khatri",
      platform: "The Block",
      language: "en",
      rightsMode: "verbatim-republication",
      bodyIntegrity: {
        en: "a6a3261f19adde84b88edb03a9b4d864346e84c6e94b9f4fb75561b2e67174da",
        zh: "a6a3261f19adde84b88edb03a9b4d864346e84c6e94b9f4fb75561b2e67174da"
      }
    },
    sources: [
      {
        url: theBlockTurboFlowUrl,
        label: {
          en: "The Block: TurboFlow, aiming to be the 'Kalshi of APAC,' raises $6 million seed led by Pantera Capital",
          zh: "The Block：TurboFlow 目标成为“亚太版 Kalshi”，完成 600 万美元种子轮融资"
        }
      },
      {
        url: theBlockPredictionMarketsFundingUrl,
        label: {
          en: "The Block: Why crypto VCs are betting on prediction markets",
          zh: "The Block：加密风投为何押注预测市场"
        }
      },
      {
        url: theBlockPerpDexFundingUrl,
        label: {
          en: "The Block: Why perp DEXs are getting VC attention",
          zh: "The Block：永续合约 DEX 为何受到风投关注"
        }
      },
      {
        url: theBlockPredictionMarketsDataUrl,
        label: {
          en: "The Block Data: Prediction markets",
          zh: "The Block 数据：预测市场"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Raises $6 Million Seed Round, Aiming to Be the 'Kalshi of APAC'",
        pageDescription: "The Block reported that TurboFlow raised a $6 million seed round led by Pantera Capital. Founder Tony He discussed APAC localization, liquidity, regulation, and growth plans.",
        socialDescription: "The Block's report on TurboFlow's $6 million seed round and its APAC prediction-market strategy.",
        twitterTitle: "TurboFlow Raises $6 Million, Aiming to Be the 'Kalshi of APAC'",
        category: "Media Coverage",
        breadcrumbCurrent: "The Block on TurboFlow's Seed Round",
        headline: "TurboFlow Raises $6 Million Seed Round, Aiming to Be the 'Kalshi of APAC'",
        dek: "The Block reported that TurboFlow raised a $6 million seed round led by Pantera Capital. Founder Tony He discussed the platform's APAC localization, liquidity strategy, regulatory approach, beta activity, and growth plans.",
        bodyBlocks: theBlockTurboFlowBody,
        faqs: [
          {
            question: "How much did TurboFlow raise, and who invested?",
            answer: "The Block reported that TurboFlow raised $6 million in a seed round led by Pantera Capital, with Susquehanna Crypto and Digital Currency Group participating. Tony He said they were the round's only three investors."
          },
          {
            question: "How was TurboFlow's seed round structured?",
            answer: "Tony He told The Block that the round used a simple agreement for future equity (SAFE) with token warrants. He declined to disclose the valuation."
          },
          {
            question: "Why does TurboFlow aim to be the 'Kalshi of APAC'?",
            answer: "He told The Block that prediction markets had gained traction in Western markets but remained underdeveloped across Asia. TurboFlow aims to serve that regional gap through localization and a stronger local presence."
          },
          {
            question: "What did Tony He say about TurboFlow's regulatory approach?",
            answer: "He said prediction-market rules vary across APAC and are still evolving. According to the interview, TurboFlow is working with advisors to assess compliant paths market by market."
          },
          {
            question: "What platform and team figures did The Block report?",
            answer: "The article relayed TurboFlow's reported figures: more than six months in beta, over 15,000 registered beta users, more than $19 billion in trading volume, and a team of more than 30 employees. These figures were reported by the company."
          }
        ]
      },
      zh: {
        pageTitle: "TurboFlow 完成 600 万美元种子轮融资，目标成为“亚太版 Kalshi”",
        pageDescription: "The Block 报道，TurboFlow 完成由 Pantera Capital 领投的 600 万美元种子轮融资。创始人 Tony He 介绍了平台在亚太市场的本地化、流动性、合规与增长计划。",
        socialDescription: "The Block 关于 TurboFlow 600 万美元种子轮融资与亚太预测市场战略的报道。",
        twitterTitle: "TurboFlow 完成 600 万美元融资，目标成为“亚太版 Kalshi”",
        category: "媒体报道",
        breadcrumbCurrent: "The Block 报道 TurboFlow 融资",
        headline: "TurboFlow 完成 600 万美元种子轮融资，目标成为“亚太版 Kalshi”",
        dek: "The Block 报道，TurboFlow 完成由 Pantera Capital 领投的 600 万美元种子轮融资。创始人 Tony He 介绍了平台在亚太市场的本地化、流动性策略、合规路径、测试期数据与增长计划。",
        bodyBlocks: theBlockTurboFlowBody,
        faqs: [
          {
            question: "TurboFlow 本轮融资金额和投资方是什么？",
            answer: "The Block 报道，TurboFlow 完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。Tony He 表示，本轮只有这三家投资方。"
          },
          {
            question: "本轮融资采用了什么结构？",
            answer: "Tony He 告诉 The Block，本轮采用附带代币认股权证的未来股权简单协议（SAFE），估值未公开。"
          },
          {
            question: "TurboFlow 为什么提出“亚太版 Kalshi”的定位？",
            answer: "Tony He 表示，预测市场在西方市场已获得较多采用，但亚洲仍存在市场空白；TurboFlow 希望通过本地化和更强的区域运营来服务亚洲用户。"
          },
          {
            question: "TurboFlow 如何规划合规路径？",
            answer: "Tony He 表示，亚太各市场的预测市场监管框架差异较大且仍在演变，团队正与顾问合作，按市场评估合规路径。"
          },
          {
            question: "The Block 报道了哪些平台和团队数据？",
            answer: "文章转述 TurboFlow 的披露：测试期超过六个月，注册测试用户超过 15,000 名，累计交易量超过 190 亿美元；团队超过 30 人。上述数字属于项目方披露。"
          }
        ]
      }
    }
  },
  {
    slug: "why-pantera-invested-in-turboflow",
    format: "source-republication",
    relatedSlugs: [
      "turboflow-raises-6m-seed-round",
      "turboflow-kalshi-of-apac-seed-round",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-06-30T19:04:41-07:00",
    modifiedAt: "2026-08-17",
    primarySource: panteraUrl,
    sourceDocument: {
      title: "Investing in TurboFlow",
      author: "Jay Yu",
      platform: "Pantera Capital",
      language: "en",
      rightsMode: "verbatim-republication",
      bodyIntegrity: {
        en: "1aa60e3f2d5aea7532ca493c7e0be5ec7d82c9934d25ceaee604f86a7f1fa099",
        zh: "1aa60e3f2d5aea7532ca493c7e0be5ec7d82c9934d25ceaee604f86a7f1fa099"
      }
    },
    sources: [
      {
        url: panteraUrl,
        label: {
          en: "Pantera Capital: Investing in TurboFlow",
          zh: "Pantera Capital：《Investing in TurboFlow》"
        }
      },
      {
        url: "https://www.pewresearch.org/short-reads/2026/05/27/trading-volume-on-prediction-markets-has-soared-in-recent-months/",
        label: {
          en: "Pew Research Center: Trading volume on prediction markets has soared in recent months",
          zh: "Pew Research Center：预测市场交易量近期大幅增长"
        }
      },
      {
        url: "https://kalshi.com/category/crypto/frequency/fifteen_min",
        label: {
          en: "Kalshi: 15-minute crypto markets",
          zh: "Kalshi：15 分钟加密市场"
        }
      },
      {
        url: "https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-4-outcome-markets",
        label: {
          en: "Hyperliquid documentation: HIP-4 outcome markets",
          zh: "Hyperliquid 文档：HIP-4 结果型市场"
        }
      },
      {
        url: "https://finance.yahoo.com/markets/crypto/articles/30-global-crypto-trading-coming-183552726.html",
        label: {
          en: "Yahoo Finance: South Korea's share of global crypto spot trading",
          zh: "Yahoo Finance：韩国在全球加密现货交易中的占比"
        }
      },
      {
        url: "https://tf.xyz/",
        label: {
          en: "TurboFlow official website",
          zh: "TurboFlow 官网"
        }
      },
      {
        url: "https://www.linkedin.com/in/tony-he-330b6559/",
        label: {
          en: "Tony He on LinkedIn",
          zh: "Tony He 的 LinkedIn 主页"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "Pantera Leads TurboFlow's Seed Round",
        pageDescription: "Pantera Capital said it is leading TurboFlow's $6 million seed round to bring institutional-grade perpetual-futures and prediction-market experiences to everyday traders across Asia.",
        socialDescription: "Pantera Capital's Investing in TurboFlow article, followed by five source-based questions and answers.",
        twitterTitle: "Pantera Leads TurboFlow's Seed Round",
        category: "Investor Perspective",
        breadcrumbCurrent: "Pantera Leads TurboFlow's Seed Round",
        headline: "Pantera Leads TurboFlow's Seed Round",
        dek: "Pantera Capital said it is leading TurboFlow's $6 million seed round to help bring institutional-grade perpetual-futures and prediction-market experiences to everyday traders across Asia.",
        bodyBlocks: [
          {
            type: "paragraph",
            text: "We’re leading the $6M seed round in TurboFlow to bring institutional-grade trading experiences for perpetual futures and prediction markets to everyday traders across Asia."
          },
          {
            type: "paragraph",
            segments: [
              { text: "Over the last few years, perpetuals and prediction markets have been two of the largest growing DeFi primitives. In the last 6 months, perpetuals have seen $4 trillion USD in volume and over $15 billion in open interest, while prediction markets " },
              { text: "total trading volume has soared", href: "https://www.pewresearch.org/short-reads/2026/05/27/trading-volume-on-prediction-markets-has-soared-in-recent-months/" },
              { text: " from less than $5 billion in September 2025 to over $24 billion in April 2026." }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "Today, these two DeFi primitives are now converging and evolving together, especially as near-term trading instruments. Prediction market platforms like Kalshi and Polymarket are not only offering short-term crypto markets (eg. " },
              { text: "BTC 15min", href: "https://kalshi.com/category/crypto/frequency/fifteen_min" },
              { text: "), but also actively launching perpetual futures as a product. Similarly, Hyperliquid, the leading perpetuals platform, has recently launched " },
              { text: "HIP4 outcome markets", href: "https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-4-outcome-markets" },
              { text: " as a way to create infrastructure for prediction markets." }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "At the same time, the user base for trading is increasingly a global phenomenon, with Asia leading the adoption curve on many of these frontier trading products. " },
              { text: "30% of global crypto spot trading", href: "https://finance.yahoo.com/markets/crypto/articles/30-global-crypto-trading-coming-183552726.html" },
              { text: ", for example, comes from South Korea with Won-denominated trades, while many of leading traditional cryptocurrency exchanges also have deep roots in the APAC region. We believe perps and prediction market platforms increasingly will need to localize and meet users where they are." }
            ]
          },
          {
            type: "paragraph",
            text: "That’s the gap TurboFlow is built to close."
          },
          { type: "heading", text: "Enter TurboFlow" },
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow", href: "https://tf.xyz/" },
              { text: " is an onchain trading platform that unifies perpetual futures and prediction markets in a single venue. From one account, a user can take a leveraged view on an asset’s price or a position on a real-world event – an election, a sports result, a macro print –on the same balance and through the same consumer-grade interface." }
            ]
          },
          {
            type: "paragraph",
            text: "It’s built for speed and accessibility: entry sizes as small as $2, fast settlement tuned for short-duration contracts, and institutional-grade liquidity, pricing, and risk management running underneath a self-custodial app that hides the chain entirely. In effect, it’s like an institutional trading desk – the liquidity, the pricing, the risk engine – rebuilt as something anyone can open on their phone. TurboFlow calls the experience “high-velocity event trading”: the simplicity of a consumer app with the execution quality of a professional desk."
          },
          {
            type: "paragraph",
            text: "In a six-month beta, that combination has done real volume – more than 15,000 registered users and over $19B in cumulative trading volume, ahead of any public launch."
          },
          { type: "heading", text: "Meet the Team" },
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow’s founder " },
              { text: "Tony He", href: "https://www.linkedin.com/in/tony-he-330b6559/" },
              { text: " is a co-founder and partner of Amber Group, one of Asia’s largest crypto trading institutions, and a market maker by background. He has spent his career on the institutional side of these exact markets, building the the liquidity, pricing, and risk systems that TurboFlow now puts in front of everyday users. He is supported by a team that has extensive experience building crypto exchanges and expertise in building frontier markets." }
            ]
          },
          { type: "heading", text: "Our Thesis" },
          {
            type: "paragraph",
            text: "We believe that the next generation of trading platforms will be won by the teams that meet users where they are – the ones closest to the assets, events, and markets a user actually wants to trade."
          },
          {
            type: "paragraph",
            text: "Even while APAC remains one of the most sophisticated retail trading regions in crypto, today’s incumbents such as Kalshi, Polymarket, and Hyperliquid were primarily built for Western audiences. But a trader in Seoul or Jakarta may not necessarily care about a US local election or pop culture reference."
          },
          {
            type: "paragraph",
            text: "TurboFlow has the unique combination of a founder that has first-hand experience building a world-class execution and liquidity engine, as well as a team that knows what users in APAC are excited about and want to see. And today, we’re already starting to see the grassroots traction and excitement for TurboFlow’s institutional-grade trading experience."
          },
          {
            type: "paragraph",
            text: "With the right team, the right product, and the right market, we believe TurboFlow can become the next-generation trading platform for APAC, and we’re proud to lead their $6M seed round to build the best-in-class markets for everyone."
          }
        ],
        faqs: [
          { question: "Why did Pantera Capital invest in TurboFlow?", answer: "Pantera cited the convergence of perpetual futures and prediction markets, demand for locally relevant products across APAC, and the TurboFlow team's experience with liquidity, pricing, and risk systems." },
          { question: "How much is TurboFlow's seed round?", answer: "Pantera Capital said it is leading TurboFlow's $6 million seed round." },
          { question: "How does Pantera describe TurboFlow's product?", answer: "Pantera describes TurboFlow as an onchain platform that brings perpetual futures and prediction markets into one venue, account, balance, and consumer-grade interface." },
          { question: "What beta activity does the article report?", answer: "The Pantera article reports more than 15,000 registered users and over $19 billion in cumulative trading volume during a six-month beta before public launch." },
          { question: "Where does Pantera see TurboFlow's regional opportunity?", answer: "Pantera focuses its thesis on APAC, arguing that trading platforms need to localize around the assets, events, and markets that users in the region want to trade." }
        ]
      },
      zh: {
        pageTitle: "Pantera 领投 TurboFlow 种子轮融资",
        pageDescription: "Pantera Capital 表示，其领投 TurboFlow 的 600 万美元种子轮融资，希望帮助 TurboFlow 把专业级永续合约与预测市场体验带给亚洲的日常交易者。",
        socialDescription: "Pantera Capital《Investing in TurboFlow》原文及五个基于原文的常见问题。",
        twitterTitle: "Pantera 领投 TurboFlow 种子轮融资",
        category: "投资方观点",
        breadcrumbCurrent: "Pantera 领投 TurboFlow",
        headline: "Pantera 领投 TurboFlow 种子轮融资",
        dek: "Pantera Capital 表示，其领投 TurboFlow 的 600 万美元种子轮融资，希望帮助 TurboFlow 把专业级永续合约与预测市场体验带给亚洲的日常交易者。",
        bodyBlocks: [
          {
            type: "paragraph",
            text: "We’re leading the $6M seed round in TurboFlow to bring institutional-grade trading experiences for perpetual futures and prediction markets to everyday traders across Asia."
          },
          {
            type: "paragraph",
            segments: [
              { text: "Over the last few years, perpetuals and prediction markets have been two of the largest growing DeFi primitives. In the last 6 months, perpetuals have seen $4 trillion USD in volume and over $15 billion in open interest, while prediction markets " },
              { text: "total trading volume has soared", href: "https://www.pewresearch.org/short-reads/2026/05/27/trading-volume-on-prediction-markets-has-soared-in-recent-months/" },
              { text: " from less than $5 billion in September 2025 to over $24 billion in April 2026." }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "Today, these two DeFi primitives are now converging and evolving together, especially as near-term trading instruments. Prediction market platforms like Kalshi and Polymarket are not only offering short-term crypto markets (eg. " },
              { text: "BTC 15min", href: "https://kalshi.com/category/crypto/frequency/fifteen_min" },
              { text: "), but also actively launching perpetual futures as a product. Similarly, Hyperliquid, the leading perpetuals platform, has recently launched " },
              { text: "HIP4 outcome markets", href: "https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-4-outcome-markets" },
              { text: " as a way to create infrastructure for prediction markets." }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "At the same time, the user base for trading is increasingly a global phenomenon, with Asia leading the adoption curve on many of these frontier trading products. " },
              { text: "30% of global crypto spot trading", href: "https://finance.yahoo.com/markets/crypto/articles/30-global-crypto-trading-coming-183552726.html" },
              { text: ", for example, comes from South Korea with Won-denominated trades, while many of leading traditional cryptocurrency exchanges also have deep roots in the APAC region. We believe perps and prediction market platforms increasingly will need to localize and meet users where they are." }
            ]
          },
          {
            type: "paragraph",
            text: "That’s the gap TurboFlow is built to close."
          },
          { type: "heading", text: "Enter TurboFlow" },
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow", href: "https://tf.xyz/" },
              { text: " is an onchain trading platform that unifies perpetual futures and prediction markets in a single venue. From one account, a user can take a leveraged view on an asset’s price or a position on a real-world event – an election, a sports result, a macro print –on the same balance and through the same consumer-grade interface." }
            ]
          },
          {
            type: "paragraph",
            text: "It’s built for speed and accessibility: entry sizes as small as $2, fast settlement tuned for short-duration contracts, and institutional-grade liquidity, pricing, and risk management running underneath a self-custodial app that hides the chain entirely. In effect, it’s like an institutional trading desk – the liquidity, the pricing, the risk engine – rebuilt as something anyone can open on their phone. TurboFlow calls the experience “high-velocity event trading”: the simplicity of a consumer app with the execution quality of a professional desk."
          },
          {
            type: "paragraph",
            text: "In a six-month beta, that combination has done real volume – more than 15,000 registered users and over $19B in cumulative trading volume, ahead of any public launch."
          },
          { type: "heading", text: "Meet the Team" },
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow’s founder " },
              { text: "Tony He", href: "https://www.linkedin.com/in/tony-he-330b6559/" },
              { text: " is a co-founder and partner of Amber Group, one of Asia’s largest crypto trading institutions, and a market maker by background. He has spent his career on the institutional side of these exact markets, building the the liquidity, pricing, and risk systems that TurboFlow now puts in front of everyday users. He is supported by a team that has extensive experience building crypto exchanges and expertise in building frontier markets." }
            ]
          },
          { type: "heading", text: "Our Thesis" },
          {
            type: "paragraph",
            text: "We believe that the next generation of trading platforms will be won by the teams that meet users where they are – the ones closest to the assets, events, and markets a user actually wants to trade."
          },
          {
            type: "paragraph",
            text: "Even while APAC remains one of the most sophisticated retail trading regions in crypto, today’s incumbents such as Kalshi, Polymarket, and Hyperliquid were primarily built for Western audiences. But a trader in Seoul or Jakarta may not necessarily care about a US local election or pop culture reference."
          },
          {
            type: "paragraph",
            text: "TurboFlow has the unique combination of a founder that has first-hand experience building a world-class execution and liquidity engine, as well as a team that knows what users in APAC are excited about and want to see. And today, we’re already starting to see the grassroots traction and excitement for TurboFlow’s institutional-grade trading experience."
          },
          {
            type: "paragraph",
            text: "With the right team, the right product, and the right market, we believe TurboFlow can become the next-generation trading platform for APAC, and we’re proud to lead their $6M seed round to build the best-in-class markets for everyone."
          }
        ],
        faqs: [
          { question: "Pantera Capital 为什么投资 TurboFlow？", answer: "Pantera Capital 将投资逻辑归因于永续合约与预测市场的融合、亚太市场对本地化产品的需求，以及 TurboFlow 团队在流动性、定价与风险系统方面的经验。" },
          { question: "TurboFlow 本轮种子轮融资金额是多少？", answer: "Pantera Capital 表示，其领投 TurboFlow 的 600 万美元种子轮融资。" },
          { question: "Pantera 如何描述 TurboFlow 的产品？", answer: "Pantera 将 TurboFlow 描述为一个在同一平台整合永续合约与预测市场的链上交易平台，用户可使用同一账户、余额和消费级界面参与两类市场。" },
          { question: "文章披露了哪些测试期数据？", answer: "Pantera 文章称，TurboFlow 六个月测试期内注册用户超过 15,000 名，累计交易量超过 190 亿美元；这些数字属于文章披露的项目数据。" },
          { question: "Pantera 认为 TurboFlow 的区域机会在哪里？", answer: "Pantera 将投资机会聚焦于亚太地区，并认为交易平台需要围绕当地用户希望交易的资产、事件与市场进行本地化。" }
        ]
      }
    }
  },
  {
    slug: "turboflow-chainlink-price-infrastructure",
    relatedSlugs: [
      "turboflow-susquehanna-crypto-liquidity-collaboration",
      "why-pantera-invested-in-turboflow",
      "turboflow-raises-6m-seed-round"
    ],
    publishedAt: "2026-06-11T18:00:00.000Z",
    modifiedAt: "2026-08-13",
    primarySource: turboFlowChainlinkAnnouncementUrl,
    sourceDocument: {
      author: "TurboFlow",
      rightsMode: "owned-release",
      bodyIntegrity: {
        en: "4194c826b05d731c2609f6698aa0247cb1af8cf1189ff053c951a7edf5ee45b9",
        zh: "9a4a98cfd9794dadb49aedbd1ee9d0edd778276f5d17509506c5fe96ce414537"
      }
    },
    sources: [
      {
        url: turboFlowChainlinkAnnouncementUrl,
        label: {
          en: "TurboFlow official X announcement",
          zh: "TurboFlow 官方 X 公告"
        }
      },
      {
        url: chainlinkAnnouncementUrl,
        label: {
          en: "Chainlink official X confirmation (June 11, 2026)",
          zh: "Chainlink 官方 X 确认（2026 年 6 月 11 日）"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Adopts Chainlink for XAU, BTC, and ETH Continuous Prediction Markets",
        pageDescription: "TurboFlow and Chainlink announced that TurboFlow had adopted Chainlink to support continuous prediction markets for XAU, BTC, and ETH.",
        socialDescription: "TurboFlow adopts Chainlink for continuous prediction markets covering XAU, BTC, and ETH.",
        twitterTitle: "TurboFlow Adopts Chainlink for XAU, BTC, and ETH Markets",
        category: "Infrastructure Update",
        breadcrumbCurrent: "Chainlink Integration",
        headline: "TurboFlow Adopts Chainlink for XAU, BTC, and ETH Continuous Prediction Markets",
        dek: "TurboFlow and Chainlink announced that TurboFlow had adopted Chainlink to support new continuous prediction markets for XAU, BTC, and ETH. The official posts confirm the integration and named markets without identifying a specific Chainlink service or deployment configuration.",
        summaryItems: [
          { title: "Integration", text: "TurboFlow adopted Chainlink." },
          { title: "Market format", text: "The announcement uses the term continuous prediction markets." },
          { title: "Named markets", text: "XAU, BTC, and ETH." }
        ],
        bodyBlocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On June 11, 2026, " },
              { text: "TurboFlow said on its official X account", href: turboFlowChainlinkAnnouncementUrl },
              { text: " that, with Chainlink, it was enabling fast, accurate, and continuous prediction markets intended for global retail participation." }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "Chainlink then " },
              { text: "confirmed through its official X account", href: chainlinkAnnouncementUrl },
              { text: " that TurboFlow had adopted Chainlink to power new continuous prediction markets for XAU, BTC, and ETH." }
            ]
          },
          { type: "callout", text: "The two official posts confirm TurboFlow's adoption of Chainlink and name XAU, BTC, and ETH as the announced markets." }
        ],
        faqs: [
          { question: "What did TurboFlow and Chainlink announce?", answer: "They announced that TurboFlow had adopted Chainlink to support new continuous prediction markets." },
          { question: "When was the Chainlink integration announced?", answer: "TurboFlow and Chainlink published their official X posts on June 11, 2026." },
          { question: "Which markets were named in the announcement?", answer: "Chainlink's official post named XAU, BTC, and ETH." },
          { question: "Which Chainlink service did TurboFlow adopt?", answer: "The two official posts do not identify a specific Chainlink service, feed, or deployment configuration." },
          { question: "Did the announcement explicitly name TurboFlow Event Contracts?", answer: "No. Both posts use the term continuous prediction markets; neither post explicitly names Event Contracts." }
        ],
        riskNotice: "The announcement concerns infrastructure support and does not guarantee price accuracy, uninterrupted operation, execution quality, or trading outcomes. Event Contracts are short-duration products, and an incorrect direction can result in loss of the stake."
      },
      zh: {
        pageTitle: "TurboFlow 接入 Chainlink，支持 XAU、BTC 与 ETH 连续预测市场",
        pageDescription: "TurboFlow 与 Chainlink 宣布，TurboFlow 已接入 Chainlink，为 XAU、BTC 与 ETH 连续预测市场提供支持。",
        socialDescription: "TurboFlow 接入 Chainlink，支持覆盖 XAU、BTC 与 ETH 的连续预测市场。",
        twitterTitle: "TurboFlow 接入 Chainlink，支持 XAU、BTC 与 ETH 市场",
        category: "基础设施更新",
        breadcrumbCurrent: "Chainlink 接入",
        headline: "TurboFlow 接入 Chainlink，支持 XAU、BTC 与 ETH 连续预测市场",
        dek: "TurboFlow 与 Chainlink 宣布，TurboFlow 已接入 Chainlink，为 XAU、BTC 与 ETH 连续预测市场提供支持。双方官方公告确认了接入关系和覆盖市场，但没有点名具体 Chainlink 服务或部署配置。",
        summaryItems: [
          { title: "接入关系", text: "TurboFlow 采用 Chainlink。" },
          { title: "市场形式", text: "公告使用“连续预测市场”这一表述。" },
          { title: "覆盖市场", text: "XAU、BTC 与 ETH。" }
        ],
        bodyBlocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 6 月 11 日，" },
              { text: "TurboFlow 通过官方 X 账号表示", href: turboFlowChainlinkAnnouncementUrl },
              { text: "，借助 Chainlink，TurboFlow 正在支持面向全球散户参与的快速、准确、连续预测市场。" }
            ]
          },
          {
            type: "paragraph",
            segments: [
              { text: "随后，" },
              { text: "Chainlink 通过官方 X 账号确认", href: chainlinkAnnouncementUrl },
              { text: "，TurboFlow 已采用 Chainlink，为 XAU、BTC 与 ETH 推出新的连续预测市场。" }
            ]
          },
          { type: "callout", text: "双方官方公告确认 TurboFlow 采用 Chainlink，并将 XAU、BTC 与 ETH 列为本次公布的市场。" }
        ],
        faqs: [
          { question: "TurboFlow 与 Chainlink 公布了什么？", answer: "双方宣布 TurboFlow 已采用 Chainlink，为新的连续预测市场提供支持。" },
          { question: "Chainlink 接入于何时公布？", answer: "TurboFlow 与 Chainlink 均于 2026 年 6 月 11 日发布官方 X 公告。" },
          { question: "公告点名了哪些市场？", answer: "Chainlink 官方公告点名 XAU、BTC 与 ETH。" },
          { question: "TurboFlow 采用了哪一项 Chainlink 服务？", answer: "双方官方公告未说明具体 Chainlink 服务、Feed 或部署配置。" },
          { question: "公告是否直接点名 TurboFlow 事件合约？", answer: "没有。两则公告均使用“连续预测市场”这一表述，没有直接点名事件合约。" }
        ],
        riskNotice: "本次公告涉及基础设施支持，不构成价格准确性、系统持续运行、成交质量或交易结果的保证。事件合约属于短周期产品，方向判断错误可能导致投入金额损失。"
      }
    }
  },
  {
    slug: "turboflow-susquehanna-crypto-liquidity-collaboration",
    format: "source-republication",
    relatedSlugs: [
      "turboflow-chainlink-price-infrastructure",
      "turboflow-raises-6m-seed-round",
      "why-pantera-invested-in-turboflow"
    ],
    publishedAt: "2026-05-13T09:01:36.212Z",
    modifiedAt: "2026-08-17",
    primarySource: susquehannaPartnershipUrl,
    sourceDocument: {
      title: "TurboFlow Partners with Susquehanna Crypto to Bring Wall Street-Grade Liquidity Onchain",
      platform: "TurboFlow",
      language: "en",
      rightsMode: "verbatim-republication",
      includesAboutTurboFlow: true,
      bodyIntegrity: {
        en: "c1a0dc574550b7984e6204a37575e3c4521e62b2adf1983df18c47a45aed45a6",
        zh: "c1a0dc574550b7984e6204a37575e3c4521e62b2adf1983df18c47a45aed45a6"
      }
    },
    sources: [
      {
        url: susquehannaPartnershipUrl,
        label: {
          en: "TurboFlow: Partnership with Susquehanna Crypto",
          zh: "TurboFlow：与 Susquehanna Crypto 达成合作"
        }
      },
      {
        url: telegramXUrl,
        label: {
          en: "Telegram on X",
          zh: "Telegram 的 X 账号"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Partners with Susquehanna Crypto to Bring Wall Street-Grade Liquidity Onchain",
        pageDescription: "Susquehanna Crypto's support strengthens TurboFlow's liquidity infrastructure and helps power more dynamic, market-driven trading experiences across the platform.",
        socialDescription: "TurboFlow's partnership announcement with Susquehanna Crypto, followed by five source-based questions and answers.",
        twitterTitle: "TurboFlow Partners with Susquehanna Crypto",
        category: "Strategic Partnership",
        breadcrumbCurrent: "Susquehanna Crypto Collaboration",
        headline: "TurboFlow Partners with Susquehanna Crypto to Bring Wall Street-Grade Liquidity Onchain",
        dek: "Susquehanna Crypto’s support strengthens TurboFlow’s liquidity infrastructure and helps power more dynamic, market-driven trading experiences across the platform.",
        bodyBlocks: susquehannaPartnershipBody,
        faqs: [
          { question: "What did TurboFlow announce with Susquehanna Crypto?", answer: "TurboFlow announced a strategic partnership in which Susquehanna Crypto would support TurboFlow's product lines as an on-chain liquidity provider." },
          { question: "What role will Susquehanna Crypto play?", answer: "TurboFlow said Susquehanna Crypto would support liquidity infrastructure and market-making capabilities while contributing experience in market structure, price discovery, and risk management." },
          { question: "What does the announcement say about Event Contracts?", answer: "The announcement says Event Contracts had cycles as short as 30 seconds and were moving from fixed odds toward dynamic odds informed by market conditions, liquidity, demand, volatility, and risk exposure." },
          { question: "What future plans did TurboFlow describe?", answer: "TurboFlow said it planned to add more institutional market makers, expand Event Contracts toward assets such as oil and gold, introduce prediction-style products and a Telegram Mini App, and deepen liquidity for perpetual contracts." },
          { question: "How does the announcement describe Susquehanna Crypto?", answer: "The announcement describes Susquehanna Crypto as a proprietary digital-asset trading firm headquartered in Nassau, with business lines spanning derivatives, on-chain strategies, early-stage investments, and token market making." }
        ]
      },
      zh: {
        pageTitle: "TurboFlow 与 Susquehanna Crypto 达成合作，将华尔街级流动性带到链上",
        pageDescription: "Susquehanna Crypto 的支持将强化 TurboFlow 的流动性基础设施，并为平台更动态、更由市场驱动的交易体验提供支持。",
        socialDescription: "TurboFlow 与 Susquehanna Crypto 合作公告原文及五个基于原文的常见问题。",
        twitterTitle: "TurboFlow 与 Susquehanna Crypto 达成合作",
        category: "战略合作",
        breadcrumbCurrent: "Susquehanna Crypto 合作",
        headline: "TurboFlow 与 Susquehanna Crypto 达成合作，将华尔街级流动性带到链上",
        dek: "Susquehanna Crypto 的支持将强化 TurboFlow 的流动性基础设施，并为平台更动态、更由市场驱动的交易体验提供支持。",
        bodyBlocks: susquehannaPartnershipBody,
        faqs: [
          { question: "TurboFlow 与 Susquehanna Crypto 公布了什么合作？", answer: "TurboFlow 宣布与 Susquehanna Crypto 达成战略合作；根据公告，Susquehanna Crypto 将作为链上流动性提供方，为 TurboFlow 产品线提供支持。" },
          { question: "Susquehanna Crypto 将承担什么角色？", answer: "TurboFlow 表示，Susquehanna Crypto 将支持流动性基础设施与做市能力，并带来市场结构、价格发现和风险管理方面的经验。" },
          { question: "公告如何描述事件合约的变化？", answer: "公告称，事件合约周期短至 30 秒，并正从固定赔率转向可参考市场状态、流动性、需求、波动率与风险敞口调整的动态赔率。" },
          { question: "TurboFlow 公布了哪些后续计划？", answer: "TurboFlow 表示，计划引入更多机构做市商，将事件合约逐步扩展到原油、黄金等资产，推出预测类产品与 Telegram Mini App，并为永续合约增加更深的流动性支持。" },
          { question: "公告如何介绍 Susquehanna Crypto？", answer: "公告将 Susquehanna Crypto 描述为总部位于拿骚的自营数字资产交易机构，业务覆盖数字资产衍生品、链上策略、早期投资与代币做市。" }
        ]
      }
    }
  }
];
