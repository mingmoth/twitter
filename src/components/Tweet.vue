<template>
  <div>
    <div class="tweet">
      <div class="tweet-icon">
        <img :src="tweet.User.image" alt="" class="tweet-icon-photo">
      </div>
      <div class="tweet-body">
        <div class="tweet-body-head">
          <div class="tweet-body-head-name">{{tweet.User.name}}</div>
          <div class="tweet-body-head-account">@{{tweet.User.account}}</div>
          <span> · </span>
          <div class="tweet-body-head-time">{{tweet.createdAt}}</div>
        </div>
        <div class="tweet-body-content">
          {{tweet.text}}
        </div>
        <div class="tweet-body-foot">
          <div class="tweet-body-foot-comment">
            <div
              class="tweet-body-foot-comment-icon"
              data-bs-toggle="modal"
              data-bs-target="#main-post-reply"
            ></div>
            <span class="tweet-body-foot-comment-count">{{tweet.Comments.length}}</span>
          </div>
          <div class="tweet-body-foot-liked">
            <div class="tweet-body-foot-liked-icon"></div>
            <span class="tweet-body-foot-liked-count">{{tweet.Likes.length}}</span>
          </div>
        </div>
      </div>
      <TweetReplyModal :tweet="tweet"/>
    </div>
  </div>
</template>

<script>
import TweetReplyModal from './TweetReplyModal.vue'
export default {
  name: "Tweet",
  components: {
    TweetReplyModal,
  },
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  
};
</script>