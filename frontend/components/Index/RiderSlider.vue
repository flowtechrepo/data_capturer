<template lang="pug">
  el-carousel(v-if="sliders && sliders.length" :height="height" arrow="never" :interval="6000" :autoplay="false")
    el-carousel-item(v-for="(item, index) in sliders" :key="index")
      .wrapper(:style="{backgroundImage: 'url(' + item.image + ')'}")
        .text
          h2 Uncover Tomorrow’s Insights Today
          h4.subtitle We progressively push the boundaries of AI technology to deliver timely, actionable insights to businesses, enabling smarter decision-making.
          a.toContact(v-scroll-to="'#contact'") Contact Us
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    sliders: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      height: '60vh'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
.wrapper {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-size: cover;
  // background-size: 100% auto;
  // background-position: center right;
  background-position: 0 0%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.el-carousel {
  .text {
    display: flex;
    flex-direction: column;
    z-index: 19;
    align-items: center;
    justify-content: center;
    h2 {
      color: #fff;
      margin-bottom: 1.5rem;
      // font-weight: 900;
    }
    .subtitle{
      width: 70%;
      color: #fff;
      text-align: center;
      // line-height: 1.5;
      opacity: 1;
      // font-weight: bold;
    }
    @media only screen and (max-width: 800px) {
      width: $percentageWidth;
    }
  }

  .toContact {
    width: 230px;
    height: 50px;
    line-height: 50px;
    margin-top: 1.5rem;
    cursor: pointer;
    color: #fff;
    background: $mainColor;
    // padding: 0.6rem 2rem;
    border-radius: 20px;
    font-size: 1rem;
    transition: background 0.4s 0s;
    text-align: center;
    &:hover {
      background: $highlightColor;
    }
  }
  img {
    height: 100%;
    // width: 100%;
  }
}
</style>
