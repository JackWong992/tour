<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  <!-- 显示的内容就是当前路由所对应的组件 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
