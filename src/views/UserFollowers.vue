<template>
  <div >
    <UserFollowing v-for="follow in getUserFollowers" :key="follow.id" :follow="follow"/>
    <TweetModal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'

import UserFollowing from '../components/UserFollowing.vue'
import TweetModal from '../components/TweetModal.vue'
export default {
  name: 'UserFollowers',
  mixins: [ userFeature ],
  components: { UserFollowing, TweetModal },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserFollowers(userId)
  },
  computed: {
    ...mapGetters(['getUserFollowers'])
  },
}
</script>