<template lang="pug">
.industryReportWrapper#reports
  .industryReportContainer
    h2.industryReportHeader Industry Reports
    .industryReportContent
      .industryReportContentItem(@click="showDownloadIndustryReport('/pdf/The New Indonesian Beauty Consumer Whitepaper.pdf')")
        .industryReportContentItemImg
          img(src="~/assets/design/casestudy/IndustryReport1.jpg")
        h4.industryReportContentItemTitle The New Indonesian Beauty Consumer
        p.industryReportContentItemContent Uncover insights on Muslim beauty consumers, their brand preference, and consumption behaviour.

      .industryReportContentItem(@click="showDownloadIndustryReport('/pdf/flow China Generation Z Study-demo.pdf')")
        .industryReportContentItemImg
          img(src="~/assets/design/casestudy/IndustryReport2.jpg")
        h4.industryReportContentItemTitle Insights into China’s Generation Z
        p.industryReportContentItemContent China's Generation Z is truly digital native. This study looks into the digital presence of this generation to uncover insights and trends.

      .industryReportContentItem(@click="showDownloadIndustryReport('/pdf/flow AMI Travel Insights (Singapore).pdf')")
        .industryReportContentItemImg
          img(src="~/assets/design/casestudy/IndustryReport3.jpg")
        h4.industryReportContentItemTitle Chinese Outbound Tourism Insights – Destination: Singapore
        p.industryReportContentItemContent From China’s major social media platforms, travel review sites, public forums and blogs, uncover deep insights and trends related to Chinese tourists travelling to Singapore.

      .industryReportContentItem(@click="showDownloadIndustryReport('/pdf/flow AMI Travel Insights (JP).pdf')")
        .industryReportContentItemImg
          img(src="~/assets/design/casestudy/IndustryReport4.jpg")
        h4.industryReportContentItemTitle Travel Insights of Chinese Tourists in Japan
        p.industryReportContentItemContent China remains a key driver in Japan's tourism sector, which has been identified crucial for brands and retailers in Japan to strive for attention seeking and upsell products during their trips.
  el-dialog(title="Download Industry Report" :visible.sync="downloadIndustryReportVisible")
    .reportLayout
      //- .loadingLayout Loading...
      //- iframe.reportIframe(:src="formPath" id="iframe-form" style="width: 100%; min-height: 450px; border: none;")
      //- script(type="text/javascript")
      //-   | function reinitIframe(){
      //-   |   var iframe = document.getElementById("iframe-form");
      //-   |   var bHeight = iframe.contentWindow.document.body.scrollHeight;
      //-   |   var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
      //-   |   var height = Math.max(bHeight, dHeight);
      //-   |   iframe.height = height;
      //-   | }
      //-   | window.setInterval("reinitIframe()", 10);
      el-form(:model="formData" ref="formData" :rules="rules")
        el-form-item(v-for="item in constants.formItems" :prop="item.key" :key="item.key" :label="item.name")
          el-input(v-model="formData[item.key]")
        el-form-item()
          el-button(@click="formSubmit()") Download
</template>

<script>
import dataStore from '@/utils/dataStore'
import { chectRequiredAndSpace, checkEmail } from '@/utils/form-validate'
export default {
  name: 'BannerOfMIKA',
  data () {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: ''
      },
      constants: {
        formItems: [
          {
            name: 'First Name',
            key: 'firstName'
          },
          {
            name: 'Last Name',
            key: 'lastName'
          },
          {
            name: 'Email',
            key: 'email'
          },
          {
            name: 'Phone Number',
            key: 'phoneNumber'
          },
          {
            name: 'Company Name',
            key: 'companyName'
          }
        ]
      },
      rules: {
        firstName: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ],
        lastName: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        phoneNumber: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ],
        companyName: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ]
      },
      downloadIndustryReportVisible: false,
      formPath: null
    }
  },
  methods: {
    showDownloadIndustryReport (id) {
      this.formPath = id
      this.downloadIndustryReportVisible = true
    },
    formSubmit () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          dataStore.CONTACTFORM.addData({
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            phoneNumber: this.formData.phoneNumber,
            companyName: this.formData.companyName,
            url: window.location.href,
            activity: 'DownLoad'
          }).then(res => {
            this.downloadIndustryReportVisible = false
            window.open(this.formPath)
          }).then(res => {
            this.formData = {
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              companyName: ''
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.industryReportWrapper{
  width: 100%;
  height: auto;
  background: $lightBackground;
  padding: $normalComponentPadding 0;
  .industryReportContainer{
    max-width: $containerMaxWidth;
    width: $percentageWidth;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .industryReportHeader{
      // font-size: 1.6rem;
      text-align: center;
    }
    .industryReportContent{
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      @media only screen and (max-width: 800px) {
        flex-direction: column;
        width: $percentageWidth;
        margin: 3rem auto;
      }
      .industryReportContentItem{
        width: 45%;
        // flex: 1;
        display: flex;
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
        padding: 0px 2.5%;
        margin-bottom: 2rem;
        cursor: pointer;
        @media only screen and (max-width: 800px) {
          width: 100%;
          padding: 0px;
        }
        &:hover{
          color: #0D5FFF;
          .industryReportContentItemContent{
            color: #0D5FFF;
          }
        }
        .industryReportContentItemImg{
          width: 100%;
          img{
            width: 100%;
            margin: 0px;
            padding: 0px;
          }
        }
        .industryReportContentItemTitle{
          // font-size: 1.2rem;
          margin-top: 1rem;
          // margin-bottom: 1rem;
          color: inherit;
        }
        .industryReportContentItemContent{
          // font-size: 0.8rem;
          // line-height: 1rem;
          margin: 0;
        }
      }
    }
  }
}
.reportLayout{
  // position: relative;
  // .loadingLayout{
  //   width: 100%;
  // }
  // .reportIframe{
  //   width: 100%;
  //   top: 0;
  //   left: 0;
  // }
  /deep/ .el-form-item__label:before{
    content: '';
    margin-right: 0px;
  }
  /deep/ .el-form-item__label::after{
    content: ' *';
    color: black;
    margin-right: 4px;
  }
  /deep/ .el-form-item__label {
    font-size: 14px;
    color: black;
    line-height: 17px;
  }
  /deep/ .el-form-item {
    margin-bottom: 12px;
    /deep/ .el-button {
      margin-top: 8px;
      padding: 4px 20px;
      background: none;
      border-radius: 10px;
      span{
        color: black;
        font-size: 14px;
      }
    }
  }
  /deep/ .el-form-item__error {
    padding-top: 0px;
  }
  /deep/ .el-input__inner {
    color: black;
    padding: 0 5px;
    height: 32px;
  }
}
</style>
