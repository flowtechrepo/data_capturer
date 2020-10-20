<template lang="pug">
.LatestNewsContainer
  .titleStyle
    | Latest News
  .newsBox
    .oneNewsBoxWithMargin
      .newsImage
        img(class="newImageScale" src="~/assets/slider/images/slide-2.jpg")
      .newsText
        .newsItemHeader
          .newsItemHeaderLeft
            .newsTitle
              | NUS SPINS OFF DATA ANALYTICS STARTUP flow
            .newsSubtitle
              | By Digital News Asia
          .newsItemHeaderRight
            .newsDate 17/07
        .newsContent
          | flow is an AI-driven intelligence company spun off from NExT++, a joint research centre established between National University of Singapore (NUS), AI research institutions and academia to gain early access to cutting edge technological concepts.AI research institutions and academia to gain early access to cutting edge technological concepts.
          | <a href="#"><span class="More">More...</span></a>
    .oneNewsBoxWithMargin
      .newsImage
        img(class="newImageScale" src="~/assets/slider/images/slide-2.jpg")
      .newsText
        .newsItemHeader
          .newsItemHeaderLeft
            .newsTitle
              | NUS SPINS OFF DATA ANALYTICS STARTUP flow
            .newsSubtitle
              | By Digital News Asia
          .newsItemHeaderRight
            .newsDate 17/07
        .newsContent
          | flow is an AI-driven intelligence company spun off from NExT++, a joint research centre established between National University of Singapore (NUS), AI research institutions and academia to gain early access to cutting edge technological concepts.AI research institutions and academia to gain early access to cutting edge technological concepts.
          | <a href="#"><span class="More">More...</span></a>
    .oneNewsBoxWithMargin
      .newsImage
        img(class="newImageScale" src="~/assets/slider/images/slide-2.jpg")
      .newsText
        .newsItemHeader
          .newsItemHeaderLeft
            .newsTitle
              | NUS SPINS OFF DATA ANALYTICS STARTUP flow
            .newsSubtitle
              | By Digital News Asia
          .newsItemHeaderRight
            .newsDate 17/07
        .newsContent
          | flow is an AI-driven intelligence company spun off from NExT++, a joint research centre established between National University of Singapore (NUS), AI research institutions and academia to gain early access to cutting edge technological concepts.AI research institutions and academia to gain early access to cutting edge technological concepts.
          | <a href="#"><span class="More">More...</span></a>

  .lineStyle
  .btnStyle
    a.btnReadMore(href='#')
      .textReadMore Read More
</template>

<script>
export default {
  name: 'LatestNews'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.LatestNewsContainer {
  background-color: white;
  .titleStyle {
    margin-top: 100px;
    font-size: 30px;
    font-weight: bold;
    color: black;
    text-align: center;
  }
  .newsBox {
    width: 1139px;
    margin: 0 auto;
    margin-top: 94px;
    @media only screen and (max-width: 1139px) {
      width: 90%;
      margin: 50px auto;
    }
    .oneNewsBoxWithMargin {
      cursor: pointer;
      width: 100%;
      margin-bottom: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
      .newsImage {
        flex: 0;
        width: 272px;
        height: 183px;
        background-color: black;
        .newImageScale {
          width: 272px;
          height: 183px;
        }
      }
      .newsText {
        flex: 1;
        width: auto;
        margin-left:50px;
        @media only screen and (max-width: 600px) {
          margin-top: 30px;
          margin-left: 0px;
        }
        .newsItemHeader{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .newsItemHeaderLeft{
            .newsTitle {
              font-size: 18px;
              color: $titleColor;
              margin-bottom: 8px;
            }
            .newsSubtitle {
              font-size: 12px;
              color: #25b4a8;
              margin-bottom: 30px;
            }
          }
          .newsItemHeaderRight{
            .newsDate{
                font-size: 48px;
                color: #cccccc;
            }
          }
        }
        .newsContent {
          font-size: 16px;
          line-height: 1.5;
          // text-align: justify;
          color: #666666;
          .More {
            font-size: 16px;
            color: #25b4a8;
          }
        }
      }
    }
    .oneNewsBoxWithoutMargin {
      width: 1139px;
      height: 183px;
      position: relative;
      .newsImage {
        width: 272px;
        height: 183px;
        background-color: black;
        .newImageScale {
          width: 272px;
          height: 183px;
        }
      }
      .newsText {
        position: absolute;
        top: 0px;
        left: 309px;
        width: 830px;
        height: 183px;
        .newsTitle {
          font-size: 18px;
          color: $titleColor;
          margin-bottom: 8px;
        }
        .newsSubtitle {
          font-size: 12px;
          color: #25b4a8;
          margin-bottom: 30px;
        }
        .newsContent {
          font-size: 16px;
          line-height: 1.5;
          color: #666666;
          .More {
            font-size: 16px;
            color: #25b4a8;
          }
        }
      }
    }
  }
  .lineStyle {
    margin: 0 auto;
    margin-top: 39px;
    width: 1141px;
    height: 1px;
    background: #eaeaea
  }
  .btnStyle {
    height: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    .btnReadMore {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 230px;
      height: 50px;
      border-radius: 44px;
      border: solid 1px #0D5FFF;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;;
      .textReadMore {
        font-size: 18px;
        font-weight: bold;
        color: #0D5FFF;
      }
    }
  }
}
</style>
