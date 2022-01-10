<template>
  <div class="profile">
    <div class="navTop">
      <div class="navTop-title">
        <img src="../../public/images/icon_back.png" alt="" class="navTop-title-back" @click="$router.push('/tweets')">
        <div class="navTop-title-name">
          {{getUserProfile.name}}
          <div class="navTop-title-name-tweets">{{getUserProfile.Tweets}}<span> 貼文</span></div>
        </div>
      </div>
    </div>
    <div class="user">
      <img :src="getUserProfile.cover | emptyCover" alt="" class="user-bg" />
      <div class="user-header">
        <div class="user-header-container">
          <img :src="getUserProfile.avatar | emptyAvatar" alt="" class="user-header-container-photo" />
        </div>
        <div class="user-header-edit">
          <button
            class="btn-edit"
            data-bs-toggle="modal"
            data-bs-target="#user-setting-edit"
          >
            編輯個人資料
          </button>
        </div>
      </div>
      <div class="user-title">
        <div class="user-title-name">{{ getUserProfile.name }}</div>
        <div class="user-title-account">@{{ getUserProfile.account }}</div>
      </div>
      <div class="user-info">
        <div class="user-info-content">{{ getUserProfile.introduction }}</div>
        <div class="user-info-feat">
          <div class="user-info-feat-following">
            {{ getUserProfile.Followings ? getUserProfile.Followings.length : '' }} 個<span class="user-info-feat-unit"
              >跟隨中</span
            >
          </div>
          <div class="user-info-feat-follower">
            {{ getUserProfile.Followings ? getUserProfile.Followers.length: '' }} 位<span class="user-info-feat-unit"
              >跟隨者</span
            >
          </div>
        </div>
      </div>
      <div class="user-navPill">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user-tweets', params: { id: getUserProfile.id }}">推文</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user-replies', params: { id: getUserProfile.id } }"
              >推文與回覆</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'user-likes', params: { id: getUserProfile.id } }"
              >喜歡的內容</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, imageFilter } from '../utils/mixins'
export default {
  name: "getUserProfile",
  mixins: [ userFeature, imageFilter ],
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  computed: {
    ...mapGetters(['getUserProfile']),
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  width: inherit;
}
</style>