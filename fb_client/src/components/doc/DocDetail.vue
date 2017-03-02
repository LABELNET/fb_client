/**
* Created by yuan on 3/1/2017.
*/
<template>
  <div>
    <el-row>
      <el-col :span="16">
        <div class="grid-content ">
          <el-breadcrumb class="grid_bread" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{markDoc.user_name}} 's weekly summary</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="8">
        <p class="doc_info"><i class="el-icon-time"></i> 第{{markDoc.week_num}}周 <i class="el-icon-date"></i> Date:
          {{dateFormatter(markDoc.date)}}</p>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="doc_content" v-html="compiledMarkdown"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import marked from 'marked'

  export default {
    name: 'DocDetail',
    data: function () {
      return {
        markDoc: {}
      }
    },
    created: function () {
      let id = this.$route.params.id
      this.$http.doc.getMakeDocObj({id: id}, this.response)
    },
    methods: {
      response: function ([code, data]) {
        console.log(data)
        if (code === 200) {
          this.markDoc = data
        } else {
          this.showMsg(['error', `network error : status ${code}`])
        }
      },
      showMsg: function ([type, msg]) {
        this.$message({
          message: msg,
          type: type
        })
      },
      dateFormatter: function (date) {
        let d = new Date(date)
        return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + (('0' + d.getDate()).slice(-2))
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.markDoc.content, {sanitize: true})
      }
    }
  }
</script>

<style>
  .doc_info {
    color: black;
    font-size: 16px;
  }
  .doc_content{
    width: 90%;
    margin: 0 auto;
  }
</style>

