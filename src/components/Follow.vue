<template>
  <div class="follow">
    <div class="follow-title">Popular</div>
    <div 
      class="follow-item"
      v-for="user in users"
      :key="user.id">
      <img :src="user.image" alt="" class="follow-item-icon">
      <div class="follow-item-title">
        <div class="follow-item-title-name">{{user.name}}</div>
        <div class="follow-item-title-account">{{user.account}}</div>
      </div>
      <button v-if="user.isFollowed" class="btn-unfollow">正在跟隨</button>
      <button v-else class="btn-follow">跟隨</button>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: '3',
    image: 'http://via.placeholder.com/300x300?text=No+Image',
    isFollowed: true,
    isAdmin: false,
    account: '@apple',
    email: 'apple@example.com',
    name: 'Apple',
    password: '',
    createdAt: '',
    updateAt: '',
  },
  {
    id: '2',
    image: 'https://loremflickr.com/320/240/food,dessert,restaurant/?random=2',
    isFollowed: false,
    isAdmin: false,
    account: '@mcdonalds',
    email: 'mcdonalds@example.com',
    name: 'McDonalds',
    password: '',
    createdAt: '',
    updateAt: '',
  }
]

export default {
  // api '/users/popular'
  name: 'Follow',
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.users = dummyData
    },

  }
}
</script>