<template lang="pug">
.listWrapper
  .listContainer
    h2.listHeader {{title}}
    h3.subtitle(v-if="subTitle") {{subTitle}}
    .listContent
      .listContentItem(v-for="(d,k) in data" :key="k")
        .listContentItemImg
          img(:src="d.image")
        h4.listContentItemTitle {{d.title}}
        p.listContentItemContent {{d.desc}}
</template>

<script>
export default {
  name: 'FIListBase',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: () => ''
    },
    subTitle: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.listWrapper{
  .listContainer{
    width: $percentageWidth;
    margin: 0 auto;
    max-width: $containerMaxWidth;
    padding: 4rem 0;
    .listHeader{
      font-size: 1.6rem;
      text-align: center;
    }
    .subtitle {
      font-size: 1rem;
      text-align: center;
      margin: 2rem 0;
    }
    .listContent{
      margin-top: 3rem;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      .listContentItem{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0px 1%;
        // cursor: pointer;
        @media only screen and (max-width: 800px) {
          width: 100%;
          padding: 0px;
        }
        .listContentItemImg{
          width: 100%;
          img{
            width: 100%;
            margin: 0px;
            padding: 0px;
          }
        }
        .listContentItemTitle{
          // font-size: 18px;
          // font-weight: bold;
          // line-height: 1.33;
          margin-top: 20px;
          // margin-bottom: 20px;
        }
        .listContentItemContent{
          // font-size: 0.9rem;
          color: #666666;
          line-height: 1.71;
          // text-align: justify;
        }
      }
    }
  }
}
</style>
