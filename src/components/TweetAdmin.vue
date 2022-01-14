<template>
  <div class="tweet">
    <div class="tweet-icon">
      <img :src="tweet.User ? tweet.User.avatar : '' | emptyAvatar" alt="" class="tweet-icon-photo">
    </div>
    <div class="tweet-body">
      <div class="tweet-body-head">
        <div class="tweet-body-head-name">{{tweet.User ? tweet.User.name: ''}}</div>
        <div class="tweet-body-head-account">@{{tweet.User ? tweet.User.account: ''}}</div>
        <span> · </span>
        <div class="tweet-body-head-time">{{tweet.updatedAt | dateTime}}</div>
      </div>
      <div class="tweet-body-content">{{tweet.description}}</div>
    </div>
    <img src="../../public/images/icon_close_admin.png" alt="" class="tweet-delete">
  </div>
</template>

<script>
import { timeFilter, imageFilter } from '../utils/mixins'
export default {
  name: 'TweetAdmin',
  mixins: [timeFilter, imageFilter],
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>