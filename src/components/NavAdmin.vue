<template>
  <div class="nav">
    <div class="nav-logo"></div>
    <div class="nav-option">
      <div class="nav-option-item">
        <div class="nav-option-item-icon" id="homePage"></div>
        <router-link to="/admin/main" class="nav-option-item-label">推文清單</router-link>
      </div>
      <div class="nav-option-item">
        <div class="nav-option-item-icon" id="userInfo"></div>
        <router-link to="/admin/users" class="nav-option-item-label">使用者列表</router-link>
      </div>
    </div>
    <div class="nav-logout">
      <div class="nav-logout-icon"></div>
      <router-link to="/login" class="nav-logout-label">登出</router-link>
    </div>
  </div>
</template>