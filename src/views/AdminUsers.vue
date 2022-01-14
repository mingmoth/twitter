<template>
  <div class="app-container">
    <div class="sidebar">
      <AdminSidebar />
    </div>
    <div class="home">
      <div class="navTop">
        <div class="navTop-title">
          <div class="navTop-title-name">使用者列表</div>
        </div>
      </div>
      <div class="row" id="user-panel">
        <UserCard v-for="user in getAdminUsers" :key="user.id" :user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { adminFeature } from '../utils/mixins'

import AdminSidebar from '../components/AdminSidebar.vue'
import UserCard from '../components/UserCard.vue'
export default {
  name: 'AdminUsers',
  mixins: [adminFeature],
  components: {
    AdminSidebar, UserCard
  },
  created() {
    this.fetchAdminUsers()
  },
  computed: {
    ...mapGetters(['getAdminUsers'])
  },
}
</script>

<style lang="scss" scoped>
.row {
  margin-left: 1%;
  padding-top: 55px;
}
</style>