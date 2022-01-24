<template>
  <div>
    <div class="chat-body-header">公開聊天室 <span class="chat-body-header-account">@</span></div>
    <div class="chat-body-text"></div>
    <form class="chat-body-foot">
      <input type="text" class="chat-body-foot-input" placeholder="輸入訊息...">
      <img src="../../public/images/icon_send.png" alt="" class="chat-body-foot-image">
    </form>
  </div>
</template>

<script>
export default {
  name: "PublicRoom",
};
</script>

