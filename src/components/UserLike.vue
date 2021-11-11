<template>
  <div class="main">
    <NavTop />
    <User />
    <Tweet />
    <UserSettingModal />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import User from './User.vue'
import Tweet from './Tweet.vue'
import UserSettingModal from './UserSettingModal.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTop, User, Tweet, UserSettingModal
  }
}
</script>