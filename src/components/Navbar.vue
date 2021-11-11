<template>
  <div class="nav">
    <div class="nav-logo"></div>
    <div class="nav-option">
      <div class="nav-option-item">
        <div class="nav-option-item-icon" id="homePage"></div>
        <router-link to="/main" class="nav-option-item-label">首頁</router-link>
      </div>
      <div class="nav-option-item">
        <div class="nav-option-item-icon" id="userInfo"></div>
        <router-link to="/user/tweets" class="nav-option-item-label">個人資料</router-link>
      </div>
      <div class="nav-option-item">
        <div class="nav-option-item-icon" id="settings"></div>
        <router-link to="/settings" class="nav-option-item-label">設定</router-link>
      </div>
      <button class="btn-nav" data-bs-toggle="modal"
          data-bs-target="#main-post-tweet"></button>
    </div>
    <div class="nav-logout">
      <div class="nav-logout-icon"></div>
      <router-link to="/login" class="nav-logout-label">登出</router-link>
    </div>
  </div>
</template>