<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
    </div>
    <div class="home">
      <Home />
    </div>
    <div class="follows">
      <Follow />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Home from '../components/Home.vue';
import Follow from '../components/Follow.vue'
export default {
  name: "Main",
  components: {
    Navbar,
    Home,
    Follow,
  },
};
</script>

<style lang="scss">

// @media screen and (min-width: 883px) {
//   .home {
//   }
// }

</style>