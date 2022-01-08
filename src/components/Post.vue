<template>
  <div class="main">
    <NavTop />
    <UserPost />
    <Reply />
    <TweetModal />
    <TweetReplyModal />
  </div>
  
</template>

<script>
import NavTop from './NavTop.vue'
import UserPost from './UserTweet.vue'
import Reply from './Reply.vue'
import TweetModal from './TweetModal.vue'
import TweetReplyModal from './TweetReplyModal.vue'
export default {
  name: 'Post', 
  components: {
    NavTop, UserPost, Reply, TweetModal, TweetReplyModal
  }
}
</script>