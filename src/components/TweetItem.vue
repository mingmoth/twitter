<template>
  <div class="tweet">
    <div class="tweet-icon">
      <img :src="tweet.User.avatar | emptyAvatar" alt="" class="tweet-icon-photo" />
    </div>
    <div class="tweet-body">
      <div class="tweet-body-head">
        <div class="tweet-body-head-name">{{ tweet.User.name }}</div>
        <div class="tweet-body-head-account">@{{ tweet.User.account }}</div>
        <span> · </span>
        <div class="tweet-body-head-time">{{ tweet.createdAt | fromNow}}</div>
      </div>
      <div class="tweet-body-content">
        {{ tweet.description }}
      </div>
      <div class="tweet-body-foot">
        <div class="tweet-body-foot-comment">
          <img 
            src="../../public/images/icon_reply.png"
            alt=""
            class="tweet-body-foot-comment-icon"
            data-bs-toggle="modal"
            data-bs-target="#main-post-reply">
          <span class="tweet-body-foot-comment-count">{{
            tweet.Replies
          }}</span>
        </div>
        <div class="tweet-body-foot-liked">
          <img v-if="tweet.isLiked" src="../../public/images/icon_like.png" alt="" class="tweet-body-foot-liked-icon">
          <img v-else src="../../public/images/icon_like_fill.png" alt="" class="tweet-body-foot-liked-icon">
          <span class="tweet-body-foot-liked-count">{{
            tweet.Likes
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: "TweetItem",
  mixins: [imageFilter, timeFilter],
  props: {
    tweet: {
      type: Object,
      required: true
    }
  }
};
</script>