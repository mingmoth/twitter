<template>
  <div class="side">
    <router-link to="/tweets">
      <img src="../../public/images/ac logo.png" class="side-logo"
    /></router-link>
    <ul>
      <li>
        <router-link to="/tweets" class="side-option">
          <img src="../../public/images/home logo.png" alt="" class="icon" />
          <img
            src="../../public/images/home logo active.png"
            alt=""
            class="icon-active"
          />
          <span>首頁</span>
        </router-link>
      </li>
      <li>
        <router-link to="tweets" class="side-option">
          <img src="../../public/images/user logo.png" alt="" class="icon" />
          <img
            src="../../public/images/user logo active.png"
            alt=""
            class="icon-active"
          />
          <span>個人資料</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings" class="side-option">
          <img src="../../public/images/setting logo.png" alt="" class="icon" />
          <img
            src="../../public/images/setting logo active.png"
            alt=""
            class="icon-active"
          />
          <span>設定</span>
        </router-link>
      </li>
      <button
        class="btn-side"
        data-bs-toggle="modal"
        data-bs-target="#main-post-tweet"
      >
        推文
      </button>
    </ul>
    <div class="side-logout">
      <router-link to="/login" class="side-logout-label">
      <img src="../../public/images/icon_logout.png" alt="" class="img"> 登出</router-link>
    </div>
  </div>
</template>