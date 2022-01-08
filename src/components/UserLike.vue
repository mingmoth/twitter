<template>
  <div class="main">
    <NavTop />
    <User />
    <UserSettingModal />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import User from './User.vue'

import UserSettingModal from './UserSettingModal.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTop, User, UserSettingModal
  }
}
</script>