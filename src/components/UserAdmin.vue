<template>
  <div class="main">
    <NavTopAdmin />
    <div class="row" id="user-panel">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  </div>
</template>

<script>
import NavTopAdmin from './NavTopAdmin.vue'
import UserCard from './UserCard.vue'
export default {
  name: 'UserTweet',
  components: {
    NavTopAdmin, UserCard
  }
}
</script>