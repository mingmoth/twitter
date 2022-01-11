<template>
  <div>
    <div class="setting">
      <form action="" @submit="handleSubmit">
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
          <label for="passwordCheck">密碼確認</label>
          <input
            v-model="passwordCheck"
            type="password"
            name="passwordCheck"
            id="passwordCheck"
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
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
export default {
  name: "SettingForm",
  mixins: [ userFeature ],
  data() {
    return {
      user: {
        id: -1,
        name: "",
        account: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
      isProcessing: false,
    };
  },
  created() {
    
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
  },
  methods: {
    handleSubmit(e) {
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.passwordCheck
      ) {
        console.log("oh");
      }
      if (this.password !== this.passwordCheck) {
        console.log("oh");
      }
      const form = e.target;
      const formData = new FormData(form);
      console.log(formData);
    },
  },
};
</script>