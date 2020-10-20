<template lang="pug">
  .fixed-btn
    .ContactUsBox Contact Us

</template>
<style lang="scss">
  .fixed-btn {
    width: 191px;
    height: 140px;
    box-shadow: 0 10px 25px 0 #d9d9d9;
    background-color: white;
    position: fixed;
    right: 0%;
    bottom: 60%;
    font-size: 24px;
    z-index: 1040;
    -webkit-backface-visibility: hidden;
    .ContactUsBox {
      width: 191px;
      height: 50px;
      background-color: #0D5FFF;
      text-align: center;
    }
  }
  .btn_wrapper {
    width: 50px;
    height: 50px;
  }
  .btn_style {
    width: 50px;
    height: 50px;
    border: solid 1px #0D5FFF;
    margin-bottom: -1px;
    text-align: center;
    vertical-align: center;
  }
  .btn_style:hover {
    background-color: #0D5FFF;
  }
  .center {
    top: 50%;
    left: 50%;
  }
  .iconstyle {
    position: relative;
    font-size: 17px;
    left: 0px;
    top: 6px;
    color: black;
  }
</style>
