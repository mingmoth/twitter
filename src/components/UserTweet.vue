<template>
  <div class="main">
    <NavTop />
    <User />
    <Tweet />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import User from './User.vue'
import Tweet from './Tweet.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTop, User, Tweet
  }
}
</script>