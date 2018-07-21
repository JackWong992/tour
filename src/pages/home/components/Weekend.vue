<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img  class="item-img" :src="item.imgUrl">                   
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          
        </div>            
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data () {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海玛雅水公园1',
          desc: '上海海玛海玛海玛海玛'
        },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '上海玛雅水公园2',
          desc: '上海海玛海玛海玛海玛海玛海玛'
        },{
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #ccc
</style>