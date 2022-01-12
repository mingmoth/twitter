<template>
  <div class="tweetReply">
    <div class="tweet">
      <div class="tweet-icon">
        <img
          :src="tweet.User.avatar | emptyAvatar"
          alt=""
          class="tweet-icon-photo"
        />
        <div class="tweet-icon-connect"></div>
      </div>
      <div class="tweet-body">
        <div class="tweet-body-head">
          <router-link
            :to="{ name: 'user-tweets', params: { id: tweet.UserId } }"
            class="tweet-body-head-name"
            >{{ tweet.User.name }}</router-link
          >
          <router-link
            :to="{ name: 'user-tweets', params: { id: tweet.UserId } }"
            class="tweet-body-head-account"
            >@{{ tweet.User.account }}</router-link
          >
          <span> · </span>
          <div class="tweet-body-head-time">
            {{ tweet.createdAt | fromNow }}
          </div>
        </div>
        <router-link
          :to="{ name: 'tweet', params: { id: tweet.id } }"
          class="tweet-body-content"
          >{{ tweet.description }}</router-link
        >
        <div class="tweet-body-foot">
          <div class="tweet-body-foot-comment">
            <img
              src="../../public/images/icon_reply.png"
              alt=""
              class="tweet-body-foot-comment-icon"
              data-bs-toggle="modal"
              data-bs-target="#main-post-reply"
              @click.stop.prevent="getReplyTweet(tweet.id)"
            />
            <span class="tweet-body-foot-comment-count">{{
              tweet.Replies.length
            }}</span>
          </div>
          <div class="tweet-body-foot-liked">
            <img
              v-if="!tweet.isLiked"
              src="../../public/images/icon_like.png"
              alt=""
              class="tweet-body-foot-liked-icon"
              @click.stop.prevent="addLike(tweet.id)"
            />
            <img
              v-else
              src="../../public/images/icon_like_fill.png"
              alt=""
              class="tweet-body-foot-liked-icon"
              @click.stop.prevent="removeLike(tweet.id)"
            />
            <span class="tweet-body-foot-liked-count">{{
              tweet.Likes.length
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reply" v-for="reply in tweet.Replies" :key="reply.id">
      <img :src="reply.User.avatar | emptyAvatar" alt="" class="reply-icon" />
      <div class="reply-content">
        <div class="reply-content-title">
          <router-link
            :to="{ name: 'user-tweets', params: { id: reply.User.id } }"
            class="reply-content-title-name"
            >{{ reply.User.name }}</router-link
          >
          <router-link
            :to="{ name: 'user-tweets', params: { id: reply.User.id } }"
            class="reply-content-title-account"
            >@{{ reply.User.account }}</router-link
          ><span>・</span>
          <div class="reply-content-title-time">
            {{ reply.createdAt | fromNow }}
          </div>
        </div>
        <div class="reply-content-target">
          回覆
          <span class="reply-content-target-account"
            >@{{ tweet.User.account }}</span
          >
        </div>
        <div class="reply-content-comment">{{ reply.comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature, timeFilter, imageFilter } from "../utils/mixins";
export default {
  name: "TweetReply",
  mixins: [userFeature, timeFilter, imageFilter],
  props: {
    tweet: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    addLike(tweetId) {
      this.addTweetLike(tweetId)
    },
    removeLike(tweetId) {
      const userId = this.getCurrentUser.id
      this.removeTweetLike(tweetId, userId)
    },
  }
};
</script>

<style lang="scss" scoped>
.tweetReply {
  border-bottom: 1px solid var(--input-border);
}
.tweet {
  border-bottom: none;
  &-icon {
    &-photo {
      margin-bottom: 4px;
    }
  }
}
.reply {
  padding-top: 0;
  border: none;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: -35px;
    left: 40px;
    width: 2px;
    background: #ccd6dd;
    height: calc(50%);
    z-index: -1;
  }
}
</style>