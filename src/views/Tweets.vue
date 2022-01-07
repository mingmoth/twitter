<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <Home />
    </div>
    <div class="popular">
      <Follow />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Home from '../components/Home.vue';
import Follow from '../components/Follow.vue'
export default {
  name: "Main",
  components: {
    Sidebar,
    Home,
    Follow,
  },
};
</script>

<style lang="scss">

</style>