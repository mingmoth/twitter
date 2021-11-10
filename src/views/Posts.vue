<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
    </div>
    <div class="home">
      <Post />
    </div>
    <div class="follows">
      <Follow />
    </div>
  </div>
</template>

 <script>
 import Navbar from '../components/Navbar.vue'
 import Post from '../components/Post.vue'
 import Follow from '../components/Follow.vue'
 export default {
   name: 'Posts',
   components: {
     Navbar, Post, Follow
   }
 }
 </script>