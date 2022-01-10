<template>
  <div class="main">
    <NavTop />
    <User />
    <Reply />
    <UserSettingModal />
  </div>
</template>

<script>

import NavTop from "./NavTop.vue";
import User from "./UserProfile.vue";
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