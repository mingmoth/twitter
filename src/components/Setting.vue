<template>
  <div class="main">
    <NavTop />
    <SettingForm />
  </div>
</template>

<script>
import NavTop from './NavTop.vue'
import SettingForm from './SettingForm.vue'
export default {
  name: 'Setting',
  components: {
    NavTop, SettingForm
  }
}
</script>