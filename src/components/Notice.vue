<template>
  <div>
    <div class="notice" v-if="notice.TweetId">
      <div class="notice-head">
        <router-link
          :to="{ name: 'user', params: { id: notice.Tweet.UserId } }"
        >
          <img
            :src="notice.Tweet.User.avatar | emptyAvatar"
            alt=""
            class="notice-head-avatar"
          />
        </router-link>
      </div>
      <div class="notice-info">
        你錯過了
        <span class="notice-user">{{ notice.Tweet.User.name }}</span>
        的新推文嗎
      </div>
      <router-link
        :to="{ name: 'tweet', params: { id: notice.TweetId } }"
        class="notice-text"
        >{{ notice.Tweet ? notice.Tweet.description : "" }}
      </router-link>
    </div>
    <div class="notice" v-else-if="notice.LikeId">
      <div class="notice-head">
        <router-link :to="{ name: 'user', params: { id: notice.Like.UserId } }">
          <img
            :src="notice.Like.User.avatar | emptyAvatar"
            alt=""
            class="notice-head-avatar"
          />
        </router-link>
      </div>
      <div class="notice-info">
        <span class="notice-user">{{ notice.Like.User.name }}</span> 已喜歡
        <b class="notice-user" v-if="notice.Like.Tweet.UserId === getCurrentUser.id">你</b>
        <b class="notice-user" v-else>{{ notice.Like.Tweet.User.name }}</b> 的一則貼文
      </div>
      <router-link
        :to="{ name: 'tweet', params: { id: notice.Like.TweetId } }"
        class="notice-text"
        >{{ notice.Like ? notice.Like.Tweet.description : "" }}
      </router-link>
    </div>
    <div class="notice" v-else-if="notice.ReplyId">
      <div class="notice-head">
        <router-link
          :to="{ name: 'user', params: { id: notice.Reply.UserId } }"
        >
          <img
            :src="notice.Reply.User.avatar | emptyAvatar"
            alt=""
            class="notice-head-avatar"
          />
        </router-link>
      </div>
      <div class="notice-info">
        <span class="notice-user">{{ notice.Reply.User.name }}</span> 回覆了
        <b class="notice-user" v-if="notice.Reply.Tweet.UserId === getCurrentUser.id">你</b>
        <b class="notice-user" v-else>{{ notice.Reply.Tweet.User.name }}</b> 的一則貼文
      </div>
      <router-link
        :to="{ name: 'tweet', params: { id: notice.Reply.TweetId } }"
        class="notice-text"
        >{{ notice.Reply ? notice.Reply.Tweet.description : "" }}
      </router-link>
      <div class="notice-reply">
        <router-link
          :to="{ name: 'tweet', params: { id: notice.Reply.TweetId } }"
          class="notice-text"
          >{{ notice.Reply ? notice.Reply.comment : "" }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { imageFilter, timeFilter } from "../utils/mixins";
export default {
  name: "Notice",
  mixins: [imageFilter, timeFilter],
  props: {
    notice: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  data() {
    return {};
  },
};
</script>