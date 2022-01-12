<template>
  <div>
    <TweetReply v-for="tweet in getUserReplies" :key="tweet.id" :tweet="tweet"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'


import TweetReply from '../components/TweetReply.vue'

export default {
  name: 'UserReplies',
  mixins: [ userFeature ],
  components: { TweetReply },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserReplies(userId)
  },
  computed: {
    ...mapGetters(['getUserReplies'])
  },
}
</script>