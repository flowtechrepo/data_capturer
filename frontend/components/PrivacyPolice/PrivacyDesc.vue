<template lang="pug">
.privacyWrapper
  .privacyContainer
    .privacyHeadTitle PRIVACY POLICY STATEMENT
    .privacyPara  This Privacy Policy Statement sets forth the privacy policy pertaining to this Web Site maintained by flow Pte Ltd (“flow”). By using any Web Site, you are agreeing to the terms set forth in this Privacy Policy Statement.
    .privacyPara  For purposes of this Privacy Policy Statement, “Personal Information” means any information by which you can be personally identified, and includes your name, your address, your telephone number, your e-mail address and the like. flow collects Personal Information only when you voluntarily submit such Personal Information to us, such as when placing a product order through a Site, when registering for an event or activity, and so on.
    .privacyPara  For each visitor to the Web Site, our web servers automatically recognize only information regarding the visitor’s domain name (or that of the visitor’s access provider) and e-mail address. Regardless of the purpose for which it is submitted, it is flow’s policy to maintain all Personal Information as confidential, and to use such Personal Information only for the following purposes:
      ul
        li for the specific purpose for which it was volunteered;
        li to improve the content, appearance and utility of the Web Site;
        li to track our visitors’ use of the Web Site for internal market research; and
        li to notify our visitors of updates to the Web Site.
    .privacyPara  flow may disclose Personal Information to law enforcement agencies and government for security purposes. In addition, flow may disclose Personal Information to our legal advisors for establishing, exercising or defending our legal rights, to our other professional advisors, or as otherwise authorised or required by law.
    .privacyPara It is flow’s policy to keep Personal Information only for so long as needed for such purposes. At any time, you may obtain a summary of the Personal Information on record with flow which has been collected about you via this Site. Except for Personal Information we need to complete your purchase of products, you may request at any time that flow dispose of any or all Personal Information about you. In addition, at any time you may request:
      ol
        li that flow correct any such Personal Information; or
        li that such Personal Information be removed from flow’s marketing databases.
    .privacyPara To make any request described above, send an e-mail to info@flow.com. When contacting us, please be sure to provide us with your exact e-mail address, name, address and/or telephone number(s) in order to be sure we handle your request correctly.
    .privacyPara flow reserves the right, at its discretion, to change, modify, add, or remove portions of this Privacy Policy Statement at any time. You should check this page periodically for changes. Your continued use of this Site following the posting of changes to this Privacy Policy Statement will mean that you accept those changes.
</template>

<script>
export default {
  name: 'Privacy',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.privacyWrapper {
  .privacyContainer{
    width: $percentageWidth;
    max-width: $containerMaxWidth;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 3rem 0rem;
    font-size: 14px;
    .privacyHeadTitle{
      width: 100%;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .privacyPara{
      margin: 10px 0;
      line-height: 2;
    }
  }
}
</style>
