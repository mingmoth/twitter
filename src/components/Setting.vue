<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <div class="navTop-title-name">帳戶設定</div>
      </div>
      <img src="../../public/images/ac logo.png" alt="" class="navTop-logo">
    </div>
    <div class="setting">
      <form action="" @submit.stop.prevent="handleSubmit">
        <div class="form-label-group">
          <label for="account">帳號</label>
          <input
            v-model="user.account"
            type="text"
            name="account"
            id="account"
          />
        </div>
        <div class="form-label-group">
          <label for="name">名稱</label>
          <input v-model="user.name" type="text" name="name" id="name" />
        </div>
        <div class="form-label-group">
          <label for="email">Email</label>
          <input v-model="user.email" type="email" name="email" id="email" />
        </div>
        <div class="form-label-group">
          <label for="password">密碼</label>
          <input
            v-model="user.password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div class="form-label-group">
          <label for="checkPassword">密碼確認</label>
          <input
            v-model="user.checkPassword"
            type="password"
            name="checkPassword"
            id="checkPassword"
          />
        </div>
        <button type="submit" class="btn-setting" :disabled="isProcessing">
          儲存
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userFeature } from "../utils/mixins";
import { errorToast } from "../utils/toast";
export default {
  name: "SettingForm",
  mixins: [userFeature],
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isProcessing: false,
    };
  },
  created() {
    if (this.getCurrentUser.id === -1) return;
    const { id } = this.$route.params;
    this.setUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return;
    const { id } = to.params;
    this.setUser(id);
    next();
  },
  watch: {
    getCurrentUser(user) {
      if (user.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    setUser(userId) {
      if (Number(this.getCurrentUser.id) !== Number(userId)) {
        this.$router.push({ name: "tweets" });
        errorToast.fire({
          title: "無法查看非本人資訊",
        });
        
      }
      this.user = {...this.getCurrentUser}
    },
    handleSubmit() {
      if (
        !this.user.account ||
        !this.user.name ||
        !this.user.email ||
        !this.user.password ||
        !this.user.checkPassword
      ) {
        errorToast.fire({
          title: '請確認所有欄位皆已填寫'
        })
      }
      if (this.user.password !== this.user.checkPassword) {
        errorToast.fire({
          title: '兩次密碼輸入不一致'
        })
      }
      const form = {
        account: this.user.account,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        checkPassword: this.user.checkPassword
      }
      this.putUser(Number(this.getCurrentUser.id), form)
    },
  },
};
</script>