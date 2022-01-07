<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <Setting />
    </div>
    
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Setting from '../components/Setting.vue'


export default {
  name: 'Settings',
  components: {
    Sidebar, Setting
  }
}
</script>