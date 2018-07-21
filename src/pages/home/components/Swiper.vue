<template>
<div class="wrapper">
    <div>
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>    
    </swiper>
    </div>
</div>    
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data (){
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 1000,
        },
        swiperList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg'
        },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
        }]        
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden    
    width: 100%
    height: 0
    padding-bottom: 27%
    background: #eee
    .swiper-img 
      width: 100%
</style>