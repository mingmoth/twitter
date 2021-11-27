<template>
  <div class="user">
    <img :src="user.coverImage" alt="" class="user-bg">
    <div class="user-header">
      <div class="user-header-container">
        <img :src="user.image" alt="" class="user-header-container-photo">
      </div>
      <div class="user-header-edit">
        <button class="btn-edit" data-bs-toggle="modal"
          data-bs-target="#user-setting-edit">編輯個人資料</button>
      </div>
    </div>
    <div class="user-title">
      <div class="user-title-name">{{user.name}}</div>
      <div class="user-title-account">@{{user.account}}</div>
    </div>
    <div class="user-info">
      <div class="user-info-content">{{user.text}} </div>
      <div class="user-info-feat">
        <div class="user-info-feat-following">{{user.followingsLength}} 個<span class="user-info-feat-unit">跟隨中</span></div>
        <div class="user-info-feat-follower">{{user.followersLength}} 位<span class="user-info-feat-unit">跟隨者</span></div>
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

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>