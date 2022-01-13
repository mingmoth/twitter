<template>
  <div class="following">
    <img :src="follow.avatar | emptyAvatar" alt="" class="following-icon">
    
    <div class="following-content">
      <div class="following-content-head">
        <div class="following-content-head-title">
          <router-link :to="{name: 'user-tweets', params: { id: follow.id}}" class="following-content-head-title-name">{{follow.name}}</router-link>
          <div class="following-content-head-title-account">@{{follow.account}}</div>
        </div>
        <button 
          v-if="!follow.isFollowed" 
          class="btn-following" 
          v-show="getCurrentUser.id !== follow.id"
          @click.stop.prevent="addFollow(follow.id)">跟隨</button>
        <button 
          v-else 
          class="btn-unfollowing" 
          v-show="getCurrentUser.id !== follow.id"
          @click.stop.prevent="removeFollow(follow.id)">正在跟隨</button>
      </div>
      <div class="following-content-body">
        {{follow.introduction}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, imageFilter } from '../utils/mixins'
export default {
  name: "UserFollowing",
  mixins: [ userFeature, imageFilter ],
  props: {
    follow: {
      type: Object,
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    addFollow(userId) {
      this.followUser(userId)
    },
    removeFollow(userId) {
      this.unfollowUser(userId)
    }
  },
};
</script>