<template>
  <div class="register">
    <div class="register-logo"></div>
    <div class="register-title">建立您的帳號</div>
    <form action="">
      <div class="form-label-group">
        <label for="account">帳號</label>
        <input type="text" name="account" id="account" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="name">名稱</label>
        <input type="text" name="name" id="name" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autofocus
        />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="passwordCheck">密碼確認</label>
        <input
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          required
          autofocus
        />
      </div>
      <button class="btn-register" type="submit">註冊</button>
    </form>
    <div class="register-cancel">
      <p><router-link class="register-cancel-target" to="/login">取消</router-link></p>
    </div>
  </div>
</template>