<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserPost />
      <div class="container">
        <TweetItem v-for="tweet in getTweets" :key="tweet.id" :tweet="tweet"/>
      </div>
      <TweetModal />
      <TweetReplyModal :tweet="getTweetModal"/>
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import UserPost from "../components/UserPost.vue";
import TweetItem from '../components/TweetItem.vue'
import TweetModal from "../components/TweetModal.vue";
import TweetReplyModal from "../components/TweetReplyModal.vue";
import Popular from "../components/Popular.vue";

import { mapGetters } from "vuex";
import { tweetFeature } from "../utils/mixins";

export default {
  name: "Tweets",
  components: {
    Sidebar,
    UserPost, TweetItem,
    TweetModal,
    TweetReplyModal,
    Popular,
  },
  mixins: [tweetFeature],
  created() {
    this.fetchTweets();
  },
  computed: {
    ...mapGetters(["getTweets", 'getTweetModal']),
  },
  sockets: {
    getUnreadNotice() {
      this.fetchTweets();
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/_rwd.scss';

.container {
  @include breakpoint(mobile) {
    margin-top: 55px;
  }
}
</style>