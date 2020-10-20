<template lang="pug">
  .banner(:style="{backgroundImage: 'url(' + background + ')'}")
    .content
      .contentInside
        h1.mainTitle( v-html="title")
        h2(v-if="h2Title") {{h2Title}}
        h3(v-if="viceTitle") {{viceTitle}}
        h4(v-if="h4Title" v-html="h4Title")
        p(v-if="desc") {{desc}}
      .handlers
        slot(name="handler")
    slot(name="svg")
</template>

<script>
export default {
  name: 'CommonBanner',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    viceTitle: {
      type: String,
      default: () => ''
    },
    h2Title: {
      type: String,
      default: () => ''
    },
    h4Title: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
    background: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.banner {
  height: 500px;
  // background-color: #000000;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  &:after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    // background: rgba(0, 0, 0, 0.1);
  }
  .handlers {
    text-align: center;
    margin-top: 60px;
  }
  .content {
    max-width: $containerMaxWidth;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  h1.mainTitle {
    // font-size: 2.6rem;
    color: #04eadd;
    padding: 5px 0;
    text-transform:capitalize;
  }
  h3 {
    width: $percentageWidth;
    // margin: 2rem auto 0 auto;
    color: #fff;
  }
  h2 {
    color: #fff;
    padding: 0;
    text-transform:capitalize;
  }
  h4 {
    color: #fff;
    line-height: 1.25;
    opacity: 0.9;
  }
  p {
    color: #fff;
  }
}

.contactUsBtn.btn {
  margin-top: 20px;
  padding: 0.6rem 2rem;
  background: $mainColor;
  color: #fff;
  border-radius: 14px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s 0s;
  display: inline-block;
  background: #0047F9!important;
  &:hover {
    background: lighten(#0047F9, 10%)!important;
  }
}
</style>>
