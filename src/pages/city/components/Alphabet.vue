<template>
  <ul class="list" >
    <li class="item" v-for="(item,key) in cities"
                  :key="key">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    props: { 
      cities: Object
    },
    name: 'CityAlphabet'
  }
</script>

<style  lang="stylus" scoped>
  .list 
    display: flex
    flex-direction: column 
    justify-content: center
    align-items: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .44rem
      color: #1fbcb3;
</style>