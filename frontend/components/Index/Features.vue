<template lang="pug">
section.webFeatures
  // Start all features website
  h2.title What We Do
  .features
    .feature(v-for="feature in features" :key="feature.title")
      .icon
        component(:is="feature.icon")
      h5 {{feature.title}}
      span.spliter
      p {{feature.content}}
</template>
<script>
import yunyingguanli from '~/assets/design/home/yunyingguanli.svg'
import yibiaopan from '~/assets/design/home/yibiaopan.svg'
import fuwudiqiu from '~/assets/design/home/fuwudiqiu.svg'
import wuguan from '~/assets/design/home/wuguan.svg'
import peiwangyindao from '~/assets/design/home/peiwangyindao.svg'
import jichuguanli from '~/assets/design/home/jichuguanli.svg'

export default {
  name: 'Features',
  components: {
    yunyingguanli,
    yibiaopan,
    fuwudiqiu,
    wuguan,
    peiwangyindao,
    jichuguanli
  },
  data () {
    return {
      features: [{
        title: 'Enrich Data Utilisation',
        content: 'Strengthen data analytics capabilities to enhance innovation and operation',
        icon: 'yunyingguanli'
      }, {
        title: 'Data-driven Insights',
        content: 'Granular signals are extracted from text to transform unstructured data into useful insights',
        icon: 'yibiaopan'
      }, {
        title: 'Pinpoint Causality',
        content: 'Besides correlation, our in-depth analysis can reveal causal relationships',
        icon: 'fuwudiqiu'
      }, {
        title: 'Discover ‘Unknowns’',
        content: 'Validate your hypotheses and uncover insights you never knew before',
        icon: 'wuguan'
      }, {
        title: 'Spot Early Trends',
        content: 'Detect early signals, predict upcoming trends and stay responsive to changes',
        icon: 'peiwangyindao'
      }, {
        title: 'Real Business Impact',
        content: 'Derive explainable and actionable insights that have tangible business results',
        icon: 'jichuguanli'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.webFeatures {
  text-align: center;
  .features {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    justify-content: center;
    .feature {
      padding: 1.2rem;
      border: 1px solid $boxColor;
      width: 30%;
      margin: 1rem;
      box-sizing: border-box;
      border-radius: 4px;
      transition: all 0.4s 0s;
      // cursor: pointer;
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
        margin: 8px auto 8px auto;
        background-color: $mainColor;
        width: 40px;
        height: 8px;
        transition: transform 0.4s 0s;
      }
      h5 {
        // font-size: 1.2rem;
        margin-top: 1rem;
        // margin-bottom: 1rem;
      }
      p {
        font-size: $textSize;
        padding-bottom: 0;
        // font-size: 0.8rem;
        // margin:  0 0 0;
      }
      .icon {
        font-size: 50px;
        text-align: center;
        transition: .2s;
        height: 50px;
        width: 50px;
        display: block;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      margin: 0;
      .feature {
        width: auto;
      }
    }
  }
}
</style>
<style lang="scss">
@import '@/assets/scss/global.scss';

.webFeatures {
  .features {
    .feature {
      svg {
        transition: transform 0.4s 0s;
        path {
          transition: fill 0.4s 0s;
        }
      }
      &:hover {
        svg {
          transform: scale(1.1);
          g[fill-rule="nonzero"] path {
            fill: $mainColor;
          }
        }
      }
    }
  }
}
// svg path {
//   stroke-dasharray: 1000;
//   stroke-dashoffset: 0;
//   animation: dash 0.5s linear;
// }
// @keyframes dash {
//   to {
//     stroke-dashoffset: 10000;
//   }
// }
</style>
