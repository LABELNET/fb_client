<template>
  <div>
    <!-- 第1行 -->
    <div class="menu">
      <el-row type="flex" align="top">
        <el-col :span="4">
          <div class="grid-content bg-black">
            <!--标题-->
            <h2>Four Box</h2>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content">
            <!--状态栏-->
            <el-menu theme="dark" :default-active="activeIndex" class="grid-content el-menu-demo" mode="horizontal"
                     @select="handleSelect">
              <el-menu-item index="1">我的总结</el-menu-item>

              <el-menu-item index="2">总结管理</el-menu-item>


              <el-submenu index="3">
                <template slot="title">切换员工</template>
                <el-menu-item index="3-1">User1</el-menu-item>
                <el-menu-item index="3-2">User2</el-menu-item>
                <el-menu-item index="3-3">User3</el-menu-item>
              </el-submenu>


              <el-submenu index="4" class="grid-user">
                <template slot="title">三生烟火</template>
                <el-menu-item index="4-1">个人中心</el-menu-item>
                <el-menu-item index="4-2">注销账户</el-menu-item>
              </el-submenu>
            </el-menu>

          </div>
        </el-col>

      </el-row>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'fbTopmenu'
  }
</script>

<style>

  .grid-user {
  }

  .menu {
    width: 100%;
    position: fixed;
    z-index: 5;
  }

  .menu .grid-content {
    border-radius: 0px;
    min-height: 60px;
  }

  .menu .bg-black {
    background-color: #2c3e50;
  }

  .menu .bg-black h2 {
    margin: 0px;
    color: white;
    text-align: center;
    line-height: 60px;
  }
</style>
