<template>
  <div class="col-sm-6 col-md-4 col-lg-3" id="cards">
    <div class="card">
      <div class="card-head"></div>
      <div class="card-profile">
        <img :src="user.image" alt="" class="card-profile-photo">
      </div>
      <div class="card-title">
        <div class="card-title-name">{{user.name}}</div>
        <div class="card-title-account">@{{user.account}}</div>
      </div>
      <div class="card-feat">
        <div class="card-feat-comment">
          <div class="card-feat-comment-icon"></div>
          <span class="card-feat-comment-count">{{user.tweetsLength}}</span>
        </div>
        <div class="card-feat-like">
          <div class="card-feat-like-icon"></div>
          <span class="card-feat-like-count">{{user.likesLength}}</span>
        </div>
      </div>
      <div class="card-follow">
        <div class="card-follow-following">
          {{user.followersLength}}個<span class="card-follow-unit">跟隨中</span>
        </div>
        <div class="card-follow-follower">
          {{user.followersLength}}位<span class="card-follow-unit">跟隨者</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    initialUser: {
      type: Object,
       required: true
    }
  },
  data() {
    return {
      user: {
        id: -1,
        name: '',
        account: '',
        image: '',
        followersLength: 0,
        followingsLength: 0,
        tweetsLength: 0,
        likesLength: 0,
      }
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      const {id, name, image, account, Followers, Followings, Tweets, Likes} = this.initialUser
      this.user = {
        id,
        name,
        image,
        account,
        followersLength: Followers ? Followers.length : 0,
        followingsLength: Followings ? Followings.length: 0,
        tweetsLength: Tweets ? Tweets.length: 0,
        likesLength: Likes? Likes.length: 0
      }

    }
  }
}
</script>