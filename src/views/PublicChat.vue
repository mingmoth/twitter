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
        <PublicRoom :messages="getPublicMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { messageFeature } from '../utils/socket'

import Sidebar from '../components/Sidebar.vue'
import PublicRoom from '../components/PublicRoom.vue'
export default {
  name: 'PublicChat',
  mixins: [ messageFeature ],
  components: {
    Sidebar, PublicRoom
  },
  data() {
    return {
      roomName: 'public',
      onlineUser: [],
      roomUser: [],
    }
  },
  sockets: {
    connect: function() {
      console.log('socket connect')
    },
    newMessage(data) {
      this.getPublicMessage.push(data)
      console.log(this.getPublicMessage)
    },
    join(data) {
      const user = data.user
      this.roomUser.push(user)
      this.getPublicMessage.push(data)
      // this.postMessage({
      //   ...data,
      //   type: 'announce'
      // })
      console.log(data)
    },
    leave(data) {
      const leaveUser = data.user
      this.roomUser = this.roomUser.filter(user => user.id !== leaveUser.id),
      this.getPublicMessage.push(data)
      // this.postMessage({
      //   ...data,
      //   type: 'announce'
      // })
    },
  },
  created() {
    this.fetchPublicMessage()
    this.$socket.emit('joinRoom', { user: this.getCurrentUser, roomName: this.roomName })
  },
  mounted() {
    this.$socket.open()
  },
  beforeDestroy() {
    this.$socket.emit("leaveRoom", { user: this.getCurrentUser, roomName: this.roomName });
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getPublicMessage'])
  }
}
</script>
