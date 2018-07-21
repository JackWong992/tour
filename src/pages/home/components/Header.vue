<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search"></span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">
      城市
      <span class="iconfont icon-jiantou"></span>      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl';
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    color: #fff
    background: $bgColor
    .header-left
      width: .64rem
      float: left 
      .icon-back
        text-align: center
        font-size: .4rem
    .header-input
      flex:1
      height: .64rem
      line-height: .64rem
      margin: .12rem 0
      background: #fff
      color: #ccc
      text-indent: 6px
      border-radius: .1rem
    .header-right
      float: right 
      width: 1.24rem
      text-align: center 
      .icon-jiantou
        font-size: .24rem
</style>