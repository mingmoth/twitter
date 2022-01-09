<template>
  <div class="modal fade" id="main-post-tweet" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div
            class="modal-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></div>
        </div>
        <div class="modal-body">
          <div class="modal-body-post">
            <img :src="getCurrentUser.avatar | emptyAvatar" alt="" class="modal-body-post-icon">
            <form action="" class="modal-body-post-body" @submit.stop.prevent="submitTweet">
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="有什麼新鮮事?"
                v-model="description"
              ></textarea>
              <button
                class="btn-tweet"
                id="btn-tweet"
                type="submit"
                data-bs-dismiss="modal"
                :disabled="checkText"
              >
                推文
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, tweetFeature, imageFilter } from '../utils/mixins'
import { errorToast } from '../utils/toast'
export default {
  name: 'TweetModal',
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