<template>
  <div class="user">
    <div class="user-bg"></div>
    <div class="user-header">
      <div class="user-header-container">
        <div class="user-header-container-photo"></div>
      </div>
      <div class="user-header-edit">
        <button class="btn-edit">編輯個人資料</button>
      </div>
    </div>
    <div class="user-title">
      <div class="user-title-name">John Doe</div>
      <div class="user-title-account">@heyjohn</div>
    </div>
    <div class="user-info">
      <div class="user-info-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
      <div class="user-info-feat">
        <div class="user-info-feat-following">34 個<span class="user-info-feat-unit">跟隨中</span></div>
        <div class="user-info-feat-follower">59 位<span class="user-info-feat-unit">跟隨者</span></div>
      </div>
    </div>
    <div class="user-navPill">
      <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="nav-link" to="/user/tweets">推文</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/user/replies">推文與回覆</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/user/likes">喜歡的內容</router-link></li>
      </ul>
    </div>
  </div>
</template>