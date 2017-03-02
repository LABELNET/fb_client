/**
* Created by yuan on 2/28/2017.
*/
<template>
  <div>

    <el-row>
      <el-col :span="4">
        <div class="grid-content ">
          <el-breadcrumb class="grid_bread" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>总结管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ">
          <el-button type="primary" icon="edit" @click="doWrite"></el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div>
          <el-table
            border
            :data="tableData"
            highlight-current-row
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="week_num"
              label="周数"
              width="120"
              :formatter="weekFormatter">
            </el-table-column>
            <el-table-column
              property="user_name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              property="date"
              label="日期"
              :formatter="dateFormatter"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="100">
              <template scope="scope">
                <el-button @click="handleClickLook(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'DocManager',
    data: function () {
      return {
        tableData: []
      }
    },
    methods: {
      doWrite: function () {
        this.$router.push({name: 'doc_add'})
      },
      weekFormatter: function (row, column) {
        return '第' + row.week_num + '周'
      },
      dateFormatter: function (row, column) {
        let d = new Date(row.date)
        return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + (('0' + d.getDate()).slice(-2))
      },
      dataResponse: function ([code, data]) {
        if (code === 200) {
          this.tableData = data.results
        } else {
          this.showMsg(['error', `请求失败！ status : ${code}`])
        }
      },
      showMsg: function ([type, msg]) {
        this.$message({
          message: msg,
          type: type
        })
      },
      handleClickLook: function (row) {
        this.$router.push({name: 'doc_detail', params: {id: row.id}})
      }
    },
    created: function () {
      this.$http.doc.getMakeDocsList(this.dataResponse)
    }
  }
</script>

<style>

  .grid-content {
    border-radius: 0px;
    min-height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .grid-content .grid_bread {
    height: 100%;
    text-align: center;
    line-height: 50px;
  }
</style>
