<template>
  <div class="col-sm-6 col-md-4 col-lg-3" id="cards">
    <div class="card">
      <img :src="user.cover | emptyCover" alt="" class="card-head">
      <div class="card-profile">
        <img :src="user.avatar | emptyAvatar" alt="" class="card-profile-photo">
      </div>
      <div class="card-title">
        <div class="card-title-name">{{user.name}}</div>
        <div class="card-title-account">@{{user.account}}</div>
      </div>
      <div class="card-feat">
        <div class="card-feat-comment">
          <img src="../../public/images/icon_reply.png" alt="" class="card-feat-comment-icon">
          <span class="card-feat-comment-count">{{user.Tweets ? user.Tweets: 0}}</span>
        </div>
        <div class="card-feat-like">
          <img src="../../public/images/icon_like.png" alt="" class="card-feat-like-icon">
          <span class="card-feat-like-count">{{user.Likes ? user.Likes: 0}}</span>
        </div>
      </div>
      <div class="card-follow">
        <div class="card-follow-following">
          {{user.Followers}}個<span class="card-follow-unit">跟隨中</span>
        </div>
        <div class="card-follow-follower">
          {{user.Followings}}位<span class="card-follow-unit">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { imageFilter } from '../utils/mixins'
export default {
  name: 'UserCard',
  mixins: [ imageFilter ],
  props: {
    user: {
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