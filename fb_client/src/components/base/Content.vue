<template>
  <div class="fb_content">
    <el-card class="box-card">
      <div v-for="o in 4" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'fbContent'
  }
</script>

<style>
  .fb_content{
    padding: 10px;
  }
</style>
