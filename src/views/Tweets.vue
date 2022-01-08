<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserPost />
      <div>
        <TweetItem v-for="tweet in getTweets" :key="tweet.id" :tweet="tweet"/>
      </div>
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
import UserPost from "../components/UserPost.vue";
import TweetItem from '../components/TweetItem.vue'
import TweetModal from "../components/TweetModal.vue";
import TweetReplyModal from "../components/TweetReplyModal.vue";
import Follow from "../components/Follow.vue";

import { mapGetters } from "vuex";
import { tweetFeature } from "../utils/mixins";

export default {
  name: "Tweets",
  components: {
    Sidebar,
    UserPost, TweetItem,
    TweetModal,
    TweetReplyModal,
    Follow,
  },
  mixins: [tweetFeature],
  created() {
    this.fetchTweets();
  },
  computed: {
    ...mapGetters(["getTweets"]),
  },
};
</script>

<style lang="scss">
</style>