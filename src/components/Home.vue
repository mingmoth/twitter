<template>
  <div class="main">
    <NavTop />
    <MainPost />
    <Tweet />
    <TweetModal />
    <TweetReplyModal />
  </div>
  
</template>

<script>
import NavTop from './NavTop.vue'
import MainPost from '../components/MainPost.vue'
import Tweet from './Tweet.vue'
import TweetModal from './TweetModal.vue'
import TweetReplyModal from './TweetReplyModal.vue'
export default {
  name: 'Main',
  components: {
    NavTop, MainPost, Tweet, TweetModal, TweetReplyModal
  }
}
</script>