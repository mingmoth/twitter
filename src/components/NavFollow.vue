<template>
  <div>
    <div class="navTop">
      <div class="navTop-title">
        <img
          src="../../public/images/icon_back.png"
          alt=""
          class="navTop-title-back"
          @click="$router.back()"
        />
        <div class="navTop-title-name">
          {{ getUserProfile.name }}
          <div class="navTop-title-name-tweets">
            <span> @</span>{{ getUserProfile.account }}
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <div class="user-navPill">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user-followers', params: { id: getUserProfile.id}}">跟隨者</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'user-followings', params: { id: getUserProfile.id}}"
              >正在跟隨</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { userFeature } from '../utils/mixins'
export default {
  name: 'NavTop',
  mixins: [userFeature],
  computed: {
    ...mapGetters(['getUserProfile']),
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  }
}
</script>