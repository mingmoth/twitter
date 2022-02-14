import { mapActions } from 'vuex'
import { errorToast } from './toast'
import noticeAPI from '../apis/notice'

export const noticeFeature = {
  methods: {
    ...mapActions(['setNotices', 'setUnreadNotices']),
    async fetchNotices() {
      try {
        const { data, statusText} = await noticeAPI.getNotices()
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.setNotices(data.notices)
      } catch (error) {
        errorToast.fire({
          title: error.message
        })
      }
    },
    async fetchUnreadNotices() {
      try {
        const { data, statusText } = await noticeAPI.getUnreadNotices()
        if (statusText !== 'OK') {
          errorToast.fire({
            title: data.message
          })
          return
        }
        this.setUnreadNotices(data.unreadNotices)
      } catch (error) {
        errorToast.fire({
          title: 'error.message'
        })
      }
    },
    async toggleNotices() {
      try {
        const response = await noticeAPI.toggleNotices()
        console.log(response)
        this.setUnreadNotices(0)
      } catch (error) {
        errorToast.fire({
          title: 'error.message'
        })
      }
    }
  }
}