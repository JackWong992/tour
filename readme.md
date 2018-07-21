# tour

## 项目前置：<br>
### 布局<br>
1. 清除布局原有样式，引入`reset.css`<br>
```
  import './assets/styles/reset.css'
```
2. 解决高清屏的1像素边框偏差，引入`border.css`<br>
```
  import './assets/styles/border.css'
```
3. 解决特殊机型，特殊浏览器的300ms延迟问题<br>

* 安装：
```
  npm install fastclick --save //不管是开发版本还是上线版本都要引入`fastclick`
```

* 引入:(./router/main.js)
```
  fastClick.attach(document.body)
```
4. 解决图标问题，引入 `iconfont`<br>

安装：<br>

找到相关的图标，下载到本地，保留文件 `iconfont.eot/.svg/.ttf/.woff`至styles下的iconfont文件夹,修改`iconfont.css`的文件路径地址,加入 `./iconfont/ `<br>
引入(router/main.js):<br>
```
  import './assets/styles/iconfont.css'
```
5. CSS开发使用stylus, stylus-loader
```
  npm i stylus --save
  npm i stylus-loader --save
```

## 项目开发ing<br>
### Home组件开发
#### 1.1首先是home(首页)组件开发<br>
1. header.vue部分<br>
```
  创建全局css变量:varibles.styl->$bgColor: #00bcd4
  引入全局css变量:import '~@/asstes/styles/varibles.styl'

```
#### 1.2 `index-swiper`组件开发
* 使用`vue-awesome-swiper`<br>
* 下载-引入<br>
```
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
``` 
使用`swiper`,将`swiper`加入一个循环中，实现自动循环
```
  <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
  </swiper-slide>
```
发现轮播图加载bug出现问题，解决：最外层加个div`(<div class="wrapper"></div>)`
```
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 长度/宽度
```
发现问题：想给轮播的原点改变颜色，而对于单页面又引入了`<style scoped>`无法全局操作<br>
解决办法：使用css穿透进行
```
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
```
## Installation and operation/安装与运行
```
# 下载到本地
git clone git@github.com:JackWong992/onlineMall.git

# 进入目录
cd onlineMall

# 安装依赖
npm install

# 服务端运行
npm run dev

# 显示
https://localhost:8080（windows->F12/MacOs->command+option+i => 点击手机调试，刷新页面 ）

# 项目打包
npm run build
```