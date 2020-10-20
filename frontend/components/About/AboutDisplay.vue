<template lang="pug">
.DisplayContainer
  .DisplayWrapper
    .textDisplay
      .textBox
        //h3.titleDisplay About Us
        .contentDisplay
          p Headquartered in Singapore, flow is an AI-driven intelligence company spun off from NExT++, which is a joint research center established by the National University of Singapore, Tsinghua University of China and University of Southampton, UK.
          p We are founded by AI scientists and tech entrepreneurs to solve real-world challenges presented by the explosion of data.Dedicated in cognitive data intelligence, we develop state-of-the-art AI technology encompassing Natural Language Processing, Deep Learning, and Knowledge Graph.
          p Our mission is to deliver real-time, actionable insights to businesses to enable smarter decision-making, with a focus on Market Intelligence and Finance Intelligence.
        .btnWrapper
          a.btn(href="/career") JOIN US
      //- .imageDisplay
      //-   img.imageScale(src="~/assets/design/about/Rectangle.jpg")
</template>

<script>
export default {
  name: 'AboutDisplay'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.DisplayContainer {
  background: url('~assets/design/about/contentBG.jpg');
  background-size: auto 100%;
  padding: 100px 0;
  .DisplayWrapper {
    width: $percentageWidth;
    // max-width: $containerMaxWidth;
    max-width: 1000px;
    margin: 0 auto;
    .textDisplay {
      // max-width: 960px;
      // margin: 0 auto;
      // margin: 0 -1.5rem;
      position: relative;
      box-sizing: border-box;
      .btnWrapper {
        text-align: center;
      }
      .btn {
        padding: 0.6rem 2rem;
        margin: 20px auto 0 auto;
        color: #fff;
        border-radius: 14px;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s 0s;
        display: inline-block;
        background: $mainColor!important;
        &:hover {
          background: lighten($mainColor, 10%)!important;
        }
      }
      // display: flex;
      // align-items: center;
      // left: 1.5rem;
      // .imageDisplay {
      //   position: relative;
      //   left: -3rem;
      //   img {
      //     max-height: 360px;
      //     height: 100%;
      //     display: block;
      //   }
      // }
      .textBox {
        // padding: 40px 100px 40px 40px;
        border-radius: 1px;
        // background-color: $mainColor;
        .titleDisplay {
          text-align: center;
          // font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        .contentDisplay {
          p {
            color: #4f4f4f;
            // font-size: 0.8rem;
            // line-height: 1.2rem;
            // text-indent: 2em;
            // margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .DisplayContainer {
    padding: 20px 0;
    .DisplayWrapper {
      margin: 0;
      width: 100%;
      .textDisplay {
        left: 0;
        .imageDisplay {
          display: none;
        }
        .textBox {
          width: $percentageWidth;
          padding: 2rem 10%;
          box-sizing: border-box;
          width: 100%;
        }
      }
    }
  }
}
</style>
