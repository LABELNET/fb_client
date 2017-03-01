<template>
  <div>
    <!-- 第1行 -->
    <div class="menu">
      <el-row type="flex" align="top">
        <el-col :span="4">
          <div class="grid-content bg-black">
            <!--标题-->
            <router-link :to="{path:'/'}" style="color:white">
              <h2>
                Four Box
              </h2>
            </router-link>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content">
            <!--状态栏-->
            <el-menu theme="dark" class="grid-content el-menu-demo" mode="horizontal"
                     @select="handleSelect">

              <el-menu-item index="2-0" :to="{name:'user',params:{id:12}}">我的总结</el-menu-item>

              <el-submenu index="2">
                <template slot="title">切换用户</template>
                <el-menu-item index="2-1">User1</el-menu-item>
                <el-menu-item index="2-2">User2</el-menu-item>
                <el-menu-item index="2-3">User3</el-menu-item>
              </el-submenu>


              <el-submenu index="3" class="grid-user">
                <template slot="title">三生烟火</template>
                <router-link :to="{name:'user',params:{id:12}}">
                  <el-menu-item index="3-1">个人中心</el-menu-item>
                </router-link>
                <el-menu-item index="3-2">注销账户</el-menu-item>
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
    name: 'fbTopmenu',
    methods: {
      handleSelect: function (key, keyPath) {

      }
    }
  }
</script>

<style>

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

  .menu .grid-content .grid-user {
    float: right;
  }

</style>
