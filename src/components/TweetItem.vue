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
      <router-link :to="{ name: 'tweet', params: { id: tweet.id } }" class="tweet-body-content">{{ tweet.description }}</router-link>
      <div class="tweet-body-foot">
        <div class="tweet-body-foot-comment">
          <img 
            src="../../public/images/icon_reply.png"
            alt=""
            class="tweet-body-foot-comment-icon"
            data-bs-toggle="modal"
            data-bs-target="#main-post-reply"
            @click.stop.prevent="getReplyTweet(tweet.id)">
          <span class="tweet-body-foot-comment-count">{{
            tweet.Replies
          }}</span>
        </div>
        <div class="tweet-body-foot-liked">
          <img 
            v-if="!tweet.isLiked" 
            src="../../public/images/icon_like.png" 
            alt="" 
            class="tweet-body-foot-liked-icon"
            @click.stop.prevent="addLike(tweet.id)">
          <img 
            v-else 
            src="../../public/images/icon_like_fill.png" 
            alt="" 
            class="tweet-body-foot-liked-icon"
            @click.stop.prevent="removeLike(tweet.id)">
          <span class="tweet-body-foot-liked-count">{{
            tweet.Likes
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { successToast, errorToast } from '../utils/toast'
import { mapActions } from 'vuex'
import userAPI from '../apis/users'
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: "TweetItem",
  mixins: [imageFilter, timeFilter],
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['setTweetModal', 'likeTweet', 'unlikeTweet']),
    async addLike(tweetId) {
      try {
        const { data } = await userAPI.addLike(tweetId)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.likeTweet(tweetId)
        successToast.fire({
          title: data.message
        })
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    async removeLike(tweetId) {
      try {
        const { data } = await userAPI.removeLike(tweetId)
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.unlikeTweet(tweetId)
        successToast.fire({
          title: data.message
        })
      } catch (error) {
        console.log(error)
        errorToast.fire({
          title: error.message
        })
      }
    },
    getReplyTweet(tweetId) {
      console.log(tweetId)
      this.setTweetModal(tweetId)
    }
  },
};
</script>