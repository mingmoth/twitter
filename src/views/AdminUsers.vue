<template>
  <div class="app-container">
    <div class="header">
      <AdminSidebar />
    </div>
    <div class="home">
      <UserAdmin />
    </div>
    
  </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import UserAdmin from '../components/UserAdmin.vue'
export default {
  name: 'AdminUsers',
  components: {
    AdminSidebar, UserAdmin
  }
}
</script>