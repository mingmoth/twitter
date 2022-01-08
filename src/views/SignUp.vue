<template>
  <div class="register">
    <div class="register-logo"></div>
    <div class="register-title">建立您的帳號</div>
    <form action="" @submit.stop.prevent="signUp">
      <div class="form-label-group">
        <label for="account">帳號</label>
        <input type="text" name="account" id="account" v-model="account" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="name">名稱</label>
        <input type="text" name="name" id="name" v-model="name" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" required autofocus />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
          autofocus
        />
        <div class="register-error"></div>
      </div>
      <div class="form-label-group">
        <label for="checkPassword">密碼確認</label>
        <input
          type="password"
          name="checkPassword"
          id="checkPassword"
          v-model="checkPassword"
          required
          autofocus
        />
      </div>
      <button class="btn-register" type="submit">註冊</button>
    </form>
    <div class="register-cancel">
      <p>
        <router-link class="register-cancel-target" to="/login"
          >取消</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import { errorToast, successToast } from "../utils/toast";
import authorizationAPI from "../apis/authorization";

export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      account: '',
      email: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    async signUp() {
      try {
        if (
          !this.account ||
          !this.name ||
          !this.email ||
          !this.password ||
          !this.checkPassword
        ) {
          errorToast.fire({
            title: "請確認所有欄位皆已填寫",
          });
        }
        if (this.password !== this.checkPassword) {
          errorToast.fire({
            title: "兩次密碼輸入不一致",
          });
        }
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          account: this.account,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });
        console.log(data)
        if (data.status !== "success") {
          throw new Error(data.messages);
        }
        successToast.fire({
          title: data.message,
        });
        this.$router.push("/signin");
      } catch (error) {
        console.log(error);
        errorToast.fire({
          title: error.message,
        });
      }
    },
  },
};
</script>