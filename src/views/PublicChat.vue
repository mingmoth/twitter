<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="chat-container">
      <div class="chat-head">
        <div class="chat-head-header">
          <div class="chat-head-header-title">上線使用者<span>()</span></div>
        </div>
        <div class="chat-head-users">
          <div class="chat-head-user">
            <img src="../../public/images/ac logo.png" alt="" class="chat-head-user-avatar">
            <router-link :to="{ name: 'user-tweets', params: { id: 2 }}" class="chat-head-user-name">Apple</router-link>
            <router-link :to="{ name: 'user-tweets', params: { id: 2 }}" class="chat-head-user-account">@apple</router-link>
          </div>
        </div>
      </div>
      <div class="chat-body">
        <PublicRoom :messages="publicMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Sidebar from '../components/Sidebar.vue'
import PublicRoom from '../components/PublicRoom.vue'
export default {
  name: 'PublicChat',
  components: {
    Sidebar, PublicRoom
  },
  data() {
    return {
      roomName: 'public',
      publicMessage: [],
      onlineUser: [],
    }
  },
  sockets: {
    connect: function() {
      console.log('socket connect')
    },
    newMessage(data) {
      this.publicMessage.push(data)
      console.log(this.publicMessage)
    },
    login(data) {
      // console.log(data)
      const user = data.user.name
      this.onlineUser.push(user)
      this.publicMessage.push(data)
      console.log(this.onlineUser)
    }
  },
  created() {
    this.$socket.emit('joinRoom', { user: this.getCurrentUser, roomName: this.roomName })
  },
  mounted() {
    this.$socket.open()
  },
  beforeDestroy() {
    this.$socket.emit("leaveRoom", { roomName: this.roomName });
    console.log("left Public");
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  }
}
</script>
