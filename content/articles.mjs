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
      updatedPrefix: "Updated",
      bylinePrefix: "By",
      keyFacts: "Key facts",
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
            body: "Summaries and key-facts blocks expose entities, dates, and material details without forcing readers to infer them from prose."
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
      updatedPrefix: "更新于",
      bylinePrefix: "作者：",
      keyFacts: "核心信息",
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
            body: "摘要与核心信息模块直接呈现实体、日期和重要细节，减少读者与 AI 从长段文字中推断事实的成本。"
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
const theBlockFundingUrl = "https://www.theblock.co/news/deals/2026-06-22-turboflow-funding-crypto-pantera-capital-405706";
const turboFlowLinkedInUrl = "https://www.linkedin.com/pulse/turboflow-partners-susquehanna-crypto-bring-wall-street-grade-hcdhc";
const chainCatcherPartnershipUrl = "https://www.chaincatcher.com/article/2264380";
const susquehannaCryptoUrl = "https://www.susquehannacrypto.com/";
const susquehannaTradingUrl = "https://sig.com/what-we-do/quantitative-trading/";
const susquehannaPredictionsUrl = "https://sig.com/predictions/";
const chainlinkAnnouncementUrl = "https://x.com/chainlink/status/2065132282780774419";
const turboFlowChainlinkAnnouncementUrl = "https://x.com/TurboFlow_xyz/status/2065131952802234386";
const chainlinkEcosystemUrl = "https://www.chainlinkecosystem.com/ecosystem/turboflow";
const eventContractsDocsUrl = "https://turboflow.gitbook.io/whitepaper/turboflow/products/event-contracts";
const turboPerpsDocsUrl = "https://turboflow.gitbook.io/whitepaper/turboflow/products/turbo-perps";

export const articles = [
  {
    slug: "turboflow-raises-6m-seed-round",
    relatedSlugs: [
      "why-pantera-invested-in-turboflow",
      "turboflow-chainlink-price-infrastructure",
      "turboflow-susquehanna-crypto-liquidity-collaboration"
    ],
    publishedAt: "2026-08-12",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    sources: [
      {
        url: fundingAnnouncementUrl,
        label: {
          en: "TurboFlow funding announcement on PR Newswire",
          zh: "PR Newswire：TurboFlow 融资公告"
        }
      },
      {
        url: panteraUrl,
        label: {
          en: "Pantera Capital: Investing in TurboFlow",
          zh: "Pantera Capital：《Investing in TurboFlow》投资观点"
        }
      },
      {
        url: theBlockFundingUrl,
        label: {
          en: "Independent coverage from The Block",
          zh: "The Block：独立媒体报道"
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
        dek: "Susquehanna Crypto and Digital Currency Group also participated in the round, supporting TurboFlow as it expands product development, liquidity infrastructure, and access for everyday traders.",
        facts: [
          { label: "Funding", value: "$6 million" },
          { label: "Round", value: "Seed" },
          { label: "Lead investor", value: "Pantera Capital" },
          { label: "Participants", value: "Susquehanna Crypto and Digital Currency Group" },
          { label: "Funding announcement", value: "June 22, 2026 (ET)" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow has closed a $6 million seed funding round led by " },
              { text: "Pantera Capital", href: panteraUrl },
              { text: ", with participation from Susquehanna Crypto and Digital Currency Group." }
            ]
          },
          {
            type: "paragraph",
            text: "The capital will support product development, stronger liquidity infrastructure, and accelerated global user growth."
          },
          { type: "heading", text: "Building market infrastructure for everyday traders" },
          {
            type: "paragraph",
            text: "TurboFlow is an on-chain trading ecosystem at the intersection of prediction markets and perpetual contracts. The platform is designed to make advanced market participation simpler, more transparent, and more accessible to everyday users."
          },
          {
            type: "paragraph",
            text: "Pantera's investment thesis highlights the growing convergence between prediction markets and perpetual futures, along with the opportunity to bring professional market infrastructure to a broader audience across Asia."
          },
          { type: "callout", text: "Trading, made simple. Everyone gets a seat at TurboFlow." },
          { type: "heading", text: "What the funding supports" },
          {
            type: "paragraph",
            text: "TurboFlow identified three uses for the funding: expanding product development, strengthening liquidity infrastructure, and accelerating global user growth."
          },
          {
            type: "paragraph",
            text: "The announcement did not disclose how the capital would be allocated among those priorities or set a timetable for completing them. The funding supports the work; it does not by itself establish future product availability or performance."
          },
          { type: "heading", text: "What The Block reported about the round" },
          {
            type: "paragraph",
            segments: [
              { text: "Founder Tony He told " },
              { text: "The Block", href: theBlockFundingUrl },
              { text: " that the round had closed in March 2026, included only Pantera Capital, Susquehanna Crypto, and Digital Currency Group, and was structured as a SAFE with token warrants. He did not disclose the valuation." }
            ]
          },
          {
            type: "paragraph",
            text: "Those structure and timing details come from The Block's founder interview, not from the TurboFlow funding release. The confirmed public round total is $6 million; none of the cited sources discloses an individual investor's check size."
          }
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
        dek: "Susquehanna Crypto 与 Digital Currency Group 共同参投。本轮融资将支持 TurboFlow 持续推进产品研发、流动性基础设施建设，并让更多日常交易者便捷地参与市场。",
        facts: [
          { label: "融资金额", value: "600 万美元" },
          { label: "融资轮次", value: "种子轮" },
          { label: "领投方", value: "Pantera Capital" },
          { label: "参投方", value: "Susquehanna Crypto 与 Digital Currency Group" },
          { label: "融资公告时间", value: "2026 年 6 月 22 日（美东时间；北京时间 6 月 23 日）" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "TurboFlow 已完成 600 万美元种子轮融资，由 " },
              { text: "Pantera Capital", href: panteraUrl },
              { text: " 领投，Susquehanna Crypto 与 Digital Currency Group 共同参投。" }
            ]
          },
          {
            type: "paragraph",
            text: "本轮资金将用于推进产品研发、强化流动性基础设施，并加快全球用户增长。"
          },
          { type: "heading", text: "为日常交易者构建市场基础设施" },
          {
            type: "paragraph",
            text: "TurboFlow 是一个处于预测市场与永续合约交汇处的链上交易生态。平台希望通过更清晰的产品体验，让专业市场参与变得更简单、更透明，也更容易被日常用户使用。"
          },
          {
            type: "paragraph",
            text: "Pantera Capital 的投资观点强调了预测市场与永续合约日益融合的趋势，也看到了将专业级市场基础设施带给亚洲更广泛用户群体的机会。"
          },
          { type: "callout", text: "让交易更简单。每个人都能在 TurboFlow 获得参与市场的机会。" },
          { type: "heading", text: "本轮融资将支持什么" },
          {
            type: "paragraph",
            text: "TurboFlow 公告列出三项资金用途：推进产品研发、强化流动性基础设施，以及加快全球用户增长。"
          },
          {
            type: "paragraph",
            text: "公告没有披露三项用途之间的资金分配，也没有给出完成时间表。本轮融资为相关工作提供支持，但融资本身不能证明未来产品的可用范围或性能。"
          },
          { type: "heading", text: "The Block 披露了哪些交易细节" },
          {
            type: "paragraph",
            segments: [
              { text: "创始人 Tony He 向 " },
              { text: "The Block", href: theBlockFundingUrl },
              { text: " 表示，本轮融资已于 2026 年 3 月完成，仅包括 Pantera Capital、Susquehanna Crypto 与 Digital Currency Group 三家投资方，交易结构为附带代币认股权证的 SAFE；估值未公开。" }
            ]
          },
          {
            type: "paragraph",
            text: "上述完成时间与交易结构来自 The Block 的创始人采访，并非 TurboFlow 融资通稿。公开确认的整轮融资总额为 600 万美元，现有来源均未披露任一投资方的单独出资金额。"
          }
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
    publishedAt: "2026-08-12",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    sources: [
      {
        url: panteraUrl,
        label: {
          en: "Pantera Capital: Investing in TurboFlow",
          zh: "Pantera Capital：《Investing in TurboFlow》投资观点"
        }
      },
      {
        url: fundingAnnouncementUrl,
        label: {
          en: "TurboFlow funding announcement on PR Newswire",
          zh: "PR Newswire：TurboFlow 融资公告"
        }
      },
      {
        url: theBlockFundingUrl,
        label: {
          en: "The Block: TurboFlow seed-round reporting and founder interview",
          zh: "The Block：TurboFlow 融资报道与创始人采访"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "Why Pantera Capital Invested in TurboFlow: Five Signals in Its Published Thesis",
        pageDescription: "Pantera Capital's Investing in TurboFlow article explains its thesis around product convergence, APAC localization, market infrastructure, the team, and early traction.",
        socialDescription: "A source-led reading of Pantera Capital's published investment thesis on TurboFlow.",
        twitterTitle: "Why Pantera Capital Invested in TurboFlow",
        category: "Investor Perspective",
        breadcrumbCurrent: "Pantera Investment Thesis",
        headline: "Why Pantera Capital Invested in TurboFlow: Five Signals in Its Published Thesis",
        dek: "Pantera Capital's official article, Investing in TurboFlow, sets out a thesis built around the convergence of perpetual futures and prediction markets, an APAC localization gap, and a team with market-making experience.",
        metaNote: "Source analysis",
        facts: [
          { label: "Official article", value: "Investing in TurboFlow" },
          { label: "Publisher", value: "Pantera Capital" },
          { label: "Author", value: "Jay Yu" },
          { label: "Published", value: "June 30, 2026" },
          { label: "Financing context", value: "$6 million seed round led by Pantera Capital" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On June 30, 2026, Pantera Capital published " },
              { text: "Investing in TurboFlow", href: panteraUrl },
              { text: ", a dedicated article by Jay Yu explaining why the firm led TurboFlow's $6 million seed round." }
            ]
          },
          {
            type: "paragraph",
            text: "The article is a primary source for Pantera's own investment reasoning. Its market forecasts, product judgments, and traction figures should therefore be read as the investor's thesis and project-reported information, rather than as an independent audit of TurboFlow."
          },
          { type: "heading", text: "1. Perpetual futures and prediction markets are converging" },
          {
            type: "paragraph",
            text: "Pantera begins with a category thesis. It argues that perpetual futures and prediction markets are evolving toward one another, particularly around near-term trading instruments. The article points to short-duration crypto markets on prediction platforms and to outcome-market initiatives from perpetuals venues as evidence of that direction."
          },
          {
            type: "paragraph",
            text: "That framing places TurboFlow at the intersection of two product categories: continuous price exposure through perpetual futures and positions on real-world event outcomes through prediction markets. The investment case depends on that intersection becoming a durable market category."
          },
          { type: "heading", text: "2. APAC needs products built around local users" },
          {
            type: "paragraph",
            text: "Pantera's second signal is regional. Its article says many leading prediction-market and perpetuals products were built primarily for Western audiences, while traders across Asia may care about different assets, events, cultural references, and user experiences. Pantera sees localization as a product requirement, not simply a translation task."
          },
          {
            type: "paragraph",
            text: "Under this thesis, TurboFlow's opportunity comes from staying close to APAC users and designing products around the assets, events, and market experiences they care about. Pantera presents that regional fit as a core part of the company's potential."
          },
          { type: "heading", text: "3. Consumer simplicity sits on top of market infrastructure" },
          {
            type: "paragraph",
            text: "Pantera describes TurboFlow as one venue where a user can access perpetual futures and prediction markets through a consumer-facing interface. It highlights small entry sizes, fast settlement for short-duration contracts, and liquidity, pricing, and risk management beneath the interface."
          },
          {
            type: "paragraph",
            text: "The important distinction is between interface simplicity and market simplicity. A short user flow still depends on pricing, execution, liquidity, settlement rules, and risk controls. Pantera's thesis treats those underlying systems as part of the product, not as invisible operational details."
          },
          { type: "heading", text: "4. The team matches the market-structure problem" },
          {
            type: "paragraph",
            text: "Pantera also emphasizes founder-market fit. The article highlights founder Tony He's background in market making and the team's experience building crypto exchanges and frontier markets. In Pantera's view, that experience is relevant because TurboFlow is attempting to translate institutional pricing, liquidity, execution, and risk systems into a retail product."
          },
          { type: "heading", text: "5. Early beta activity is a signal, with clear attribution" },
          {
            type: "paragraph",
            text: "Pantera's June 30 article reported more than 15,000 registered users and over $19 billion in cumulative volume during a six-month beta. TurboFlow's June 22 financing release separately listed 14.54k+ total users and $19.15 billion in volume, indicating different snapshots or definitions. These project- and investor-reported figures are not independently audited or presented as current metrics."
          },
          { type: "callout", text: "Pantera's published thesis connects product convergence, APAC localization, market infrastructure, team experience, and early adoption." },
          { type: "heading", text: "What the investment article establishes" },
          {
            type: "paragraph",
            text: "The article confirms Pantera's conviction and explains the reasoning behind its role as lead investor. It does not certify that every product parameter, performance figure, regulatory pathway, or safety property has been independently verified. Those questions require their own current product documents and evidence."
          },
          {
            type: "paragraph",
            text: "The financing fact remains precise: TurboFlow announced a $6 million seed round led by Pantera Capital, with Susquehanna Crypto and Digital Currency Group participating. The round total should not be read as Pantera's individual check size."
          }
        ],
        riskNotice: "This article summarizes Pantera Capital's published investment thesis and does not constitute investment advice or independent verification of the investor's forecasts. Trading perpetual contracts and short-cycle event contracts involves substantial risk and may result in loss."
      },
      zh: {
        pageTitle: "Pantera Capital 为什么投资 TurboFlow？官方投资文章释放的五个信号",
        pageDescription: "Pantera Capital 在《Investing in TurboFlow》中从品类融合、亚太本地化、市场基础设施、团队与早期采用五个方面解释其投资判断。",
        socialDescription: "基于 Pantera Capital 官方文章，拆解其投资 TurboFlow 的核心逻辑与证据边界。",
        twitterTitle: "Pantera Capital 为什么投资 TurboFlow",
        category: "投资方观点",
        breadcrumbCurrent: "Pantera 投资逻辑",
        headline: "Pantera Capital 为什么投资 TurboFlow？官方投资文章释放的五个信号",
        dek: "Pantera Capital 在官方文章《Investing in TurboFlow》中系统说明了投资判断：永续合约与预测市场正在靠拢，亚太用户需要本地化产品，团队具备做市与市场基础设施经验。",
        metaNote: "来源分析",
        facts: [
          { label: "官方文章", value: "Investing in TurboFlow" },
          { label: "发布方", value: "Pantera Capital" },
          { label: "作者", value: "Jay Yu" },
          { label: "发布日期", value: "2026 年 6 月 30 日" },
          { label: "融资背景", value: "Pantera Capital 领投 600 万美元种子轮" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 6 月 30 日，Pantera Capital 发布 Jay Yu 撰写的官方文章 " },
              { text: "《Investing in TurboFlow》", href: panteraUrl },
              { text: "，专门解释该机构为何领投 TurboFlow 的 600 万美元种子轮融资。" }
            ]
          },
          {
            type: "paragraph",
            text: "这篇文章是一份理解 Pantera 投资逻辑的一手资料。文中的市场预测、产品判断与早期数据体现投资方观点及项目披露信息，不等同于对 TurboFlow 的独立审计或第三方性能验证。"
          },
          { type: "heading", text: "一、永续合约与预测市场正在靠拢" },
          {
            type: "paragraph",
            text: "Pantera 首先提出品类判断：永续合约与预测市场正在共同走向更短周期、更事件驱动的交易形态。文章以预测平台上的短周期加密市场，以及永续合约平台开始探索结果型市场为例，说明两类产品的边界正在变化。"
          },
          {
            type: "paragraph",
            text: "TurboFlow 因此被放在两个产品方向的交汇处：永续合约用于持续表达价格观点，预测市场用于围绕现实事件结果表达判断。Pantera 的投资判断建立在这一交汇点能够发展成长期市场类别的预期之上。"
          },
          { type: "heading", text: "二、亚太市场需要围绕本地用户设计产品" },
          {
            type: "paragraph",
            text: "Pantera 的第二个判断来自区域差异。文章认为，多数领先预测市场与永续合约产品主要围绕西方用户建立，而亚洲交易者关注的资产、事件、文化语境和使用习惯并不完全相同。本地化在这里涉及市场供给、产品体验与分发方式，范围超过界面翻译。"
          },
          {
            type: "paragraph",
            text: "按照这一逻辑，TurboFlow 的机会来自贴近亚太用户，围绕他们关注的资产、事件与市场体验设计产品。Pantera 将这种区域匹配视为公司潜力的重要来源。"
          },
          { type: "heading", text: "三、消费级体验需要市场基础设施支撑" },
          {
            type: "paragraph",
            text: "Pantera 将 TurboFlow 描述为一个能够通过消费级界面接入永续合约与预测市场的平台，并提到较低参与门槛、短周期合约的快速结算，以及界面背后的流动性、定价与风险管理能力。"
          },
          {
            type: "paragraph",
            text: "简洁界面缩短了操作路径，底层市场结构仍然需要处理价格、执行、流动性、结算规则和风险控制。Pantera 的文章把这些系统能力纳入产品本身，而不是把它们当作与用户体验无关的后台环节。"
          },
          { type: "heading", text: "四、团队经验与市场结构问题相匹配" },
          {
            type: "paragraph",
            text: "Pantera 同时强调创始人与市场的匹配度。文章提到创始人 Tony He 的做市背景，以及团队在加密交易平台和新兴市场产品方面的经验。Pantera 认为，这些经历有助于团队把机构市场中的定价、流动性、执行与风险系统转化为面向散户的产品。"
          },
          { type: "heading", text: "五、早期采用数据需要保留来源和日期" },
          {
            type: "paragraph",
            text: "Pantera 在 6 月 30 日文章中披露，TurboFlow 六个月测试期内注册用户超过 1.5 万，累计交易量超过 190 亿美元；TurboFlow 6 月 22 日融资通稿则列出 1.454 万以上总用户与 191.5 亿美元交易量，说明两份材料可能采用了不同快照或定义。这些数据来自项目方与投资方披露，未经本文独立审计，也不作为当前数据。"
          },
          { type: "callout", text: "Pantera 的投资逻辑由五个部分组成：品类融合、亚太本地化、市场基础设施、团队经验与早期采用。" },
          { type: "heading", text: "这篇投资文章能够说明什么" },
          {
            type: "paragraph",
            text: "文章确认了 Pantera 的投资判断，也解释了其作为领投方的理由。具体产品参数、性能数据、监管路径与安全属性仍需分别参考当前产品文档和对应证据，机构投资本身无法替代这些核验。"
          },
          {
            type: "paragraph",
            text: "融资事实应保持准确：TurboFlow 完成的是 600 万美元种子轮，Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。600 万美元是整轮总额，不代表 Pantera 单家的出资金额。"
          }
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
    publishedAt: "2026-08-12",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    sources: [
      {
        url: chainlinkAnnouncementUrl,
        label: {
          en: "Chainlink official announcement on X",
          zh: "Chainlink 官方 X 公告"
        }
      },
      {
        url: turboFlowChainlinkAnnouncementUrl,
        label: {
          en: "TurboFlow official Chainlink announcement on X",
          zh: "TurboFlow 官方 Chainlink 接入公告"
        }
      },
      {
        url: eventContractsDocsUrl,
        label: {
          en: "TurboFlow documentation: Event Contracts",
          zh: "TurboFlow 文档：事件合约"
        }
      },
      {
        url: chainlinkEcosystemUrl,
        label: {
          en: "Community-run Chainlink Ecosystem: TurboFlow listing",
          zh: "社区运营的 Chainlink Ecosystem：TurboFlow 条目"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Adopts Chainlink: Why Short-Cycle Event Contracts Depend on Price Infrastructure",
        pageDescription: "TurboFlow adopted Chainlink to support continuous prediction markets for XAU, BTC, and ETH. This update explains the confirmed scope and the infrastructure questions that remain open.",
        socialDescription: "The confirmed Chainlink scope, its connection to TurboFlow Event Contracts, and the limits of the public announcement.",
        twitterTitle: "TurboFlow Adopts Chainlink for XAU, BTC, and ETH Markets",
        category: "Infrastructure Update",
        breadcrumbCurrent: "Chainlink Integration",
        headline: "TurboFlow Adopts Chainlink: Why Short-Cycle Event Contracts Depend on Price Infrastructure",
        dek: "Chainlink and TurboFlow announced support for new continuous prediction markets covering gold, Bitcoin, and Ethereum. The cited official announcements do not identify the specific Chainlink service, feed identifiers, or deployment details.",
        metaNote: "Price infrastructure",
        facts: [
          { label: "Announced", value: "June 11, 2026" },
          { label: "Confirmed scope", value: "Continuous prediction markets" },
          { label: "Named markets", value: "XAU, BTC, and ETH" },
          { label: "Documented product mapping", value: "Event Contracts; not named in the announcement" },
          { label: "Shortest documented window", value: "30 seconds" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On June 11, 2026, " },
              { text: "Chainlink", href: chainlinkAnnouncementUrl },
              { text: " and " },
              { text: "TurboFlow", href: turboFlowChainlinkAnnouncementUrl },
              { text: " announced that TurboFlow had adopted Chainlink to support new continuous prediction markets for XAU, BTC, and ETH." }
            ]
          },
          {
            type: "paragraph",
            text: "The announcement establishes the integration and names the three markets. It does not identify the specific Chainlink product, feed IDs, deployment chain, data-source configuration, or verification contracts used by TurboFlow. This update keeps those undisclosed details outside the factual claims."
          },
          { type: "heading", text: "How the announcement maps to TurboFlow Event Contracts" },
          {
            type: "paragraph",
            text: "Chainlink's announcement uses the phrase continuous prediction markets. TurboFlow's current product documentation, checked on August 12, 2026, describes Event Contracts as fixed-window Higher or Lower trades. A user chooses a market, duration, stake, and direction; the contract then settles automatically when the timer ends."
          },
          {
            type: "paragraph",
            text: "The same documentation lists BTC, ETH, and XAU and starts contract windows at 30 seconds. It explains that the outcome depends on comparing an entry price with an exit price at expiry. This article preserves the source language: continuous prediction markets for the announcement and Event Contracts for the documented TurboFlow product."
          },
          { type: "heading", text: "Why a 30-second window raises the bar for reference prices" },
          {
            type: "paragraph",
            text: "Shorter windows make timing more consequential. When a contract can settle after 30 seconds, the moment an entry price is recorded, the moment an exit price is obtained, and the consistency of those observations can directly determine the result. This is an analytical consequence of the product design, not a claim that any data system can remove market uncertainty."
          },
          {
            type: "paragraph",
            text: "Price infrastructure therefore needs to support timely and consistently defined observations. Users also need rules that explain which price is authoritative, how equal prices are handled, and what happens during a data interruption or system exception."
          },
          { type: "callout", text: "In a short-cycle market, reference-price timing is part of the contract outcome, not a background display detail." },
          { type: "heading", text: "Price data is one layer of settlement" },
          {
            type: "paragraph",
            text: "A market data or oracle layer supplies information used by an application. The contract's duration, entry-price rule, exit-price rule, tie treatment, order acceptance, and balance update remain separate parts of the end-to-end settlement process. Liquidity and dynamic return pricing are separate market-structure questions again."
          },
          {
            type: "paragraph",
            text: "That separation matters when evaluating the integration. Chainlink support does not by itself establish the full settlement workflow, execution quality, market depth, or absence of technical risk. Each layer requires its own documentation and observable records."
          },
          { type: "heading", text: "What the public announcement leaves open" },
          {
            type: "paragraph",
            text: "Neither official announcement names Chainlink Data Streams, Chainlink Data Feeds, a particular stream or feed identifier, a deployment chain, a data aggregation threshold, or an on-chain verifier contract. Those details should not be inferred from Chainlink's general documentation or from the networks TurboFlow supports for other functions."
          },
          {
            type: "paragraph",
            text: "Future technical documentation can close this gap by mapping each supported market to its reference-data source, timestamp policy, verification path, and exception handling. Until then, the safe conclusion is specific: TurboFlow adopted Chainlink for continuous prediction markets covering XAU, BTC, and ETH."
          },
          { type: "heading", text: "What users can verify in an Event Contract" },
          {
            type: "paragraph",
            text: "Before confirming a contract, users can check the market, duration, stake, direction, displayed return rate, and entry-price definition. After expiry, the order record should make the exit price, result, and balance change understandable. These checks assess the full user-visible flow without assuming that one infrastructure provider guarantees every outcome."
          }
        ],
        riskNotice: "Event Contracts are short-duration, fixed-window products. A wrong direction can result in loss of the stake, and short windows make entry timing and rapid price changes especially important. Chainlink integration does not guarantee profits, uninterrupted operation, or protection from loss."
      },
      zh: {
        pageTitle: "TurboFlow 接入 Chainlink：短周期事件合约为何更依赖价格基础设施",
        pageDescription: "TurboFlow 接入 Chainlink，为黄金、比特币和以太坊连续预测市场提供支持。本文说明已确认范围、事件合约机制与尚未披露的技术细节。",
        socialDescription: "拆解 TurboFlow 接入 Chainlink 的确认范围、事件合约关联与公开信息边界。",
        twitterTitle: "TurboFlow 接入 Chainlink，支持 XAU、BTC 与 ETH 市场",
        category: "基础设施更新",
        breadcrumbCurrent: "Chainlink 接入",
        headline: "TurboFlow 接入 Chainlink：短周期事件合约为何更依赖价格基础设施",
        dek: "Chainlink 与 TurboFlow 宣布为黄金、比特币和以太坊连续预测市场提供支持。所引双方官方公告未说明具体 Chainlink 服务、Feed 标识或部署细节。",
        metaNote: "价格基础设施",
        facts: [
          { label: "公布时间", value: "2026 年 6 月 11 日" },
          { label: "确认范围", value: "连续预测市场" },
          { label: "覆盖市场", value: "XAU、BTC 与 ETH" },
          { label: "文档对应产品", value: "事件合约；公告未直接点名" },
          { label: "文档所列最短期限", value: "30 秒" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 6 月 11 日，" },
              { text: "Chainlink", href: chainlinkAnnouncementUrl },
              { text: " 与 " },
              { text: "TurboFlow", href: turboFlowChainlinkAnnouncementUrl },
              { text: " 分别发布官方消息，确认 TurboFlow 接入 Chainlink，为 XAU、BTC 与 ETH 连续预测市场提供支持。" }
            ]
          },
          {
            type: "paragraph",
            text: "公告确认了接入关系与三个市场，没有披露具体采用哪一项 Chainlink 服务，也没有公布 Feed 标识、部署链、数据源配置或验证合约。本文不把这些未公开细节写成既定事实。"
          },
          { type: "heading", text: "官方公告如何对应 TurboFlow 事件合约" },
          {
            type: "paragraph",
            text: "Chainlink 公告使用“连续预测市场”这一表述。TurboFlow 当前产品文档在 2026 年 8 月 12 日核验时，将事件合约（Event Contracts）定义为固定时间窗口内的看涨或看跌交易：用户选择市场、期限、投入金额与方向，倒计时结束后自动结算。"
          },
          {
            type: "paragraph",
            text: "同一份文档列出 BTC、ETH 与 XAU，合约期限从 30 秒起，并说明结果取决于入场价和到期退出价的比较。本文按照来源分别使用两个术语：介绍公告时沿用“连续预测市场”，解释 TurboFlow 产品时使用“事件合约”。"
          },
          { type: "heading", text: "30 秒窗口为何提高了价格基础设施要求" },
          {
            type: "paragraph",
            text: "时间窗口缩短后，价格记录时点对结果的影响更加直接。一笔合约可以在 30 秒后结算，入场价何时记录、退出价何时取得、两次观察采用什么一致规则，都可能直接决定最终方向。这是产品结构带来的分析结论，不代表任何数据系统能够消除市场不确定性。"
          },
          {
            type: "paragraph",
            text: "价格基础设施因此需要支持及时、定义一致的价格观察。用户还需要清楚了解权威价格、平价处理，以及数据中断或系统异常时采用的规则。"
          },
          { type: "callout", text: "在短周期市场中，参考价格的记录时点属于合约结果的一部分。" },
          { type: "heading", text: "价格数据只是结算链路中的一层" },
          {
            type: "paragraph",
            text: "市场数据或预言机层向应用提供参考信息。合约期限、入场价规则、退出价规则、平价处理、订单接受和余额更新，分别属于完整结算流程的其他环节。流动性和动态回报定价又是独立的市场结构问题。"
          },
          {
            type: "paragraph",
            text: "评估这次接入时应保留这些边界。Chainlink 支持无法单独证明完整结算流程、成交质量、市场深度或技术系统不存在风险，每一层都需要对应文档与可观察记录。"
          },
          { type: "heading", text: "公开公告仍留下哪些技术问题" },
          {
            type: "paragraph",
            text: "双方官方公告都没有点名 Chainlink Data Streams、Chainlink Data Feeds、具体数据流或 Feed 标识、部署链、数据聚合阈值与链上验证合约。Chainlink 通用文档或 TurboFlow 其他功能所支持的网络，不能替代本次接入的具体说明。"
          },
          {
            type: "paragraph",
            text: "后续技术文档可以把每个市场对应到参考数据源、时间戳策略、验证路径和异常处理。在这些信息公布前，当前可核验结论保持明确：TurboFlow 已接入 Chainlink，支持 XAU、BTC 与 ETH 连续预测市场。"
          },
          { type: "heading", text: "用户可以如何复核一笔事件合约" },
          {
            type: "paragraph",
            text: "确认合约前，用户可以核对市场、期限、投入金额、方向、页面回报率与入场价定义；到期后，应通过订单记录理解退出价、结算结果和余额变化。这些检查覆盖用户可见的完整流程，也避免把单一基础设施提供方理解为所有结果的保证方。"
          }
        ],
        riskNotice: "事件合约属于短周期固定时间窗口产品。方向判断错误可能导致投入金额损失，较短期限会让入场时点与快速价格变化更加重要。Chainlink 接入不构成盈利、系统持续可用或避免损失的保证。"
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
    publishedAt: "2026-08-12",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    sources: [
      {
        url: turboFlowLinkedInUrl,
        label: {
          en: "TurboFlow official LinkedIn: strategic liquidity collaboration",
          zh: "TurboFlow 官方 LinkedIn：战略流动性合作"
        }
      },
      {
        url: chainCatcherPartnershipUrl,
        label: {
          en: "ChainCatcher-hosted TurboFlow collaboration release",
          zh: "ChainCatcher 收录的 TurboFlow 合作通稿（项目方表述）"
        }
      },
      {
        url: susquehannaCryptoUrl,
        label: {
          en: "Susquehanna Crypto official company profile",
          zh: "Susquehanna Crypto 官方公司介绍"
        }
      },
      {
        url: susquehannaTradingUrl,
        label: {
          en: "Susquehanna: quantitative trading and market-making background",
          zh: "Susquehanna：量化交易与做市业务介绍"
        }
      },
      {
        url: susquehannaPredictionsUrl,
        label: {
          en: "Susquehanna Predictions: prediction-market liquidity background",
          zh: "Susquehanna Predictions：预测市场流动性业务介绍"
        }
      },
      {
        url: eventContractsDocsUrl,
        label: {
          en: "TurboFlow documentation: Event Contracts",
          zh: "TurboFlow 文档：事件合约"
        }
      },
      {
        url: turboPerpsDocsUrl,
        label: {
          en: "TurboFlow documentation: Turbo Perps",
          zh: "TurboFlow 文档：Turbo 永续合约"
        }
      },
      {
        url: theBlockFundingUrl,
        label: {
          en: "The Block: TurboFlow seed-round reporting and founder interview",
          zh: "The Block：TurboFlow 融资报道与创始人采访"
        }
      }
    ],
    translations: {
      en: {
        pageTitle: "TurboFlow Announces Strategic Liquidity Collaboration with Susquehanna Crypto",
        pageDescription: "TurboFlow announced a strategic liquidity collaboration with Susquehanna Crypto focused on execution quality, liquidity depth, pricing efficiency, and market structure.",
        socialDescription: "What TurboFlow's Susquehanna Crypto collaboration means for liquidity, pricing, and short-cycle Event Contracts.",
        twitterTitle: "TurboFlow and Susquehanna Crypto Liquidity Collaboration",
        category: "Liquidity Update",
        breadcrumbCurrent: "Susquehanna Crypto Collaboration",
        headline: "TurboFlow Announces Strategic Liquidity Collaboration with Susquehanna Crypto",
        dek: "TurboFlow said Susquehanna Crypto would provide on-chain liquidity and market-making support across its product line. The collaboration targets execution quality, liquidity depth, pricing efficiency, and a more market-driven structure for Event Contracts.",
        metaNote: "Market structure",
        facts: [
          { label: "Announced", value: "May 13, 2026" },
          { label: "Relationship", value: "Strategic liquidity collaboration, as announced by TurboFlow" },
          { label: "Announced role", value: "On-chain liquidity and market-making support" },
          { label: "Product scope", value: "TurboFlow product line, according to the announcement" },
          { label: "Focus", value: "Liquidity depth, pricing efficiency, execution quality" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On May 13, 2026, TurboFlow announced a " },
              { text: "strategic liquidity collaboration", href: turboFlowLinkedInUrl },
              { text: " with Susquehanna Crypto. TurboFlow said the collaboration would bring on-chain liquidity and market-making support to its product line, alongside expertise in market structure, price discovery, and risk management." }
            ]
          },
          {
            type: "paragraph",
            text: "The scope in this update follows TurboFlow's announcement. Susquehanna Crypto's public website confirms its broader digital-asset trading and liquidity business, but no separate partner-side announcement detailing this specific TurboFlow collaboration was located during the August 12, 2026 source review."
          },
          { type: "heading", text: "The role TurboFlow announced" },
          {
            type: "paragraph",
            text: "TurboFlow described Susquehanna Crypto as an on-chain liquidity provider supporting the platform's product line. The announcement connects that role to three practical objectives: deeper available liquidity, more efficient price discovery, and stronger risk management behind the markets."
          },
          {
            type: "paragraph",
            text: "Susquehanna Crypto describes itself as a global proprietary digital-asset trading firm that provides liquidity through digital-asset derivatives, on-chain strategies, early-stage investments, and token market making. The broader Susquehanna organization also describes substantial options, crypto, and prediction-market activity. Those company materials provide background on capability; TurboFlow's announcement remains the source for the specific collaboration scope."
          },
          { type: "heading", text: "Why short-cycle Event Contracts are sensitive to market structure" },
          {
            type: "paragraph",
            text: "TurboFlow Event Contracts can run from 30 seconds. At that speed, liquidity depth, directional demand, volatility, and risk exposure can change during a very small window. TurboFlow's displayed Return Rate can reflect the market, selected direction, duration, volatility, liquidity conditions, and platform risk settings. Enter Price and Exit Price are determined separately through its oracle-based pricing system."
          },
          {
            type: "paragraph",
            text: "Liquidity depth affects how much demand a market can absorb. Price discovery concerns how current information and order flow are reflected in quoted terms. Risk management sets boundaries around exposure and market operation. These functions are connected, but each solves a different part of the trading flow."
          },
          { type: "callout", text: "The significance of the collaboration sits in market structure: liquidity, pricing, and risk management have to work together." },
          { type: "heading", text: "Dynamic pricing was announced as a transition" },
          {
            type: "paragraph",
            text: "TurboFlow's May announcement said its Event Contracts were moving from a fixed-odds model toward a more dynamic, market-driven structure. The announcement described an Event Contract odds or Return Rate structure that could respond to real-time market conditions, liquidity depth, directional demand, volatility, and risk exposure; it did not say those inputs determine the oracle-based Enter Price or Exit Price."
          },
          {
            type: "paragraph",
            text: "That statement described a transition underway at the time of the announcement. It should not be converted into a claim that every market, duration, or account now uses one fully deployed dynamic model. Current availability and displayed return rates should be checked on the live product."
          },
          { type: "heading", text: "Event Contracts and Turbo Perps keep separate mechanics" },
          {
            type: "paragraph",
            text: "The announced collaboration spans TurboFlow's product line, while the products retain different mechanics. Event Contracts use a fixed time window, a stake, a Higher or Lower direction, a displayed return rate, and automatic settlement. Turbo Perps use positions, margin, leverage, funding, and liquidation mechanics."
          },
          {
            type: "paragraph",
            text: "Liquidity support can be relevant to both products without making their durations, fees, returns, or risks interchangeable. A 30-second window belongs to Event Contracts; leverage of up to 1000x belongs to supported Turbo Perps markets."
          },
          { type: "heading", text: "The collaboration and the seed investment are separate facts" },
          {
            type: "paragraph",
            text: "TurboFlow announced the liquidity collaboration in May. In June, it disclosed that Susquehanna Crypto had participated in the $6 million seed round led by Pantera Capital; The Block reported that the round had closed in March. The two relationships concern different functions, and public sources do not establish that either caused the other."
          },
          { type: "heading", text: "What the announcement does not guarantee" },
          {
            type: "paragraph",
            text: "A named liquidity provider does not guarantee zero slippage, millisecond execution in every condition, uninterrupted markets, profitable outcomes, or the absence of technical and operational risk. Execution quality and market stability should be assessed through current rules, live quotes, order records, and settlement results."
          }
        ],
        riskNotice: "Liquidity and market-making support do not eliminate trading risk. Event Contracts can result in loss of the stake when the direction is wrong; Turbo Perps add leverage, funding, margin, and liquidation risk. Users should verify current terms and trade within their risk tolerance."
      },
      zh: {
        pageTitle: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作",
        pageDescription: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作，重点覆盖成交质量、流动性深度、定价效率与市场结构。",
        socialDescription: "理解 TurboFlow 与 Susquehanna Crypto 合作对流动性、定价和短周期事件合约的意义。",
        twitterTitle: "TurboFlow 与 Susquehanna Crypto 开展战略流动性合作",
        category: "流动性更新",
        breadcrumbCurrent: "Susquehanna Crypto 合作",
        headline: "TurboFlow 宣布与 Susquehanna Crypto 开展战略流动性合作",
        dek: "TurboFlow 表示，Susquehanna Crypto 将为平台产品线提供链上流动性与做市支持。合作重点落在成交质量、流动性深度、定价效率，以及更具市场驱动特征的事件合约结构。",
        metaNote: "市场结构",
        facts: [
          { label: "公布时间", value: "2026 年 5 月 13 日" },
          { label: "合作性质", value: "TurboFlow 宣布的战略流动性合作" },
          { label: "公告所述角色", value: "链上流动性与做市支持" },
          { label: "产品范围", value: "据公告覆盖 TurboFlow 产品线" },
          { label: "重点方向", value: "流动性深度、定价效率与成交质量" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 5 月 13 日，TurboFlow 宣布与 Susquehanna Crypto 开展" },
              { text: "战略流动性合作", href: turboFlowLinkedInUrl },
              { text: "。TurboFlow 表示，Susquehanna Crypto 将为平台产品线提供链上流动性与做市支持，并引入市场结构、价格发现和风险管理方面的经验。" }
            ]
          },
          {
            type: "paragraph",
            text: "本文按照 TurboFlow 公告界定合作范围。Susquehanna Crypto 官网能够确认其数字资产交易与流动性业务背景；截至 2026 年 8 月 12 日的来源核验，没有找到 Susquehanna Crypto 针对这项具体合作单独发布的官方公告。"
          },
          { type: "heading", text: "TurboFlow 公告中的合作角色" },
          {
            type: "paragraph",
            text: "TurboFlow 将 Susquehanna Crypto 描述为链上流动性提供方，为平台产品线提供支持。公告把这一角色对应到三个实际目标：增加可用流动性深度，提高价格发现效率，并强化市场背后的风险管理。"
          },
          {
            type: "paragraph",
            text: "Susquehanna Crypto 官方将自身定义为全球自营数字资产交易机构，业务覆盖数字资产衍生品、链上策略、早期投资与代币做市。Susquehanna 集团公开资料还介绍了其期权、加密资产和预测市场业务。这些资料能够说明机构背景，具体合作范围仍以 TurboFlow 公告为来源。"
          },
          { type: "heading", text: "短周期事件合约为何依赖市场结构" },
          {
            type: "paragraph",
            text: "TurboFlow 事件合约期限从 30 秒起。在这样的时间尺度内，流动性深度、方向性需求、波动率与风险敞口可能快速变化。TurboFlow 页面显示的回报率可反映市场、所选方向、期限、波动率、流动性状况与平台风险设置；入场价和退出价则由平台的预言机定价系统另行确定。"
          },
          {
            type: "paragraph",
            text: "流动性深度决定市场能够承接多少需求；价格发现负责把当前信息和交易需求反映到报价条件中；风险管理则为敞口与市场运行设置边界。三项能力相互关联，各自解决交易流程中的不同问题。"
          },
          { type: "callout", text: "这项合作的核心落在市场结构：流动性、定价与风险管理需要协同运行。" },
          { type: "heading", text: "动态定价在公告中是一项升级进程" },
          {
            type: "paragraph",
            text: "TurboFlow 在 5 月公告中表示，事件合约正在从固定赔率模式转向更动态、更具市场驱动特征的结构。公告描述的是事件合约动态赔率或回报率结构可随实时市场状态、流动性深度、方向性需求、波动率与风险敞口调整；这不等于上述输入决定预言机生成的入场价或退出价。"
          },
          {
            type: "paragraph",
            text: "这段表述说明的是公告当时正在推进的升级，无法直接推出每个市场、期限或账户现在都已采用同一套完整动态模型。当前可用范围和页面回报率仍应以实时产品为准。"
          },
          { type: "heading", text: "事件合约与 Turbo 永续合约保持独立机制" },
          {
            type: "paragraph",
            text: "公告所述合作覆盖 TurboFlow 产品线，两类产品的机制仍需分开理解。事件合约采用固定时间窗口、投入金额、看涨或看跌方向、页面回报率与到期自动结算；Turbo 永续合约涉及仓位、保证金、杠杆、资金费与清算。"
          },
          {
            type: "paragraph",
            text: "流动性支持可以同时服务两类产品，不会让它们的期限、费用、回报和风险变成同一套规则。30 秒期限属于事件合约；最高 1000 倍杠杆属于受支持的 Turbo 永续市场。"
          },
          { type: "heading", text: "流动性合作与种子轮投资是两项事实" },
          {
            type: "paragraph",
            text: "TurboFlow 于 5 月公布流动性合作；6 月披露 Susquehanna Crypto 参与由 Pantera Capital 领投的 600 万美元种子轮。The Block 报道该轮融资已于 3 月完成。两项关系分别对应市场流动性、做市与融资，公开来源未证明二者存在因果关系。"
          },
          { type: "heading", text: "合作公告不能替代交易结果验证" },
          {
            type: "paragraph",
            text: "流动性提供方的名称无法保证所有市场条件下都没有滑点、始终实现毫秒级成交、市场持续不中断或交易稳定盈利。成交质量与市场稳定性仍需要通过当前规则、实时报价、订单记录和结算结果进行观察。"
          }
        ],
        riskNotice: "流动性与做市支持无法消除交易风险。事件合约方向错误时可能损失投入金额；Turbo 永续合约还涉及杠杆、资金费、保证金与清算风险。用户应核对当前条款，并在自身风险承受范围内参与。"
      }
    }
  }
];
