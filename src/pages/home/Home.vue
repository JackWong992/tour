<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-recommend></home-recommend>    
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
        .then( this.getHomeInfoSucc )
    },
    getHomeInfoSucc(res){
      console.log( res )
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>