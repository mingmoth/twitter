<template>
  <div class="post">
    <div class="post-header">
      <div class="post-header-icon"></div>
      <div class="post-header-title">
        <div class="post-header-title-name"></div>
        <div class="post-header-title-account"><span>@</span></div>
      </div>
    </div>
    <div class="post-content"></div>
    <div class="post-time"></div>
    <div class="post-info">
      <div class="post-info-reply">
        <div class="post-info-reply-count"><span class="post-info-reply-unit"> 回覆</span></div>
        
      </div>
      <div class="post-info-liked">
        <div class="post-info-liked-count"><span class="post-info-liked-unit"> </span></div>
        
      </div>
    </div>
    <div class="post-action">
      <div 
        class="post-action-reply"   
        data-bs-toggle="modal"
        data-bs-target="#main-post-reply"></div>
      <div class="post-action-liked"></div>
    </div>
  </div>
</template>