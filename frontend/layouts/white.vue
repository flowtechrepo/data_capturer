<template lang="pug">
  div.defaultLayout
    nuxt
</template>

<script>

export default {
  name: 'White',
  components: {
  },
  data () {
    return {
      background: '#fff'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

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
