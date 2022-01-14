<template>
  <div class="login">
    <div class="login-logo"></div>
    <div class="login-title">管理 Alpitter</div>
    <form action="" @submit.stop.prevent="adminLogin">
      <div class="form-label-group">
        <label for="account">帳戶</label>
        <input type="text" name="account" id="account" class="form-control" v-model="account" required autofocus>
        <div class="login-error" style="visibility: none"></div>
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input type="password" name="password" id="password" class="form-control" v-model="password" required autofocus>
        <div class="login-error" style="visibility: none"></div>
      </div>
      <button class="btn-login" type="submit">登入</button>
    </form>
    <div class="login-link">
      <p><router-link class="login-link-target" to="/signin">前台登入</router-link></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { successToast, errorToast } from '../utils/toast'
import authorizationAPI from '../apis/authorization'

export default {
  name: 'AdminLogin',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['setUser', 'setToken']),
    async adminLogin() {
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
        if(data.user.role === 'user') {
          errorToast.fire({
            title: '此帳號不含登入權限'
          })
          this.$router.push('/signin')
          return
        } else if(data.user.role === 'admin') {
          this.setUser(data.user)
          this.setToken(data.token)
          successToast.fire({
            title: '登入成功'
          })
          this.$router.push('/admin/tweets')
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