<template>
  <div class="reply">
    <img :src="reply.User.avatar | emptyAvatar" alt="" class="reply-icon">
    <div class="reply-content">
      <div class="reply-content-title">
        <router-link :to="{ name: 'user-tweets', params: { id: reply.User.id }}" class="reply-content-title-name">{{reply.User.name}}</router-link>
        <router-link :to="{ name: 'user-tweets', params: { id: reply.User.id }}"  class="reply-content-title-account">@{{reply.User.account}}</router-link><span>・</span>
        <div class="reply-content-title-time">{{reply.createdAt | fromNow}}</div>
      </div>
      <div class="reply-content-target">回覆 
        <span class="reply-content-target-account">@{{tweetOwner}}</span>
      </div>
      <div class="reply-content-comment">{{reply.comment}}</div>
    </div>
  </div>
</template>

<script>
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: 'Reply',
  mixins: [imageFilter, timeFilter],
  props: {
    reply: {
      type: Object,
    },
    tweetOwner: {
      type: String,
    }
  }
}
</script>