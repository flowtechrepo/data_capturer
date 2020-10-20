<template lang="pug">
.LatestNewsContainer
  h2.title Media Mentions
  .newsBox
    .oneNewsBoxWithMargin(v-for="(v, k) in showNews" :key="k")
      .newsImage
        img.newImageScale(:src="v.image")
      .newsText
        .newsItemHeader
          .newsItemHeaderLeft
            a(:href="v.link" target="_blank").newsTitle
              h4 {{v.title}}
            p.newsSubtitle By {{v.media}}
              span.newsDate {{v.date}}
          //- .newsItemHeaderRight
          //-   p.newsDate {{v.date}}
        p.newsContent
          span {{v.desc}}
          a.more(:href="v.link" target="_blank")  More...
  .lineStyle
  .btnStyle(v-show="newsNumber < news.length" )
    a.btnReadMore(href="javascript:void(0);" type="primary" @click="loadMoreNews" v-loading="loading") Read More
</template>

<script>
export default {
  name: 'LatestNews',
  data () {
    return {
      loading: false,
      newsNumber: 4,
      news: [{
        image: require('~/assets/design/about/news7.jpg'),
        title: 'How artificial intelligence makes financial services institutions more efficient',
        media: 'The Jakarta Post',
        date: '17 Oct 2019',
        desc: `The financial landscape has been rapidly evolving with the rise of financial technology (fintech) companies and startups that are more agile and technologically advanced. This has led financial services institutions (FSIs) to revise their business models and evaluate how they can integrate technology into their operations.Robotic process automation (RPA) is no longer a foreign term in the financial field.`,
        link: 'https://www.thejakartapost.com/life/2019/10/17/how-artificial-intelligence-makes-financial-services-institutions-more-efficient.html'
      }, {
        image: require('~/assets/design/about/news6.jpg'),
        title: 'Singapore AI Startup flow Collaborates with Bank Central Asia to develop an AI+RPA solution for Trade Finance',
        media: 'Business Insider',
        date: '26 Sep 2019',
        desc: `flow, an Artificial Intelligence (AI) company that focuses on back office intelligence automation in the finance domain, announced today that it is jointly collaborating with Bank Central Asia (BCA) to develop a solution, LC Automize. LC Automize automates manual document and compliance check based on International rules (Uniform Customs and Practice for Documentary Credits (UCPDC)) and International standards `,
        link: 'https://markets.businessinsider.com/news/stocks/singapore-ai-startup-flow-collaborates-with-bank-central-asia-to-develop-an-ai-rpa-solution-for-trade-finance-1028554183'
      }, {
      //   image: require('~/assets/design/about/news-03.png'),
      //   title: 'Startup AI Asal Singapura Disuntik Dana Grup Djarum dan BCA',
      //   media: 'Marketeers',
      //   date: '20 Feb 2019',
      //   desc: 'flow, perusahaan yang berfokus pada teknologi artificial inteligence (AI), mengumumkan telah menyelesaikan putaran pendanaan Seri B yang dipimpin oleh GDP Venture dan partisipasi Central Capital Ventura, korporasi ventura milik Bank Central Asia (BCA).',
      //   link: 'https://marketeers.com/startup-ai-asal-singapura-disuntik-dana-grup-djarum-dan-bca/'
      // }, {
      //   image: require('~/assets/design/about/news-05.jpg'),
      //   title: 'Startup AI Asal Singapura Disuntik Dana Grup Djarum dan BCA',
      //   media: 'Oppobaca.news',
      //   date: '20 Feb 2019',
      //   desc: 'flow, perusahaan yang berfokus pada teknologi artificial inteligence (AI), mengumumkan telah menyelesaikan putaran pendanaan Seri B yang dipimpin oleh GDP Venture dan partisipasi Central Capital Ventura, korporasi ventura milik Bank Central Asia (BCA).',
      //   link: 'http://oppobaca.news/29972183'
      // }, {
      //   image: require('~/assets/design/about/news-06.jpg'),
      //   title: 'シンガポール国立大輩出のAIスタートアップflow、シリーズBラウンドをクローズ——GDP Ventureや大手銀行BCA傘下のVCが出資',
      //   media: 'The Bridge',
      //   date: '19 Feb 2019',
      //   desc: 'シンガポールを本拠とし、認知データインテリジェンスに特化した AI スタートアップの flow は、インドネシアの GDP Venture がリードするシリーズ B ラウンドをクローズした。',
      //   link: 'https://thebridge.jp/2019/02/ai-startup-flow-closes-series-b-funding-round-from-gdp-venture-20190212'
      // }, {
      //   image: require('~/assets/design/about/news-07.jpg'),
      //   title: '人工智能公司flow完成B轮融资 或将进军国内市场',
      //   media: 'Tech.ifeng',
      //   date: '13 Feb 2019',
      //   desc: '【CNMO新闻】新加坡人工智能初创公司flow已经完成了由印度尼西亚GDP风险投资领导的B轮融资，并由印度尼西亚最大的私人银行中亚银行的风险投资公司Central Capital Ventura参与，GDP Venture首席技术官（CTO）On Lee也将加入flow的董事会',
      //   link: 'http://tech.ifeng.com/a/20190213/45309027_0.shtml'
      // }, {
      //   image: require('~/assets/design/about/news-08.jpg'),
      //   title: 'Singapore AI analytics firm bags funding from GDP Ventures, others',
      //   media: 'Tech in Asia',
      //   date: '12 Feb 2019',
      //   desc: 'flow, a Singapore-based AI analytics firm, has completed a series B funding round led by GDP Venture. Central Capital Ventura, the venture arm of Indonesia’s Bank Central Asia, also participated. The amount raised wasn’t disclosed.',
      //   link: 'https://www.techinasia.com/flow-series-b'
      // }, {
      //   image: require('~/assets/design/about/news-02.jpg'),
      //   title: 'AI STARTUP flow RAISES SERIES B FUNDING?',
      //   media: 'Digital News Asia',
      //   date: '12 Feb 2019',
      //   desc: 'flow, an Artificial Intelligence company that delivers real-time, actionable insights to businesses announced on Feb 12 that it has successfully completed a Series B funding round. The financing will be used to invest further in the company’s proprietary cognitive data intelligence solutions and for global expansion.',
      //   link: 'https://www.digitalnewsasia.com/startups/ai-startup-flow-raises-series-b-funding'
      // }, {
      //   image: require('~/assets/design/about/news-04.jpg'),
      //   title: 'Pengembang NLP Bahasa Indonesia Prosa.ai Dapatkan Investasi dari Kaskus',
      //   media: 'Daily Social ID',
      //   date: '08 Oct 2018',
      //   desc: 'Hari ini (08/10), Kaskus secara resmi mengumumkan investasinya ke Prosa.ai, pengembang platform Natural Language Processors (NLP) untuk Bahasa Indonesia. Tidak disampaikan terkait detail pendanaan yang diberikan. Sejauh ini produk Prosa.ai fokus pada layanan Text & Speech-based Processing Tools yang dibuat kustom sesuai dengan kebutuhan kliennya.',
      //   link: 'https://dailysocial.id/post/kaskus-beri-investasi-prosa-ai/'
      // }, {
        image: require('~/assets/design/about/news5.jpg'),
        title: 'Singapore-based AI start-up flow completes Series B funding',
        media: 'StraitsTimes',
        date: '12 Feb 2019',
        desc: 'Singapore-based artificial intelligence (AI) start-up flow has completed a Series B funding round, led by Indonesia-focused GDP Venture and participated in by Central Capital Ventura, the venture arm of Indonesia\'s largest private bank Bank Central Asia. GDP Venture chief technology officer (CTO) On Lee will be joining flow\'s board of directors.',
        link: 'https://www.straitstimes.com/business/companies-markets/singapore-based-ai-start-up-flow-completes-series-b-funding'
      // }, {
      //   image: require('~/assets/design/about/news4.jpg'),
      //   title: 'VELVET Presents: What Are Chinese Travelers Saying About Your Brand?',
      //   media: 'Velvet Group',
      //   date: '17 Mar 2016',
      //   desc: 'VELVET and flow, an AI powered Big Data analytics company, will co-present insights from a study based on the online activities of Chinese outbound travelers to UK and France, as well as the digital discussions around UK and France between the peak travel months of October 2015 to April 2016.',
      //   link: 'https://asia.fabernovel.com/velvet-presents-what-are-chinese-travelers-saying-about-your-brand/'
      }, {
        image: require('~/assets/design/about/news3.png'),
        title: 'Whitepaper points to two tiers of Chinese visitors to Japan',
        media: 'Campaign Asia',
        date: '08 Mar 2016',
        desc: 'TOKYO - Chinese tourists account for the lion’s share of travel to Japan, and while they still flock to buy everything from luxury bags to toilet seats, tastes are evolving and interest in culture is growing, according to a whitepaper published by Dentsu and flow. Enter the dragon a portrait of Chinese travellers to Japan’ is based on analysis of around 70,000 online data points between October and December 2015,',
        link: 'https://www.campaignasia.com/article/whitepaper-points-to-two-tiers-of-chinese-visitors-to-japan/406422'
      }, {
        image: require('~/assets/design/about/news2.jpg'),
        title: 'flow REVEALS VALUABLE INSIGHTS INTO REAL-TIME CONVERSATIONS AND SENTIMENTS ABOUT WHAT ATTRACTS CHINESE TRAVELERS TO A COUNTRY, DESTINATION AND PRODUCT',
        media: 'Media Buzz',
        date: '01 Mar 2016',
        desc: 'Real-time insights into holiday agendas, brand perceptions and preferences of Chinese travelers going to the US, Hong Kong, Japan and Singapore have been identified in a study by digital insights firm flow.',
        link: 'https://www.mediabuzz.com.sg/archive/2015/january/259-asian-e-marketing/marketing-automation-retargeting-programmatic-real-time-marketing/2932-flow-reveals-valuable-insights-into-real-time-conversations-and-sentiments-about-what-attracts-chinese-travelers-to-a-country-destination-and-product-2'
      }, {
        image: require('~/assets/design/about/news.jpg'),
        title: 'Real-time analysis of big data',
        media: 'NUS News',
        date: '01 Sep 2015',
        desc: 'NUS start-up flow has tapped the University\'s technologies to make sense of the massive amount of data from various sources, and present them in intelligible and usable formats. Such intelligence is critical as people turn increasingly to digital platforms for their daily needs.',
        link: 'http://news.nus.edu.sg/highlights/real-time-analysis-big-data'
      }]
    }
  },
  created () {
  },
  computed: {
    showNews () {
      return this.news.slice(0, this.newsNumber)
    }
  },
  methods: {
    loadMoreNews () {
      this.loading = true
      setTimeout(() => {
        this.newsNumber = this.newsNumber + 3
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.LatestNewsContainer {
  width: $percentageWidth;
  max-width: $containerMaxWidth;
  padding: $normalComponentPadding 0;
  margin: 0 auto;
  // margin: 6rem auto 4rem auto;
  .title {
    // font-size: 1.6rem;
    text-align: center;
  }
  .newsBox {
    margin-top: 6rem;
    .oneNewsBoxWithMargin {
      margin-bottom: 4rem;
      display: flex;
      // align-items: center;
      .newsImage {
        // height: 100%;
        width: 25%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
      .newsText {
        flex: 1;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .newsItemHeader{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .newsItemHeaderLeft{
            margin-right: 2rem;
            .newsTitle {
              // font-size: 1.2rem;
              margin: 0;
              margin-bottom: 0.5rem;
              h4 {
                padding: 0;
                font-size: 22px;
              }
              &:hover {
                color: $highlightColor;
                h4 {
                  color: $highlightColor;
                }
              }
            }
            .newsSubtitle {
              // font-size: 0.8rem;
              margin: 0;
              color: #0D5FFF;
              span {
                // font-size: 0.875rem;
                margin-left: 1rem;
              }
            }
          }
          .newsItemHeaderRight{
            .newsDate{
              // font-size: 1.8rem;
              // line-height: 1.8rem;
              font-style: italic;
              // font-weight: 200;
              margin: 0;
              color: $tipsColor;
            }
          }
        }
        .newsContent {
          margin: 0;
          padding: 0;
          span {
            padding: 0;
            // font-size: 0.9rem;
            // line-height: 1.2rem;
          }
          .more {
            // font-size: 0.8rem;
            &:hover {
              color: $highlightColor;
            }
          }
        }
      }
    }
  }
  .btnStyle {
    margin: 3rem 0;
    text-align: center;
    padding-top: 3rem;
    border-top: 1px solid $dividedColor;
    .btnReadMore {
      padding: 0.5rem 3rem;
      border-radius: 44px;
      border: solid 1px $mainColor;
      text-align: center;
      display: inline-block;
      font-size: 1rem;
      &:hover {
        background: $mainColor;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .LatestNewsContainer {
    .newsBox {
      .oneNewsBoxWithMargin {
        display: block;
        .newsImage {
          width: $percentageWidth;
          margin: 1rem auto;
        }
        .newsText {
          width: $percentageWidth;
          margin: 0 auto;
          .newsItemHeader {
            display: block;
            .newsItemHeaderRight {
              margin: 0.5rem 0;
              .newsDate {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
