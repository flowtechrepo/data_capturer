<template lang="pug">
.discoverMIKAWrapper
  .discoverMIKAContainer.bgGrey
    .discoverMIKASubtitles
      .discoverMIKASubtitleItem Trend Prediction
    .discoverMIKAContent
      .discoverMIKAContentHeader
        .discoverMIKAContentHeaderTitle Convey Targeted Message Through Effective Touchpoints
        .discoverMIKAContentHeaderContent It's getting more and more challenging to cut through the noise within a congested media space today. Brands need to convey a compelling message via the most effective media touchpoints to address any gap between brands and consumers.
      .discoverMIKAContentCards
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Always-on Market Intelligence
          .discoverMIKAContentCardContent Through millions of organic online conversations, we help you understand the gap between product claims and consumer perception and identify the opportunities in your positioning and communications strategy.
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Supercharge Your Research
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Industry-Specific Knowledge
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

    .discoverMIKAFooter
      .discoverMIKAFooterTitle Get Your Answers To
      .discoverMIKAFooterItems
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?

  .discoverMIKAContainer
    .discoverMIKASubtitles
      .discoverMIKASubtitleItem Trend Prediction
    .discoverMIKAContent
      .discoverMIKAContentHeader
        .discoverMIKAContentHeaderTitle Convey Targeted Message Through Effective Touchpoints
        .discoverMIKAContentHeaderContent It's getting more and more challenging to cut through the noise within a congested media space today. Brands need to convey a compelling message via the most effective media touchpoints to address any gap between brands and consumers.
      .discoverMIKAContentCards
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Always-on Market Intelligence
          .discoverMIKAContentCardContent Through millions of organic online conversations, we help you understand the gap between product claims and consumer perception and identify the opportunities in your positioning and communications strategy.
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Supercharge Your Research
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Industry-Specific Knowledge
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

    .discoverMIKAFooter
      .discoverMIKAFooterTitle Get Your Answers To
      .discoverMIKAFooterItems
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?

  .discoverMIKAContainer.bgGrey
    .discoverMIKASubtitles
      .discoverMIKASubtitleItem Trend Prediction
    .discoverMIKAContent
      .discoverMIKAContentHeader
        .discoverMIKAContentHeaderTitle Convey Targeted Message Through Effective Touchpoints
        .discoverMIKAContentHeaderContent It's getting more and more challenging to cut through the noise within a congested media space today. Brands need to convey a compelling message via the most effective media touchpoints to address any gap between brands and consumers.
      .discoverMIKAContentCards
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Always-on Market Intelligence
          .discoverMIKAContentCardContent Through millions of organic online conversations, we help you understand the gap between product claims and consumer perception and identify the opportunities in your positioning and communications strategy.
        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Supercharge Your Research
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

        .discoverMIKAContentCard
          .discoverMIKAContentCardIcon
            img(src="~/assets/images/team-1.jpg")
          .discoverMIKAContentCardTitle Industry-Specific Knowledge
          .discoverMIKAContentCardContent Find out the most effective touch points, not only based on conventional digital statistics, but also its contribution to actual sales.

    .discoverMIKAFooter
      .discoverMIKAFooterTitle Get Your Answers To
      .discoverMIKAFooterItems
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?
        .discoverMIKAFooterItem What consumers are looking for right now and what are likely to be their future interest?

</template>

<script>
export default {
  name: 'DiscoverMIKA',
  data () {
    return {
      discoverMikaTab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.discoverMIKAWrapper{
  @media only screen and (min-width: 800px) {
    display: none;
  }
  width: 100%;

  color: $titleColor;
  display: flex;
  flex-direction: column;
  .bgGrey{
    background: $lightBackground;
  }
  .discoverMIKAContainer{
    width: 100%;
    padding: 60px 0px;
    margin: 0 auto;
    .discoverMIKATitle{
      width: 100%;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }
    .discoverMIKASubtitles{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .discoverMIKASubtitleItem{
        flex: 1;
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        &:hover{
          color: #0D5FFF;
        }
      }
      .active{
        color: #0D5FFF;
      }
    }
    .discoverMIKAContent{
      width: 100%;
      .discoverMIKAContentHeader{
        width: 100%;
        padding: 60px;
        .discoverMIKAContentHeaderTitle{
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
          .discoverMIKAContentHeaderContent{
            font-size: 18px;
            line-height: 1.33;
          }
        }
      }
      .discoverMIKAContentCards{
        width: $percentageWidth;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .discoverMIKAContentCard{
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 30px 0;
          padding: 30px;
          border: 4px solid #0D5FFF;
          .discoverMIKAContentCardIcon{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 45px;
              border-radius: 50%;
            }
          }
          .discoverMIKAContentCardTitle{
            margin-top: 26px;
            font-size: 16px;
            font-weight: bold;
          }
          .discoverMIKAContentCardContent{
            margin-top: 26px;
            font-size: 13px;
            // text-align: justify;
          }
        }
      }
    }
    .discoverMIKAFooter{
      margin-top: 60px;
      border-top: 1px solid #2d3645;
      .discoverMIKAFooterTitle{
        margin-top: 60px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .discoverMIKAFooterItems{
        width: 100%;
        display: flex;
        margin-top: 30px;
        flex-direction: column;
        justify-content: space-between;
        .discoverMIKAFooterItem{
          flex: 1;
          font-size: 16px;
          font-weight: normal;
          padding: 30px;
        }
      }
    }
  }
}
</style>
