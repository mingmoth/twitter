<template>
  <div>
    <div v-if="!getUserLikes" class="empty">
      使用者尚無喜歡的推文
    </div>
    <TweetItem v-for="tweet in getUserLikes" :key="tweet.id" :tweet="tweet" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userFeature } from "../utils/mixins";
import { eventBus } from "../utils/eventBus";

import TweetItem from "../components/TweetItem.vue";

export default {
  name: "UserLikes",
  mixins: [userFeature],
  components: { TweetItem },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserLikes(userId);
    this.updateUser()
  },
  computed: {
    ...mapGetters(["getUserLikes"]),
  },
  methods: {
    updateUser() {
      eventBus.$on("updateUser", () => {
        const { id: userId } = this.$route.params;
        this.fetchUserLikes(userId);
      });
    },
  },
};
</script>