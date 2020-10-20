<template lang="pug">
.discoverMIKAWrapper.mediaQuery
  .discoverMIKAContainer
    h2.titleWithLine {{currentWords.title}}
    .discoverMIKASubtitles
      h4.discoverMIKASubtitleItem(v-for="(m, k) in currentWords.sliders" :key="k" @click="clickHandler(k)" :class="{'active': discoverMikaTab === k}") {{m.bannerTitle}}
    .discoverMIKAContentWrapper
      .discoverMIKAContentInner(:style="{transform: 'translate3d(' + tabTransform + ',0,0)'}")
        .discoverMIKAContent(v-for="(m, k) in currentWords.sliders" :key="k")
          .discoverMIKAContentHeader
            .discoverMIKAContentHeaderContent
              h3.discoverMIKAContentHeaderTitle {{m.title}}
              p {{m.mainContent}}
            component.mainIcon(:is="m.mainIcon")
          .discoverMIKAContentCards
            .discoverMIKAContentCard(v-for="(card, j) in m.cards" :key="j")
              .discoverMIKAContentCardIcon
                component(:is="card.icon")
              h5.discoverMIKAContentCardTitle {{card.title}}
              p.discoverMIKAContentCardContent {{card.content}}
          .discoverMIKAFooter
            h3.discoverMIKAFooterTitle {{currentWords.getAnsterText}}
            .discoverMIKAFooterItems
              .discoverMIKAFooterItem(v-for="(question, k) in m.questions" :key="k")
                p {{question}}
</template>

<script>
import svg11 from '~/assets/design/mika/1-1.svg'
import svg12 from '~/assets/design/mika/1-2.svg'
import svg13 from '~/assets/design/mika/1-3.svg'
import svg21 from '~/assets/design/mika/2-1.svg'
import svg22 from '~/assets/design/mika/2-2.svg'
import svg23 from '~/assets/design/mika/2-3.svg'
import svg31 from '~/assets/design/mika/3-1.svg'
import svg32 from '~/assets/design/mika/3-2.svg'
import mainIcon1 from '~/assets/design/mika/1.svg'
import mainIcon2 from '~/assets/design/mika/2.svg'
import mainIcon3 from '~/assets/design/mika/3.svg'

export default {
  name: 'DiscoverMIKA',
  components: {
    svg11,
    svg12,
    svg13,
    svg21,
    svg22,
    svg23,
    svg31,
    svg32,
    mainIcon1,
    mainIcon2,
    mainIcon3
  },
  props: {
    lang: {
      type: String,
      default: () => 'en'
    }
  },
  data () {
    return {
      autoplay: true,
      autoplayGap: 10000,
      discoverMikaTab: 0,
      tabTransform: '0%',
      words: {
        en: {
          title: 'Discover MIKA',
          getAnsterText: 'Get Your Answers To:',
          sliders: [{
            mainIcon: 'mainIcon1',
            title: 'Detect Trends, React Fast & Stay Ahead',
            mainContent: 'Market trends come and go much faster today. Global brands are losing market share to smaller and nimbler businesses which react faster to changes and local consumer needs.',
            bannerTitle: 'Trend Prediction',
            cards: [{
              title: 'Always-on Market Intelligence',
              content: 'Discover the latest market dynamics and competitive landscape',
              icon: 'svg11'
            }, {
              title: 'Supercharge Your Research',
              content: 'Understand consumer behavior, interests, attitudes, preferences and knowledge',
              icon: 'svg12'
            }, {
              title: 'Industry-Specific Knowledge',
              content: 'Get in-depth context to what’s driving the trend and the underlying business implication',
              icon: 'svg13'
            }],
            questions: [
              'What consumers are looking for right now and what are likely to be their future interest?',
              'What new ingredients or new benefits are emerging in the category?',
              'What’s driving the current category trend and how will the trend move in the future?',
              'What are the growth opportunities, and which should we prioritise?'
            ]
          }, {
            mainIcon: 'mainIcon2',
            title: 'Attain the Right Product-Market Fit',
            bannerTitle: 'Product Innovation',
            mainContent: 'There is a constant pressure to anticipate future demand and build pipelines for product development, under the challenge of minimising high-cost of time and trials. Fast-changing market dynamics makes it much harder to position the new product in the right space.',
            cards: [{
              title: 'Up-to-date Holistic View on Product Offerings',
              content: 'Identify the white space and unmet needs for new product innovation',
              icon: 'svg21'
            }, {
              title: 'Uncover Hidden Relations Between Feature and Revenue',
              content: 'Measure the impact of each product attribute on sales to focus on what matters the most',
              icon: 'svg22'
            }, {
              title: 'Strengthen Innovation Pipeline',
              content: 'Identify growth drivers. Recommend and test new product features or  combinations',
              icon: 'svg23'
            }],
            questions: [
              'Are we offering the features and benefits that are relevant to market needs?',
              'What are the key white spaces and growth opportunities in my category?',
              'What product features have the potential to impact sales but yet be noticed by other players?',
              'Why are certain products trending and how can I leverage on them?'
            ]
          }, {
            mainIcon: 'mainIcon3',
            title: 'Convey Targeted Message Through Effective Touchpoints',
            bannerTitle: 'Brand Communication',
            mainContent: 'It\'s getting more and more challenging to cut through the noise within a congested media space today. Brands need to convey a compelling message via the most effective media touchpoints to address any gap between brands and consumers.',
            cards: [{
              title: 'Enhance Brand Communication',
              content: 'Understand the gap between product claims and consumer perception. Identify opportunities in your positioning and communications',
              icon: 'svg31'
            }, {
              title: 'Marketing Effectiveness',
              content: 'Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales',
              icon: 'svg32'
            }],
            questions: [
              'What do my brand and my competitor brands represent and stand for in consumers\' minds?',
              'Which part of product experience did not deliver to consumers’ expectation which is critically affecting sales?',
              'What can I learn from my current campaign to improve the use of media touch points for my future campaigns?'
            ]
          }]
        },
        zh: {
          title: '了解MIKA',
          getAnsterText: '获得您想知道的答案：',
          sliders: [{
            mainIcon: 'mainIcon1',
            title: '发掘趋势、迅速响应 & 占领先机',
            bannerTitle: '趋势预测',
            mainContent: '如今的市场趋势千变万化。 国际品牌的市场份额正在被小而快的品牌所瓜分。这些小品牌针对趋势的变化和当地消费者的需求能做出更敏捷的反应。',
            cards: [{
              title: '随时在线的市场情报',
              content: '发现最新的市场动态和竞争格局。',
              icon: 'svg11'
            }, {
              title: ' AI 赋能的市场研究',
              content: '研究消费者行为、兴趣、态度、偏好和认知。',
              icon: 'svg12'
            }, {
              title: '不断积累的领域知识',
              content: '深入了解影响趋势的重要因素及其商业价值。',
              icon: 'svg13'
            }],
            questions: [
              '消费者现在关注什么，他们未来的兴趣可能是什么？',
              '这个行业中出现了哪些新兴的成分和产品功能？',
              '什么因素驱动了当前这个行业的发展，未来的趋势将如何发展?',
              '有哪些增长机遇，我们应该优先考虑哪些？'
            ]
          }, {
            mainIcon: 'mainIcon2',
            title: '确保正确的市场定位',
            bannerTitle: '产品创新',
            mainContent: '预测未来需求并建立产品蓝图一直是企业面临的一大挑战。在瞬息万变的市场动态中，新产品获得正确的市场定位变得更加困难。',
            cards: [{
              title: '提供最新的市场产品纵览',
              content: '发掘空白机遇和未满足的需求，激发产品创新。',
              icon: 'svg21'
            }, {
              title: '发现产品特性与销售之间的隐藏关系',
              content: '衡量每个产品特性对销售额的贡献，以将营销的重点放在消费者最看重的特性上。',
              icon: 'svg22'
            }, {
              title: '赋能产品创新蓝图',
              content: '发掘销售增长因素。推荐并测试新的产品特性和组合。',
              icon: 'svg23'
            }],
            questions: [
              '我们产品的功能和优势是否符合市场的需求？',
              '在这个行业中，由哪些重要的空白机遇和增长机会？',
              '哪些产品特性有潜力促进销售增长，但尚未引起其他品牌的注意？',
              '为什么某些产品流行，我们该如何利用它们?'
            ]
          }, {
            mainIcon: 'mainIcon3',
            title: '通过有效的渠道传递有针对性的信息',
            bannerTitle: '品牌传播',
            mainContent: '在拥挤的媒介空间中，如何能够帮助品牌通过最有效的方式传达有说服力的信息给消费者，从而解决品牌宣传和消费者认知之间的差距是一项非常大的挑战。',
            cards: [{
              title: '增强品牌传播',
              content: '了解品牌宣传和消费者认知之间的差距。发掘产品定位和传播策略中的机遇。',
              icon: 'svg31'
            }, {
              title: '优化营销策略',
              content: '找准最有效的渠道，不仅基于传统的数字统计，还有它对实际销售的贡献。',
              icon: 'svg32'
            }],
            questions: [
              '我的品牌和竞争对手的品牌在消费者心中的定位如何?',
              '哪部分产品体验没有达到消费者的期望，这是否对销售产生了严重的影响?',
              '我能从我当前的营销活动中学到哪些经验，以便我在下次活动中更好的利用媒介触点?'
            ]
          }]
        }
      }
    }
  },
  computed: {
    currentWords () {
      return this.words[this.lang]
    }
  },
  created () {
    setTimeout(() => {
      this.setAutoPlay()
    }, this.autoplayGap)
  },
  methods: {
    setAutoPlay () {
      if (this.autoplay) {
        this.changeSlider(this.discoverMikaTab < 2 ? this.discoverMikaTab + 1 : 0)
        setTimeout(this.setAutoPlay, this.autoplayGap)
      }
    },
    clickHandler (i) {
      this.autoplay = false
      this.changeSlider(i)
    },
    changeSlider (i) {
      this.discoverMikaTab = i
      this.tabTransform = '-' + (i * 33.3).toString() + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.discoverMIKAWrapper{
  width: 100%;
  // background-image: url(~assets/design/mika/mikabg.jpg);
  background: $lightBackground;
  padding: 100px 0px 0 0;
  // display: flex;
  // flex-direction: column;
  .discoverMIKAContentWrapper {
    overflow: hidden;
    background: #fff;
    padding-bottom: 58px;
    .discoverMIKAContentInner {
      transition: transform 0.6s 0s;
      width: 300%;
      display: flex;
    }
    .discoverMIKAContent {
      width: 31.3%;
      margin: 0 1%;
      box-sizing: border-box;
      overflow: hidden;
      @media screen and (max-width: 600px) {
        &:nth-child(3) {
          .discoverMIKAContentHeader .discoverMIKAContentHeaderContent {
            padding: 50px 0px;
          }
          .discoverMIKAContentCards .discoverMIKAContentCard {
            padding: 100px 10px;
            margin: 60px 0!important;
          }
        }
      }
    }
  }
  .discoverMIKAContainer{
    .titleWithLine{
      text-align: center;
      margin-bottom: 42px;
      text-transform:capitalize;
    }
    .discoverMIKASubtitles{
      // margin: 1rem 3%;
      // padding: 1rem 0;
      // border-top: 1px solid rgba(255, 255, 255, 0.6);
      // border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: $percentageWidth;
      max-width: $containerMaxWidth;
      margin: 0 auto;
      .discoverMIKASubtitleItem{
        flex: 1;
        // font-size: 1.2rem;
        // height: 2rem;
        // line-height: 2rem;
        padding: 30px 0;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        position: relative;
        // border-left: 1px solid #f3f3f3;
        &:before {
          background: rgba(255, 255, 255, 0.4);
          content: " ";
          display: block;
          height: 80%;
          width: 1px;
          top: 10%;
          position: absolute;
          left: 0;
        }
        // &:first-child {
        //   border: 0;
        //   &:before {
        //     display: none;
        //   }
        //   text-align: left;
        // }
        // &:last-child {
        //   text-align: right;
        // }
        &:hover{
          color: #0D5FFF;
        }
      }
      .active{
        // color: #0D5FFF;
        background: #fff;
      }
    }
    .discoverMIKAContent{
      width: $percentageWidth;
      max-width: $containerMaxWidth;
      margin: 0 auto;
      .discoverMIKAContentHeader{
        // margin: 0 30px;
        padding: 50px 0 50px 0;
        // margin-bottom: 80px;
        display: flex;
        position: relative;
        justify-content: space-around;
        align-items: center;
        // border-bottom: 1px solid $borderColor;
        // &:after {
        //   content: " ";
        //   background: $borderColor;
        //   height: 1px;
        //   width: 120%;
        //   display: block;
        //   position: absolute;
        //   left: -10%;
        //   bottom: 0;
        // }
        .mainIcon {
          width: 160px;
          padding: 0 60px;
          // margin-top: 80px;
        }
        .discoverMIKAContentHeaderTitle{
          margin-bottom: 20px;
          font-weight: 600;
        }
        .discoverMIKAContentHeaderContent{
          flex: 1;
          // margin-left: 110px;
          p {
            // max-width: 640px;
            // font-size: 22px;
            line-height: 1.5;
          }
        }
      }
      .discoverMIKAContentCards{
        display: flex;
        position: relative;
        padding-bottom: 20px;
        margin-bottom: 20px;
        // margin: 0 -2rem;
        // &:after {
        //   content: " ";
        //   background: $borderColor;
        //   height: 1px;
        //   width: 120%;
        //   display: block;
        //   position: absolute;
        //   left: -10%;
        //   bottom: 0;
        // }
        .discoverMIKAContentCard{
          padding: 40px;
          border: 1px solid $borderColor;
          border-radius: 4px;
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 30px;
          @media screen and (max-width: 700px) {
            padding: 20px;
          }
          // padding: 30px;
          &:first-child {
            margin: 0;
          }
          // border: 2px solid #0D5FFF;
          .discoverMIKAContentCardIcon{
            height: 100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 45px;
              border-radius: 50%;
            }
          }
          h5.discoverMIKAContentCardTitle{
            font-size: 18px;
            text-align: center;
            margin: 0;
            font-weight: 600;
            padding: 0;
            margin: 0;
            margin-top: 30px;
            margin-bottom: 30px;
            min-height: 40px;
          }
          p.discoverMIKAContentCardContent{
            padding: 0;
            margin: 0;
            line-height: 1.5em;
            text-align: left;
            word-spacing: 2px;
          }
        }
      }
    }
    .discoverMIKAFooter{
      // border-top: 1px solid rgba(255,255,255,0.6);
      // margin-top: 4rem;
      // padding-top: 4rem;
      text-align: center;
      .discoverMIKAFooterTitle{
        // text-align: center;
        // font-size: 1.2rem;
        font-weight: 600;
      }
      .discoverMIKAFooterItems{
        // display: flex;
        margin-top: 2rem;
        // flex-direction: row;
        // justify-content: space-between;
        .discoverMIKAFooterItem{
          position: relative;
          border: solid 2px #2de6e3;
          box-shadow: -7px 2px 3px 0 rgba(89, 255, 221, 0.5);
          padding: 22px;
          border-top: 0;
          background: $lightBackground;
          transition: all 0.4s 0s;
          &:hover {
            background: #fff;
            // transform: scale(1.1);
            // z-index: 10;
          }
          p {
            line-height: 1.4em;
            margin: 0;
            padding: 0;
          }
          &:first-child{
            border-top: solid 2px #2de6e3;
            // padding-left: 0;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1030px) {
  .mediaQuery.discoverMIKAWrapper {
    .mainIcon {
      display: none;
    }
    .discoverMIKAContainer .discoverMIKAContent .discoverMIKAContentHeader .discoverMIKAContentHeaderContent{
      margin: 0 auto;
      width: 80%;
      flex: none;
    }
    .discoverMIKAContainer .discoverMIKAContent .discoverMIKAContentCards {
      display: block;
      width: 80%;
      margin: 0 auto;
      &:after {
        display: none;
      }
      .discoverMIKAContentCard {
        border-bottom: 1px solid #efefef;
        margin: 0;
        margin-bottom: 50px;
        padding-bottom: 50px;
        // margin: 0 10px;
      }
    }
    .discoverMIKAContainer .discoverMIKAFooter .discoverMIKAFooterItems {
      margin: 2rem auto 0;
      width: 80%;
    }
  }
}
</style>

<style lang="scss">
  .discoverMIKAContentCardIcon {
    display: flex;
    justify-content: center;
    svg {
      height: 80px;
    }
  }
</style>
