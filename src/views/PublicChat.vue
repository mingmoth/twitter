<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'PublicChat',
  components: {
    Sidebar
  }
}
</script>