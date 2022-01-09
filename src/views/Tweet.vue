<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserTweet :tweet="getTweet" />
      <Reply />
      <TweetModal />
      <TweetReplyModal />
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

 <script>
import Sidebar from "../components/Sidebar.vue";
import UserTweet from '../components/UserTweet.vue'
import Reply from '../components/Reply.vue'
import TweetModal from '../components/TweetModal.vue'
import TweetReplyModal from '../components/TweetReplyModal.vue'
import Popular from "../components/Popular.vue";

import { tweetFeature } from '../utils/mixins'
import { mapGetters } from 'vuex'
export default {
  name: "Posts",
  mixins: [tweetFeature],
  components: {
    Sidebar,
    UserTweet,
    Reply,
    TweetModal,
    TweetReplyModal,
    Popular,
  },
  created() {
    const { id: tweetId } = this.$route.params
    this.fetchTweet(tweetId)
  },
  computed: {
    ...mapGetters(['getTweet']),
  },
  methods: {},
};
</script>