<template>
  <div>
    <TweetItem v-for="tweet in getUserTweets" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'

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
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUserTweets(userId)
    next();
  },
}
</script>