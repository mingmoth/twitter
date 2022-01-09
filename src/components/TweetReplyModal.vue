<template>
  <div class="modal fade" id="main-post-reply" aria-hidden="true">
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
            <img :src="getTweet.User.avatar | emptyAvatar" alt="" class="modal-body-post-icon">
            <div class="modal-body-post-body">
              <div class="modal-body-post-body-head">
                <div class="modal-body-post-body-head-name">{{getTweet.User.name}}</div>
                <div class="modal-body-post-body-head-account">@{{getTweet.User.account}}</div>
                <span> · </span>
                <div class="modal-body-post-body-head-time">{{getTweet.createdAt | fromNow}}</div>
              </div>
              <div class="modal-body-post-body-content">
                {{getTweet.description}}
              </div>
              <div class="modal-body-post-body-foot">
                <div class="modal-body-post-body-foot-reply">回覆給 <span class="modal-body-post-body-foot-account">@{{getTweet.User.account}}</span></div>
              </div>
            </div>
          </div>
          <div class="modal-body-reply">
            <img :src="getCurrentUser.avatar | emptyAvatar" alt="" class="modal-body-reply-icon">
            <form 
              action=""
              class="modal-body-reply-tweet"
              @submit.stop.prevent="createReply(getTweet.id)">
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="推你的回覆"
                v-model="comment"
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
import { mapGetters, mapActions } from 'vuex'
import { userFeature, imageFilter, timeFilter } from '../utils/mixins'
import { successToast, errorToast } from '../utils/toast'
import tweetAPI from '../apis/tweets'
export default {
  name: "TweetReplyModal",
  mixins: [userFeature, imageFilter, timeFilter],
  data() {
    return {
      comment: '',
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getTweet']),
    checkText() {
      if(!this.comment.length || this.comment.length > 140) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapActions(['newReply']),
    async createReply(tweetId) {
      if(!this.comment) {
        errorToast.fire({
          title: '請填寫推文回覆後送出'
        })
        return
      }
      try {
        const { data } = await tweetAPI.createReply(
          { tweetId, comment: this.comment}
        )
        console.log(data)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        this.comment = ''
        this.newReply(tweetId)
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
        this.comment = ''
      }
    },
  }
}
</script>