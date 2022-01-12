<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserProfile />
      <router-view />
      <UserSettingModal />
      <TweetModal />
    </div>
    <div class="popular">
      <Popular />
    </div>  
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import UserProfile from '../components/UserProfile.vue'
import Popular from '../components/Popular.vue'
import UserSettingModal from '../components/UserSettingModal.vue'
import TweetModal from '../components/TweetModal.vue'
export default {
  name: 'User',
  components: {
    Sidebar, UserProfile, Popular, UserSettingModal, TweetModal
  }
}
</script>