<template>
  <div>
    <div class="chat-head-user" @click.stop.prevent="selectUser(user.User)">
      <img
        :src="user.User.avatar"
        alt=""
        class="chat-head-user-avatar"
      />
      <div class="chat-head-user-head">
        <router-link
          :to="{ name: 'user-tweets', params: { id: user.User.id } }"
          class="chat-head-user-name"
          >{{ user.User? user.User.name: '' }}</router-link
        >
        <router-link
          :to="{ name: 'user-tweets', params: { id: user.User.id } }"
          class="chat-head-user-account"
          >@ {{  user.User? user.User.account: '' }}</router-link
        >
        <a class="chat-head-user-moment">{{ user.createdAt | fromNow}}</a>
        <div class="chat-head-user-intro">
          {{ user.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { messageFeature } from "../utils/socket";
import { imageFilter, timeFilter } from "../utils/mixins";
// import userAPI from "../apis/users";
// import messageAPI from "../apis/message";
export default {
  name: "MessageUser",
  mixins: [messageFeature, imageFilter, timeFilter],
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      message: {},
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    selectUser(user) {
      this.$store.dispatch("setMessagedUser", user);
      const roomName = this.createRoomName(user.id, this.getCurrentUser.id);
      this.fetchPrivateMessage(roomName);
    },
  },
};
</script>