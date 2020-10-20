<template lang='pug'>
    .loginContainer
        el-form.loginForm
            el-form-item(label="Username" prop="username")
                el-input(v-model="form.username")
            el-form-item(label="Password" prop="username")
                el-input(v-model="form.password" type="password")
            el-form-item
                el-button.loginBtn(type="primary" @click="login") Login
</template>

<script>
import { login } from '@/utils/fakeLogin'

export default {
  name: 'Login',
  layout: 'white',
  components: {
  },
  async created () {
  },
  async mounted () {
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      defaultConfig: {
        username: 'admin',
        password: 'qwer1234%'
      }
    }
  },
  methods: {
    async login () {
      let { username, password } = this.form
      username = username.trim()
      password = password.trim()
      if (!username || !password) {
        this.$message.warning('Please input username/password')
        return
      }
      if (username === this.defaultConfig.username && password === this.defaultConfig.password) {
        await login()
        this.$message.success('Successfully login')
        this.$router.push('/')
      } else {
        this.$message.error('Wrong username/password')
      }
    }
  },
  head () {
    return {
      title: 'Flow Data Capturer',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Flow Data Capturer'
      }],
      link: []
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
.loginContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url('../assets/flow/login/bg.jpg');
  .loginForm{
      border: 1px solid #ccc;
      padding: 20px 20px 40px 20px;
      width: 400px;
      height: 200px;
  }
  .el-form-item__label{
      color:#fff;
  }
  .loginBtn{
      float: right;
      span{
          color: #fff;
      }
  }
}
</style>
