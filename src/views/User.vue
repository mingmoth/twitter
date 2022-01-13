<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserProfile :getUserProfile="getUserProfile"/>
      <router-view />
      <UserSettingModal />
      <TweetModal />
      <TweetReplyModal :tweet="getUserTweetModal"/>
    </div>
    <div class="popular">
      <Popular />
    </div>  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, imageFilter } from '../utils/mixins'

import Sidebar from '../components/Sidebar.vue'
import UserProfile from '../components/UserProfile.vue'
import Popular from '../components/Popular.vue'
import UserSettingModal from '../components/UserSettingModal.vue'
import TweetModal from '../components/TweetModal.vue'
import TweetReplyModal from '../components/TweetReplyModal.vue'
export default {
  name: 'User',
  mixins: [ userFeature, imageFilter ],
  components: {
    Sidebar, UserProfile, Popular, UserSettingModal, TweetModal, TweetReplyModal
  },
  computed: {
    ...mapGetters(['getUserProfile', 'getUserTweetModal']),
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId)
    next();
  },
}
</script>