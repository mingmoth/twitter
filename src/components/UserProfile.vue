<template>
  <div class="profile">
    <div class="navTop">
      <div class="navTop-title">
        <img
          src="../../public/images/icon_back.png"
          alt=""
          class="navTop-title-back"
          @click="$router.back()"
        />
        <div class="navTop-title-name">
          {{ getUserProfile.name }}
          <div class="navTop-title-name-tweets">
            {{ getUserProfile.Tweets }}<span> 貼文</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <img :src="getUserProfile.cover | emptyCover" alt="" class="user-bg" />
      <div class="user-header">
        <div class="user-header-container">
          <img
            :src="getUserProfile.avatar | emptyAvatar"
            alt=""
            class="user-header-container-photo"
          />
        </div>
        <div class="user-header-edit">
          <div v-if="getCurrentUser.id === this.$route.params.id">
            <button
              class="btn-edit"
              data-bs-toggle="modal"
              data-bs-target="#user-setting-edit"
            >
              編輯個人資料
            </button>
          </div>
          <div v-else>
            <img src="../../public/images/btn_messege.png" alt="" class="user-header-edit-message">
            <img src="../../public/images/btn_noti.png" alt="" class="user-header-edit-notice">
            <button 
              v-if="!getUserProfile.isFollowed" 
              class="btn-follow"
              @click.stop.prevent="addFollow(getUserProfile.id)">追蹤</button>
            <button 
              v-else 
              class="btn-unfollow"
              @click.stop.prevent="removeFollow(getUserProfile.id)">正在追蹤</button>
          </div>
        </div>
      </div>
      <div class="user-title">
        <div class="user-title-name">{{ getUserProfile.name }}</div>
        <div class="user-title-account">@{{ getUserProfile.account }}</div>
      </div>
      <div class="user-info">
        <div class="user-info-content">{{ getUserProfile.introduction }}</div>
        <div class="user-info-feat">
          <router-link
            :to="{ name: 'user-followings', params: { id: getUserProfile.id } }"
            class="user-info-feat-following"
          >
            {{
              getUserProfile.Followings ? getUserProfile.Followings.length : ""
            }}
            個<span class="user-info-feat-unit">跟隨中</span>
          </router-link>
          <router-link
            :to="{ name: 'user-followers', params: { id: getUserProfile.id } }"
            class="user-info-feat-follower"
          >
            {{
              getUserProfile.Followings ? getUserProfile.Followers.length : ""
            }}
            位<span class="user-info-feat-unit">跟隨者</span>
          </router-link>
        </div>
      </div>
      <div class="user-navPill">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'user-tweets', params: { id: getUserProfile.id } }"
              >推文</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'user-replies', params: { id: getUserProfile.id } }"
              >推文與回覆</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'user-likes', params: { id: getUserProfile.id } }"
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
import { userFeature, imageFilter } from "../utils/mixins";
export default {
  name: "getUserProfile",
  props: {
    getUserProfile: {
      type: Object,
    },
  },
  mixins: [userFeature, imageFilter],
  computed: {
    ...mapGetters(['getCurrentUser', 'getUserProfile']),
  },
  methods: {
    addFollow(userId) {
      this.followUser(userId)
      if(Number(userId) === Number(this.$route.params.id)) {
        this.$store.dispatch('toggleUserProfile')
      }
    },
    removeFollow(userId) {
      this.unfollowUser(userId)
      if(Number(userId) === Number(this.$route.params.id)) {
        this.$store.dispatch('toggleUserProfile')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  width: inherit;
}
</style>