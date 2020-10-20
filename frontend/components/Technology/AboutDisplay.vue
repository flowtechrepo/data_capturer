<template lang="pug">
.DisplayContainer
  .DisplayWrapper
    .textDisplay
      .textBox
        .titleDisplay
          | About Us
        .contentDisplay
          | flow is an AI-driven intelligence company spun off from NExT++, a joint research centre established between National University of Singapore (NUS), Tsinghua University of China and University of Southampton.
          ul
          | We have close collaboration with world leading AI research institutions and academia to gain early access to cutting edge technological concepts.
    .imageDisplay
      a()
        img(class="imageScale" src="~/assets/slider/images/slide-2.jpg")
</template>

<script>
export default {
  name: 'AboutDisplay'
}
</script>

<style lang="scss" scoped>
.DisplayContainer {
  .DisplayWrapper {
    position: relative;
    width: 1150px;
    height: 389px;
    margin: 100px auto;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    @media only screen and (max-width: 1150px) {
      width: 90%;
      margin: 50px auto;
      height: 500px;
    }

    .textDisplay {
      position: absolute;
      width: 750px;
      height: 100%;
      border-radius: 1px;
      background-color: #0D5FFF;
      left: 0px;
      top: 0px;
      @media only screen and (max-width: 1200px) {
        width: 100%;
      }
      .textBox {
        margin-top: 60px;
        margin-left: 80px;
        margin-right: 159px;
        @media only screen and (max-width: 1200px) {
          margin-right: 80px;
        }
        .titleDisplay {

          font-size: 30px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: white;
          margin-bottom: 40px;
        }

        .contentDisplay {
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
          // text-align: justify;
          color: white;
        }
      }
    }

    .imageDisplay {
      position: absolute;
      width: 470px;
      height: 277px;
      left: 680px;
      top: 56px;
      background-color: black;
      .imageScale {
        width: 470px;
        height: 277px;
      }
      @media only screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
