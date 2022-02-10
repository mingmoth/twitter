<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="chat-container">
      <div class="chat-head">
        <div class="chat-head-header">
          <div class="chat-head-header-title">上線使用者<span>({{roomUser.length}})</span></div>
        </div>
        <div class="chat-head-users">
          <div class="chat-head-user" v-for="user in roomUser" :key="user.id">
            <img :src="user.avatar | emptyAvatar" alt="" class="chat-head-user-avatar">
            <router-link :to="{ name: 'user-tweets', params: { id: user.id }}" class="chat-head-user-name">{{user.name}}</router-link>
            <router-link :to="{ name: 'user-tweets', params: { id: user.id }}" class="chat-head-user-account">@{{user.account}}</router-link>
          </div>
        </div>
      </div>
      <div class="chat-body">
        <PublicRoom />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { imageFilter } from '../utils/mixins'
import { messageFeature } from '../utils/socket'

import Sidebar from '../components/Sidebar.vue'
import PublicRoom from '../components/PublicRoom.vue'
export default {
  name: 'PublicChat',
  mixins: [ imageFilter, messageFeature ],
  components: {
    Sidebar, PublicRoom
  },
  data() {
    return {
      roomName: 'public',
      roomUser: [],
    }
  },
  created() {
    this.joinRoom()
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  sockets: {
    publicUser(userList) {
      this.roomUser = userList
    },
    offlineUser(message) {
      console.log(message)
    }
  },
  methods: {
    joinRoom() {
      this.$socket.emit('join', { roomName: 'public' })
    },
    leaveRoom() {
      this.$socket.emit('leave', { roomName: 'public' })
    },
  },
  beforeDestroy() {
    this.leaveRoom()
  },
}
</script>
