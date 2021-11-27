<template>
  <div class="main">
    <NavTopAdmin />
    <div class="row" id="user-panel">
      <UserCard 
        v-for="user in users"
        :key="user.id"
        :initial-user="user"/>
    </div>
  </div>
</template>

<script>
const dummyData = {
  users: [
    {
      id: "1",
      name: "John Doe",
      account: "heyjohn",
      email: "heyjohn@example.com",
      image: "https://i.imgur.com/MRdy9z2.png",
      Followings: [],
      Followers: [],
      Likes: [],
      Comments: [],
    },
    {
      id: "2",
      name: "Apple",
      account: "apple",
      email: "apple@example.com",
      image: "https://i.imgur.com/RGxqLdu.png",
      Followings: [
        {
          id: "1",
          name: "John Doe",
          email: "heyjohn@example.com",
          Followship: {
            createdAt: "2021-11-25T12:49:25.000Z",
            followerId: 2,
            followeringId: 1,
            updatedAt: "2021-11-25T12:49:25.000Z",
          },
        },
        {
          id: "3",
          name: "Macdonalds",
          email: "macdonalds@example.com",
          Followship: {
            createdAt: "2021-11-25T12:49:25.000Z",
            followerId: 1,
            followeringId: 3,
            updatedAt: "2021-11-25T12:49:25.000Z",
          },
        },
      ],
      Followers: [
        {
          id: "1",
          name: "John Doe",
          email: "heyjohn@example.com",
          Followship: {
            createdAt: "2021-11-25T12:49:25.000Z",
            followerId: 1,
            followeringId: 2,
            updatedAt: "2021-11-25T12:49:25.000Z",
          },
        },
        {
          id: "3",
          name: "Macdonalds",
          email: "macdonalds@example.com",
          Followship: {
            createdAt: "2021-11-25T12:49:25.000Z",
            followerId: 3,
            followeringId: 2,
            updatedAt: "2021-11-25T12:49:25.000Z",
          },
        },
      ],
      // 推文被 like 的數量
      Likes: [
        {
          id: 56,
          text: "Autem veniam tempore.",
          isLiked: true,
          TweetId: 8,
          createdAt: "2021-11-23T07:25:29.000Z",
          updatedAt: "2021-11-23T07:25:29.000Z",
          User: {
            id: 2,
            name: "user1",
            email: "user1@example.com",
            password:
              "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
            isAdmin: false,
            image: "https://i.imgur.com/RnQRoJb.png",
            createdAt: "2021-11-23T07:25:29.000Z",
            updatedAt: "2021-11-26T04:22:35.000Z",
          },
          UserLike: {
            id: 4,
            name: "user4",
            email: "user4@example.com",
            password:
              "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
            isAdmin: false,
            image: "https://i.imgur.com/RnQRoJb.png",
            createdAt: "2021-11-23T07:25:29.000Z",
            updatedAt: "2021-11-26T04:22:35.000Z",
          },
        },
      ],
      // 推文數量
      Tweets: [
        {
          id: 56,
          text: "Autem veniam tempore.",
          isLiked: true,
          TweetId: 6,
          createdAt: "2021-11-23T07:25:29.000Z",
          updatedAt: "2021-11-23T07:25:29.000Z",
          User: {
            id: 2,
            name: "user1",
            email: "user1@example.com",
            password:
              "$2a$10$xSAOmUrVGjFXNuA6pENgM.ldkJ/Nu4uf6PSXAYAfPxNnbGocDZ4rO",
            isAdmin: false,
            image: "https://i.imgur.com/RnQRoJb.png",
            createdAt: "2021-11-23T07:25:29.000Z",
            updatedAt: "2021-11-26T04:22:35.000Z",
          },
        },
      ],
    },
  ],
};

import NavTopAdmin from "./NavTopAdmin.vue";
import UserCard from "./UserCard.vue";
export default {
  name: "UserAdmin",
  components: {
    NavTopAdmin,
    UserCard,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.users = dummyData.users
    }
  }
};
</script>