<template>
  <div>
    <div v-if="!getUserTweets" class="empty">
      使用者尚無推文
    </div>
    <TweetItem v-for="tweet in getUserTweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
import { eventBus } from "../utils/eventBus";

import TweetItem from '../components/TweetItem.vue'

export default {
  name: 'UserTweets',
  mixins: [ userFeature ],
  components: { TweetItem },
  computed: {
    ...mapGetters(['getUserTweets'])
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserTweets(userId)
    this.updateUser()
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUserTweets(userId)
    next();
  },
  methods: {
    updateUser() {
      eventBus.$on("updateUser", () => {
        const { id: userId } = this.$route.params;
        this.fetchUserTweets(userId)
      });
    },
  },
}
</script>