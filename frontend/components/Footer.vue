<template lang="pug">
.footer
  .flowContainer
    .footerContainer
      .footerLogo
        img(src="~/assets/images/logos/logo-white.png" alt="logo-img")
      .footerItems
        .footerItem
          a(href='/company') Our Company
        .footerItem
          a(href='/difference') Our Difference
        .footerItem
          a(href='/services') Services
        .footerItem
          a(href='/blogs') Read
      .footerFooter
        .footerFooterLeft
          .footerFooterLeftItems
            .footerFooterLeftItem
              a(href='/privacy') Privacy Policy
            .footerFooterLeftItem
              a(href='/career') Careers
            .footerFooterLeftItem
              a(href='/contact') Contact
        .footerFooterRight
          .contactIcon
            a(href="https://www.facebook.com/asiacollectcompany" target="_blank")
              img(src="~/assets/flow/home/FB.png")
          .contactIcon
            a(href="https://www.linkedin.com/company/asiacollect" target="_blank")
              img(src="~/assets/flow/home/IN.png")
</template>
<script>
export default {
  name: 'Footer',
  props: {
    background: {
      type: String,
      default: () => '#f9f9f9'
    }
  },
  data () {
    return {
      href: {
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/global.scss';
.footer{
  background: #1a1a1a;
  color: #fff;
  width: 100%;

  a{
    color: #fff;
  }
  .footerContainer{
    .footerLogo{
      img{
        height: 40px;
      }
    }
    padding: 100px 0;
    width: 100%;
    .footerItems{
      width: 100%;
      display: flex;
      flex-direction: row;
      margin: 30px 0 100px;
      .footerItem{
        margin-right: 30px;
        a{
          font-weight: bold;
        }
      }
    }
    .footerFooter{
      border-top: 1px solid #8E8E8E;
      padding-top: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .footerFooterLeft{
        .footerFooterLeftItems{
          display: flex;
          flex-direction: row;
          align-items: center;
          .footerFooterLeftItem{
              margin-right: 20px;
              a{
                font-weight: 500;
                text-transform: uppercase;
                font-size: 12px;
              }
          }
        }
      }
      .footerFooterRight{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .contactIcon{
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (max-width:800px) {
  .footer{
    background: #1a1a1a;
    color: #fff;
    width: 100%;

    a{
      color: #fff;
    }
    .footerContainer{
      .footerLogo{
        display: none;
      }
      padding: 2rem 0;
      width: 80%;
      margin: 0 auto;
      .footerItems{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        .footerItem{
          margin-right: 0;
          margin-bottom: 2rem;
          a{
            font-weight: bold;
            font-size: 1.2rem;
          }
        }
      }
      .footerFooter{
        border-top: 1px solid #8E8E8E;
        padding-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .footerFooterLeft{
          .footerFooterLeftItems{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .footerFooterLeftItem{
                margin-right: 0;
                margin-bottom: 1.2rem;
                a{
                  font-weight: 500;
                  text-transform: uppercase;
                  font-size: 1rem;
                }
            }
          }
        }
        .footerFooterRight{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .contactIcon{
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
