<template>
  <div>
    <div class="chat-empty" v-if="!getMessagedUser.name">
      <div class="chat-unselect">
        <div class="chat-unselect-title">選擇一位聊天對象吧</div>
        <button
          class="btn-unselect"
          data-bs-toggle="modal"
          data-bs-target="#new-message-select"
        >
          挑選
        </button>
      </div>
    </div>
    <div v-else>
      <div class="chat-body-header">
        <div class="chat-body-header-name">{{ getMessagedUser.name }}</div>
        <div class="chat-body-header-account">
          @ {{ getMessagedUser.account }}
        </div>
      </div>
      <div class="chat-body-text" ref="message">
        <div class="chat-body-text-wrapper" v-for="message in getPriavateMessage" :key="message.id">
          <div class="chat-body-text-wrapper-user" v-if="message.UserId === getCurrentUser.id">
            <div class="chat-body-text-wrapper-user-text">
              {{message.message}}
            </div>
            <div class="chat-body-text-wrapper-user-moment">{{message.createdAt | fromNow}}</div>
          </div>
          <div class="chat-body-text-wrapper-other" v-else>
            <div class="chat-body-text-wrapper-other-head">
              <img
                :src="message.User ? message.User.avatar : '' | emptyAvatar"
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
      <form class="chat-body-foot">
        <input
          type="text"
          class="chat-body-foot-input"
          placeholder="輸入訊息..."
          v-model="text"
          @click.stop.prevent="toggleUnread"
          @keydown.enter.prevent="sendMessage(getMessagedUser.id)"
        />
        <img
          src="../../public/images/icon_send.png"
          alt=""
          class="chat-body-foot-image"
          @click.stop.prevent="sendMessage(getMessagedUser.id)"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { imageFilter, timeFilter } from '../utils/mixins'
import { messageFeature } from '../utils/socket'
export default {
  name: "PrivateRoom",
  mixins: [ imageFilter, timeFilter, messageFeature ],
  data() {
    return {
      text: ''
    }
  },
  created() {
    this.scrollDown()
  },
  updated() {
    this.scrollDown()
  },
  computed: {
    ...mapGetters([ "getCurrentUser", "getMessagedUser", "getPriavateMessage"]),
  },
  sockets: {
    join(data) {
      console.log(data)
    },
    newMessage(message) {
      console.log(message)
      this.$store.dispatch('postMessage', message)
    },
    privateMessage() {
      this.fetchMessagedUsers()
    }
  },
  // watch: {
  //   contents: {
  //     handler: function () {
  //       this.fetchMessagedUsers();
  //     },
  //   },
  // },
  methods: {
    sendMessage(userId) {
      if (!this.text.trim()) {
        return;
      }
      let message = {
        User: this.getCurrentUser,
        UserId: this.getCurrentUser.id,
        roomName: this.createRoomName(userId, this.getCurrentUser.id),
        message: this.text,
        type: 'message',
        createdAt: new Date(),
      }
      this.postMessage(message)
      this.fetchMessagedUsers()
      this.text = ''
    },
    toggleUnread() {
      const roomName = this.createRoomName(this.getMessagedUser.id, this.getCurrentUser.id);
      this.toggleUnreadMessage(roomName)
    },
    scrollDown() {
      this.$refs.message.scrollTop = this.$refs.message.scrollHeight
    }
  },
};
</script>

