<template>
  <div class="side">
    <router-link to="/admin/tweets">
      <img src="../../public/images/ac logo.png" class="side-logo"
    /></router-link>
    <ul>
      <li>
        <router-link to="/admin/tweets" class="side-option">
          <img src="../../public/images/home logo.png" alt="" class="icon" />
          <img
            src="../../public/images/home logo active.png"
            alt=""
            class="icon-active"
          />
          <span>推文清單</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/users" class="side-option">
          <img src="../../public/images/user logo.png" alt="" class="icon" />
          <img
            src="../../public/images/user logo active.png"
            alt=""
            class="icon-active"
          />
          <span>使用者列表</span>
        </router-link>
      </li>
      
      
    </ul>
    <div class="side-logout">
      <a class="side-logout-label">
      <img src="../../public/images/icon_logout.png" alt="" class="img" @click="logout"> <span>登出</span></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AdminSidebar',
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    },
  },
}
</script>