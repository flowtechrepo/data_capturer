<template lang="pug">
section.section-wrapper.ClientsBackground
  .container
    .row
      .col-lg-12.heding-wrapper.text-center
        .Our-Clients
          | Our Clients
    .row.ClientsDisplayInline
      .client-wrapper.owl-carousel.owl-theme.ClientBorder
        .ClientIconScale
          a(href="#")
            img(class="img-responsive logoScale" src="~/assets/design/home/clients/logo-14.png" alt="client-img")
      .client-wrapper.owl-carousel.owl-theme.ClientBorder
        .ClientIconScale
          a(href="#")
            img(class="img-responsive logoScale" src="~/assets/design/home/clients/logo-02.png" alt="client-img")
      .client-wrapper.owl-carousel.owl-theme.ClientBorder
        .ClientIconScale
          a(href="#")
            img(class="img-responsive logoScale" src="~/assets/design/home/clients/logo-04.png" alt="client-img")
      .client-wrapper.owl-carousel.owl-theme.ClientBorder
        .ClientIconScale
          a(href="#")
            img(class="img-responsive logoScale" src="~/assets/design/home/clients/logo-12.png" alt="client-img")
      .client-wrapper.owl-carousel.owl-theme.ClientBorder
        .ClientIconScale
          a(href="#")
            img(class="img-responsive logoScale" src="~/assets/design/home/clients/logo-15.png" alt="client-img")
</template>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.section-wrapper {
  padding-bottom: 40px;
}
.section-wrapper .heding-wrapper, .section-wrapper .container .heding-wrapper {
  padding-top: 60px;
  padding-bottom: 30px;
  -webkit-font-smoothing: antialiased;
}
.section-wrapper .heding-wrapper span, .section-wrapper .container .heding-wrapper span {
  font-size: 20px;
  font-family: 'Asap';
  font-weight: normal;
  text-transform: uppercase;
}
.section-wrapper .heding-wrapper span i, .section-wrapper .container .heding-wrapper span i {
  margin-right: 15px;
  margin-top: 15px;
}
.section-wrapper .heding-wrapper h2, .section-wrapper .container .heding-wrapper h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  font-size: 38px;
}
/* ---------------------------------- SERVICES SECTION ---------------------------------- */
.gray-background {
  background: #f0f0f0;
}
.services-container:after {
  clear: both;
  content: "";
  display: table;
}
.services-container {
  margin: 0;
  padding: 0;
}
.services-container li {
  list-style: outside none none;
  margin: 0 0 30px 0;
  position: relative;
  -webkit-perspective: 400px;
  perspective: 400px;
  overflow: hidden;
}
.services-container .info {
  text-align: center;
  padding: 5px;
  border-radius: 4px;
}
.services-container li .subtitle  {
  display: block;
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
}
.services-container li .title {
  color: #fff;
  font-family: 'Asap';
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 15px 0px;
  color: #fff;
  text-transform: uppercase;
}
.Our-Clients {
  height: 35px;

  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
}
.ClientsBackground {
  width: 100%;
  height: 372px;
  border-radius: 3px;
  background-color: $lightBackground;
}
.ClientsDisplayInline {
  display: flex;
}
.ClientBorder {
  margin: 12px;
}
.ClientIconScale {
  width: 207px;
  height: 91px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .logoScale {
    width: 120px;
    height: 51px;
  }
}
</style>
