<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <div class="navTop-title-name">首頁</div>
      </div>
      <img src="../../public/images/ac logo.png" alt="" class="navTop-logo">
    </div>
    <div class="userPost">
      <img src="../../public/images/ac logo.png" alt="" class="userPost-icon">
      <form action="" class="form-main-tweet">
        <textarea
          name="tweet"
          id="tweet"
          cols="40"
          rows="5"
          placeholder="有什麼新鮮事?"
        ></textarea>
        <button
          class="btn-tweet"
          id="btn-tweet"
        >
          推文
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPost',
  data() {
    return {}
  },
  methods: {},
}
</script>