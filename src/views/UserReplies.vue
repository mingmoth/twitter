<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserProfile />
      <TweetReply v-for="tweet in getUserReplies" :key="tweet.id" :tweet="tweet"/>
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
import TweetReply from '../components/TweetReply.vue'
import Popular from '../components/Popular.vue'
export default {
  name: 'UserReplies',
  mixins: [ userFeature ],
  components: {
    Sidebar, UserProfile, TweetReply, Popular
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserReplies(userId)
  },
  computed: {
    ...mapGetters(['getUserReplies'])
  },
}
</script>