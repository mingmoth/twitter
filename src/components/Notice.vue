<template>
  
    <div class="notice">
      <div class="notice-head">
        <img :src=" notice.avatar | emptyAvatar" alt="" class="notice-head-avatar">
      </div>
      <div class="notice-info">John 有新的推文通知</div>
      <article class="notice-text ">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </article>
    </div>
  
</template>

<script>
import { imageFilter, timeFilter } from '../utils/mixins'
export default {
  name: 'Notice',
  mixins: [ imageFilter, timeFilter ],
  data() {
    return {
      notice: {}
    }
  }
}
</script>