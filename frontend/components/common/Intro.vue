<template lang="pug">
section.about
  h3.title {{title}}
  .content
    p(v-for="(c, i) in content" :key="i") {{c}}
</template>

<script>
export default {
  name: 'Intro',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

section.about {
  text-align: center;
  padding: 77px 0 84px 0;
  .content {
    text-align: left;
    max-width: 1140px;
    width: $percentageWidth;
    margin: 0 auto;
    p {
      font-size: $textSize;
      line-height: 1.5em;
    }
  }
  h3 {
    // margin-bottom: 2rem;
    margin-bottom: 12px;
    font-weight: 600;
  }
}
</style>
