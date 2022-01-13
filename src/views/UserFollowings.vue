<template>
  <div >
    <UserFollowing 
      v-for="follow in getUserFollowings" 
      :key="follow.id" 
      :follow="follow"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
import UserFollowing from '../components/UserFollowing.vue'
export default {
  name: 'UserFollowings',
  mixins: [ userFeature ],
  components: { UserFollowing },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserFollowings(userId)
  },
  computed: {
    ...mapGetters(['getUserFollowings'])
  },
  methods: {
    updateFollowing() {
      const { id: userId } = this.$route.params
    this.fetchUserFollowings(userId)
    }
  }
}
</script>