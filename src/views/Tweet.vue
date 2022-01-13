<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <UserTweet :tweet="getTweet" />
      <Reply v-for="reply in getTweet.Replies" :key="reply.id" :reply="reply" :tweetOwner="getTweet.User.account"/>
      <TweetModal />
      <TweetReplyModal :tweet="getTweet"/>
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
  name: "Tweet",
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
    this.fetchTweets()
    const { id: tweetId } = this.$route.params
    this.fetchTweet(tweetId)
  },
  computed: {
    ...mapGetters(['getTweet']),
  },
  methods: {},
};
</script>