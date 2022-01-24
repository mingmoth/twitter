<template>
  <div>
    <div class="chat-body-header">公開聊天室</div>
    <div class="chat-body-text">
        <div class="chat-body-text-wrapper">
          <div class="chat-body-text-wrapper-other">
            <div class="chat-body-text-wrapper-other-head">
              <img
                src="../../public/images/ac logo.png"
                alt=""
                class="chat-body-text-wrapper-other-head-image"
              />
              <div class="chat-body-text-wrapper-other-head-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </div>
            </div>
            <div class="chat-body-text-wrapper-other-body">
              <div class="chat-body-text-wrapper-other-body-name"></div>
              <div class="chat-body-text-wrapper-other-body-moment">
                3月19日 下午4:21
              </div>
            </div>
          </div>
        </div>
        <div class="chat-body-text-wrapper">
          <div class="chat-body-text-wrapper-announce">
            <span class="chat-body-text-wrapper-announce-text"
              >Esther Howard 上線</span
            >
          </div>
        </div>
        <div class="chat-body-text-wrapper">
          <div class="chat-body-text-wrapper-user">
            <div class="chat-body-text-wrapper-user-text">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </div>
            <div class="chat-body-text-wrapper-user-moment">下午6:08</div>
          </div>
        </div>
    </div>
    <form class="chat-body-foot">
      <input
        type="text"
        class="chat-body-foot-input"
        placeholder="輸入訊息..."
      />
      <img
        src="../../public/images/icon_send.png"
        alt=""
        class="chat-body-foot-image"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "PublicRoom",
};
</script>

