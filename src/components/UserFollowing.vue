<template>
  <div class="main">
    <NavTop />
    <NavFollow />
    <Following />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import NavFollow from './NavFollow.vue'
import Following from './Following.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTop, NavFollow, Following
  }
}
</script>