<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <NavFollow />
      <router-view />
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue'
import NavFollow from '../components/NavFollow.vue'
import Popular from '../components/Popular.vue'
export default {
  name: 'UserFollowings',
  components: {
    Sidebar, NavFollow, Popular
  },
  
}
</script>