<template>
  <div>
    <div class="notice">
      <div class="notice-head">
        <router-link :to="{ name: 'user', params: {id: notice.Tweet.UserId}}">
          <img :src=" notice.Tweet.User.avatar | emptyAvatar" alt="" class="notice-head-avatar">
        </router-link>
      </div>
      <div> <span class="notice-info">{{notice.Tweet.User.name}}</span> 有新的推文</div>
      <router-link 
        :to="{ name: 'tweet', params: { id: notice.TweetId }}"
        class="notice-text ">{{notice.Tweet ? notice.Tweet.description : ''}} </router-link>
    </div>
  </div>
</template>

<script>
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: 'Notice',
  mixins: [ imageFilter, timeFilter ],
  props: {
    notice: {
      type: Object,
    }
  },
  data() {
    return {
    }
  }
}
</script>