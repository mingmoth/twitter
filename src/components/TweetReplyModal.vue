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
            <img :src="tweet.User ? tweet.User.avatar: '' | emptyAvatar" alt="" class="modal-body-post-icon">
            <div class="modal-body-post-body">
              <div class="modal-body-post-body-head">
                <div class="modal-body-post-body-head-name">{{tweet.User ? tweet.User.name: ''}}</div>
                <div class="modal-body-post-body-head-account">@{{tweet.User ? tweet.User.account: ''}}</div>
                <span> · </span>
                <div class="modal-body-post-body-head-time">{{tweet.createdAt | fromNow}}</div>
              </div>
              <div class="modal-body-post-body-content">
                {{tweet.description}}
              </div>
              <div class="modal-body-post-body-foot">
                <div class="modal-body-post-body-foot-reply">回覆給 <span class="modal-body-post-body-foot-account">@{{tweet.User ? tweet.User.account: ''}}</span></div>
              </div>
            </div>
          </div>
          <div class="modal-body-reply">
            <img :src="getCurrentUser.avatar | emptyAvatar" alt="" class="modal-body-reply-icon">
            <form 
              action=""
              class="modal-body-reply-tweet"
              @submit.stop.prevent="createReply(tweet.id)">
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
  props: {
    tweet: {
      type: Object
    },
  },
  data() {
    return {
      comment: '',
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser',]),
    checkText() {
      if(!this.comment.length || this.comment.length > 140) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapActions(['newReply', 'pushNewReply', 'pushUserReply', 'pushUserReplies']),
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
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        successToast.fire({
          title: data.message
        })
        const newReply = {
          ...data.reply,
          User: this.getCurrentUser
        }
        this.comment = ''
        if(this.$route.name === 'tweets') {
          this.newReply(tweetId)
        } else if(this.$route.name === 'tweet') {
          this.pushNewReply(newReply)
        } else if(this.$route.name === 'user-tweets') {
          const replyload = {
            tweets: 'userTweets',
            tweetId,
            newReply
          }
          this.pushUserReply(replyload)
        } else if(this.$route.name === 'user-replies') {
          const replyload = {
            tweets: 'userReplies',
            tweetId,
            newReply
          }
          this.pushUserReplies(replyload)
        } else if(this.$route.name === 'user-likes') {
          const replyload = {
            tweets: 'userLikes',
            tweetId,
            newReply
          }
          this.pushUserReply(replyload)
        }
        this.$socket.emit('sendNotice')
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