<template>
  <div id="site">

    <div id="top">

      <!-- 第1行 -->
      <menu-top></menu-top>

    </div>
    <div id="middle">
      <div id="left">
        <!-- 第2行 left-->
        <menu-left class="left"></menu-left>
      </div>
      <div class="content">
        <!-- 第2行 right ： content area-->
        <fb_content></fb_content>
        <!--<router-view></router-view>-->
      </div>
    </div>
    <div id="footer">
      <!-- 第3行-->
      <div id="footer_left">
      </div>
      <div id="footer_right">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import LeftMenu from './base/LeftMenu.vue'
  import TopMenu from './base/TopMenu.vue'
  import Content from './base/Content.vue'
  import AddDoc from './doc/AddDoc.vue'

  export default {
    name: 'index',
    components: {
      'menu-left': LeftMenu,
      'menu-top': TopMenu,
      'fb_content': Content,
      'fb_adddoc': AddDoc
    }
  }
</script>

<style>

  #site {
    height: 100%;
  }

  #top {
    height: 60px;
    width: 100%;
    position: fixed;
    margin: 0 auto;
    z-index: 1;
  }

  #middle {
    height: 100%;
  }

  #middle #left {
    background-color: whitesmoke;
    width: 16.7%;
    height: 100%;
    float: left;
    position: fixed;
    margin-top: 60px;
    overflow-y: auto;
  }

  #middle .content {
    background-color: white;
    width: 83.3%;
    height: 100%;
    margin-top: 60px;
    float: right;
  }

  #footer {
    clear: both;
    height: 30px;
    width: 100%;
    z-index: 10;
  }

  #footer #footer_left {
    width: 16.7%;
    height: 100%;
  }

  #footer #footer_right {
    height: 100%;
    float: right;
  }

</style>
