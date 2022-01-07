<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <Post />
    </div>
    <div class="popular">
      <Follow />
    </div>
  </div>
</template>

 <script>
 import Sidebar from '../components/Sidebar.vue'
 import Post from '../components/Post.vue'
 import Follow from '../components/Follow.vue'
 export default {
   name: 'Posts',
   components: {
     Sidebar, Post, Follow
   }
 }
 </script>