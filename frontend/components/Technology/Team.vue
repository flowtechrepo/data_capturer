<template lang="pug">
.TeamWrapper
  .textPosition.textStyle
    | Team
  .photo
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/images/team-1.jpg")
      .teamDetail
        .position
          | POSITION
        .name
          | NAME
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/images/team-1.jpg")
      .teamDetail
        .position
          | POSITION
        .name
          | NAME
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/images/team-1.jpg")
      .teamDetail
        .position
          | POSITION
        .name
          | NAME
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/images/team-1.jpg")
      .teamDetail
        .position
          | POSITION
        .name
          | NAME
    .photoBoxWithMargin
      .photoScaleWithMargin
        img(class="photoStyle" src="~/assets/images/team-1.jpg")
      .teamDetail
        .position
          | POSITION
        .name
          | NAME
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.TeamWrapper {
  height: 515px;
  @media only screen and (max-width: 1135px) {
    height: auto;
    padding-bottom: 60px;
  }
  background-color: $lightBackground;
  .textPosition {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 60px;
  }
  .textStyle {

    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: black;
  }
  .photo {
    width: 1135px;
    @media only screen and (max-width: 1135px) {
      width: $percentageWidth;
    }
    margin: 0 auto;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1135px) {
      width: 100%;
      flex-direction: column;
    }
    .photoBoxWithMargin {
      flex: 1;
      .photoScaleWithMargin {
        text-align: center;
        padding: 0px 20px;
        .photoStyle {
          width: 100%;
          border-radius: 50%;
          @media only screen and (max-width: 728px) {
            width: 60%;
          }
        }
      }
      .teamDetail {
        .position {
          padding-top: 32px;

          font-size: 16px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: black;
        }
        .name {
          padding-top: 10px;

          font-size: 16px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: black;
        }
      }
    }
  }
}
</style>
