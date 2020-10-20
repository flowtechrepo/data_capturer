<template lang="pug">
.applicableDocumentWrapper
  .applicableDocumentContainer
    .header Applicable Areas
    .content
      .item
        svg1
        h6 Accounting Automation
      .item
        svg2
        h6 Trade Finance Automation
      .item
        svg3
        h6 Credit Analysis Automation

</template>

<script>
import svg1 from '~/assets/design/FI/applicable-1.svg'
import svg2 from '~/assets/design/FI/applicable-2.svg'
import svg3 from '~/assets/design/FI/applicable-3.svg'

export default {
  name: 'ApplicableDocument',
  components: {
    svg1,
    svg2,
    svg3
  }
}
</script>

<style lang="scss" scoped>
.applicableDocumentWrapper{
  width: 100%;
  .applicableDocumentContainer{
    width: 1160px;
    margin: 0 auto;
    padding: 80px 0;
    .header{
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 50px;
    }
    .content{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .item{
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 20px 0px;
        &:hover{
          h6 {
            color: #0D5FFF;
          }
        }
        img{
          height: 100px;
        }
        h6{
          font-size: 1rem;
          margin-top: 40px;
          transition: color 0.4s 0s;
        }
      }
    }
  }
}
</style>
