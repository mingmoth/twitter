<template>
  <div class="modal fade" id="new-message-select" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <img 
              src="../../public/images/icon_close.png" 
              alt=""
              class="modal-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            <div class="modal-header-title">選擇訊息對象</div>
        </div>
        <div class="modal-body">
          <div class="modal-body-post" v-for="user in getPopular" :key="user.id">
            <img :src="user.avatar | emptyAvatar" alt="" class="modal-body-post-icon">
            <div class="modal-body-post-body">
              <div class="modal-body-post-body-head">
                <div class="modal-body-post-body-head-name">{{user.name}}</div>
                
              </div>
              <div class="modal-body-post-body-foot">
                <div class="modal-body-post-body-foot-reply">@ {{user.account}} </div>
              </div>
            </div>
            <div class="modal-body-post-select">
              <button 
                class="btn-select-message"
                data-bs-dismiss="modal"
                @click.stop.prevent="selectUser(user)">聊天</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, imageFilter } from '../utils/mixins'
import { messageFeature } from '../utils/socket'

export default {
  name: 'MessageModal',
  mixins: [ userFeature, imageFilter, messageFeature ],
  computed: {
    ...mapGetters(['getPopular', "getCurrentUser"])
  },
  created() {
    this.fetchPopular()
  },
  methods: {
    selectUser(user) {
      this.$store.dispatch('setMessagedUser', user)
      const roomName = this.createRoomName(user.id, this.getCurrentUser.id)
      this.fetchPrivateMessage(roomName)
      this.toggleUnreadMessage(roomName)
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-body-post {
  display: flex;
  align-items: center;
  &-body {
    flex: 1;
    &-foot {
      margin: 0;
    }
  }
}
</style>