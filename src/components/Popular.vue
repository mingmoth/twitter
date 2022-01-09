<template>
  <div class="follow">
    <div class="follow-title">Popular</div>
    <div 
      class="follow-item"
      v-for="user in getPopular"
      :key="user.id">
      <img :src="user.avatar | emptyAvatar" alt="" class="follow-item-icon">
      <div class="follow-item-title">
        <div class="follow-item-title-name">{{user.name}}</div>
        <div class="follow-item-title-account">{{user.account}}</div>
      </div>
      <button v-if="user.isFollowed" class="btn-unfollow" @click.stop.prevent="removeFollow(user.id)">正在跟隨</button>
      <button v-else class="btn-follow" @click.stop.prevent="addFollow(user.id)">跟隨</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, imageFilter } from '../utils/mixins'
export default {
  name: 'Popular',
  mixins: [userFeature, imageFilter],
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchPopular()
  },
  computed: {
    ...mapGetters(['getPopular']),
  },
  methods: {
    addFollow(userId) {
      this.followUser(userId)
    },
    removeFollow(userId) {
      this.unfollowUser(userId)
    },
  }
}
</script>