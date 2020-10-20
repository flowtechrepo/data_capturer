<template lang="pug">
.TeamWrapper
  h2 Our Core Team
  .photo
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/design/about/hb.png")
      .teamDetail
        h6.position CEO & Co-Founder
        h6.name Dr Luan Huanbo
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/design/about/wc-white.png")
      .teamDetail
        h6.position CTO & CO-Founder
        h6.name Dr Wang Chao
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/design/about/pc.png")
      .teamDetail
        h6.position Chairman & Co-Founder
        h6.name Prof Chua Tat-Seng
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/design/about/ry.png")
      .teamDetail
        h6.position Chief Strategist & Co-Founder
        h6.name Roger Yuen
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/design/about/zb.jpg")
      .teamDetail
        h6.position Chief Scientist
        h6.name Prof Zhang Bo
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.TeamWrapper {
  padding: 4rem 0;
  background-color: $lightBackground;
  h2 {
    text-align: center;
    padding-bottom: 3rem;
    font-size: 1.6rem;
  }
  .photo {
    width: $percentageWidth;
    max-width: $containerMaxWidth + 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .photoBoxWithMargin {
      flex: 1;
      .photoScaleWithMargin {
        text-align: center;
        padding: 0px 20px;
        .photoStyle {
          // width: 100%;
          width: 180px;
          height: 180px;
          border-radius: 100%;
        }
      }
      .teamDetail {
        h6 {
          // font-size: 0.8rem;
          text-align: center;
          padding-top: 0.3rem;
          margin: 0;
          &.position {
            height: 1em;
          }
          &.name {
            font-weight: bold;
          }
          // line-height: 1rem;
          &:first-child {
            padding-top: 2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 840px) {
  .TeamWrapper {
    .photo {
      flex-wrap: wrap;
      .photoBoxWithMargin {
        // flex: 1;
        width: 50%;
        flex: none;
        margin-bottom: 2rem;
        .photoScaleWithMargin {
          text-align: center;
          padding: 0px 20px;
          .photoStyle {
            border-radius: 100%;
          }
        }
        .teamDetail {
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .TeamWrapper {
    .photo {
      .photoBoxWithMargin {
        width: 60%;
        margin: 0 auto;
        .photoScaleWithMargin {
          display: block;
          .photoStyle {
            width: 100%;
            height: auto;
          }
        }
        .teamDetail {
          padding-bottom: 40px;
          .position {
            padding: 20px 0 0 0!important;
          }
        }
      }
    }
  }
}
</style>
