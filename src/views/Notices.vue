<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <div class="navTop">
        <div class="navTop-title">
          <div class="navTop-title-name">通知</div>
        </div>
        <img src="../../public/images/ac logo.png" alt="" class="navTop-logo" />
      </div>
      <div class="container">
        <Notice />
        <Notice />
        <Notice />
      </div>
      <TweetModal />
      <TweetReplyModal :tweet="getTweetModal" />
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Notice from '../components/Notice.vue'
import TweetModal from "../components/TweetModal.vue";
import TweetReplyModal from "../components/TweetReplyModal.vue";
import Popular from "../components/Popular.vue";

import { mapGetters } from "vuex";
import { tweetFeature } from "../utils/mixins";

export default {
  name: "Notifications",
  components: {
    Sidebar,
    Notice,
    TweetModal,
    TweetReplyModal,
    Popular,
  },
  mixins: [tweetFeature],
  created() {
    this.fetchTweets();
  },
  computed: {
    ...mapGetters(["getTweets", "getTweetModal"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_rwd.scss";

.container {
  border-top: 1px solid var(--input-border);
  padding-top: 55px;
  @include breakpoint(mobile) {
    padding-top: 0;
    margin-top: 55px;
  }
}
</style>