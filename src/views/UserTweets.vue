<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
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
import Navbar from '../components/Navbar.vue'
import UserTweet from '../components/UserTweet.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Navbar, UserTweet, Follow
  }
}
</script>