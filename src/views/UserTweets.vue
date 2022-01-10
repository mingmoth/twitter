<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserProfile />
      <TweetItem v-for="tweet in getUserTweets" :key="tweet.id" :tweet="tweet" />
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
  name: 'UserTweets',
  mixins: [ userFeature ],
  components: {
    Sidebar, UserProfile, TweetItem, Popular
  },
  computed: {
    ...mapGetters(['getUserTweets'])
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserTweets(userId)
  },
}
</script>