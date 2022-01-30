<template>
  <div>
    <div class="chat-body-header">公開聊天室</div>
    <div class="chat-body-text" ref="messages">
      <div
        class="chat-body-text-wrapper"
        v-for="message in getPublicMessage"
        :key="message.id"
      >
        <div
          class="chat-body-text-wrapper-announce"
          v-if="message.type === 'announce'"
        >
          <span class="chat-body-text-wrapper-announce-text"
            >{{message.message}}</span
          >
        </div>
        <div v-else>
          <div class="chat-body-text-wrapper-user" v-if="message.UserId === getCurrentUser.id">
            <div class="chat-body-text-wrapper-user-text">
              {{message.message}}
            </div>
            <div class="chat-body-text-wrapper-user-moment">{{message.createdAt | fromNow}}</div>
          </div>
          <div class="chat-body-text-wrapper-other" v-else>
            <div class="chat-body-text-wrapper-other-head">
              <img
                :src="message.User? message.User.avatar: '' | emptyAvatar"
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
                {{message.createdAt | fromNow}}
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
import { imageFilter, timeFilter } from '../utils/mixins'
import { messageFeature } from '../utils/socket'

export default {
  name: "PublicRoom",
  mixins: [ imageFilter, timeFilter, messageFeature ],
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
  created() {
    this.fetchPublicMessage()
  },
  updated() {
    this.scrollDown()
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getPublicMessage'])
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return;
      const messages = {
        message: this.message,
        roomName: "public",
        UserId: this.getCurrentUser.id,
        User: this.getCurrentUser,
        createdAt: new Date(),
        type: 'message'
      }
      this.$socket.emit("sendMessage", messages);
      this.postMessage(messages)
      this.message = "";
    },
    scrollDown() {
      this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
    }
  },
};
</script>

