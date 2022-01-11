<template>
  <div class="app-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="home">
      <SettingForm />
    </div>
    <div class="popular"></div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import SettingForm from '../components/SettingForm.vue'


export default {
  name: 'Settings',
  components: {
    Sidebar, SettingForm
  }
}
</script>