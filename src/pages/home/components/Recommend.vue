<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img  class="item-img" :src="item.imgUrl">         
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>            
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
          title: '上海玛雅水公园1',
          desc: '上海海玛海玛海玛海玛'
        },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
          title: '上海玛雅水公园2',
          desc: '上海海玛海玛海玛海玛海玛海玛'
        },{
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
          title: '上海玛雅水公园3',
          desc: '上海海玛海海玛海玛海玛海玛玛海玛'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    background: #eee
    line-height: .8rem
    text-indent: .2rem
    margin-top: .2rem
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height: .44rem
        margin-top: .16rem
        padding: 0 .15rem   
        background: #ff9300
        color: #fff
        border-radius: .06rem
        overflow: hidden    
        white-space: nowrap
        text-overflow: ellipsis
</style>