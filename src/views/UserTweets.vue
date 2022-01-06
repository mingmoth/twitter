<template>
  <div class="app-container">
    <div class="header">
      <Sidebar />
    </div>
    <div class="home">
      <UserTweet />
    </div>
    <div class="follows">
      <Follow />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import UserTweet from '../components/UserTweet.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Sidebar, UserTweet, Follow
  }
}
</script>