<template>
  <div class="main">
    <NavTopAdmin />
    <TweetAdmin />
  </div>
</template>

<script>
import NavTopAdmin from './NavTopAdmin.vue'
import TweetAdmin from './TweetAdmin.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTopAdmin, TweetAdmin
  }
}
</script>