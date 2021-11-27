<template>
  <div class="main">
    <NavTop />
    <User />
    <Reply />
    <UserSettingModal />
  </div>
</template>

<script>
const dummyData = {
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
      Comments: [
        {
          id: 1,
          
        }
      ],
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
import Reply from "./Reply.vue";
import UserSettingModal from "./UserSettingModal.vue";
export default {
  name: "UserTweet",
  components: {
    NavTop,
    User,
    Reply,
    UserSettingModal,
  },
};
</script>