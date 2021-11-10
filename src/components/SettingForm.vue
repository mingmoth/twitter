<template>
  <div class="setting">
    <form action="">
      <div class="form-label-group">
        <label for="account">帳號</label>
        <input type="text" name="account" id="account">
      </div>
      <div class="form-label-group">
        <label for="name">名稱</label>
        <input type="text" name="name" id="name">
      </div>
      <div class="form-label-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input type="password" name="password" id="password">
      </div>
      <div class="form-label-group">
        <label for="passwordCheck">密碼確認</label>
        <input type="password" name="passwordCheck" id="passwordCheck">
      </div>
      <button class="btn-setting">儲存</button>
    </form>
  </div>
</template>