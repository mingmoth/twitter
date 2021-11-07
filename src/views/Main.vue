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
@media screen and (min-width: 1082px) {
  .app-container {
    width: 86.5%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2.8fr 1.49fr;
    grid-gap: 30px;
    // .header,
    // .home,
    // .follows {
    //   border: 1px solid red;
    // }
    
  }
}
</style>