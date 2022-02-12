import { mapActions } from 'vuex'
import { errorToast } from './toast'
import noticeAPI from '../apis/notice'

export const noticeFeature = {
  methods: {
    ...mapActions(['setUnreadNotices']),
    async fetchUnreadNotices() {
      try {
        const { data, statusText} = await noticeAPI.getNotices()
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.setUnreadNotices(data.notices)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    }
  }
}