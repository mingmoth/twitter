<template>
  <div>
    <div class="chat-body-header">公開聊天室</div>
    <div class="chat-body-text">
      <div
        class="chat-body-text-wrapper"
        v-for="message in messages"
        :key="message.id"
      >
        <div
          class="chat-body-text-wrapper-announce"
          v-if="message.type === 'announce'"
        >
          <span class="chat-body-text-wrapper-announce-text"
            >{{message.user ? message.user.name: '無名氏'}} 上線</span
          >
        </div>
        <div v-else>
          <div class="chat-body-text-wrapper-user" v-if="message.user.id === getCurrentUser.id">
            <div class="chat-body-text-wrapper-user-text">
              {{message.message}}
            </div>
            <div class="chat-body-text-wrapper-user-moment">下午6:08</div>
          </div>
          <div class="chat-body-text-wrapper-other" v-else>
            <div class="chat-body-text-wrapper-other-head">
              <img
                :src="message.user.avatar"
                alt=""
                class="chat-body-text-wrapper-other-head-image"
              />
              <div class="chat-body-text-wrapper-other-head-text">
                {{message.message}}
              </div>
            </div>
            <div class="chat-body-text-wrapper-other-body">
              <div class="chat-body-text-wrapper-other-body-name"></div>
              <div class="chat-body-text-wrapper-other-body-moment">
                3月19日 下午4:21
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <form class="chat-body-foot">
      <input
        type="text"
        v-model="message"
        name="message"
        id="message"
        class="chat-body-foot-input"
        placeholder="輸入訊息..."
        @keydown.enter.prevent="sendMessage"
      />
      <img
        src="../../public/images/icon_send.png"
        alt=""
        class="chat-body-foot-image"
        @click.stop.prevent="sendMessage"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { imageFilter } from '../utils/mixins'

export default {
  name: "PublicRoom",
  mixins: [ imageFilter ],
  props: {
    messages: {
      type: Array,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return;
      this.$socket.emit("sendMessage", {
        message: this.message,
        roomName: "public",
        UserId: this.getCurrentUser.id,
        user: this.getCurrentUser,
      });
      this.message = "";
    },
  },
};
</script>

