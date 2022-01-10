<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserProfile />
      <TweetItem v-for="tweet in getUserLikes" :key="tweet.id" :tweet="tweet"/>
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'

import Sidebar from '../components/Sidebar.vue'
import UserProfile from '../components/UserProfile.vue'
import TweetItem from '../components/TweetItem.vue'
import Popular from '../components/Popular.vue'
export default {
  name: 'UserLikes',
  mixins: [ userFeature ],
  components: {
    Sidebar, UserProfile, TweetItem, Popular
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserLikes(userId)
  },
  computed: {
    ...mapGetters(['getUserLikes']),
  },
}
</script>