<template lang="pug">
.menuContainerGrown
  .wrapper
    .header(:class="{opacityShow: show}" id="menu")
      a.logo(href="/")
        img(src="~/assets/images/logos/logo-white.png" alt="logo-img")
      .menuWrapper
        .elMenuHorizontal
          el-menu(:default-active='activeIndex' mode='horizontal')
            el-menu-item(index='company')
              a(href="/company") Our Company
            el-menu-item(index='difference')
              a(href="/difference") Our Difference
            el-menu-item(index='services')
              a(href="/services") Services
            el-menu-item(index='read')
              a(href="/blogs") Read
            el-menu-item(index='contact')
              a(href="/contact") Contact
        .elMenuVerticalWrapper
          .lines(@click='closeMenu = !closeMenu' :class="{isClose: !closeMenu}")
            .line
            .line
            .line
          .elMenuVertical(:class="{closeMenu: closeMenu}")
            .verticalMenuItems(:default-active='activeIndex' mode='horizontal')
              a.menuItem(href="/") Home
              a.menuItem(href="/company") Our Company
              a.menuItem(href="/difference") Our Difference
              a.menuItem(href="/services") Services
              a.menuItem(href="/read") Read
              a.menuItem(href="/contact") Contact
  .blockContainer
</template>

<script>

const menuMap = {
  casestudy: 'resource',
  blog: 'resource',
  aboutus: 'aboutWrapper',
  career: 'aboutWrapper',
  contact: 'aboutWrapper'
}

export default {
  name: 'Menu',
  data () {
    return {
      activeIndex: '1',
      closeMenu: true,
      show: false,
      href: {
        blog: process.env.BLOG_HREF || 'https://blog.flow.com'
      }
    }
  },
  watch: {
    $route () {
      this.activeIndex = this.$route.name
    }
  },
  created () {
    setTimeout(() => {
      this.show = true
    }, 0)
    // console.log(this.$route.name, menuMap[this.$route.name])
    // this.activeIndex = menuMap[this.$route.name] ? menuMap[this.$route.name] : this.$route.name
    this.activeIndex = this.$route.name
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.verticalMenuItems {
  padding: 20px 0;
  .menuItem {
    display: block;
    text-align: center;
    padding: 10px 0;
    color: #fff;
    &:hover {
      background: #0D5FFF;
      color: #fff;
    }
  }
}
.lines {
  width: 34px;
  padding: 4px;
  cursor: pointer;
  position: relative;
  z-index: 102;
  &.isClose {
    .line {
      &:first-child {
        transform: rotate(45deg);
        transform-origin: 30% 50%;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
        transform-origin: 30% 50%;
      }
    }
  }
  &:hover {
    .line {
      background: #0D5FFF;
    }
  }
  .line {
    transition: background 0.4s 0s, transform 0.4s 0s, opacity 0.4s 0s;
    width: 100%;
    height: 4px;
    background: #fff;
    position: relative;
    &:first-child {
      transform: translate3d(0, -6px, 0);
    }
    &:last-child {
      transform: translate3d(0, 6px, 0);
    }
  }
}
.wrapper{
  position: fixed;
  z-index: 100;
  display: flex;
  width: 100%;
  background: #123C7D;
  // border-bottom: 2px solid $mainColor;
}
.header {
  transition: opacity 0.2s 0s;
  display: flex;
  max-width: 1000px;
  width: $percentageWidth;
  background: #123C7D;
  margin: 0 auto;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  &.opacityShow {
    opacity: 1;
  }
  .logo {
    display: block;
    width: 200px;
    img {
      width: 100%;
      display: block;
    }
    @media screen and (max-width:800px) {
      width: 120px;
    }
  }
  .elMenuVertical {
    z-index: 101;
    background: #123C7D;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    transition: transform 0.4s 0s;
    &.closeMenu {
      transform: translate3d(0, -100%, 0);
    }
    .controller {
      padding: 20px;
      text-align: right;
    }
    .closeIcon {
    }
  }
}
@media screen and (min-width: 1080px) {
  .elMenuVerticalWrapper {
    display: none;
  }
}
@media screen and (max-width: 1080px) {
  .elMenuHorizontal {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.el-menu{
  background: #123C7D;
}

.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #123C7D;
}
.el-submenu__icon-arrow.el-icon-arrow-down {
  min-width: 12px;
  min-height: 12px;
}
.el-menu.el-menu--horizontal {
  border: 0;
  .el-menu-item {
    border: 0!important;
  }
}
.menuContainerGrown .el-menu-item,.menuContainerGrown .el-submenu {
  cursor: pointer;
  font-weight: normal;
  font-size: 16px;
  color: $menuTitleColorGrown!important;
  .el-submenu__title {
    color: $menuTitleColorGrown!important;
    font-size: 16px;
    border: 0!important;
  }
  &.is-active {
    color: $menuTitleColorGrown!important;
    // border-color: #0D5FFF!important;
    a {
      color: $menuTitleColorGrown;
      &:after {
        background: $menuTitleColorGrown;
      }
    }
    .el-submenu__title {
      color: $menuTitleColorGrown!important;
    }
  }
  &:hover {
    // color: $menuTitleColorGrown!important;
    a {
      // color: $menuTitleColorGrown;
    }
  }
  a {
    display: block;
    height: 56px;
    // margin-bottom: 20px;
    // height: 60px;
    // padding-top: 20px;
    // padding-bottom: 20px;
    font-size: 16px;
    color: $menuTitleColorGrown;
    border: 0;
    position: relative;
    font-weight: 600;
    &:after {
      content: " ";
      display: block;
      width: 100%;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 4px;
      background: transparent;
    }
  }
}
.el-menu--popup .el-menu-item {
  a {
    color: $menuTitleColorGrown!important;
    display: block;
    font-size: 16px;
  }
  &:hover {
    // background: $menuTitleColorGrown!important;
    font-weight: 600;
    a {
      color: #fff!important;
    }
  }
}
.blockContainer{
  height: 80px;
  @media screen and (max-width: 800px) {
    height: 40px;
  }
}
.el-menu--horizontal>.el-submenu {
  .el-submenu__title {
    &:after {
      content: " ";
      display: block;
      width: 100%;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 4px;
      background: transparent;
    }
  }
  &.is-active {
   .el-submenu__title {
      &:after {
        background: #0D5FFF;
      }
    }
  }
}
</style>
