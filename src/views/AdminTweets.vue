<template>
  <div class="app-container">
    <div class="sidebar">
      <AdminSidebar />
    </div>
    <div class="home">
      <div class="navTop">
        <div class="navTop-title">
          <div class="navTop-title-name">推文清單</div>
        </div>
      </div>
      <div class="wrapper">
        <TweetAdmin v-for="tweet in getAdminTweets" :key="tweet.id" :tweet="tweet"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { adminFeature } from '../utils/mixins'

import AdminSidebar from "../components/AdminSidebar.vue";
import TweetAdmin from "../components/TweetAdmin.vue";
export default {
  name: "AdminTweets",
  mixins: [adminFeature],
  components: {
    AdminSidebar,
    TweetAdmin,
  },
  created() {
    this.fetchAdminTweets()
  },
  computed: {
    ...mapGetters(['getAdminTweets'])
  },
  
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 55px;
}
</style>