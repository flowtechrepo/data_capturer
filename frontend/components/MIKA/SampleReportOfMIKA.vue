<template lang="pug">
section(id="sampleReport")
  .sampleReportWrapper
    .sampleReportContainer
      h2.titleWithLine {{currentWords.title}}
      .formAndDetailsBox
        .textBox
          .textContent
            h5 {{currentWords.contentTitle}}
            p {{currentWords.contentDesc}}
            ul
              li(v-for="(i, k) in currentWords.contentList" :key="k")
                p {{i}}
            //- h5 {{currentWords.contentTitle2}}
        .formBox
          //- #mika-form
          .contacForm(v-if="visible.contactForm")
            el-form(:model="formData" ref="formData" :rules="rules")
              el-form-item(v-for="item in constants.formItems" :prop="item.key" :key="item.key" :label="item.name")
                el-input(v-model="formData[item.key]")
              el-form-item()
                el-button(@click="formSubmit()" style="float:left") Get free trial
          .afterSubmit(v-if="!visible.contactForm")
            span(style="color:black") Thank you for submitting. We will reach out to you shortly for your free trial.
</template>

<script>
import dataStore from '@/utils/dataStore'
import { chectRequiredAndSpace, checkEmail } from '@/utils/form-validate'
export default {
  name: 'SampleReportOfMIKA',
  props: {
    lang: {
      type: String,
      default: () => 'en'
    }
  },
  data () {
    return {
      sampleWords: {
        en: {
          title: 'Discover MIKA in Action',
          contentTitle: 'Find out how our unique focus on product claims (such as benefits, functions and ingredients) can be applied to your business. Start your free trial now.',
          contentDesc: 'What’s included in your trial:',
          contentList: ['10 selected claims within a prominent sub-category in personal care industry', 'Top 10 products for each of the selected claims', 'Claim trends based on growth potential and consumer interests ']
          // contentTitle2: 'Apply these questions to your business and sense the capacity of what MIKA can do for yours.'
        },
        zh: {
          title: '申请免费试用',
          contentTitle: '欲更多了解我们对产品宣称（如功效、成分和用户体验等）的独特分析如何能赋能您的业务，立即开始免费试用。',
          contentDesc: '试用版包括:',
          contentList: ['个人护理行业下一个重要子品类的十个产品宣称', '每个所选的产品宣称所对应的销量前十的产品', '基于增长潜力和消费者喜好的产品宣称趋势']
          // contentTitle2: ''
        }
      },
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        companyName: ''
      },
      constants: {
        formItems: [
          {
            name: 'First Name/名字',
            key: 'firstName'
          },
          {
            name: 'Last Name/姓氏',
            key: 'lastName'
          },
          {
            name: 'Email/邮箱',
            key: 'email'
          },
          {
            name: 'Company Name/公司名称',
            key: 'companyName'
          },
          {
            name: 'Title/职位',
            key: 'title'
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
        title: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ],
        companyName: [
          { validator: chectRequiredAndSpace, trigger: 'blur' }
        ]
      },
      visible: {
        contactForm: true
      }
    }
  },
  computed: {
    currentWords () {
      return this.sampleWords[this.lang]
    }
  },
  methods: {
    formSubmit () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          dataStore.CONTACTFORM.addData({
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            title: this.formData.title,
            companyName: this.formData.companyName,
            url: window.location.href,
            activity: 'DiscoverMIKA'
          }).then(res => {
            this.formData = {
              firstName: '',
              lastName: '',
              email: '',
              title: '',
              companyName: ''
            }
            this.visible.contactForm = false
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

.sampleReportWrapper {
  text-align: center;
  background: $lightBackground;
  padding: 100px 0 58px 0;
  @media only screen and (max-width: 800px) {
    padding: 50px 10px;
  }
  .sampleReportContainer{
      width: 100%;
      display: flex;
      flex-direction: column;
      // padding-bottom: 80px;
      @media only screen and (max-width: 1140px) {
        width: 90%;
      }
      h2.titleWithLine {
        text-transform:capitalize;
      }
  }

  .formAndDetailsBox  {
    width: 100%;
    max-width: $containerMaxWidth;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      margin-left: 40px;
      width: auto;
    }
    .textBox {
      width: 54%;
      margin-right: 95px;
      text-align: left;
      line-height: 1.5em;
      @media only screen and (max-width: 800px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 30px;
      }
      .textContent {
        ul {
          padding: 0;
          margin: 20px 0;
          padding-left: 20px;
          li {
            list-style: none;
            position: relative;
            &:hover {
              &:before {
                background: $highlightColor;
              }
              &:after {
                border-left-color: $highlightColor;
              }
            }
            &:before {
              content: " ";
              position: absolute;
              left: -24px;
              top: 11px;
              width: 10px;
              height: 2px;
              background: #666;
              display: block;
            }
            &:after {
              content: " ";
              position: absolute;
              left: -18px;
              top: 7px;
              width: 10px;
              height: 1px;
              border-top: 4px solid transparent;
              border-bottom: 4px solid transparent;
              border-left: 12px solid #666;
              display: block;
            }
          }
        }
        h5 {
          font-weight: 600;
        }
        p {
          margin: 0;
          padding: 0;
          // margin-bottom: 0.4rem;
        }
      }
    }
    .formBox {
      width: 38%;
      .afterSubmit {
        padding: 15% 0;
      }
      /deep/ .el-form-item__label:before {
        content: '';
        margin-right: 0px;
      }
      /deep/ .el-form-item__label::after {
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
          margin-top: 5px;
          padding: 2px 12px;
          border-radius: 5px;
          border: 1px solid #ababab;
          background-size: 100%;
          background-image: linear-gradient(#ebebeb, #c9c9c9);
          span{
            color: #474747;
            font-size: 13px;
            text-shadow: 1px 1px 0px #f0f0f0, 0px 2px 4px rgba(255, 255, 255, 0);
          }
        }
        /deep/ .el-button:hover{
          background-image: linear-gradient(white, #c9c9c8);
        }
      }
      /deep/ .el-form-item__error {
        padding-top: 0px;
      }
      /deep/ .el-input__inner {
        color: black;
        padding: 0 5px;
        height: 32px;
        border: 1px solid #888;
      }
      /deep/ .el-input__inner:focus {
        color: black;
        padding: 0 5px;
        height: 32px;
        border: 1px solid #888;
        background-color: #fffff0;
        box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      }
    }
    @media screen and (max-width: 800px) {
      .formBox {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
</style>
