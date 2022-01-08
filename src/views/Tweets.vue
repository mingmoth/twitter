<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserPost />
      <Tweet />
      <TweetModal />
      <TweetReplyModal />
    </div>
    <div class="popular">
      <Follow />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import UserPost from '../components/UserPost.vue'
import TweetModal from '../components/TweetModal.vue'
import TweetReplyModal from '../components/TweetReplyModal.vue'
import Follow from '../components/Follow.vue'
export default {
  name: "Main",
  components: {
    Sidebar, UserPost, TweetModal, TweetReplyModal, Follow
  },
};
</script>

<style lang="scss">
</style>