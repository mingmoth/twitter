<template>
  <div>
    <div class="chat-head-user" @click.stop.prevent="selectUser(user)">
      <img
        :src="user.avatar | emptyAvatar"
        alt=""
        class="chat-head-user-avatar"
      />
      <div class="chat-head-user-head">
        <router-link
          :to="{ name: 'user-tweets', params: { id: user.id } }"
          class="chat-head-user-name"
          >{{user.name}}</router-link
        >
        <router-link
          :to="{ name: 'user-tweets', params: { id: user.id } }"
          class="chat-head-user-account"
          >@ {{user.account}}</router-link
        >
        <a class="chat-head-user-moment">{{message.createdAt | fromNow }}</a>
        <div class="chat-head-user-intro">
          {{message.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { messageFeature } from '../utils/socket'
import { imageFilter, timeFilter } from '../utils/mixins'
import userAPI from '../apis/users'
import messageAPI from '../apis/message'
export default {
  name: 'MessageUser',
  mixins: [ messageFeature, imageFilter, timeFilter ],
  props: {
    room: {
      type: Object,
    }
  },
  data() {
    return {
      user: {},
      message: {},
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  async created() {
    const userId = this.getMessageTarget(this.room.roomName, `${this.getCurrentUser.id}`)
    const { data } = await userAPI.getUser(userId)
    this.user = data.user
    const response = await messageAPI.getPrivateMessage(this.room.roomName)
    this.message = response.data.messages[Number(response.data.messages.length - 1)]
  },
  methods: {
    selectUser(user) {
      this.$store.dispatch('setMessagedUser', user)
      const roomName = this.createRoomName(user.id, this.getCurrentUser.id)
      this.fetchPrivateMessage(roomName)
    }
  },
}
</script>