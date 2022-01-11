<template>
  <div class="modal fade" id="user-setting-edit" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <form action="">
          <div class="modal-header">
            <div
              class="modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></div>
            <div class="modal-header-title">編輯個人資料</div>
            <button class="btn-save" :disabled="savable">儲存</button>
          </div>
          <div class="modal-body">
            <div class="modal-body-bg">
              <img
                :src="cover | emptyCover"
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
              />
            </div>
            <div class="modal-body-header">
              <img
                :src="avatar | emptyAvatar"
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
              />
            </div>
            <div class="modal-body-form">
              <div class="form-label-group">
                <label for="name">名稱</label>
                <input
                  v-model="name"
                  type="text"
                  name="name"
                  id="name"
                  :invalid="userNameLength > 50"
                  required
                />
                <div class="modal-body-form-limit">
                  <div
                    v-show="userNameLength > 50"
                    class="modal-body-form-limit-alert"
                  >
                    字數超出上限!
                  </div>
                  <div class="modal-body-form-limit-count">
                    {{ userNameLength }}<span>/50</span>
                  </div>
                </div>
              </div>
              <div class="form-label-group" id="modal-intro">
                <label for="intro">自我介紹</label>
                <textarea
                  v-model="introduction"
                  name="intro"
                  id="intro"
                  cols="30"
                  rows="10"
                ></textarea>
                <div class="modal-body-form-limit">
                  <div
                    v-show="userIntroLength > 160"
                    class="modal-body-form-limit-alert"
                  >
                    字數超出上限!
                  </div>
                  <div class="modal-body-form-limit-count">
                    {{ userIntroLength }}<span>/160</span>
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
import { imageFilter } from "../utils/mixins";
export default {
  name: "UserSettingModal",
  mixins: [imageFilter],
  data() {
    return {
      name: "",
      introduction: "",
      avatar: "",
      cover: "",
      savable: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
    userNameLength() {
      return this.name.length;
    },
    userIntroLength() {
      return this.introduction ? this.introduction.length : 0;
    },
  },
  watch: {
    userNameLength() {
      if (
        this.userNameLength === 0 ||
        this.userNameLength > 50 ||
        this.userIntroLength > 160
      ) {
        0;
        return (this.savable = true);
      } else {
        return (this.savable = false);
      }
    },
    userIntroLength() {
      if (
        this.userNameLength === 0 ||
        this.userNameLength > 50 ||
        this.userIntroLength > 160
      ) {
        return (this.savable = true);
      } else {
        return (this.savable = false);
      }
    },
  },
  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.name = this.getCurrentUser.name;
      this.introduction = this.getCurrentUser.introduction;
      this.avatar = this.getCurrentUser.avatar;
      this.cover = this.getCurrentUser.cover;
    },
    updateAvatar() {
      this.$refs.avatar.click();
    },
    updateCover() {
      this.$refs.cover.click();
    },
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