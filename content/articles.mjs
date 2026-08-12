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
const chainlinkAnnouncementUrl = "https://x.com/chainlink/status/2065132282780774419";
const turboFlowChainlinkAnnouncementUrl = "https://x.com/TurboFlow_xyz/status/2065131952802234386";
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
    publishedAt: "2026-06-22T20:05:00-04:00",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: fundingAnnouncementUrl,
    sources: [
      {
        url: fundingAnnouncementUrl,
        label: {
          en: "TurboFlow: $6 Million Seed Round Announcement (PR Newswire)",
          zh: "TurboFlow：600 万美元种子轮融资公告（PR Newswire）"
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
          en: "The Block: additional funding coverage and founder interview",
          zh: "The Block：融资补充报道与创始人采访"
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
        facts: [
          { label: "Funding", value: "$6 million" },
          { label: "Round", value: "Seed" },
          { label: "Lead investor", value: "Pantera Capital" },
          { label: "Participants", value: "Susquehanna Crypto and Digital Currency Group" },
          { label: "Announced", value: "June 22, 2026, 8:05 p.m. ET" }
        ],
        blocks: [
          {
            type: "paragraph",
            text: "On June 22, 2026, TurboFlow announced the closing of a $6 million seed funding round led by Pantera Capital, with participation from Susquehanna Crypto and Digital Currency Group."
          },
          {
            type: "paragraph",
            text: "TurboFlow said it will use the capital to expand product development, strengthen liquidity infrastructure, and accelerate global user growth."
          },
          { type: "heading", text: "What TurboFlow said it is building" },
          {
            type: "paragraph",
            text: "In the announcement, TurboFlow described itself as an on-chain trading ecosystem at the intersection of perpetual contracts and prediction markets. Its stated aim is to make professional-grade market infrastructure available to everyday users through a simpler, consumer-focused experience."
          },
          {
            type: "paragraph",
            text: "The release highlighted entry thresholds as low as $2, fast settlement for short-duration Event Contracts, and a streamlined experience intended to reduce blockchain complexity while preserving transparency and self-custody principles."
          },
          { type: "heading", text: "Activity reported in the announcement" },
          {
            type: "paragraph",
            text: "At the time of the announcement, TurboFlow reported $19.15 billion in total trading volume across more than 14,540 total users. These are company-reported figures dated June 22, 2026; they are not presented here as independently audited or current metrics."
          },
          { type: "heading", text: "Pantera's statement" },
          {
            type: "paragraph",
            text: "In the release, Pantera Managing Partner Paul Veradittakit said TurboFlow's goal of broadening access to institutional-grade trading infrastructure aligned with Pantera's view that blockchain can support more transparent and inclusive markets. He cited the company's early traction and product vision as part of Pantera's investment view."
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
        dek: "TurboFlow 宣布完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 参投。公司表示，本轮资金将用于产品研发、流动性基础设施与全球用户增长。",
        facts: [
          { label: "融资金额", value: "600 万美元" },
          { label: "融资轮次", value: "种子轮" },
          { label: "领投方", value: "Pantera Capital" },
          { label: "参投方", value: "Susquehanna Crypto 与 Digital Currency Group" },
          { label: "公告时间", value: "2026 年 6 月 22 日 20:05（美东时间）" }
        ],
        blocks: [
          {
            type: "paragraph",
            text: "2026 年 6 月 22 日，TurboFlow 宣布完成 600 万美元种子轮融资，由 Pantera Capital 领投，Susquehanna Crypto 与 Digital Currency Group 共同参投。"
          },
          {
            type: "paragraph",
            text: "TurboFlow 表示，本轮资金将用于推进产品研发、强化流动性基础设施，并加快全球用户增长。"
          },
          { type: "heading", text: "TurboFlow 正在建设什么" },
          {
            type: "paragraph",
            text: "融资公告将 TurboFlow 定位为一个处于永续合约与预测市场交汇处的链上交易生态，目标是通过更简洁、面向日常用户的产品体验，让专业级市场基础设施服务于更广泛的参与者。"
          },
          {
            type: "paragraph",
            text: "公告提到，平台参与门槛低至 2 美元，并强调短周期事件合约的快速结算能力，以及在简化链上操作的同时保留透明度与自托管原则的产品设计。"
          },
          { type: "heading", text: "公告披露的业务数据" },
          {
            type: "paragraph",
            text: "截至公告发布时，TurboFlow 披露的平台累计交易量为 191.5 亿美元，总用户数为 14,540 名以上。这些数据由公司于 2026 年 6 月 22 日披露，本文未将其作为经独立审计或当前实时数据。"
          },
          { type: "heading", text: "Pantera 的公开表态" },
          {
            type: "paragraph",
            text: "Pantera Capital 管理合伙人 Paul Veradittakit 在公告中表示，TurboFlow 扩大专业级交易基础设施覆盖范围的目标，与 Pantera 对区块链推动市场透明度和包容性的判断一致。他同时将早期采用情况与产品愿景列为 Pantera 投资判断的一部分。"
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
    publishedAt: "2026-06-30T19:04:41-07:00",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: panteraUrl,
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
          en: "TurboFlow: $6 Million Seed Round Announcement (PR Newswire)",
          zh: "TurboFlow：600 万美元种子轮融资公告（PR Newswire）"
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
        facts: [
          { label: "Official article", value: "Investing in TurboFlow" },
          { label: "Publisher", value: "Pantera Capital" },
          { label: "Author", value: "Jay Yu" },
          { label: "Published", value: "June 30, 2026" },
          { label: "Investment", value: "Pantera led TurboFlow's $6 million seed round" },
          { label: "Pantera-reported beta activity", value: "15,000+ registered users and $19B+ cumulative volume" }
        ],
        blocks: [
          {
            type: "paragraph",
            text: "On June 30, 2026, Pantera Capital published Investing in TurboFlow, an article by Jay Yu announcing that the firm was leading TurboFlow's $6 million seed round."
          },
          { type: "heading", text: "Why Pantera invested" },
          {
            type: "paragraph",
            text: "Pantera said perpetual futures and prediction markets are converging, particularly around near-term trading instruments. It also argued that trading products serving APAC need to reflect the assets, events, and experiences that matter to users in the region."
          },
          {
            type: "paragraph",
            text: "Pantera presented TurboFlow as a company positioned to address both developments: combining the two market categories in one venue while building around users across Asia."
          },
          { type: "heading", text: "How Pantera described TurboFlow" },
          {
            type: "paragraph",
            text: "The article described TurboFlow as an on-chain platform that brings perpetual futures and prediction markets into one account, balance, and consumer-facing interface. In Pantera's description, users can express a leveraged view on an asset price or take a position on a real-world event outcome from the same venue."
          },
          {
            type: "paragraph",
            text: "Pantera also highlighted entry sizes as low as $2, fast settlement for short-duration contracts, and liquidity, pricing, and risk-management systems beneath a self-custodial application."
          },
          { type: "heading", text: "Team and reported beta activity" },
          {
            type: "paragraph",
            text: "Pantera cited founder Tony He's background as a co-founder and partner of Amber Group and his experience in market making. It also pointed to the wider team's experience building crypto exchanges and frontier-market products."
          },
          {
            type: "paragraph",
            text: "The article reported that TurboFlow's six-month beta had attracted more than 15,000 registered users and generated more than $19 billion in cumulative trading volume before a public launch. These figures are reported by Pantera in its investment article and are not presented here as independently audited or current metrics."
          },
          { type: "heading", text: "Pantera's stated outlook" },
          {
            type: "paragraph",
            text: "Pantera said it believes the combination of the team, product, and APAC market opportunity could support TurboFlow's development as a next-generation trading platform for the region. This is Pantera's investment view, not a guarantee of adoption, performance, or future product availability."
          }
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
        facts: [
          { label: "官方文章", value: "Investing in TurboFlow" },
          { label: "发布方", value: "Pantera Capital" },
          { label: "作者", value: "Jay Yu" },
          { label: "发布日期", value: "2026 年 6 月 30 日" },
          { label: "投资事项", value: "Pantera 领投 TurboFlow 600 万美元种子轮" },
          { label: "Pantera 披露的测试期数据", value: "注册用户超过 1.5 万，累计交易量超过 190 亿美元" }
        ],
        blocks: [
          {
            type: "paragraph",
            text: "2026 年 6 月 30 日，Pantera Capital 发布 Jay Yu 撰写的《Investing in TurboFlow》，并在文中宣布领投 TurboFlow 的 600 万美元种子轮融资。"
          },
          { type: "heading", text: "Pantera 为什么投资" },
          {
            type: "paragraph",
            text: "Pantera 认为，永续合约与预测市场正在靠拢，短周期交易工具是这一趋势的具体表现。文章同时指出，服务亚太用户的交易产品需要贴近当地用户关注的资产、事件与使用体验。"
          },
          {
            type: "paragraph",
            text: "Pantera 将 TurboFlow 描述为同时回应这两项变化的平台：在同一场所整合永续合约与预测市场，并围绕亚洲用户建设产品。"
          },
          { type: "heading", text: "Pantera 如何描述 TurboFlow" },
          {
            type: "paragraph",
            text: "文章将 TurboFlow 描述为一个整合永续合约与预测市场的链上平台。按照 Pantera 的表述，用户可通过同一账户、余额与消费级界面，对资产价格建立杠杆仓位，或围绕现实事件结果建立仓位。"
          },
          {
            type: "paragraph",
            text: "Pantera 还提到低至 2 美元的参与门槛、短周期合约的快速结算，以及自托管应用背后的流动性、定价与风险管理系统。"
          },
          { type: "heading", text: "团队与测试期数据" },
          {
            type: "paragraph",
            text: "Pantera 提到，创始人 Tony He 是 Amber Group 联合创始人及合伙人，拥有做市背景；团队其他成员则具备建设加密交易平台和新兴市场产品的经验。"
          },
          {
            type: "paragraph",
            text: "文章披露，TurboFlow 在六个月测试期内获得超过 1.5 万名注册用户，累计交易量超过 190 亿美元，当时尚未公开上线。这些数据来自 Pantera 的投资文章，本文未将其作为经独立审计或当前实时数据。"
          },
          { type: "heading", text: "Pantera 的公开判断" },
          {
            type: "paragraph",
            text: "Pantera 表示，团队、产品与亚太市场机会的结合，有望支持 TurboFlow 发展为面向该地区的新一代交易平台。这是 Pantera 的投资判断，不构成对用户采用、产品表现或未来功能上线的保证。"
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
    publishedAt: "2026-06-11T18:00:00.000Z",
    modifiedAt: "2026-08-12",
    author: "TurboFlow",
    primarySource: turboFlowChainlinkAnnouncementUrl,
    sources: [
      {
        url: turboFlowChainlinkAnnouncementUrl,
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
      },
      {
        url: eventContractsDocsUrl,
        label: {
          en: "TurboFlow Event Contracts documentation (product context)",
          zh: "TurboFlow 事件合约文档（产品背景）"
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
        facts: [
          { label: "Announced", value: "June 11, 2026" },
          { label: "Confirmed by", value: "TurboFlow and Chainlink" },
          { label: "Integration", value: "TurboFlow adopted Chainlink" },
          { label: "Announced scope", value: "Continuous prediction markets for XAU, BTC, and ETH" },
          { label: "Product wording", value: "Event Contracts were not explicitly named in the announcement" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On June 11, 2026, " },
              { text: "TurboFlow", href: turboFlowChainlinkAnnouncementUrl },
              { text: " announced that it had adopted Chainlink to support new continuous prediction markets for XAU, BTC, and ETH. " },
              { text: "Chainlink", href: chainlinkAnnouncementUrl },
              { text: " also confirmed the integration through its official X account." }
            ]
          },
          { type: "heading", text: "What the announcement confirmed" },
          {
            type: "paragraph",
            text: "TurboFlow described the integration as infrastructure for fast, accurate, and continuous prediction markets designed for broader retail participation. That wording states TurboFlow's objective for the integration; it is not an independent performance measurement or a guarantee of trading outcomes."
          },
          {
            type: "paragraph",
            text: "The announcements name gold, Bitcoin, and Ethereum through the XAU, BTC, and ETH tickers. Neither official post names Chainlink Data Streams, Chainlink Data Feeds, a feed identifier, a deployment network, or a verifier contract."
          },
          { type: "heading", text: "TurboFlow product context" },
          {
            type: "paragraph",
            text: "The announcements use the term continuous prediction markets. TurboFlow's current documentation separately describes Event Contracts as fixed-window Higher or Lower trades and lists BTC, ETH, and XAU among the supported markets. The announcement itself does not explicitly identify Event Contracts, so the two terms are kept distinct here."
          },
          {
            type: "paragraph",
            text: "For Event Contracts, TurboFlow's documentation says a user chooses a market, duration, stake, and direction, and the contract settles when the fixed window ends. These product mechanics provide context; they are not additional technical details about the Chainlink integration."
          },
          { type: "callout", text: "Confirmed scope: TurboFlow adopted Chainlink for continuous prediction markets covering XAU, BTC, and ETH." }
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
        facts: [
          { label: "公布时间", value: "2026 年 6 月 11 日" },
          { label: "确认方", value: "TurboFlow 与 Chainlink" },
          { label: "接入关系", value: "TurboFlow 接入 Chainlink" },
          { label: "公告范围", value: "面向 XAU、BTC 与 ETH 的连续预测市场" },
          { label: "产品用语", value: "公告未直接点名事件合约" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 6 月 11 日，" },
              { text: "TurboFlow", href: turboFlowChainlinkAnnouncementUrl },
              { text: " 宣布已接入 Chainlink，为 XAU、BTC 与 ETH 连续预测市场提供支持。" },
              { text: "Chainlink", href: chainlinkAnnouncementUrl },
              { text: " 也通过官方 X 账号确认了这次接入。" }
            ]
          },
          { type: "heading", text: "公告确认的内容" },
          {
            type: "paragraph",
            text: "TurboFlow 将这次接入描述为支持快速、准确、连续预测市场的基础设施，并把扩大散户参与作为目标。这是 TurboFlow 对接入目标的项目方表述，不构成独立性能测量或交易结果保证。"
          },
          {
            type: "paragraph",
            text: "双方公告以 XAU、BTC 与 ETH 分别指向黄金、比特币和以太坊。两则官方消息均未点名 Chainlink Data Streams、Chainlink Data Feeds、Feed 标识、部署网络或验证合约。"
          },
          { type: "heading", text: "TurboFlow 产品背景" },
          {
            type: "paragraph",
            text: "双方公告使用“连续预测市场”这一表述。TurboFlow 当前文档则将事件合约定义为固定时间窗口内的看涨或看跌交易，并把 BTC、ETH 与 XAU 列为支持市场。公告没有直接点名事件合约，因此本文保留两种来源用语之间的区别。"
          },
          {
            type: "paragraph",
            text: "对于事件合约，TurboFlow 文档说明用户选择市场、期限、投入金额和方向，固定时间窗口结束后完成结算。这些产品机制用于补充背景，不代表本次 Chainlink 接入披露了更多技术细节。"
          },
          { type: "callout", text: "已确认范围：TurboFlow 接入 Chainlink，支持覆盖 XAU、BTC 与 ETH 的连续预测市场。" }
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
        label: {
          en: "ChainCatcher-hosted TurboFlow collaboration release (project wording, May 13, 2026)",
          zh: "ChainCatcher 收录的 TurboFlow 合作通稿（项目方表述，2026 年 5 月 13 日）"
        }
      },
      {
        url: turboFlowLinkedInUrl,
        label: {
          en: "TurboFlow official LinkedIn follow-up (May 27, 2026)",
          zh: "TurboFlow 官方 LinkedIn 后续确认（2026 年 5 月 27 日）"
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
        url: eventContractsDocsUrl,
        label: {
          en: "TurboFlow Event Contracts documentation (product context)",
          zh: "TurboFlow 事件合约文档（产品背景）"
        }
      },
      {
        url: turboPerpsDocsUrl,
        label: {
          en: "TurboFlow Turbo Perps documentation (product context)",
          zh: "TurboFlow Turbo 永续合约文档（产品背景）"
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
        facts: [
          { label: "Announced", value: "May 13, 2026" },
          { label: "Source attribution", value: "TurboFlow release hosted by ChainCatcher" },
          { label: "Relationship", value: "Strategic liquidity collaboration, as announced by TurboFlow" },
          { label: "Announced role", value: "On-chain liquidity and market-making support" },
          { label: "Product scope", value: "TurboFlow product line, including perpetual contracts and Event Contracts" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "On May 13, 2026, TurboFlow " },
              { text: "announced", href: chainCatcherPartnershipUrl },
              { text: " a strategic liquidity collaboration with Susquehanna Crypto. TurboFlow said the collaboration would support its product line with on-chain liquidity and market making." }
            ]
          },
          { type: "heading", text: "The role described by TurboFlow" },
          {
            type: "paragraph",
            text: "TurboFlow described Susquehanna Crypto as an on-chain liquidity provider and said the firm would contribute experience in professional trading, market structure, price discovery, and risk management. The release connected that role to deeper liquidity, more efficient pricing, and execution quality as TurboFlow expanded its products."
          },
          {
            type: "paragraph",
            text: "Susquehanna Crypto's official company profile describes a global proprietary digital-asset trading firm that provides liquidity through digital-asset derivatives, on-chain strategies, early-stage investments, and token market making. This company profile supports the institutional background; TurboFlow's release remains the source for the specific collaboration scope."
          },
          { type: "heading", text: "Product scope in the release" },
          {
            type: "paragraph",
            text: "The release names perpetual contracts and Event Contracts. It also says TurboFlow was moving Event Contract odds toward a more dynamic, market-driven structure responsive to market conditions, liquidity, directional demand, volatility, and risk exposure. This was presented as an upgrade in progress, not as proof that one identical model was already active for every market or duration."
          },
          {
            type: "paragraph",
            text: "The two product lines retain separate mechanics. Event Contracts use fixed windows, a stake, a Higher or Lower direction, a displayed return rate, and automatic settlement. Turbo Perps use positions, margin, leverage, funding, and liquidation. The announced liquidity support does not merge those rules."
          },
          { type: "heading", text: "Source attribution" },
          {
            type: "paragraph",
            text: "The May 13 release was hosted by ChainCatcher and presents TurboFlow's project-side account. TurboFlow later confirmed the strategic liquidity collaboration through its official LinkedIn account. No separate Susquehanna Crypto announcement detailing this specific collaboration was located during the August 12, 2026 source review."
          }
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
        facts: [
          { label: "公布时间", value: "2026 年 5 月 13 日" },
          { label: "来源归因", value: "ChainCatcher 收录的 TurboFlow 项目方通稿" },
          { label: "合作性质", value: "TurboFlow 宣布的战略流动性合作" },
          { label: "公告所述角色", value: "链上流动性与做市支持" },
          { label: "产品范围", value: "TurboFlow 产品线，包括永续合约与事件合约" }
        ],
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "2026 年 5 月 13 日，TurboFlow " },
              { text: "宣布", href: chainCatcherPartnershipUrl },
              { text: "与 Susquehanna Crypto 开展战略流动性合作。TurboFlow 表示，这项合作将为平台产品线提供链上流动性与做市支持。" }
            ]
          },
          { type: "heading", text: "TurboFlow 公布的合作角色" },
          {
            type: "paragraph",
            text: "TurboFlow 将 Susquehanna Crypto 描述为链上流动性提供方，并表示对方将带来专业交易、市场结构、价格发现与风险管理经验。随着 TurboFlow 扩展产品线，通稿把这一角色与增加流动性深度、提高定价效率和改善成交质量联系起来。"
          },
          {
            type: "paragraph",
            text: "Susquehanna Crypto 官方公司介绍将其定义为全球自营数字资产交易机构，流动性业务覆盖数字资产衍生品、链上策略、早期投资与代币做市。公司介绍能够说明机构背景；这项具体合作的范围仍以 TurboFlow 通稿为来源。"
          },
          { type: "heading", text: "通稿中的产品范围" },
          {
            type: "paragraph",
            text: "通稿点名永续合约与事件合约，并表示 TurboFlow 正推动事件合约赔率转向更动态、更具市场驱动特征的结构，可随市场状态、流动性、方向性需求、波动率与风险敞口调整。这是通稿所述的升级进程，不代表每个市场或期限当时都已采用同一套完整模型。"
          },
          {
            type: "paragraph",
            text: "两条产品线保持不同机制。事件合约采用固定时间窗口、投入金额、看涨或看跌方向、页面回报率与到期自动结算；Turbo 永续合约涉及仓位、保证金、杠杆、资金费与清算。公告所述流动性支持不会合并两类产品规则。"
          },
          { type: "heading", text: "来源归因" },
          {
            type: "paragraph",
            text: "5 月 13 日通稿由 ChainCatcher 收录，内容属于 TurboFlow 项目方表述。TurboFlow 随后通过官方 LinkedIn 确认战略流动性合作。截至 2026 年 8 月 12 日的来源核验，没有找到 Susquehanna Crypto 针对这项具体合作单独发布的详细公告。"
          }
        ],
        riskNotice: "流动性与做市支持不构成成交质量、零滑点、市场持续运行或避免损失的保证。事件合约可能损失投入金额；Turbo 永续合约还涉及杠杆、资金费、保证金与清算风险。"
      }
    }
  }
];
