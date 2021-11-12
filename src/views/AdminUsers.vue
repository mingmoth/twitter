<template>
  <div class="app-container">
    <div class="header">
      <NavAdmin />
    </div>
    <div class="home-admin">
      <UserAdmin />
    </div>
    
  </div>
</template>

<script>
import NavAdmin from '../components/NavAdmin.vue'
import UserAdmin from '../components/UserAdmin.vue'
export default {
  name: 'UserTweets',
  components: {
    NavAdmin, UserAdmin
  }
}
</script>