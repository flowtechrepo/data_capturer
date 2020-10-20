<template lang="pug">
.clientWrapper
  .container
    h2.header Our Clients
    .content
      carousel(:autoplay="true" :scrollPerPage="false" :paginationEnabled="false" :perPageCustom="[[768, 3], [1024, 4], [1280, 5]]")
       slide(v-for="count in maxCount" :key="count")
        span(class="label")
          img.logoImg(:src="getLogoPath(count)" :class="`logoImg` + count")
    .contentMobile
      .imgList
        .item(v-for="count in maxCount")
          img.logoImg(:src="getLogoPath(count)" :class="`logoImg` + count")
</template>
<script>

export default {
  name: 'Clients',
  components: {
  },
  data () {
    return {
      maxCount: 17,
      pageSize: 5
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.maxCount / this.pageSize)
    }
  },
  methods: {
    getLogoPath (index) {
      index = index % this.maxCount + 1
      return require(`~/assets/design/home/clients/logo-${index}.png`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.clientWrapper{
  width: 100%;
  height: auto;
  background: $lightBackground;
  .container{
    width: 1160px;
    margin: 0 auto;
    @media only screen and (max-width: 1160px) {
      width: 100%;
    }
    .header{
      // margin: 60px 0;
      text-align: center;
      // font-weight: bold;
    }
    .content{
      @media only screen and (max-width: 1160px) {
        display: none;
      }
      // margin-bottom: 60px;
      .imgList{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .item{
          width: 207px;
          height: 91px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          .logoImg{
            width: 110px;
            &.logoImg16, &.logoImg1, &.logoImg4{
              width: auto;
              height: 75px;
            }
          }
        }
      }
    }

    .contentMobile{
      @media only screen and (min-width: 1160px) {
        display: none;
      }
      margin-bottom: 60px;
      .imgList{
        width: $percentageWidth;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .item{
          width: 100%;
          height: auto;
          padding: 40px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          margin-bottom: 20px;
          .logoImg{
            width: 110px;
          }
        }
      }
    }
  }
}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .VueCarousel-slide {
    position: relative;
    // background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 207px;
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    .logoImg{
      width: 110px;
      &.logoImg11, &.logoImg16, &.logoImg4{
        width: auto;
        height: 75px;
      }
    }
  }
</style>
