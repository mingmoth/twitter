<template>
  <div class="mainPost">
    <div class="mainPost-icon"></div>
    <form action="" class="form-main-tweet">
      <textarea
        name="tweet"
        id="tweet"
        cols="30"
        rows="10"
        placeholder="有什麼新鮮事?"
      ></textarea>
      <button
        class="btn-tweet"
        id="btn-tweet"
        data-bs-toggle="modal"
        data-bs-target="#main-post-tweet"
      >
        推文
      </button>
    </form>
  </div>
</template>