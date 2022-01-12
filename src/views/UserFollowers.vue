<template>
  <div >
    <UserFollowing v-for="follow in getUserFollowers" :key="follow.id" :follow="follow"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
import UserFollowing from '../components/UserFollowing.vue'
export default {
  name: 'UserFollowers',
  mixins: [ userFeature ],
  components: { UserFollowing },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserFollowers(userId)
  },
  computed: {
    ...mapGetters(['getUserFollowers'])
  },
}
</script>