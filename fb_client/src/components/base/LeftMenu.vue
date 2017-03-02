<template>
  <div class="menu_left">
    <!-- 第2行 -->
    <el-row class="tac">
      <el-col :span="24">
        <el-menu  class="el-menu-vertical-demo">

          <router-link :to="{name:'doc_add'}">
            <el-menu-item index="4"><i class="el-icon-plus"></i>
              添加总结
            </el-menu-item>
          </router-link>

          <router-link :to="{name:'doc_manager'}">
            <el-menu-item index="5"><i class="el-icon-document"></i>
              总结管理
            </el-menu-item>
          </router-link>

          <!--<el-submenu index="6">-->

            <!--<template slot="title"><i class="el-icon-date"></i>总结存档</template>-->

            <!--<el-submenu index="6-1">-->
              <!--<template slot="title">2017</template>-->
              <!--<el-menu-item index="6-1-1" class="date_item">1月28日</el-menu-item>-->
              <!--<el-menu-item index="6-1-2" class="date_item">2月14日</el-menu-item>-->
            <!--</el-submenu>-->

            <!--<el-submenu index="6-2">-->
              <!--<template slot="title">2016</template>-->
              <!--<el-menu-item index="6-2-1" class="date_item">1月28日</el-menu-item>-->
              <!--<el-menu-item index="6-2-2" class="date_item">2月14日</el-menu-item>-->
            <!--</el-submenu>-->

          <!--</el-submenu>-->

          <!--<el-submenu index="7">-->
            <!--<template slot="title"><i class="el-icon-menu"></i>其他应用</template>-->

            <!--<el-menu-item-group title="待定">-->
              <!--<el-menu-item index="7-1">待定1</el-menu-item>-->
              <!--<el-menu-item index="7-2">待定2</el-menu-item>-->
            <!--</el-menu-item-group>-->

          <!--</el-submenu>-->

          <!--<el-menu-item index="8"><i class="el-icon-setting"></i>设置</el-menu-item>-->

        </el-menu>
      </el-col>
    </el-row>

    <div class="f_left">
      <fb_footer></fb_footer>
    </div>

  </div>
</template>

<script>
  import Footer from './Footer.vue'

  export default {
    name: 'fbLeftMenu',
    components: {
      'fb_footer': Footer
    }
  }
</script>

<style>

  a {
    text-decoration: none;
  }

  .menu_left {
    text-align: left;
  }

  .date_item {
    height: 30px;
  }

  .f_left {
    width: 16.7%;
    height: 40px;
    position: fixed;
    bottom: 0;
    text-align: center;
  }


</style>
