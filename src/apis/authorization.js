import { apiHelper } from "../utils/apis";

export default {
  signIn({ account, password }) {
    return apiHelper.post('/signin', { account, password})
  },
  signUp({ name, account, email, password, checkPassword }) {
    return apiHelper.post('/users', { name, account, email, password, checkPassword })
  }
}