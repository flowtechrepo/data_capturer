<template lang="pug">
section.top-bar
  .container
    .row
</template>

<style lang="scss" scoped>
/* ---------------------------------- TOP BAR ---------------------------------- */
.top-bar {
  height: 44px;
  width: 100%;
  background-color: #0D5FFF;
}
.top-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.top-bar ul li {
  display: inline-block;
}
.top-bar ul li a, .top-bar ul li a:active, .top-bar ul li a:visited, .top-bar ul li a:focus {
  color: #fff;
  font-size: 14px;
  text-transform: capitalize;
  text-decoration: none;
  -webkit-transition: all 0.2s ease 0s;
  -moz-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
}
.top-bar .left-side, .top-bar .right-side {
  margin: 9px 0 0 0;
}
.top-bar .left-side li {
  padding: 0 10px;
}
.top-bar .left-side li:first-child {
  padding-left: 0;
}
.top-bar .right-side {
  text-align: right;
}
.top-bar .right-side li {
  padding: 0 4px;
}
.top-bar .right-side li:last-child {
  padding-right : 0;
}
</style>
