<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
    </div>
    <div class="home">
      <UserFollowing />
    </div>
    <div class="follows">
      <Follow />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import UserFollowing from '../components/UserFollowing.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Navbar, UserFollowing, Follow
  }
}
</script>