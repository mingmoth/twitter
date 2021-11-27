<template>
  <div class="main">
    <NavTopAdmin />
    <TweetAdmin 
      v-for="tweet in tweets"
      :key="tweet.id"
      :initial-tweet="tweet"/>
  </div>
</template>

<script>
const dummyData = {
  tweets: [
    {
      id: 56,
      text: "Autem veniam tempore.",
      UserId: 2,
      createdAt: "2021-11-23T07:25:29.000Z",
      updatedAt: "2021-11-23T07:25:29.000Z",
      User: {
        id: 2,
        name: "user1",
        account: 'user1',
        email: "user1@example.com",
        password:
          "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
        isAdmin: false,
        image: "https://i.imgur.com/RnQRoJb.png",
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-26T04:22:35.000Z",
      },
    },
    {
      id: 106,
      text: "Veritatis pariatur maxime omnis reiciendis aliquid sed vel aut.",
      UserId: 2,
      createdAt: "2021-11-23T07:25:29.000Z",
      updatedAt: "2021-11-23T07:25:29.000Z",
      User: {
        id: 2,
        name: "user1",
        account: 'user1',
        email: "user1@example.com",
        password:
          "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
        isAdmin: false,
        image: "https://i.imgur.com/RnQRoJb.png",
        createdAt: "2021-11-23T07:25:29.000Z",
        updatedAt: "2021-11-26T04:22:35.000Z",
      },
    },
    {
      id: 154,
      text: "123",
      UserId: 1,
      createdAt: "2021-11-25T09:16:34.000Z",
      updatedAt: "2021-11-25T09:16:34.000Z",
      User: {
        id: 1,
        name: "root",
        account: 'root',
        email: "root@example.com",
        password:
          "$2a$10$jlhmTFkoFv7JWa3tCFxQF.QR68dI2xnBV9xTWpQChXKR4H96/Kl5W",
        isAdmin: true,
        image: "https://i.imgur.com/PJ901UE.png",
        createdAt: "2021-11-23T07:25:28.000Z",
        updatedAt: "2021-11-26T07:33:04.000Z",
      },
    },
  ],
};

import NavTopAdmin from "./NavTopAdmin.vue";
import TweetAdmin from "./TweetAdmin.vue";
export default {
  name: "UserTweet",
  components: {
    NavTopAdmin,
    TweetAdmin,
  },
  data() {
    return {
      tweets: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.tweets = dummyData.tweets
    }
  }
};
</script>