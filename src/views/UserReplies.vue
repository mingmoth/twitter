<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserReply />
    </div>
    <div class="popular">
      <Follow />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import UserReply from '../components/UserReply.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Sidebar, UserReply, Follow
  }
}
</script>