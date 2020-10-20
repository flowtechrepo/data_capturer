<template lang="pug">
  .mikaWrapper.query
    .description
      h1 MIKA
      p.content MIKA is an AI-driven Insight-as-a-Service solution that helps businesses predict market trend, inspire product innovation and enhance brand communication.
      a.btn.keyBtn(href="/mika") FIND OUT MORE
    figure
      img.mika(src="~/assets/design/home/pattern.png" )
</template>

<script>
export default {
  name: 'MikaDesc',
  props: {
    banner: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.mikaWrapper {
  color: #fff;
  display: flex;
  position: relative;
  justify-content: space-between;
  // height: 395px;
  box-sizing: border-box;
  height: 100%;
  .description {
    width: 54%;
    margin-top: 100px;
    margin-right: 50px;
    h1 {
      color: inherit;
      // font-size: 1.8rem;
      // margin: 0 0 2rem 0;
    }
    p {
      color: inherit;
      // font-size: 0.8rem;
      // line-height: 1.2rem;
      // opacity: 0.8;
    }
    .btn {
      display: inline-block;
      // color: $mainColor;
      // background: #fff;
      color: #fff;
      padding: 0.6rem 2rem;
      // // font-size: 1rem;
      border-radius: 14px;
      margin-top: 14px;
      // // font-weight: 500;
      // transition: color 0.4s 0s, background 0.4s 0s;
      // &:hover {
      //   background: $highlightColor;
      //   color: #fff;
      // }
    }
  }
  figure {
    position: relative;
    // width: 37%;
    margin: 0;
    max-width: 668px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 1190px) {
    &.query{
      padding: 100px;
      .description {
        flex: 1;
        width: auto;
        margin-right: 10px;
      }
      figure {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 880px) {
    &.query {
      padding: 50px;
      display: block;
      overflow: hidden;
      .description {
        position: relative;
        z-index: 2;
        margin: 0;
      }
      &:after {
        background: rgba(0,0,0,0.7);
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      figure {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
}

</style>
