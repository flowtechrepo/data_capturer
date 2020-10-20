<template lang="pug">
.fixedBtns
  a.btn_wrapper(href="mailto:info@flow.com" target="_blank")
    i.icon.el-icon-message
  a.btn_wrapper(v-scroll-to="'#menu'")
    i.icon.el-icon-arrow-up
</template>

<style lang="scss">
.fixedBtns {
  position: fixed;
  right: 0%;
  bottom: 30%;
  background-color: #fff;
  font-size: 24px;
  z-index: 1040;
  -webkit-backface-visibility: hidden;
}
.btn_wrapper {
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: -1px;
  border: solid 1px #0D5FFF;
  .icon {
    display: block;
    font-size: 1rem;
  }
  &:hover {
    background-color: #0D5FFF;
    color: #fff;
  }
}
@media (max-width: 960px) {
  .fixedBtns {
    display: none;
  }
}
</style>
