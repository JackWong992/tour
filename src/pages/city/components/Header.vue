<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-back"></div>        
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    position: relative
    height: .86rem
    line-height: .86rem
    overflow: hidden  
    color: #fff
    background: $bgColor
    text-align: center
    font-size: .32rem
    .icon-back
      position: absolute
      top: -.05rem
      left: 0
      color: #fff
      width: .64rem
      text-align: center
      font-size: .4rem
      
</style>