<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>     
        </div>
      </swiper-slide>          
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data(){
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      /*分页：
      分成两个数组，0-7：第一个数组 8：第二个数组
      */
      pages (){
        const pages = []
        this.list.forEach( (item,index)=>{
          const page = Math.floor( index/8 ) //0 1
          if( !pages[page] ){
            pages[page] = []
          }
            pages[page].push(item)
        } )
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl' 
  .icons >>> .swiper-container    
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    padding-bottom: 25%
    height: 0
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem 
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc      
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      overflow: hidden    
      white-space: nowrap
      text-overflow: ellipsis

</style>