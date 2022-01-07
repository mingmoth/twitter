<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserLike />
    </div>
    <div class="popular">
      <Follow />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import UserLike from '../components/UserLike.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'UserTweets',
  components: {
    Sidebar, UserLike, Follow
  }
}
</script>