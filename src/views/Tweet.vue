<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <Post />
    </div>
    <div class="popular">
      <Popular />
    </div>
  </div>
</template>

 <script>
 import Sidebar from '../components/Sidebar.vue'
 import Post from '../components/Post.vue'
 import Popular from '../components/Popular.vue'
 export default {
   name: 'Posts',
   components: {
     Sidebar, Post, Popular
   }
 }
 </script>