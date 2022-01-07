<template>
  <div class="login">
    <div class="login-logo"></div>
    <div class="login-title">登入 Alpitter</div>
    <form action="" @submit.stop.prevent="signin">
      <div class="form-label-group">
        <label for="account">帳戶</label>
        <input type="text" name="account" id="account" class="form-control" v-model="account" required autofocus>
        <!-- <div class="login-error" style="visibility: none">帳號與密碼不符</div> -->
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input type="password" name="password" id="password" class="form-control" v-model="password" required autofocus>
        <!-- <div class="login-error" style="visibility: none">請輸入密碼</div> -->
      </div>
      <button class="btn-login" type="submit">登入</button>
    </form>
    <div class="login-link">
      <p><router-link class="login-link-target" to="/register">註冊 Alpitter</router-link></p>
      <span> · </span>
      <p><router-link class="login-link-target" to="/adminlogin">後台登入</router-link></p>
    </div>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { successToast, errorToast } from '../utils/toast'

import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      account: '',
      password: '',
      accountFill: false,
      passwordFill: false,
    }
  },
  methods: {
    ...mapActions(['setUser', 'setToken']),
    async signin() {
      if(!this.account) {
        return this.accountFill = true
      }
      if(!this.password) {
        return this.passwordFill = true
      }
      if(!this.password && !this.account) {
        errorToast.fir({
          title: '請確認帳戶與密碼皆已填寫'
        })
        return
      }
      try {
        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password
        })
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        if(data.user.role !== 'admin' && data.user.role !== 'user') {
          errorToast.fire({
            title: '該帳戶含權限問題，請重新註冊'
          })
          return
        }
        if(data.user.role === 'admin') {
          errorToast.fire({
            title: '請至後台入口登入'
          })
          this.$router.push('/adminlogin')
          return
        } else if(data.user.role === 'user') {
          this.setUser(data.user)
          this.setToken(data.token)
          successToast.fire({
            title: '登入成功'
          })
          this.$router.push('/tweets')
        }
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: '查無此帳戶，請確認是否註冊'
        })
      }
    }
  },
}
</script>