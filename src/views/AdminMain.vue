<template>
  <div class="app-container">
    <div class="header">
      <NavAdmin />
    </div>
    <div class="home-admin">
      <HomeAdmin />
    </div>
    
  </div>
</template>

<script>
import NavAdmin from '../components/NavAdmin.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
export default {
  name: 'UserTweets',
  components: {
    NavAdmin, HomeAdmin
  }
}
</script>