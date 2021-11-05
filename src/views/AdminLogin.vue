<template>
  <div class="login">
    <div class="login-logo"></div>
    <div class="login-title">登入 Alpitter</div>
    <form action="">
      <div class="form-label-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="form-control" required autofocus>
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