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

```
安装：
  npm install fastclick --save //不管是开发版本还是上线版本都要引入`fastclick`
引入:(./router/main.js)
  fastClick.attach(document.body)
```
4. 解决图标问题，引入 `iconfont`
```

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