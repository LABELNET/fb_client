/**
* Created by yuan on 2/28/2017.
*/
<template>
  <div id="adddoc">
    <div id="ad_tool">

      <div class="tool_left">
        <el-breadcrumb class="tool_bread" separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>添加总结</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="tool_right">
        <el-button class="tool_right_save" @click="docSave" type="primary">保存</el-button>
      </div>
    </div>
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import _ from 'lodash'

  export default {
    name: 'addDoc',
    components: {
      marked
    },
    data: function () {
      return {
        input: '# input'
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, {sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300),
      docSave: function () {
        console.log(this.input)
//        let data = {
//          'cn_name': '小怪',
//          'en_name': 'SmallGui'
//        }
//        this.$http.user.userCreate(data, this.response)
        this.$http.doc.getMakeDocsList(this.response)
//        this.$http.userObj({id: 1}, this.response)
      },
      response: function ([code, data]) {
        console.log('code:' + code)
        console.log('data:')
        console.log(data)
      }
    }
  }
</script>

<style>

  #ad_tool .tool_left {
    float: left;
    height: 30px;
  }

  #ad_tool .tool_left .tool_bread {
    text-align: center;
    line-height: 50px;
    margin-left: 10px;
  }

  #ad_tool .tool_right {
    float: right;
    height: 30px;
  }

  #ad_tool .tool_right .tool_right_save {
    height: 35px;
    width: 80px;
    margin-right: 20px;
    text-align: center;
    margin-top: 10px;
  }

  #ad_tool {
    height: 50px;
  }

  #adddoc {
    height: 100%;
  }

  #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    overflow-y: visible;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
