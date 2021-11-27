<template>
  <div class="main">
    <NavTop />
    <User :user="user" />
    <Tweet
      v-for="tweet in tweets" 
      :key="tweet.id"
      :tweet="tweet" />
    <UserSettingModal />
  </div>
</template>

<script>
// api get. users/{id}

const dummyData = {
  profile: {
    id: 2,
    name: "user1",
    account: "user1",
    email: "user1@example.com",
    password: "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
    isAdmin: false,
    image: "https://i.imgur.com/RnQRoJb.png",
    coverImage: "https://i.imgur.com/ifqzNgs.png",
    createdAt: "2021-11-23T07:25:29.000Z",
    updatedAt: "2021-11-26T04:22:35.000Z",
    Tweets: [
      {
        id: 10,
        text: "Sequi ut asperiores placeat.",
        UserId: 3,
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-23T07:25:29.000Z",
        User: {
          id: 3,
          name: "Judson Mueller",
          account: "judson",
          email: "judson@example.com",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=48.42013805699277",
        },
        Comments: [{ id: 1 }],
        Likes: [{ id: 1 }, { id: 2 }],
      },
      {
        id: 17,
        text: "Rerum quo dolore id autem eum quia molestiae.",
        UserId: 2,
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-23T07:25:29.000Z",
        User: {
          id: 2,
          name: "Jace Roob DDS",
          account: "jaceroob",
          email: "jaceroob@example.com",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=60.89778600136759",
        },
        Comments: [{ id: 1 }, { id: 2 }],
        Likes: [{ id: 1 }, { id: 2 }],
      },
      {
        id: 19,
        text: "Ut similique adipisci dolor voluptatem molestias quis.",
        UserId: 2,
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-23T07:25:29.000Z",
        User: {
          id: 2,
          name: "Tristian Wisozk",
          account: "tristian",
          email: "tristian@example.com",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.6020843606259447",
        },
        Comments: [{ id: 1 }],
        Likes: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
      {
        id: 46,
        text: "Odit rem tempore.",
        UserId: 3,
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-23T07:25:29.000Z",
        User: {
          id: 3,
          name: "Johan Fritsch",
          account: "fritsch",
          email: "fritsch@example.com",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=56.251076950494095",
        },
        Comments: [{ id: 1 }, { id: 2 }],
        Likes: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    ],
    Followers: [
      {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$E4cdOtef4QKN1tKbEe1MwOVlMOxe/.Fbc2HNqgjJMVdkL8oBYF6le",
        isAdmin: true,
        image: "https://i.imgur.com/VEfBSwa.png",
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-26T04:22:06.000Z",
        Followship: {
          followerId: 3,
          followingId: 2,
          createdAt: "2021-11-26T03:39:51.000Z",
          updatedAt: "2021-11-26T03:39:51.000Z",
        },
      },
    ],
    Followings: [
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$jlhmTFkoFv7JWa3tCFxQF.QR68dI2xnBV9xTWpQChXKR4H96/Kl5W",
        isAdmin: true,
        image: "https://i.imgur.com/PJ901UE.png",
        createdAt: "2021-11-23T07:25:28.000Z",
        updatedAt: "2021-11-26T07:33:04.000Z",
        Followship: {
          followerId: 2,
          followingId: 1,
          createdAt: "2021-11-25T12:49:25.000Z",
          updatedAt: "2021-11-25T12:49:25.000Z",
        },
      },
      {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$E4cdOtef4QKN1tKbEe1MwOVlMOxe/.Fbc2HNqgjJMVdkL8oBYF6le",
        isAdmin: true,
        image: "https://i.imgur.com/VEfBSwa.png",
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-26T04:22:06.000Z",
        Followship: {
          followerId: 2,
          followingId: 3,
          createdAt: "2021-11-26T03:38:52.000Z",
          updatedAt: "2021-11-26T03:38:52.000Z",
        },
      },
      {
        id: 4,
        name: "mingmoth",
        email: "mingmoth@gmail.com",
        password:
          "$2a$10$UptMuMhZ1PxMrNdzvJ4ZG.5AN6H6gpuSUhV0mvQ8OhFUYmxjNXISW",
        isAdmin: false,
        image: null,
        createdAt: "2021-11-24T09:14:49.000Z",
        updatedAt: "2021-11-26T03:35:55.000Z",
        Followship: {
          followerId: 2,
          followingId: 4,
          createdAt: "2021-11-26T06:53:16.000Z",
          updatedAt: "2021-11-26T06:53:16.000Z",
        },
      },
    ],
    Comments: [],
  },
  isFollowed: false,
  isNoticed: false,
};

const currentUser = {
  id: 2,
  name: "user1",
  email: "user1@example.com",
  password: "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
  isAdmin: false,
  image: "https://i.imgur.com/RnQRoJb.png",
  createdAt: "2021-11-23T07:25:29.000Z",
  updatedAt: "2021-11-26T04:22:35.000Z",
};

import NavTop from "./NavTop.vue";
import User from "./User.vue";
import Tweet from "./Tweet.vue";
import UserSettingModal from "./UserSettingModal.vue";
export default {
  name: "UserTweet",
  components: {
    NavTop,
    User,
    Tweet,
    UserSettingModal,
  },
  data() {
    return {
      user: {
        id: -4,
        name: "",
        account: "",
        email: "",
        password: "",
        isAdmin: false,
        image: "",
        coverImage: "",
        createdAt: "",
        updatedAt: "",
        followingsLength: 0,
        followersLength: 0,
      },
      isFollowed: false,
      tweets: {},
      currentUser: {},
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser({ userId });
  },
  methods: {
    fetchUser() {
      const {
        id,
        name,
        account,
        email,
        password,
        isAdmin,
        image,
        coverImage,
        createdAt,
        updatedAt,
        Tweets,
        Followers,
        Followings,
      } = dummyData.profile;

      this.isFollowed = dummyData.isFollowed;

      this.user = {
        id,
        name,
        account,
        email,
        password,
        isAdmin,
        image,
        coverImage,
        createdAt,
        updatedAt,
        followingsLength: Followings ? Followings.length : 0,
        followersLength: Followers ? Followers.length : 0,
      };

      this.tweets = Tweets;
      this.currentUser = currentUser;
    },
  },
};
</script>