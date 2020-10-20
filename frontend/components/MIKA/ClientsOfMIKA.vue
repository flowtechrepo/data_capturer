<template lang="pug">
.clientsWrapper
  .titleText Our Clients
  .clientBox
    .oneClientBoxWithMargin
      .clientLogo
        img(class="logoScale" src="~/assets/design/home/clients/logo-17.png")
      .clientDescribe Insights provided by flow are translated into product requirements to help with formulation and marketing claims of the new series, which led the performance of new series to soar much higher than our forecasted target by over
        span.textNumber 50%
    .oneClientBoxWithMargin
      .clientLogo
        img(class="logoScale" src="~/assets/design/home/clients/logo-17.png")
      .clientDescribe Insights provided by flow are translated into product requirements to help with formulation and marketing claims of the new series, which led the performance of new series to soar much higher than our forecasted target by over
        span.textNumber 50%
</template>

<script>
export default {
  name: 'ClientsOfMIKA'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.clientsWrapper {
  width: 1140px;
  margin: 100px auto;
  background-color: white;
  text-align: center;
  @media only screen and (max-width: 1140px) {
    width: 90%;
  }
  .titleText {

    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: black;
  }
  .clientBox {
    background-color: white;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    .oneClientBoxWithMargin {
      width: 100%;
      margin-bottom: 50px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      padding: 32px 72px;
      cursor: pointer;
      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }
      .clientLogo {
        width: 70.1px;
        height: 77px;
        .logoScale {
          width: 70.1px;
          height: 77px;
        }
      }
      .clientDescribe {
        flex: 1;
        margin-left: 40px;
        @media only screen and (max-width: 800px) {
          margin-left: 0;
          margin-top: 40px;
        }

        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: $titleColor;
        .textNumber {
          color: #0D5FFF;
        }
      }
    }
    .oneClientBoxWithMargin:hover {
      box-shadow: 0 20px 20px 0 rgba(217, 217, 217, 0.5);
      border-top: #0D5FFF solid 1px;
    }
  }
}
</style>
