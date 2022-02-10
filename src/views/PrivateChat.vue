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
          <MessageUser v-for="user in getMessagedUsers" :key="user.id" :user="user"/>
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
import { messageFeature } from '../utils/socket'

import Sidebar from "../components/Sidebar.vue";
import MessageUser from '../components/MessageUser.vue'
import PrivateRoom from "../components/PrivateRoom.vue";
import MessageModal from '../components/MessageModal.vue'
export default {
  name: "PrivateChat",
  mixins: [ messageFeature ],
  components: {
    Sidebar,
    MessageUser,
    PrivateRoom,
    MessageModal,
  },
  sockets: {
    
  },
  created() {
    this.fetchMessagedUsers()
  },
  computed: {
    ...mapGetters(['getMessagedUser', 'getCurrentUser', 'getMessagedUsers'])
  },
  watch() {
    
  },
};
</script>