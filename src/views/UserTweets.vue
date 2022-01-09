<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Popular from '../components/Popular.vue'
export default {
  name: 'UserTweets',
  components: {
    Sidebar, Popular
  }
}
</script>