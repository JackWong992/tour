<template>
  <div class="search">
    <input type="text" 
            placeholder="输入城市名或者拼音"
            class="search-input">
  </div>
</template>

<script>
  export default {
    name: 'CitySearch'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem  
    background: $bgColor
    .search-input
      height: .62rem
      line-height: .62rem
      text-align: center
      width: 100%
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
      box-sizing: border-box
</style>