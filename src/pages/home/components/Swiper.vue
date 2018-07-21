<template>
<div class="wrapper">
    <div>
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
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
    props: {
      list: Array
    },
    data (){
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3500,
        }    
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
    padding-bottom: 27.3%
    background: #eee
    .swiper-img 
      width: 100%
</style>