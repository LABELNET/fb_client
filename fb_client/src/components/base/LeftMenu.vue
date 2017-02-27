<template>
  <div>
    <!-- 第2行 -->
    <el-row>
      <el-col :span="4">
        <div class="menu_left">

        </div>
      </el-col>
      <el-col :span="20">
        <div class="content">
          <p> 登陆后：默认显示 编辑总结页面 content <br><br> 未登陆：默认显示欢迎界面，并显示登陆</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'leftMenu'
  }
</script>

<style>
  .menu_left {
    height: 1000px;
    background-color: whitesmoke;
    margin-top: 60px;
  }

  .content {
    height: 1200px;
    margin-top: 60px;
    padding-left: 10px;
    background-color: white;
  }
</style>
