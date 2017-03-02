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
        <div class="grid-content ">
          <el-select class="right_select" @change="weekChange" v-model="params.week" placeholder="选择周数">
            <el-option
              v-for="item in 28"
              :label="(item-1)===0?'All week':'第'+(item-1)+'周'"
              :value="(item-1)===0?null:item-1"
              :key="item">
            </el-option>
          </el-select>
          <el-select class="right_select" @change="userChange" v-model="params.userId" placeholder="选择用户">
            <el-option
              v-for="user in users"
              :label="user.username"
              :value="user.id"
              :key="user.id">
            </el-option>
          </el-select>
        </div>
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
              width="100">
            </el-table-column>
            <el-table-column
              property="week_num"
              label="周数"
              width="120"
              :formatter="weekFormatter">
            </el-table-column>
            <el-table-column
              property="user.username"
              label="姓名"
              width="200">
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
                <el-button type="text" size="small" @click="handleClickEdit(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="block_page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="params.page"
            :page-size="10"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
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
        tableData: [],
        total: 0,
        users: [],
        params: {
          page: this.currentPage,
          week: null,
          userId: null,
          year: null
        }
      }
    },
    watch: {
      params: 'doLoadData'
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
          this.total = data.count
          if (this.tableData.length === 0) {
            this.showMsg(['info', '遗憾,没有找到数据'])
          }
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
      userResponse: function ([code, data]) {
        if (code === 200) {
          this.users = data
        } else {
          this.showMsg(['error', `请求失败！ status : ${code}`])
        }
      },
      handleClickLook: function (row) {
        this.$router.push({name: 'doc_detail', params: {id: row.id}})
      },
      handleClickEdit: function (row) {
        this.$router.push({name: 'doc_edit', params: {id: row.id}})
      },
      handleCurrentChange: function (val) {
        this.params.page = val
        this.doLoadData()
      },
      doLoadData: function () {
        this.$http.doc.filterMakeDoc(this.params, this.dataResponse)
        this.$http.user.userList(this.userResponse)
      },
      weekChange: function (val) {
        this.doLoadData()
      },
      userChange: function (val) {
        this.doLoadData()
      }
    },
    created: function () {
      this.doLoadData()
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

  .grid-content .right_select {
    width: 150px;
    float: right;
    margin-right: 10px;
  }

  .grid-content .grid_bread {
    height: 100%;
    text-align: center;
    line-height: 50px;
  }

  .block_page {
    float: right;
    margin-top: 10px;
  }
</style>
