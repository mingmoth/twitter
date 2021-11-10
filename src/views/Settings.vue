<template>
  <div class="app-container">
    <div class="header">
      <Navbar />
    </div>
    <div class="home">
      <Setting />
    </div>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Setting from '../components/Setting.vue'
export default {
  name: 'Settings',
  components: {
    Navbar, Setting
  }
}
</script>