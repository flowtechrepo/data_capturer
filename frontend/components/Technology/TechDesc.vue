<template lang="pug">
.technologies
  .technologyContainer(v-for="(t, i) in techDesc" :key="i" :style='{backgroundImage: `url(${t.image})` , backgroundColor: t.backgroundColor}' :class="{[t.className]: true}")
    .technologyWrapper()
      .technology
        h3 {{t.title}}
        .desc
          p(v-for="(d, di) in t.desc" :key="di") {{d}}
      .tachnologyImg
        template(v-if="t.icon")
          img(:src="t.icon" v-if="t.iconType === 'png'")
          component(:is="t.icon" v-else)
</template>

<script>
import SVG1 from '~/assets/design/technology/1.svg'
import SVG2 from '~/assets/design/technology/2.svg'
import SVG3 from '~/assets/design/technology/3.svg'
import SVG4 from '~/assets/design/technology/4.svg'

export default {
  name: 'TechDesc',
  components: {
    SVG1,
    SVG2,
    SVG3,
    SVG4
  },
  props: {
  },
  data () {
    return {
      techDesc: [{
        title: 'Multilingual Natural Language Processing',
        desc: ['Using domain-content specific natural language processing models, we extract granular signals from text to generate detailed, data-driven insights. Besides your brand’s sentiment score, we can point out exactly what attributes are favoured or disliked.', 'Our proprietary 15 layers of data filtering framework cleans out spam and irrelevant data before the analysis stage. This ensures a high level of data veracity for our research.'],
        image: require('~/assets/design/technology/1.jpg'),
        icon: require('~/assets/design/technology/1.png'),
        iconType: 'png',
        backgroundColor: '#f6f5f6',
        className: 'tech1'
      }, {
        title: 'Deep Learning Enhanced by Domain-Specific Knowledge Graph',
        desc: ['We combine human expert knowledge with artificial intelligence to bring you actionable and forerunning insights. Our research, data science and insights teams develop domain specific ontology to enhance insight mining and trend detection capabilities.', 'We recognise new product attributes and measure their potential impact to the market.'],
        image: require('~/assets/design/technology/2.jpg'),
        icon: 'SVG2',
        backgroundColor: 'rgb(37, 43, 55)',
        className: 'tech2'
      }, {
        title: 'Predictive & Explainable AI',
        desc: ['Our deep learning models deliver both high level of predictive accuracy and explainability.Conventional deep learning models offer predictions, but they cannot explain why or how a phenomenon happens.', 'By integrating clean data, human expertise knowledge and our advanced explainable neural network technologies, we can identify the relationship between attributes, features, and people to understand the commercial impact and predict a future occurrence.'],
        image: require('~/assets/design/technology/3.jpg'),
        iconType: 'png',
        icon: require('~/assets/design/technology/3.png'),
        backgroundColor: 'rgb(239, 243, 246)',
        className: 'tech3'
      }, {
        title: 'Machine Reading Comprehension',
        desc: ['Besides understanding the context and semantics of text content, it is critical that the machine does it with high accuracy.flow has researched and developed various technologies to apply in the understanding of content in different formats such as financial documents, news reporting, online conversations etc.', 'We have developed our enhanced version of the latest and powerful pre-trained models BERT (Bidirectional Encoder Representations from Transformers) and ELMo (Embeddings from Language Models).'],
        image: require('~/assets/design/technology/4.jpg'),
        icon: 'SVG4',
        backgroundColor: 'rgb(239, 243, 246)',
        className: 'tech4'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.technologies {
  // margin-top: 3rem;
  .technologyContainer{
    // padding: $normalComponentPadding 0;
    background-position: left center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    height: 768px;
    display: flex;
    &.tech2 {
      background-position: center bottom;
      h3, p {
        color: #fff;
      }
    }
    &.tech4 {
      background-position: center bottom;
      h3, p {
        color: #fff;
      }
    }
    &.tech1 {
      .tachnologyImg {
        align-self: flex-end;
      }
    }
    .technologyWrapper {
      display: flex;
      max-width: $containerMaxWidth;
      width: $percentageWidth;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
    }
    &:nth-child(even) {
      .technologyWrapper {
        flex-direction: row-reverse;
      }
    }
    .technology {
      width: 50%;
      h3 {
      }
      p {
        font-size: 1rem;
        line-height: 1.4rem;
        &:last-child {
          margin: 0;
        }
      }
      img {
        flex: 1;
      }
    }
    .tachnologyImg {
      width: 45%;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 830px) {
  .technologies .technologyContainer {
    height: auto;
    padding: 100px 0;
    .technologyWrapper {
      margin: 0;
      width: 100%;
    }
    .technology {
      padding: 0;
      width: 90%;
      margin: 0 auto;
    }
  }
  .tachnologyImg {
    display: none;
  }
}
svg {
  width: 100%;
}
</style>
