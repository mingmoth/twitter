<template>
  <div class="side">
    <router-link to="/tweets">
      <img src="../../public/images/ac logo.png" class="side-logo"
    /></router-link>
    <ul>
      <li>
        <router-link to="/tweets" class="side-option">
          <img src="../../public/images/home logo.png" alt="" class="icon" />
          <img
            src="../../public/images/home logo active.png"
            alt=""
            class="icon-active"
          />
          <span>首頁</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'notice' }" class="side-option">
          <img src="../../public/images/notice.png" alt="" class="icon" />
          <img
            src="../../public/images/notice_active.png"
            alt=""
            class="icon-active"
          />
          <div v-if="getUnreadNotices" class="side-unread">{{getUnreadNotices}}</div>
          <span>通知</span>
        </router-link>
      </li>
      <li>
        <router-link to="/public" class="side-option">
          <img src="../../public/images/message.png" alt="" class="icon" id="message"/>
          <img
            src="../../public/images/message_hover.png"
            alt=""
            class="icon-active"
            id="message"
          />
          <span>公開聊天室</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'private-chat', params: { id: getCurrentUser.id }}" class="side-option">
          <img src="../../public/images/icon_newMessege.png" alt="" class="icon" id="message-p"/>
          <img
            src="../../public/images/icon_newMessage_active.png"
            alt=""
            class="icon-active"
            id="message-p"
          />
          <div v-if="getUnreadMessage.length" class="side-unread">{{getUnreadMessage.length}}</div>
          <span>私人訊息</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'user-tweets', params: { id: getCurrentUser.id } }" class="side-option">
          <img src="../../public/images/user logo.png" alt="" class="icon" />
          <img
            src="../../public/images/user logo active.png"
            alt=""
            class="icon-active"
          />
          <span>個人資料</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'user-settings', params: { id: getCurrentUser.id }}" class="side-option">
          <img src="../../public/images/setting logo.png" alt="" class="icon" />
          <img
            src="../../public/images/setting logo active.png"
            alt=""
            class="icon-active"
          />
          <span>設定</span>
        </router-link>
      </li>
      <button
        class="btn-side"
        data-bs-toggle="modal"
        data-bs-target="#main-post-tweet"
      >
        <span>推文</span>
      </button>
    </ul>
    <div class="side-logout">
      <a class="side-logout-label" @click="logout">
      <img src="../../public/images/icon_logout.png" alt="" class="img" > <span>登出</span></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { messageFeature } from '../utils/socket'
import { noticeFeature } from "../utils/notice";

export default {
  name: 'Sidebar',
  mixins: [ messageFeature, noticeFeature ],
  created() {
    this.getUnreadMessages()
    this.fetchUnreadNotices();
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getUnreadMessage', 'getUnreadNotices'])
  },
  mounted() {
    this.$socket.open();
  },
  sockets: {
    unreadMessage(unreadMessage) {
      this.$store.dispatch('setUnreadMessage', unreadMessage)
    },
    privateMessage() {
      this.getUnreadMessages()
    }
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
      this.$socket.emit('disconnect')
    },
    getUnreadMessages() {
      this.$socket.emit('getUnreadMessage', this.getCurrentUser.id)
    }
  },
}
</script>