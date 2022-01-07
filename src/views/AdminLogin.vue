<template>
  <div class="login">
    <div class="login-logo"></div>
    <div class="login-title">管理 Alpitter</div>
    <form action="">
      <div class="form-label-group">
        <label for="account">帳戶</label>
        <input type="text" name="account" id="account" class="form-control" required autofocus>
        <div class="login-error" style="visibility: none"></div>
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input type="password" name="password" id="password" class="form-control" required autofocus>
        <div class="login-error" style="visibility: none"></div>
      </div>
      <button class="btn-login" type="submit">登入</button>
    </form>
    <div class="login-link">
      <p><router-link class="login-link-target" to="/login">前台登入</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
}
</script>