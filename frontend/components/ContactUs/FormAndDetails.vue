<template lang="pug">
  section(id="contact" class="section-wrapper contact-background parallax" data-stellar-background-ratio="0.1").FormAndDetails
    .overlay.FormAndDetails-Wrapper
      .container
        .row.rowPosition
          .col-lg-4.col-md-5.col-sm-5.col-xs-12.col-sm-push-7
            .FindUs
              span Find Us
              ul
              .spliter
            .contact-holder.form
              .detail-holder.table
                .table-row
                  .left-detail.table-cell.align-middle
                    .ContactUsIconWrapper
                      i(class="el-icon-location")
                    .spliter
                  .clearfix
                  span(class="right-detail table-cell align-middle") Singapore, Blk 79, Ayer Rajah Crescent, #01-05/07/08, Singapore 139955
              .detail-holder.table
                .table-row
                  .left-detail.table-cell.align-middle
                    .ContactUsIconWrapper
                      i(class="el-icon-message")
                    .spliter
                  .clearfix
                  span(class="right-detail table-cell align-middle") Beijing, Jade Palace Hotel, No. 76, West office building 2nd floor,Zhichun Road, Haidian District, Beijing, China
              .detail-holder.table
                .table-row
                  .left-detail.table-cell.align-middle
                    .ContactUsIconWrapper
                      i(class="el-icon-phone")
                    .spliter
                  .clearfix
                  span(class="right-detail table-cell align-middle")
                    | (+65) 123456
                    ul
                    | (+65) 345612
            .map
              Map
          .col-lg-7.col-md-7.col-sm-7.col-xs-12.col-lg-offset-1.col-sm-pull-5
            .decribe
              span MIKA Insights integrates data from brand communication, consumer reviews and sales information to present the latest market updates on consumer behaviour and growth factors. It provides actionable Insight-as-a-Service to empower brand owners within the key functions of their business.
            form(class="contact-form ContactFormStyle" action="#" method="post")
              input(class="name ContactUsInputStyle" type="text" name="name" placeholder="Name" required)
              input(class="email ContactUsInputStyle" type="email" name="email" placeholder="Email" required)
              textarea(class="message ContactUsMessageStyle" name="message" placeholder="Message" required)
              input(class="submit btn transparent p10-50 border-2 ContactUsSubmitStyle" type="submit" value="SUBMIT")
</template>

<script>
import Map from '~/components/ContactUs/Map.vue'
export default {
  name: 'FormAndDetails',
  components: {
    Map
  }
}
</script>

<style lang="scss" scoped>
.FormAndDetails {
  float: none;
}
.FormAndDetails-Wrapper {
  height: 784px;
  background-color: white;
  .decribe {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  .FindUs {
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 25px;
    .spliter {
      //border-radius: 20%;
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: #0D5FFF;
      width: 65px;
      height: 8px;
    }
  }
  .form {
    .spliter {
      //border-radius: 20%;
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: #0D5FFF;
      width: 15px;
      height: 8px;
    }
  }
  .map {
    margin-top: 30px;
  }
  .rowPosition {
    position: relative;
    top: 120px;
    left: 0px;
  }
}
</style>
