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

        <el-select class="right_select" v-model="docObj.week_num" placeholder="请选择weekNum">
          <el-option
            v-for="item in 27"
            :label="'第'+item+'周'"
            :value="item">
          </el-option>
        </el-select>

        <el-select class="right_select" v-model="docObj.user_name" placeholder="请选择Who">
          <el-option
            v-for="item of options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-button class="tool_right_save" @click="docSave" type="primary">提交</el-button>
      </div>
    </div>
    <div id="editor">
      <textarea :value="docObj.content" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import _ from 'lodash'
  import DV from '../common/defaultValue'

  export default {
    name: 'addDoc',
    components: {
      marked
    },
    data: function () {
      return {
        docObj: {
          'content': DV.MAKEDOC_VALUE,
          'status': 0,
          'week_num': 1,
          'user_name': 'who are you'
        },
        options: DV.DEFAULT_USER
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.docObj.content, {sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.docObj.content = e.target.value
      }, 300),
      docSave: function () {
        this.$http.doc.createMakeDoc(this.docObj, this.response)
      },
      response: function ([code, data]) {
        if (code === 201) {
          // 创建成功
          this.showMsg(['success', 'FourBox 提交成功 !'])
        } else {
          this.showMsg(['error', `出错了! status : ${code}`])
        }
      },
      showMsg: function ([type, msg]) {
        this.$message({
          message: msg,
          type: type
        })
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

  #ad_tool .tool_right .right_select {
    width: 150px;
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
