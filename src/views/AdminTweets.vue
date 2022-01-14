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
        <TweetAdmin
          v-for="tweet in getAdminTweets"
          :key="tweet.id"
          :tweet="tweet"
        />
        <div class="page-wrapper">
          <ul class="pagination">
            <li class="page-item">
              <router-link
                class="page-link"
                :to="{
                  name: 'admin-tweets',
                  query: { page: getAdminSetting.prev },
                }"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </router-link>
            </li>
            <li
              class="page-item"
              v-for="page in getAdminSetting.totalPage"
              :key="page"
            >
              <router-link
                class="page-link"
                :to="{ name: 'admin-tweets', query: { page: page } }"
                >{{ page }}</router-link
              >
            </li>
            <li class="page-item">
              <router-link
                class="page-link"
                :to="{
                  name: 'admin-tweets',
                  query: { page: getAdminSetting.next },
                }"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { adminFeature } from "../utils/mixins";

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
    const { page = "" } = this.$route.query;
    this.fetchAdminTweets({ queryPage: page });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "" } = to.query;
    this.fetchAdminTweets({ queryPage: page });
    next();
  },
  computed: {
    ...mapGetters(["getAdminTweets", "getAdminSetting"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 55px;
}
.page-wrapper {
  padding-top: 2%;
  display: flex;
  justify-content: center;
}
</style>