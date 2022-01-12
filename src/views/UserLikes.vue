<template>
  <div>
    <TweetItem v-for="tweet in getUserLikes" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'

import TweetItem from '../components/TweetItem.vue'

export default {
  name: 'UserLikes',
  mixins: [ userFeature ],
  components: { TweetItem },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserLikes(userId)
  },
  computed: {
    ...mapGetters(['getUserLikes']),
  },
}
</script>