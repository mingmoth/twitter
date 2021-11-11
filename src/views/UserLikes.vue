<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
    </div>
    <div class="home">
      <UserLike />
    </div>
    <div class="follows">
      <Follow />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import UserLike from '../components/UserLike.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Navbar, UserLike, Follow
  }
}
</script>