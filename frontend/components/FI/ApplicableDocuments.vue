<template lang="pug">
.applicableDocumentWrapper
  .applicableDocumentContainer
    h3.header Applicable Document
    .content
      .item
        svg1
        h5 Invoices
      .item
        svg2
        h5 Financial Statement
      .item
        svg3
        h5 Financial Research Reports
      .item
        svg4
        h5 Letter Of Credit
      .item
        svg5
        h5 Bill of lading
      .item
        svg6
        h5 Memos
</template>

<script>
import svg1 from '~/assets/design/FI/appDC-01.svg'
import svg2 from '~/assets/design/FI/appDC-02.svg'
import svg3 from '~/assets/design/FI/appDC-03.svg'
import svg4 from '~/assets/design/FI/appDC-04.svg'
import svg5 from '~/assets/design/FI/appDC-05.svg'
import svg6 from '~/assets/design/FI/appDC-06.svg'

export default {
  name: 'ApplicableDocument',
  components: {
    svg1,
    svg2,
    svg3,
    svg4,
    svg5,
    svg6
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

$mediaValue: 710px;

.applicableDocumentWrapper{
  @media screen and (max-width: $mediaValue) {
    border-top: 1px solid $borderColor;
  }
  .applicableDocumentContainer{
    width: $percentageWidth;
    margin: 0 auto;
    max-width: $specWidth;
    padding: 58px 0 100px 0;
    .header{
      // font-size: 1.6rem;
      text-align: center;
      font-weight: 600;
    }
    .content{
      margin-top: 3rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      @media only screen and (max-width: $mediaValue) {
         width: $percentageWidth;
         margin: 0 auto;
      }
      .item{
        width: 31%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 1rem;
        box-sizing: border-box;
        margin: 1rem 1%;
        background: #fff;
        border: solid 2px transparent;
        box-shadow: 2px 2px 2px 0 rgba(217, 210, 210, 0.5);
        transition: all 0.4s 0s;
        @media screen and (max-width: $mediaValue) {
          width: 48%;
          margin: 10px 1%;
        }
        @media screen and (max-width: 640px) {
          width: 280px;
          margin: 10px auto;
        }
        &:hover{
          box-shadow: -7px 2px 3px 0 rgba(89, 255, 221, 0.5);
          border-color: #2de6e3;
          h5 {
            color: $mainColor;
          }
          svg {
            path {
              fill: $mainColor;
              color: $mainColor;
            }
          }
        }
        svg{
          margin-right: 1rem;
        }
        h5{
          transition: color 0.4s 0s;
          padding: 0;
        }
      }
    }
    @media screen and (max-width: $mediaValue) {
      padding: 50px 0;
      .content {
        margin-top: 30px;
      }
    }
  }
}
// &:hover{
  // h5 {
    // color: $mainColor;
  // }

// }
</style>
<style lang="scss">
@import '@/assets/scss/global.scss';
svg path{
  transition: fill 0.4s 0s;
}
.item:hover {
  svg {
    path {
      fill: $mainColor;
    }
  }
}
</style>
