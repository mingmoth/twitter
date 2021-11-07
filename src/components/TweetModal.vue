<template>
  <div
    class="modal fade"
    id="main-post-tweet1"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-close" data-bs-dismiss="modal"
            aria-label="Close"></div>
        </div>
        <div class="modal-body">
          <div class="modal-body-icon"></div>
          <form action="" class="modal-body-tweet">
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
</template>

// aria-labelledby="exampleModalLongTitle"
// role="dialog"
// tabindex="-1"