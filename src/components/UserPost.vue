<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <div class="navTop-title-name">首頁</div>
      </div>
      <img src="../../public/images/ac logo.png" alt="" class="navTop-logo">
    </div>
    <div class="userPost">
      <img :src="getCurrentUser.avatar | emptyAvatar" alt="" class="userPost-icon">
      <form action="" class="form-main-tweet" @submit.stop.prevent="submitTweet">
        <textarea
          name="description"
          id="description"
          cols="40"
          rows="5"
          placeholder="有什麼新鮮事?"
          v-model="description"
        ></textarea>
        <button
          class="btn-tweet"
          id="btn-tweet"
          :disabled="checkText"
          type="submit"
        >
          推文
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userFeature, tweetFeature, imageFilter } from '../utils/mixins'
import { errorToast } from '../utils/toast'
export default {
  name: 'UserPost',
  mixins: [userFeature, tweetFeature, imageFilter],
  data() {
    return {
      description: ''
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    checkText() {
      if(!this.description.length || this.description.length > 140) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    async submitTweet() {
      if(!this.description) {
        errorToast.fire({
          title: '請完成推文內容後送出'
        })
        return
      }
      await this.createTweet(this.description)
      this.description = ''
    }
  },
}
</script>