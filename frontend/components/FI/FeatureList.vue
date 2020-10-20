<template lang="pug">
  .listWrapper.mediaQuery
    .listContainer
      h2.titleWithLine {{title}}
      h4.subtitle(v-if="subTitle") {{subTitle}}
      .listContent
        .listContentItem(v-for="(d,k) in data" :key="k")
          .listContentItemImg
            component(:is="d.svg")
          h4.listContentItemTitle {{d.title}}
          span.spliter
          p.listContentItemContent {{d.desc}}
</template>

<script>
import icon1 from '~/assets/design/FI/1.svg'
import icon2 from '~/assets/design/FI/2.svg'
import icon3 from '~/assets/design/FI/3.svg'

export default {
  name: 'FeatureList',
  components: {
    icon1,
    icon2,
    icon3
  },
  data () {
    return {
      title: 'Features',
      subTitle: 'We apply AI technology in different operational areas such as credit analysis automation, trade finance automation, and accounting automation.',
      data: [{
        svg: 'icon1',
        title: 'Automated Information Extraction',
        desc: 'Machine reading comprehension technology accurately extracts required information within unstructured documents to reduce human dependency on repetitive tasks.'
      }, {
        svg: 'icon2',
        title: 'Automated Compliance Check',
        desc: 'Rule engine turns human knowledge into organisational asset and deploys intelligent automation for enhanced efficiency.'
      }, {
        svg: 'icon3',
        title: 'Automated Risk Detection',
        desc: 'Intelligent automation combines artificial intelligence and expert knowledge to conduct real-time monitoring for illicit activities, in order to decrease operational, compliance or investment risk'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.listWrapper{
  .listContainer{
    width: $percentageWidth;
    margin: 0 auto;
    max-width: $specWidth;
    padding: 100px 0;
    .titleWithLine{
      text-align: center;
      text-transform:capitalize;
    }
    .subtitle {
      // font-size: 1rem;
      text-align: center;
      // color: #4f4f4f;
      opacity: 0.7;
      line-height: 1.38em;
      padding: 0;
      max-width: 985px;
      // width: 86%;
      margin: 0 auto;
      // margin: 2rem 0;
    }
    .listContent{
      margin-top: 90px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      .listContentItem{
        padding: 50px 30px 0 30px;
        flex: 1;
        background: #fff;
        height: 560px;
        margin: 0 40px;
        border-radius: 2px;
        box-shadow: 2px 2px 2px 0 rgba(217, 210, 210, 0.5);
        border: 1px solid transparent;
        transition: all 0.4s 0s;
        &:hover {
          border-top: 1px solid $mainColor;
          border-radius: 0;
          box-shadow: 0px 10px 14px rgba(0,0,0,0.1);
          span.spliter {
            transform: scale(1.5, 1);
          }
        }
        span.spliter {
          display: block;
          border-radius: 8px;
          margin: 20px auto;
          background-color: $mainColor;
          width: 40px;
          height: 8px;
          transition: transform 0.4s 0s;
        }
        &:first-child, &:last-child {
          margin: 0;
        }
        // cursor: pointer;
        @media only screen and (max-width: 800px) {
          width: 100%;
          padding: 0px;
        }
        .listContentItemImg{
          height: 142px;
          max-width: 100%;
          margin: 0 auto;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .listContentItemTitle{
          margin: 60px 0px 0px 0px;
          text-align: center;
          font-weight: 600;
          min-height: 54px;
          // height: 74px;
          padding: 0;
          // margin-bottom: 20px;
        }
        .listContentItemContent{
          // font-size: 0.9rem;
          line-height: 1.5;
          padding-top: 0;
          // text-align: justify;
        }
      }

    }
  }
}
@media screen and (max-width: 1100px) {
  .mediaQuery.listWrapper {
    .listContainer{
      padding: 50px 0;
      .listContent {
        display: block;
        margin-top: 20px;
        .listContentItem {
          margin: 0;
          margin-bottom: 20px;
          padding: 50px;
          width: auto;
          height: auto;
          .listContentItemTitle {
            margin: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .mediaQuery.listWrapper {
    .listContainer{
      .listContent {
        .listContentItem {
          padding: 10px;
        }
      }
    }
  }
}
</style>
