<template>
  <div class="tweet">
    <div class="tweet-icon">
      <img :src="tweet.image" alt="" class="tweet-icon-photo">
    </div>
    <div class="tweet-body">
      <div class="tweet-body-head">
        <div class="tweet-body-head-name">{{tweet.name}}</div>
        <div class="tweet-body-head-account">@{{tweet.account}}</div>
        <span> · </span>
        <div class="tweet-body-head-time">{{tweet.updatedAt}}</div>
      </div>
      <div class="tweet-body-content">{{tweet.text}}</div>
    </div>
    <div class="tweet-delete"></div>
  </div>
</template>

<script>
export default {
  name: 'TweetAdmin',
  props: {
    initialTweet: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tweet : {
        id: -1,
        name: '',
        account: '',
        createdAt: '',
        updatedAt: '',
        text: '',
        image: '',
      }
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      const {id, text, createdAt, updatedAt, User} = this.initialTweet
      this.tweet = {
        id,
        text,
        createdAt,
        updatedAt,
        name: User? User.name: '匿名使用者',
        account: User ? User.account: '匿名使用者',
        image: User ? User.image: ''
      }
    }
  }
}
</script>