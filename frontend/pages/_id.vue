<template lang='pug'>
  .shortUrlContainer
    .flowContainer
      .shortUrlTitle {{msg}}
</template>

<script>
import dataStore from '@/utils/dataStore'

export default {
  components: {
  },
  async created () {
  },
  async mounted () {
    await this.update()
    await this.gotoLink()
  },
  data () {
    return {
      msg: '',
      urls: [],
      loading: true,
      shortPath: null,
      resultId: null
    }
  },
  methods: {
    async gotoLink () {
      const item = (await dataStore.URLS.getByShort({
        shortPath: this.shortPath
      })).data.item
      if (item) {
        window.location.href = `${item.fullPath}&resultId=${this.resultId}`
      } else {
        this.msg = `Could not find page for id : ${this.shortPath}`
      }
    },
    async update () {
      this.shortPath = this.$route.params.id
      const res = await dataStore.URLS.updateResultForStartTime({
        shortPath: this.shortPath
      })
      this.resultId = res.data.result.id
    }
  },
  head () {
    return {
      title: 'Flow Data Capturer',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Flow Data Capturer'
      }],
      link: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.shortUrlContainer{
  .shortUrlTitle{
    font-size: 46px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;
  }
}
</style>
