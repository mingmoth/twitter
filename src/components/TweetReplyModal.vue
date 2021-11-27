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
            <img :src="modalTweet.User.image" alt="" class="modal-body-post-icon">
            <div class="modal-body-post-body">
              <div class="modal-body-post-body-head">
                <div class="modal-body-post-body-head-name">{{modalTweet.User.name}}</div>
                <div class="modal-body-post-body-head-account">@{{modalTweet.User.account}}</div>
                <span> · </span>
                <div class="modal-body-post-body-head-time">{{modalTweet.createdAt}}</div>
              </div>
              <div class="modal-body-post-body-content">
                {{modalTweet.text}}
              </div>
              <div class="modal-body-post-body-foot">
                <div class="modal-body-post-body-foot-reply">回覆給 <span class="modal-body-post-body-foot-account">@{{modalTweet.User.account}}</span></div>
              </div>
            </div>
          </div>
          <div class="modal-body-reply">
            <div class="modal-body-reply-icon"></div>
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
export default {
  name: "TweetReplyModal",
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      modalTweet: {}
    }
  },
  created() {
    this.fetchTweet()
  },
  methods: {
    fetchTweet() {
      this.modalTweet = this.tweet
    }
  }

}
</script>