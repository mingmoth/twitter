<template>
  <div class="modal fade" id="user-setting-edit" aria-hidden="true">
    <Spinner v-show="isProcessing"/>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form action="" @submit.stop.prevent="handleSubmit">
          <div class="modal-header">
            <img 
              src="../../public/images/icon_close.png" 
              alt=""
              class="modal-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            
            <div class="modal-header-title">編輯個人資料</div>
            <button class="btn-save" type="submit" :disabled="isProcessing">儲存</button>
          </div>
          <div class="modal-body">
            <div class="modal-body-bg">
              <img
                :src="user.cover | emptyCover"
                alt=""
                class="modal-body-bg-cover"
              />
              <img
                src="../../public/images/icon_uploadPhoto.png"
                alt=""
                class="modal-body-bg-edit"
                @click="updateCover"
              />
              <img
                src="../../public/images/icon_delete.png"
                alt=""
                class="modal-body-bg-delete"
              />
              <input
                type="file"
                ref="cover"
                name="cover"
                id="cover"
                accept="image/*"
                @change="handleImage($event, 'cover')"
              />
            </div>
            <div class="modal-body-header">
              <img
                :src="user.avatar | emptyAvatar"
                alt=""
                class="modal-body-header-photo"
              />
              <img
                src="../../public/images/icon_uploadPhoto.png"
                alt=""
                class="modal-body-header-edit"
                @click="updateAvatar"
              />
              <input
                type="file"
                ref="avatar"
                name="avatar"
                id="avatar"
                accept="image/*"
                @change="handleImage($event, 'avatar')"
              />
            </div>
            <div class="modal-body-form">
              <div class="form-label-group">
                <label for="name">名稱</label>
                <input
                  v-model="user.name"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <div class="modal-body-form-limit">
                  <div
                  v-show="user.name ? user.name.length > 50 ? true : false : false"
                    class="modal-body-form-limit-alert"
                  >
                    字數超出上限!
                  </div>
                  <div class="modal-body-form-limit-count">
                    {{ user.name ? user.name.length: '' }}<span>/50</span>
                  </div>
                </div>
              </div>
              <div class="form-label-group" id="modal-intro">
                <label for="introduction">自我介紹</label>
                <textarea
                  v-model="user.introduction"
                  name="introduction"
                  id="introduction"
                  cols="30"
                  rows="10"
                ></textarea>
                <div class="modal-body-form-limit">
                  <div
                    v-show="user.inroduction ? user.inroduction.length > 50 ? true : false : false"
                    class="modal-body-form-limit-alert"
                  >
                    字數超出上限!
                  </div>
                  <div class="modal-body-form-limit-count">
                    {{ user.inroduction ? user.introduction.length: '' }}<span>/160</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userFeature, imageFilter } from "../utils/mixins";
import { eventBus } from '../utils/eventBus'
import { errorToast } from '../utils/toast'

import Spinner from '../components/Spinner.vue'
export default {
  name: "UserSettingModal",
  mixins: [userFeature, imageFilter],
  components: {
    Spinner,
  },
  data() {
    return {
      user: {
        name: "",
        introduction: "",
        avatar: "",
        cover: "",
      },
      isProcessing: false
    };
  },
  watch: {
    getCurrentUser(newValue) {
      this.user = {
        ...this.getCurrentUser,
        ...newValue
      }
    }
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    
  },
  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      const { name, avatar, cover, introduction } = this.getCurrentUser
      this.user = { name, avatar, cover, introduction }
    },
    updateAvatar() {
      this.$refs.avatar.click();
    },
    updateCover() {
      this.$refs.cover.click();
    },
    handleImage(event, target) {
      const { files } = event.target
      if(files.length === 0) {
        switch(target) {
          case "avatar":
            this.avatar = ''
            break
          case "cover":
            this.cover = ''
            break
        }
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        switch(target) {
          case "avatar":
            this.avatar = imageURL
            break
          case "cover":
            this.cover = imageURL
            break
        }
      }
    },
    async handleSubmit(e) {
      if(!this.user.name) {
        errorToast.fire({
          title: '使用者名稱不得為空'
        })
      }
      this.isProcessing = true
      const files = e.target
      const form = new FormData(files)
      await this.updateUser(Number(this.getCurrentUser.id), form)
      this.isProcessing = false
      this.$emit('updateUser')
      eventBus.$emit('updateUser')
    }
  },
};
</script>

<style lang="scss" scoped>
.modal-body-bg {
  input {
    display: none;
  }
}
.modal-body-header {
  input {
    display: none;
  }
}
</style>