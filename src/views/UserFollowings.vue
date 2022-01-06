<template>
  <div class="app-container">
    <div class="header">
      <Sidebar />
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
import Sidebar from '../components/Sidebar.vue'
import UserFollowing from '../components/UserFollowing.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Sidebar, UserFollowing, Follow
  }
}
</script>