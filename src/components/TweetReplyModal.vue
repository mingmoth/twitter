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
            <img :src="getCurrentUser.avatar" alt="" class="modal-body-reply-icon">
            
            <form action="" class="modal-body-reply-tweet">
              <textarea
                name="tweet"
                id="tweet"
                cols="30"
                rows="10"
                placeholder="推你的回覆"
              ></textarea>
              <button
                class="btn-tweet"
                id="btn-tweet"
                data-bs-toggle="modal"
                data-bs-target="#main-post-tweet"
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
import { userFeature, imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: "TweetReplyModal",
  mixins: [userFeature, imageFilter, timeFilter],
  // props: {
  //   tweet: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      modalTweet: {}
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'getTweet']),
  },
  methods: {
    
  }

}
</script>