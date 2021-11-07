<template>
  <div class="main">
    <NavTop />
    <MainPost />
    <Tweet />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import MainPost from '../components/MainPost.vue'
import Tweet from './Tweet.vue'
export default {
  name: 'Main',
  components: {
    NavTop, MainPost, Tweet,
  }
}
</script>