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
## 项目开发ing<br>
首先是home(首页)组件开发<br>
1. header.vue部分<br>
```
  创建全局css变量:varibles.styl->$bgColor: #00bcd4
  引入全局css变量:import '~@/asstes/styles/varibles.styl'

```

5. CSS开发使用stylus, stylus-loader
```
  npm i stylus --save
  npm i stylus-loader --save
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