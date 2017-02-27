<template>
  <div>
    <!-- 第1行 -->
    <menu-top></menu-top>
    <!-- 第2行 -->
    <menu-left></menu-left>
  </div>
</template>

<script>
  import LeftMenu from './base/LeftMenu.vue'
  import TopMenu from './base/TopMenu.vue'

  export default {
    name: 'index',
    components: {
      'menu-left': LeftMenu,
      'menu-top': TopMenu
    }
  }
</script>

<style>


</style>
