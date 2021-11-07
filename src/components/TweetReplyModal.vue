<template>
  <div class="modal fade" id="main-post-tweet" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div
            class="modal-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></div>
        </div>
        <div class="modal-body">
          <div class="modal-body-post">
            <div class="modal-body-post-icon"></div>
            <div class="modal-body-post-body">
              <div class="modal-body-post-body-head">
                <div class="modal-body-post-body-head-name">Apple</div>
                <div class="modal-body-post-body-head-account">@apple</div>
                <span> · </span>
                <div class="modal-body-post-body-head-time">3小時</div>
              </div>
              <div class="modal-body-post-body-content">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </div>
              <div class="modal-body-post-body-foot">
                <div class="modal-body-post-body-foot-reply">回覆給 <span class="modal-body-post-body-foot-account">@apple</span></div>
              </div>
            </div>
          </div>
          <div class="modal-body-reply">
            <div class="modal-body-reply-icon"></div>
            <form action="" class="modal-body-reply-tweet">
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
        </div>
      </div>
    </div>
  </div>
</template>