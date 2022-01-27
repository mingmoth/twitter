<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="chat-container">
      <div class="chat-head">
        <div class="chat-head-header">
          <div class="chat-head-header-title">訊息</div>
          <img 
            src="../../public/images/icon_newMessege.png" 
            alt="" 
            class="chat-head-header-message"
            data-bs-toggle="modal"
            data-bs-target="#new-message-select">
        </div>
        <div class="chat-head-users">
          <div class="chat-head-user">
            <img
              src="../../public/images/ac logo.png"
              alt=""
              class="chat-head-user-avatar"
            />
            <div class="chat-head-user-head">
              <router-link
                :to="{ name: 'user-tweets', params: { id: 2 } }"
                class="chat-head-user-name"
                >Apple</router-link
              >
              <router-link
                :to="{ name: 'user-tweets', params: { id: 2 } }"
                class="chat-head-user-account"
                >@apple</router-link
              >
              <a class="chat-head-user-moment">5秒</a>
              <div class="chat-head-user-intro">Nulla Lorem mollit cupidatat irure....</div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="chat-body">
        <PrivateRoom />
      </div>
    </div>
    <MessageModal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Sidebar from "../components/Sidebar.vue";
import PrivateRoom from "../components/PrivateRoom.vue";
import MessageModal from '../components/MessageModal.vue'
export default {
  name: "PrivateChat",
  components: {
    Sidebar,
    PrivateRoom,
    MessageModal,
  },
  sockets: {},
  computed: {
    ...mapGetters(['getMessagedUser'])
  },
  mounted() {
    this.$socket.open()
  },

};
</script>