<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <div class="navTop">
        <div class="navTop-title">
          <div class="navTop-title-name">通知</div>
        </div>
        <img src="../../public/images/ac logo.png" alt="" class="navTop-logo" />
      </div>
      <div class="container">
        <Notice v-for="notice in getNotices" :key="notice.id" :notice="notice"/>
      </div>
      <TweetModal />
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Notice from '../components/Notice.vue'
import TweetModal from "../components/TweetModal.vue";
import Popular from "../components/Popular.vue";

import { mapGetters } from "vuex";
import { noticeFeature } from "../utils/notice";

export default {
  name: "Notices",
  components: {
    Sidebar,
    Notice,
    TweetModal,
    Popular,
  },
  mixins: [noticeFeature],
  created() {
    this.fetchNotices();
  },
  computed: {
    ...mapGetters(["getNotices"]),
  },
  sockets: {
    getUnreadNotice() {
      this.fetchNotices();
    }
  },
  beforeDestroy() {
    this.toggleNotices()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_rwd.scss";

.container {
  border-top: 1px solid var(--input-border);
  padding-top: 55px;
  @include breakpoint(mobile) {
    padding-top: 0;
    margin-top: 55px;
  }
}
</style>