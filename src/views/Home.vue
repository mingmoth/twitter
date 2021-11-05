<template>
  <div class="home">
    <div class="header">
      <Navbar />
    </div>
    <div class="post">Post</div>
    <div class="follow">FollowLists</div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">

// @media screen and (min-width: 883px) {
//   .home {
//   }
// }
@media screen and (min-width: 1082px) {
  .home {
    width: 86.5%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2.8fr 1.49fr;
    grid-gap: 30px;
    .header,
    .post,
    .follow {
      border: 1px solid red;
    }
    
  }
}
</style>