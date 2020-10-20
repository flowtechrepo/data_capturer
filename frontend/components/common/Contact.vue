<template lang="pug">
section.contactWrapper#contact
  .contactUs
    h2 Contact Us
    .details
      .forms
        //- #contact-form
        el-form(:model="formData" ref="formData" :rules="rules")
          el-form-item(v-for="item in constants.formItems" :prop="item.key" :key="item.key" :label="item.name")
            el-input(v-model="formData[item.key]")
          el-form-item()
            el-button(@click="formSubmit()") Submit
      .desc
        .contactUsIconWrapper
          i.icon(class="el-icon-location-outline")
        .textBox
          p.highlight Singapore
          p Blk 79, Ayer Rajah Crescent, #01-05/07/08, Singapore 139955
          p.highlight Beijing
          p 102 Yejing Building, Tsinghua University, 30 Shuangqing Road, Haidian District, Beijing, China
          // .table.TextBoxMargin
          //   .table-row
          //     .left-detail.table-cellVue.use(Dialog, { locale })
          //       .ContactUsIconWrapperVue.use(Dialog, { locale })
          //         i(class="el-icon-phone-outline")
          //       span(class="spliter ContactUsSpliterStyle")
          //     .clearfix
          // .table.TextBoxMargin
          //   .table-row
          //     .left-detail.table-cell
          //       .ContactUsIconWrapper
          //         i(class="el-icon-message")
          //       span(class="spliter ContactUsSpliterStyle")
          //     .clearfix
    //- script(type="text/javascript")
    //-   | var ss_form = {'account': 'MzawMDE3MbawBAA', 'formID': 'MzRMSktLMU7UTUk1NdU1MTZK1LW0SEnSNUwySbQwTbFIMjQzBgA'};
    //-   | ss_form.width = '100%';
    //-   | ss_form.height = '0';
    //-   | ss_form.domain = 'app-3QNI8F2IGM.marketingautomation.services';
    //-   | ss_form.target_id = 'contact-form';
    //- script(type="text/javascript" src="https://koi-3QNI8F2IGM.marketingautomation.services/client/form.js?ver=2.0.1")
</template>

<script>
import dataStore from '@/utils/dataStore'
import { chectRequiredAndSpace, checkEmail } from '@/utils/form-validate'
export default {
  name: 'Contact',
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
          { required: true, validator: chectRequiredAndSpace, trigger: 'blur' }
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
      }
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
            phoneNumber: this.formData.phoneNumber,
            companyName: this.formData.companyName,
            url: window.location.href,
            activity: 'ContactUs'
          }).then(res => {
            this.formData = {
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              companyName: ''
            }
            window.location.href = '/thankyou'
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

.ContactUsIconWrapper {
  width: 35px;
  height: 30px;
  font-size: 29.1px;
  .el-icon-location {
    width: 25px;
    height: 31px;
  }
}
form {
  display: block;
}

.contactWrapper {
  background-image: url(~assets/images/contact-bg.jpg);
  position: relative;
  margin: 0 auto;
  padding: $normalComponentPadding 0;
  color: #fff;
  h2 {
    color: #fff;
    text-align: center;
  }
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 0;
  }
  .contactUs {
    position: relative;
    z-index: 1;
    max-width: $containerMaxWidth;
    margin: 0 auto;
    .details {
      display: flex;
      margin-top: 20px;
      .forms {
        width: 50%;
        margin-right: 2rem;
        /deep/ .el-form-item__label:before{
          content: '';
          margin-right: 0px;
        }
        /deep/ .el-form-item__label::after{
          content: ' *';
          color: white;
          margin-right: 4px;
        }
        /deep/ .el-form-item__label {
          font-size: 14px;
          color: white;
          line-height: 17px;
        }
        /deep/ .el-form-item {
          margin-bottom: 12px;
          /deep/ .el-button {
            margin-top: 20px;
            padding: 4px 55px;
            background: none;
            border-radius: 32px;
            span{
              color: white;
              font-size: 16px;
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
      .desc {
        display: flex;
        flex: 1;
        margin-top: 1rem;
        p {
          color: #fff;
          font-size: 0.8rem;
          margin: 0;
          margin-bottom: 1rem;
        }
        .highlight {
          color: $mainColor;
          margin: 0;
          margin-bottom: 0.3rem;
          font-size: 1rem;
          padding: 0;
        }
        .contactUsIconWrapper {
          font-size: 2rem;
          color: $mainColor;
          margin-right: 2rem;
          .icon {
            position: relative;
            &:after {
              content: ' ';
              display: block;
              position: absolute;
              height: 4px;
              border-radius: 4px;
              width: $percentageWidth;
              left: 10%;
              bottom: -0.5rem;
              background: $mainColor;
            }
          }
        }
        span {
          font-size: 1rem;
          color: #fff;
        }
      }
      input, textarea {
        padding: 1rem;
        height: 46px;
        box-sizing: border-box;
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 4px;
        &.textarea {
          height: 200px;
        }
      }
    }
  }
  iframe fieldset li label {
    color: white;
  }
}

@media screen and (max-width: 1160px) {
  .contactWrapper .contactUs .details{
    .desc {
      display: none;
    }
    .forms {
      width: 80%;
      margin: 0 auto;
      max-width: 500px;
    }
  }
}

</style>
