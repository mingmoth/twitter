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
        <PublicRoom />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import PublicRoom from '../components/PublicRoom.vue'
export default {
  name: 'PublicChat',
  components: {
    Sidebar, PublicRoom
  }
}
</script>
