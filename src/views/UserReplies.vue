<template>
  <div>
    <div v-if="!getUserReplies" class="empty">
      使用者尚無推文回復
    </div>
    <TweetReply v-for="tweet in getUserReplies" :key="tweet.id" :tweet="tweet"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
import { eventBus } from "../utils/eventBus";

import TweetReply from '../components/TweetReply.vue'

export default {
  name: 'UserReplies',
  mixins: [ userFeature ],
  components: { TweetReply },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserReplies(userId)
    this.updateUser()
  },
  computed: {
    ...mapGetters(['getUserReplies'])
  },
  methods: {
    updateUser() {
      eventBus.$on("updateUser", () => {
        const { id: userId } = this.$route.params;
        this.fetchUserReplies(userId)
      });
    },
  },
}
</script>