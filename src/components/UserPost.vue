<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <div class="navTop-title-name">首頁</div>
      </div>
      <img src="../../public/images/ac logo.png" alt="" class="navTop-logo">
    </div>
    <div class="userPost">
      <img :src="getCurrentUser.avatar" alt="" class="userPost-icon">
      <form action="" class="form-main-tweet">
        <textarea
          name="tweet"
          id="tweet"
          cols="40"
          rows="5"
          placeholder="有什麼新鮮事?"
          v-model="post"
        ></textarea>
        <button
          class="btn-tweet"
          id="btn-tweet"
          :disabled="checkPost"
        >
          推文
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userFeature } from '../utils/mixins'
export default {
  name: 'UserPost',
  mixins: [userFeature],
  data() {
    return {
      post: ''
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    checkPost() {
      if(!this.post.length || this.post.length > 140) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {},
}
</script>