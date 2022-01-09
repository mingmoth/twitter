<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <img src="../../public/images/icon_back.png" alt="" class="navTop-title-back" @click="$router.back()">
        <div class="navTop-title-name">推文</div>
      </div>
    </div>
    <div class="post">
      <div class="post-header">
        <img :src="tweet.User.avatar | emptyAvatar" alt="" class="post-header-icon">
        <div class="post-header-title">
          <div class="post-header-title-name">{{tweet.User.name}}</div>
          <div class="post-header-title-account"><span>@</span>{{tweet.User.account}}</div>
        </div>
      </div>
      <div class="post-content">{{tweet.description}}</div>
      <div class="post-time">{{tweet.createdAt | dateTime}}</div>
      <div class="post-info">
        <div class="post-info-reply">
          <div class="post-info-reply-count">{{tweet.Replies.length}}
            <span class="post-info-reply-unit"> 回覆</span>
          </div>
        </div>
        <div class="post-info-liked">
          <div class="post-info-liked-count">{{tweet.Likes.length}}
            <span class="post-info-liked-unit"> 喜歡次數</span>
          </div>
        </div>
      </div>
      <div class="post-action">
        <img 
          src="../../public/images/icon_reply.png"
          alt=""
          class="post-action-reply"
          data-bs-toggle="modal"
          data-bs-target="#main-post-reply">
          <img v-if="!tweet.isLiked" src="../../public/images/icon_like.png" alt="" class="post-action-liked">
          <img v-else src="../../public/images/icon_like_fill.png" alt="" class="post-action-liked">
      </div>
    </div>
  </div>
</template>

<script>
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: 'UserTweet',
  mixins: [imageFilter, timeFilter],
  props: {
    tweet: {
      type: Object
    }
  }
}
</script>