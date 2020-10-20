<template lang='pug'>
  .index
    .companyBanner
      .flowContainer
        h1.companyTitle.bannerHeading Our Company
    .foundedArea
      .flowContainer
        .foundedContainer
          .foundedContainerLeft.bannerContent
            <p>Founded in 2016, Flow is a credit management company that is transforming the business of unsecured consumer finance in Asia. Artificial intelligence and big data reveal that the one-size-fits-all approach of traditional debt collection is limiting for both lenders and borrowers. </p>
            <p>This has inspired our innovative, data-driven collection services to place the consumers at the heart of the experience. Redefining debt collection begins with creating uniquely customised, digital-first customer experiences that will help them overcome financial difficulties and support them to become debt free.</p>
          .foundedContainerRight
            img(src="~/assets/flow/company/banner.jpg")
    .impact
      .flowContainer
        .impactContainer
          .impactContainerLeft
            img(src="~/assets/flow/company/impact.jpg")
          .impactContainerRight
            h1.impactContainerRightTitle.bannerHeading Impact
            p.impactContainerRightContent.bannerContent
              | Despite high credit growth in recent years, the debt collection industry in Asia lags behind with a history shrouded in distrust and lack of transparency.
              br
              br
              | By leveraging artificial intelligence technology and big data, we systematically execute effective debt collection processes that ensure fair and ethical treatment of consumers. We are committed to promoting ethical, responsible collection and financial inclusion to empower consumers in underserved economies.
            .impactContainerRightFooter
              .impactContainerRightFooterLeft SEE WHAT’S DIFFERENT ABOUT US
              .impactContainerRightFooterRight
                img(src="~/assets/flow/company/arrow-right.png" @click="$router.push('/difference')")
    .team
      .flowContainer
        .teamContainer
          h1.teamContainerTitle.bannerHeading Team
          .teamContainerItems
            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_tomasz.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/tomasz-borowski-44253b/" target="_blank") Tomasz Borowski
              p.teamContainerItemTitle.bannerContent Chief Executive Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_mingshing.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/limmingshing/" target="_blank") Lim Ming Shing
              p.teamContainerItemTitle.bannerContent Chief Financial Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_artem.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/artem-rafaelyan-a9a04572/" target="_blank") Artem Rafaelyan
              p.teamContainerItemTitle.bannerContent Chief Operating Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_irina.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/irinamalysheva/" target="_blank") Irina Malysheva
              p.teamContainerItemTitle.bannerContent Chief HR Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_vitalli.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/vitaliy-kalinichenko/" target="_blank") Vitaliy Kalinichenko
              p.teamContainerItemTitle.bannerContent Chief Risk Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_sergey.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/sergii-popov-14b036153/" target="_blank") Sergii Popov
              p.teamContainerItemTitle.bannerContent Chief Technology Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_arun.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/arun-pai-787ba134/" target="_blank") Arun Pai
              p.teamContainerItemTitle.bannerContent Chief Sales & Strategy Officer

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_tim.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/timxutao/" target="_blank") Tim Xu
              p.teamContainerItemTitle.bannerContent Head of Data Science

            .teamContainerItem
              .teamContainerItemImg
                img(src="~/assets/flow/company/team/team_swetha.jpg")
              a.teamContainerItemName.paraSubHeading(href="https://www.linkedin.com/in/swetha-vijay-3616405/" target="_blank") Swetha Vijay
              p.teamContainerItemTitle.bannerContent Head of Strategic Development
    .investors
      .flowContainer
        .investorsContainer
          h1.investorsTitle.bannerHeading Investors
          .investorsItems
            .investorsItem
              img(src="~/assets/flow/home/investors/digital venture.png")
            .investorsItem
              img(src="~/assets/flow/home/investors/dymon asia.png")
            .investorsItem
              img(src="~/assets/flow/home/investors/sig susquehanna.png")
    .news
      .flowContainer
        .newsContainer
          h1.newsTitle.bannerHeading Newsroom
          .newsItems
            .newsItem
              .newsItemDate.paraContent 8 Jan 2020
              a.newsItemTitle.paraSubHeading(href="https://www.techinasia.com/asiacollect-changing-debt-collection" target="_blank") AsiaCollect is changing the way you think about debt collection
            .newsItem
              .newsItemDate.paraContent Jan 2020
              .newsItemTitle.paraSubHeading(href="https://kr-asia.com/asiacollect-is-changing-the-way-you-think-about-debt-collection-startup-stories" target="_blank") Start-up stories: AsiaCollect
          .newsItems
            .newsItem
              .newsItemDate.paraContent Nov 2019
              .newsItemTitle.paraSubHeading(href="https://jakartaglobe.id/business/asiacollect-transforms-debt-collection-businesswith-ai" target="_blank") AsiaCollect Transforms Debt Collection Business With AI
            .newsItem
              .newsItemDate.paraContent Oct 2019
              .newsItemTitle.paraSubHeading(href="https://www.internationalfinance.com/magazine/asiacollect-digitally-transforming-debt-collection-asia/" target="_blank") AsiaCollect: Digitally transforming debt collection in Asia
          .newsItems
            .newsItem
              .newsItemDate.paraContent Aug 2019
              .newsItemTitle.paraSubHeading(href="https://jakartaglobe.id/context/aipowered-debt-collection-can-help-avoid-another-p2p-lending-crisis" target="_blank") AI-Powered Debt Collection Can Help Avoid Another P2P Lending Crisis
            .newsItem
              .newsItemDate.paraContent Apr 2019
              .newsItemTitle.paraSubHeading(href="https://bankinnovation.net/allposts/biz-lines/lending/fintech-asiacollect-wants-to-digitalize-debt-collection-in-india/" target="_blank") Fintech AsiaCollect Seeks to Digitalize Debt Collection in Southeast Asia
          .addMoreBox
            el-button.learnMoreBtn(@click="showAll = true" v-show="!showAll") Read More
          .newsItems(v-show="showAll")
            .newsItem
              .newsItemDate.paraContent Mar 2019
              .newsItemTitle.paraSubHeading(href="https://www.entrepreneur.com/article/330232" target="_blank") India's Digital Transformation - How it's Changing the Country's Consumer Debt Collection
            .newsItem
              .newsItemDate.paraContent Jan 2019
              .newsItemTitle.paraSubHeading(href="https://bankinnovation.net/allposts/biz-lines/lending/fintech-asiacollect-wants-to-digitalize-debt-collection-in-india/" target="_blank") What Indonesian Fintechs Should Know About Debt Collection
          .newsItems(v-show="showAll")
            .newsItem
              .newsItemDate.paraContent Oct 2018
              .newsItemTitle.paraSubHeading(href="https://vietnaminsider.vn/transforming-debt-collection-in-vietnam/" target="_blank") Transforming debt collection in Vietnam
</template>

<script>
import dataStore from '@/utils/dataStore'

export default {
  layout: 'default-blue',
  components: {
  },
  async created () {
    const resultId = this.$route.query.resultId
    const id = parseInt(resultId)
    if (id) {
      window.onbeforeunload = async function (e) {
        const message = 'some word'
        await dataStore.URLS.updateResultForEndTime({
          id
        })
        e = e || window.event

        if (e) {
          e.returnValue = message
        }

        return message
      }
    } else {
      console.log('invalid id', resultId)
    }
  },
  mounted () {
  },
  data () {
    return {
      showAll: false,
      resultId: null
    }
  },
  head () {
    return {
      title: 'Flow: Our Company',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Our team is made up of individuals with extensive experience in credit management, risk and technology. We understand the needs of both our clients and consumers – in turn, delivering highly effective strategies, processes and solutions.'
      }],
      link: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.companyBanner{
  background: #0D5FFF;
  .companyTitle{
    padding: 120px 0 30px;
    font-weight: bold;
    color: #fff;
  }
}

.foundedArea{
  .foundedContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
    .foundedContainerLeft{
      width: 40%;
      p{
        font-weight: 300;
        line-height: 21px;
        text-align: justify;
      }
    }
    .foundedContainerRight{
      width: 50%;
      img{
        width: 100%;
        float: right;
      }
    }
  }
}
.impact{
  padding-top: 80px;
  .impactContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .impactContainerLeft{
      width: 45%;
    }
    .impactContainerRight{
      width: 45%;
      .impactContainerRightTitle{
        font-style: normal;
        font-weight: 300;
        color: #3578F7;
        margin-bottom: 30px;
      }
      .impactContainerRightContent{
        font-style: normal;
        font-weight: 300;
        line-height: 28px;
        color: #444444;
        margin-bottom: 30px;
      }
      .impactContainerRightFooter{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .impactContainerRightFooterRight{
          cursor: pointer;
        }
      }
    }
  }
}

.team{
  padding-top: 80px;
  .teamContainer{
    .teamContainerTitle{
      font-weight: bold;
      color: #3578F7;
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .teamContainerItems{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-flow: row wrap;
    .teamContainerItem{
      flex: 0 0 25.1%;
      margin-bottom: 40px;
      align-items: flex-start;
      .teamContainerItemImg{
        img{
          width: 100%;
          border: 1px solid #f7f7f7;
        }
      }
      .teamContainerItemName{
        color: #123C7D;
        margin-top: 5px;
      }
      .teamContainerItemTitle{
        color: #123C7D;
        margin-top: 7px;
        margin-bottom: 25px;
        font-size: 16px;
      }
      .teamContainerItemLink{
        color: #123C7D;
      }
    }
  }
}
.investors{
  width: 100%;
  background: #123C7D;
  margin-top: 80px;
  .investorsContainer{
    padding: 80px;
    .investorsTitle{
        font-weight: bold;
        line-height: 60px;
        color: #fff;
        text-align: center;
    }
    .investorsItems{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 80px;
      .investorsItem{
        width: 240px;
        height: 120px;
        background: #fff;
        border: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          max-height: 100px;
          max-width: 140px;
        }
      }
    }
  }
}

.news{
  padding-top: 80px;
  padding-bottom: 80px;
  .newsContainer{
    .newsTitle{
      font-weight: bold;
      color: #123C7D;
      text-align: center;
      margin-bottom: 30px;
    }
    .newsSubtitle{
      color: #444444;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 40px;
      font-weight: 400;
    }
    .newsItems{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 30px;
      .newsItem{
        width: 48%;
        .newsItemDate{
          color: #001338;
          margin-bottom: 15px;
        }
        .newsItemTitle{
          color: #001338;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .addMoreBox{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }
  }
}

@media screen and (max-width:800px) {
  .companyBanner{
    background: #0D5FFF;
    .companyTitle{
      text-align: center;
      padding: 4rem 0 2rem;
      font-weight: bold;
      font-size: 2rem;
      color: #fff;
    }
  }

  .foundedArea{
    .foundedContainer{
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      .foundedContainerLeft{
        width: 80%;
        margin: 0 auto;
        padding-top: 2rem;
        p{
          font-weight: 300;
          font-size: 1.2rem;
          line-height: 2rem;
        }
      }
      .foundedContainerRight{
        width: 100%;
        img{
          width: 100%;
          margin: 0;
        }
      }
    }
  }
  .impact{
    padding: 0;
    .impactContainer{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      .impactContainerLeft{
        width: 90%;
        margin-left: 10%;
        img{
          width: 100%;
        }
      }
      .impactContainerRight{
        width: 80%;
        margin: 0 auto;
        .impactContainerRightTitle{
          font-style: normal;
          font-weight: 300;
          font-size: 2rem;
          color: #3578F7;
          margin: 2rem 0;
        }
        .impactContainerRightContent{
          font-style: normal;
          font-weight: 300;
          font-size: 1rem;
          line-height: 2rem;
          color: #444444;
          margin-bottom: 2rem;
        }
        .impactContainerRightFooter{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          .impactContainerRightFooterLeft{
            font-weight: bold;
            font-size: 1rem;
          }
          .impactContainerRightFooterRight{
            cursor: pointer;
          }
        }
      }
    }
  }

  .team{
    padding-top: 6rem;
    .teamContainer{
      .teamContainerTitle{
        width: 80%;
        margin: 0 auto;
        font-weight: bold;
        font-size: 2rem;
        color: #3578F7;
        text-align: left;
        margin-bottom:2rem;
      }
    }
    .teamContainerItems{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: 0 auto;
      .teamContainerItem{
        padding: 1.5rem 0;
        .teamContainerItemName{
          font-size: 24px;
          color: #123C7D;
          margin-top: 5px;
        }
        .teamContainerItemTitle{
          font-size: 16px;
          color: #123C7D;
          margin-top: 7px;
          margin-bottom: 25px;
        }
        .teamContainerItemLink{
          font-size: 16px;
          color: #123C7D;
        }
      }
    }
  }
  .investors{
    width: 100%;
    background: #123C7D;
    .investorsContainer{
      width: 80%;
      margin: 0 auto;
      padding: 2rem 0;
      .investorsTitle{
          font-weight: bold;
          font-size: 2rem;
          color: #fff;
          text-align: center;
      }
      .investorsItems{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
      .investorsItem{
        width: 240px;
        height: 120px;
        background: #fff;
        border: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        img{
          max-height: 100px;
          max-width: 140px;
        }
      }
      }
    }
  }

  .news{
    padding-top: 2rem;
    padding-bottom: 2rem;
    .newsContainer{
      .newsTitle{
        font-weight: bold;
        font-size: 2rem;
        color: #123C7D;
        text-align: center;
      }
      .newsSubtitle{
        font-size: 1.2rem;
        color: #444444;
        text-align: center;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        font-weight: 400;
      }
      .newsItems{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .newsItem{
          width: 80%;
          margin-bottom: 2rem;
          .newsItemDate{
            color: #001338;
            font-size: 14px;
            margin-bottom: 15px;
          }
          .newsItemTitle{
            color: #001338;
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
