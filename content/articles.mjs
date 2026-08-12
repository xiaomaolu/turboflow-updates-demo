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
  productionOrigin: "https://www.tf.xyz",
  updatesPath: "/updates",
  homeUrl: "https://www.tf.xyz/",
  appUrl: "https://app.tf.xyz/",
  sitemapUrl: "https://www.tf.xyz/sitemap-updates.xml",
  organizationId: "https://www.tf.xyz/#organization",
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
      publishedPrefix: "Published",
      listDatePrefix: "Published",
      updatedPrefix: "Updated",
      bylinePrefix: "By",
      sourceContentTitle: "Source content",
      sourceContentNote: "This section preserves the source's facts, attribution, and narrative order. It is a faithful editorial adaptation, not a verbatim reproduction.",
      summaryTitle: "Summary",
      faqTitle: "Frequently asked questions",
      sourcePrefix: "Source:",
      sourcesTitle: "Sources",
      relatedTitle: "Related updates",
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
      publishedPrefix: "发布于",
      listDatePrefix: "发布时间",
      updatedPrefix: "更新于",
      bylinePrefix: "作者：",
      sourceContentTitle: "来源正文",
      sourceContentNote: "以下正文依照所链接来源的事实、归因与叙述顺序忠实整理；英文来源为中文转述，并非逐字转载。",
      summaryTitle: "内容总结",
      faqTitle: "常见问题",
      sourcePrefix: "来源：",
      sourcesTitle: "来源",
      relatedTitle: "相关动态",
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
const chainCatcherPartnershipUrl = "https://www.chaincatcher.com/article/2264380";
const chainlinkAnnouncementUrl = "https://x.com/chainlink/status/2065132282780774419";
const turboFlowChainlinkAnnouncementUrl = "https://x.com/TurboFlow_xyz/status/2065131952802234386";

export const articles = [
  {
    slug: "turboflow-raises-6m-seed-round",
    relatedSlugs: [
      "why-pantera-invested-in-turboflow",
      "turboflow-chainlink-price-infrastructure",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-06-22T20:05:00-04:00",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: fundingAnnouncementUrl,
    sources: [
      {
        url: fundingAnnouncementUrl,
        platform: { en: "PR Newswire", zh: "PR Newswire" },
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
        sourceBlocks: [
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
        sourceBlocks: [
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
    slug: "why-pantera-invested-in-turboflow",
    relatedSlugs: [
      "turboflow-raises-6m-seed-round",
      "turboflow-chainlink-price-infrastructure",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-06-30T19:04:41-07:00",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: panteraUrl,
    sources: [
      {
        url: panteraUrl,
        platform: { en: "Pantera Capital", zh: "Pantera Capital" },
        label: {
          en: "Pantera Capital: Investing in TurboFlow",
          zh: "Pantera Capital：《Investing in TurboFlow》"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "Pantera Capital Publishes Investing in TurboFlow",
        pageDescription: "In its official Investing in TurboFlow article, Pantera Capital explained why it led TurboFlow's $6 million seed round.",
        socialDescription: "Pantera Capital's published investment view on TurboFlow, summarized with source attribution.",
        twitterTitle: "Pantera Capital Publishes Investing in TurboFlow",
        category: "Investor Perspective",
        breadcrumbCurrent: "Pantera Investment Thesis",
        headline: "Pantera Capital Publishes Investing in TurboFlow",
        dek: "In its official Investing in TurboFlow article, Pantera Capital said it led TurboFlow's $6 million seed round, citing the convergence of perpetual futures and prediction markets, demand for locally relevant products across APAC, and the team's market-infrastructure experience.",
        summaryItems: [
          { title: "Pantera leads the round", text: "Pantera Capital said it was leading TurboFlow's $6 million seed round." },
          { title: "Market thesis", text: "Pantera sees perpetual futures and prediction markets converging while APAC users require more locally relevant products." },
          { title: "Team and beta activity", text: "Pantera highlighted the team's market-infrastructure experience and reported 15,000+ registered users and more than $19 billion in six-month beta volume." }
        ],
        sourceBlocks: [
          { type: "heading", text: "Pantera leads TurboFlow's seed round" },
          {
            type: "paragraph",
            text: "Pantera Capital is leading TurboFlow's $6 million seed round. Pantera said the investment supports TurboFlow's work to bring institutional-grade perpetual-futures and prediction-market experiences to everyday traders across Asia."
          },
          { type: "heading", text: "Perpetual futures and prediction markets are converging" },
          {
            type: "paragraph",
            text: "Pantera believes perpetual futures and prediction markets are converging, particularly around near-term trading instruments. It pointed to the introduction of short-duration crypto markets, perpetual futures, and outcome markets across existing trading platforms as evidence of that direction."
          },
          {
            type: "paragraph",
            text: "Pantera also believes trading platforms need to meet users where they are. Its article says many existing products were built primarily for Western audiences, while users across APAC may care about different assets, events, and market experiences."
          },
          { type: "heading", text: "Enter TurboFlow" },
          {
            type: "paragraph",
            text: "Pantera describes TurboFlow as an on-chain trading platform that unifies perpetual futures and prediction markets in one venue. From one account and balance, users can take a leveraged view on an asset price or a position on a real-world event through the same consumer-facing interface."
          },
          {
            type: "paragraph",
            text: "Pantera highlighted entry sizes as low as $2, fast settlement for short-duration contracts, and institutional-grade liquidity, pricing, and risk management beneath a self-custodial application."
          },
          { type: "heading", text: "Beta activity and team" },
          {
            type: "paragraph",
            text: "Pantera reported that TurboFlow's six-month beta attracted more than 15,000 registered users and generated more than $19 billion in cumulative trading volume before a public launch."
          },
          {
            type: "paragraph",
            text: "Pantera also highlighted founder Tony He's experience as a co-founder and partner of Amber Group and his background in market making. The article says the wider team has experience building crypto exchanges and frontier-market products."
          },
          { type: "heading", text: "Pantera's thesis" },
          {
            type: "paragraph",
            text: "Pantera believes TurboFlow combines market-infrastructure experience with an understanding of what users across APAC want to trade. The firm said this combination could support TurboFlow's development as a next-generation trading platform for the region."
          }
        ],
        faqs: [
          { question: "What did Pantera Capital announce?", answer: "Pantera Capital announced that it was leading TurboFlow's $6 million seed round." },
          { question: "Why did Pantera invest in TurboFlow?", answer: "Pantera cited the convergence of perpetual futures and prediction markets, the need for locally relevant products across APAC, and the team's market-infrastructure experience." },
          { question: "How does Pantera describe TurboFlow?", answer: "Pantera describes TurboFlow as an on-chain platform that brings perpetual futures and prediction markets into one venue, account, balance, and consumer-facing interface." },
          { question: "What did Pantera say about the TurboFlow team?", answer: "Pantera highlighted founder Tony He's market-making background and his role as a co-founder and partner of Amber Group, together with the wider team's experience building crypto exchanges and frontier-market products." },
          { question: "What beta activity did Pantera report?", answer: "Pantera reported more than 15,000 registered users and over $19 billion in cumulative trading volume during a six-month beta before public launch." }
        ],
        riskNotice: "This article summarizes Pantera Capital's published investment thesis and does not constitute investment advice or independent verification of the investor's forecasts. Trading perpetual contracts and short-cycle event contracts involves substantial risk and may result in loss."
      },
      zh: {
        pageTitle: "Pantera Capital 发布《Investing in TurboFlow》投资文章",
        pageDescription: "Pantera Capital 在官方文章《Investing in TurboFlow》中解释其为何领投 TurboFlow 的 600 万美元种子轮融资。",
        socialDescription: "忠实摘要 Pantera Capital 公开发布的 TurboFlow 投资观点，并保留来源归因。",
        twitterTitle: "Pantera Capital 发布《Investing in TurboFlow》",
        category: "投资方观点",
        breadcrumbCurrent: "Pantera 投资逻辑",
        headline: "Pantera Capital 发布《Investing in TurboFlow》投资文章",
        dek: "Pantera Capital 在官方文章《Investing in TurboFlow》中表示，其领投了 TurboFlow 的 600 万美元种子轮融资。文章将投资判断归因于永续合约与预测市场的融合、亚太本地化需求，以及团队的市场基础设施经验。",
        summaryItems: [
          { title: "Pantera 领投", text: "Pantera Capital 表示，其领投了 TurboFlow 的 600 万美元种子轮融资。" },
          { title: "市场判断", text: "Pantera 认为永续合约与预测市场正在融合，同时亚太用户需要更贴近当地需求的产品。" },
          { title: "团队与测试期数据", text: "Pantera 强调了团队的市场基础设施经验，并披露测试期注册用户超过 1.5 万、累计交易量超过 190 亿美元。" }
        ],
        sourceBlocks: [
          { type: "heading", text: "Pantera 领投 TurboFlow 种子轮融资" },
          {
            type: "paragraph",
            text: "Pantera Capital 领投了 TurboFlow 的 600 万美元种子轮融资。Pantera 表示，这项投资将支持 TurboFlow 把专业级永续合约与预测市场体验带给亚洲的日常交易者。"
          },
          { type: "heading", text: "永续合约与预测市场正在融合" },
          {
            type: "paragraph",
            text: "Pantera 认为，永续合约与预测市场正在靠拢，短周期交易工具是这一趋势的重要表现。文章以现有交易平台推出短周期加密市场、永续合约与结果型市场为例，说明两类产品的发展方向。"
          },
          {
            type: "paragraph",
            text: "Pantera 同时认为，交易平台需要贴近当地用户。文章指出，许多现有产品主要面向西方用户，而亚太用户关注的资产、事件与市场体验可能有所不同。"
          },
          { type: "heading", text: "TurboFlow" },
          {
            type: "paragraph",
            text: "Pantera 将 TurboFlow 描述为一个在同一场所整合永续合约与预测市场的链上交易平台。用户可以通过同一账户、余额与消费级界面，对资产价格建立杠杆仓位，或围绕现实事件结果建立仓位。"
          },
          {
            type: "paragraph",
            text: "Pantera 还提到低至 2 美元的参与门槛、短周期合约的快速结算，以及自托管应用背后的专业级流动性、定价与风险管理系统。"
          },
          { type: "heading", text: "测试期数据与团队" },
          {
            type: "paragraph",
            text: "Pantera 披露，TurboFlow 在公开上线前的六个月测试期内获得超过 1.5 万名注册用户，累计交易量超过 190 亿美元。"
          },
          {
            type: "paragraph",
            text: "Pantera 还提到，创始人 Tony He 是 Amber Group 联合创始人及合伙人，拥有做市背景。文章表示，团队其他成员具备建设加密交易平台和新兴市场产品的经验。"
          },
          { type: "heading", text: "Pantera 的投资判断" },
          {
            type: "paragraph",
            text: "Pantera 认为，TurboFlow 同时具备市场基础设施经验与对亚太用户交易需求的理解。这一组合有望支持 TurboFlow 发展为面向该地区的新一代交易平台。"
          }
        ],
        faqs: [
          { question: "Pantera Capital 公布了什么投资事项？", answer: "Pantera Capital 表示，其领投了 TurboFlow 的 600 万美元种子轮融资。" },
          { question: "Pantera 为什么投资 TurboFlow？", answer: "Pantera 提到了永续合约与预测市场的融合、亚太市场对本地化产品的需求，以及团队的市场基础设施经验。" },
          { question: "Pantera 如何描述 TurboFlow？", answer: "Pantera 将 TurboFlow 描述为一个通过同一场所、账户、余额与消费级界面整合永续合约和预测市场的链上平台。" },
          { question: "Pantera 如何评价 TurboFlow 团队？", answer: "Pantera 提到创始人 Tony He 的做市背景及其 Amber Group 联合创始人和合伙人经历，并表示团队具备建设加密交易平台与新兴市场产品的经验。" },
          { question: "Pantera 披露了哪些测试期数据？", answer: "Pantera 披露，TurboFlow 在公开上线前的六个月测试期内获得超过 1.5 万名注册用户，累计交易量超过 190 亿美元。" }
        ],
        riskNotice: "本文总结 Pantera Capital 公开发布的投资观点，不构成投资建议，也不代表对其预测的独立验证。永续合约与短周期事件合约均具有较高风险，用户可能遭受损失。"
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
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: turboFlowChainlinkAnnouncementUrl,
    sources: [
      {
        url: turboFlowChainlinkAnnouncementUrl,
        platform: { en: "X", zh: "X" },
        label: {
          en: "TurboFlow official X announcement (June 11, 2026)",
          zh: "TurboFlow 官方 X 公告（2026 年 6 月 11 日）"
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
        sourceBlocks: [
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
        sourceBlocks: [
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
    relatedSlugs: [
      "turboflow-chainlink-price-infrastructure",
      "turboflow-raises-6m-seed-round",
      "why-pantera-invested-in-turboflow"
    ],
    publishedAt: "2026-05-13T10:00:00.000Z",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: chainCatcherPartnershipUrl,
    sources: [
      {
        url: chainCatcherPartnershipUrl,
        platform: { en: "ChainCatcher", zh: "ChainCatcher" },
        label: {
          en: "ChainCatcher-hosted TurboFlow collaboration release (project wording, May 13, 2026)",
          zh: "ChainCatcher 收录的 TurboFlow 合作通稿（项目方表述，2026 年 5 月 13 日）"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Announces Strategic Liquidity Collaboration with Susquehanna Crypto",
        pageDescription: "TurboFlow announced a strategic liquidity collaboration with Susquehanna Crypto focused on execution quality, liquidity depth, pricing efficiency, and market structure.",
        socialDescription: "TurboFlow's announcement of a strategic liquidity collaboration with Susquehanna Crypto.",
        twitterTitle: "TurboFlow and Susquehanna Crypto Liquidity Collaboration",
        category: "Liquidity Update",
        breadcrumbCurrent: "Susquehanna Crypto Collaboration",
        headline: "TurboFlow Announces Strategic Liquidity Collaboration with Susquehanna Crypto",
        dek: "TurboFlow announced a strategic liquidity collaboration with Susquehanna Crypto. According to TurboFlow's release, Susquehanna Crypto would provide on-chain liquidity and market-making support across the platform's product line, with a focus on liquidity depth, price discovery, and risk management.",
        summaryItems: [
          { title: "Relationship", text: "TurboFlow announced a strategic collaboration with Susquehanna Crypto." },
          { title: "Announced role", text: "TurboFlow said Susquehanna Crypto would provide on-chain liquidity and market-making support across its product line." },
          { title: "Named products", text: "The TurboFlow release named perpetual contracts and Event Contracts." }
        ],
        sourceBlocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On May 13, 2026, a " },
              { text: "TurboFlow project release hosted by ChainCatcher", href: chainCatcherPartnershipUrl },
              { text: " announced a strategic collaboration with Susquehanna Crypto. According to TurboFlow, Susquehanna Crypto would act as an on-chain liquidity provider for TurboFlow's product line and provide liquidity and market-making support." }
            ]
          },
          { type: "heading", text: "The role described by TurboFlow" },
          {
            type: "paragraph",
            text: "TurboFlow said Susquehanna Crypto would bring experience in professional trading, market structure, price discovery, and risk management. The release connected the collaboration with TurboFlow's focus on liquidity depth, efficient price discovery, market stability, and execution quality as the platform expanded its products."
          },
          { type: "heading", text: "Products named in the release" },
          {
            type: "paragraph",
            text: "TurboFlow's release named perpetual contracts and recently launched Event Contracts, whose cycles it said could be as short as 30 seconds. TurboFlow also said Event Contracts were moving from fixed odds toward a more dynamic, market-driven odds structure responsive to real-time market conditions, liquidity depth, directional demand, volatility, and risk exposure."
          },
          { type: "heading", text: "Plans stated by TurboFlow" },
          {
            type: "paragraph",
            text: "TurboFlow said it planned to add more institutional market makers and build a broader liquidity network. The release said Event Contracts were then focused mainly on BTC and ETH, with crude oil and gold among planned additions; it also described prediction products and a Telegram Mini App as forthcoming and said perpetual contracts would receive deeper institutional liquidity support."
          },
          { type: "callout", text: "All collaboration scope, product effects, and future plans above are attributed to TurboFlow's project-side release hosted by ChainCatcher." }
        ],
        faqs: [
          { question: "What did TurboFlow announce about Susquehanna Crypto?", answer: "TurboFlow announced a strategic collaboration with Susquehanna Crypto in a project-side release hosted by ChainCatcher on May 13, 2026." },
          { question: "What role did TurboFlow assign to Susquehanna Crypto?", answer: "TurboFlow said Susquehanna Crypto would act as an on-chain liquidity provider and provide liquidity and market-making support across TurboFlow's product line." },
          { question: "Which TurboFlow products did the release name?", answer: "The release named perpetual contracts and Event Contracts. It described Event Contract cycles as being as short as 30 seconds." },
          { question: "What did TurboFlow say would change about Event Contract odds?", answer: "TurboFlow said Event Contracts were moving from fixed odds toward a dynamic, market-driven structure responsive to market conditions, liquidity depth, directional demand, volatility, and risk exposure." },
          { question: "What future plans did TurboFlow describe in the release?", answer: "TurboFlow said it planned to add more institutional market makers, expand Event Contracts beyond BTC and ETH to markets including crude oil and gold, and introduce prediction products and a Telegram Mini App. These were plans stated in the May 2026 release, not confirmed completed launches." }
        ],
        riskNotice: "Liquidity and market-making support do not guarantee execution quality, eliminate slippage, ensure uninterrupted markets, or prevent losses. Event Contracts can lose the stake; Turbo Perps add leverage, funding, margin, and liquidation risk."
      },
      zh: {
        pageTitle: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作",
        pageDescription: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作，重点覆盖成交质量、流动性深度、定价效率与市场结构。",
        socialDescription: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作。",
        twitterTitle: "TurboFlow 与 Susquehanna Crypto 开展战略流动性合作",
        category: "流动性更新",
        breadcrumbCurrent: "Susquehanna Crypto 合作",
        headline: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作",
        dek: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作。根据 TurboFlow 通稿，Susquehanna Crypto 将为平台产品线提供链上流动性与做市支持，重点覆盖流动性深度、价格发现与风险管理。",
        summaryItems: [
          { title: "合作关系", text: "TurboFlow 宣布与 Susquehanna Crypto 开展战略合作。" },
          { title: "公告所述角色", text: "TurboFlow 表示，Susquehanna Crypto 将为其产品线提供链上流动性与做市支持。" },
          { title: "点名产品", text: "TurboFlow 通稿点名永续合约与事件合约。" }
        ],
        sourceBlocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 5 月 13 日，" },
              { text: "ChainCatcher 收录的一篇 TurboFlow 项目方通稿", href: chainCatcherPartnershipUrl },
              { text: "宣布 TurboFlow 与 Susquehanna Crypto 开展战略合作。TurboFlow 表示，Susquehanna Crypto 将作为链上流动性提供方，为 TurboFlow 产品线提供流动性与做市支持。" }
            ]
          },
          { type: "heading", text: "TurboFlow 所述合作角色" },
          {
            type: "paragraph",
            text: "TurboFlow 表示，Susquehanna Crypto 将带来专业交易、市场结构、价格发现与风险管理经验。随着平台扩展产品，通稿将这项合作与流动性深度、高效价格发现、市场稳定性和成交质量联系起来。"
          },
          { type: "heading", text: "通稿点名的产品" },
          {
            type: "paragraph",
            text: "TurboFlow 通稿点名永续合约与近期上线、周期短至 30 秒的事件合约。TurboFlow 还表示，事件合约正从固定赔率转向更动态、更具市场驱动特征的赔率结构，可随实时市场状态、流动性深度、方向性需求、波动率与风险敞口调整。"
          },
          { type: "heading", text: "TurboFlow 公布的后续计划" },
          {
            type: "paragraph",
            text: "TurboFlow 表示，计划引入更多机构做市商并构建更广泛的流动性网络。通稿称，当时事件合约主要围绕 BTC 与 ETH，后续计划增加原油与黄金等市场；预测类产品与 Telegram Mini App 被列为即将推出的方向，永续合约则计划获得更深的机构流动性支持。"
          },
          { type: "callout", text: "以上合作范围、产品作用与后续计划均来自 ChainCatcher 收录的 TurboFlow 项目方通稿。" }
        ],
        faqs: [
          { question: "TurboFlow 公布了与 Susquehanna Crypto 的什么合作？", answer: "TurboFlow 于 2026 年 5 月 13 日通过 ChainCatcher 收录的项目方通稿宣布与 Susquehanna Crypto 开展战略合作。" },
          { question: "TurboFlow 在通稿中如何描述 Susquehanna Crypto 的角色？", answer: "TurboFlow 表示，Susquehanna Crypto 将作为链上流动性提供方，为 TurboFlow 产品线提供流动性与做市支持。" },
          { question: "通稿点名了哪些 TurboFlow 产品？", answer: "通稿点名永续合约与事件合约，并将事件合约周期描述为短至 30 秒。" },
          { question: "TurboFlow 表示事件合约赔率将如何变化？", answer: "TurboFlow 表示，事件合约正从固定赔率转向动态、市场驱动的结构，可随市场状态、流动性深度、方向性需求、波动率与风险敞口调整。" },
          { question: "TurboFlow 在通稿中提出了哪些后续计划？", answer: "TurboFlow 表示，计划引入更多机构做市商，将事件合约从 BTC 与 ETH 扩展至原油、黄金等市场，并推出预测类产品与 Telegram Mini App。这些是 2026 年 5 月通稿中的规划，不代表已经完成上线。" }
        ],
        riskNotice: "流动性与做市支持不构成成交质量、零滑点、市场持续运行或避免损失的保证。事件合约可能损失投入金额；Turbo 永续合约还涉及杠杆、资金费、保证金与清算风险。"
      }
    }
  }
];
