<template lang="pug">
  div
    .loadingBox(v-loading="loading" v-if="loading")
    .defaultLayout(v-if="!loading")
      Menu
      nuxt
      Footer(:background="background")
</template>

<script>
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
import BottomBar from '~/components/BottomBar.vue'
import Slider from '~/components/Slider.vue'

const specBackground = {
  career: '#f9f9f9'
}

export default {
  name: 'DefaultLayout',
  components: {
    Menu,
    Footer,
    BottomBar,
    Slider
  },
  data () {
    return {
      loading: true,
      background: '#fff'
    }
  },
  mounted () {
    // console.log(this.$nuxt.$route.name)
    if (specBackground.hasOwnProperty(this.$nuxt.$route.name)) {
      this.background = specBackground[this.$nuxt.$route.name]
    }
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // })
    setTimeout(() => {
      this.loading = false
    }, 50)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.loadingBox{
  width: 100%;
  height: 100vh;
}
html, body {
  font-size: 18px;
}

.title, h1, h2, h3, h4, h5, h6 {
  color: $titleColor;
}

p,span {
  color: $contentColor;
  font-size: 1rem;
  line-height: 1.4rem;
}

a {
  transition: all 0.4s 0s;
}

</style>
