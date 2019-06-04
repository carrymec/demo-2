<template>

  <div class="block">

    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" router mode="horizontal">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" style="height: 500px">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-aside>
        <el-main>

          <div class="table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
            >
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="create_time"
                label="上架日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="商品名称"
                width="120">
              </el-table-column>
              <el-table-column
                prop="price"
                label="现价"
                width="120">
              </el-table-column>
              <el-table-column
                prop="old_price"
                label="原价"
                width="120">
              </el-table-column>
              <el-table-column
                prop="img"
                label="图片"
                sortable
                width="180">
                <template slot-scope="scope">
                  <img :src="scope.row.img" alt="" style="width: 50px;height: 50px">
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"
                    @click="login"
                  >编辑
                  </el-button>
                  <el-button
                    size="mini"
                    type="success"
                  >删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.pn"
              :page-sizes="[5, 10, 20, 40]"
              small
              layout="prev, pager, next"
              :total="total"
              :page-size="page.pageSize"
            >
            </el-pagination>
          </div>
        </el-main>
      </el-container>
      <router-view></router-view>
      <div>
        <clock :time="time"></clock>
      </div>
    </el-container>
  </div>

</template>
<script>
  // 时钟
  import Clock from 'vue-clock2'

  export default {
    components: {Clock},
    data () {
      return {
        time: '',
        options: {
          name: 'chen'
        },
        data: [],
        defaultProps: {
          children: 'childList',
          label: 'categoryName'
        },
        tableData: [],
        page: {
          pn: 1,
          pageSize: 5
        },
        user: {
          loginName: 'chenxiaogang',
          password: 'chen199637'
        },
        total: 0, // 数字处理为0,下面重新赋值
        multipleSelection: [],
        navList: [
          {name: '/HelloWorld', navItem: '发现项目'},
          {name: '/pro', navItem: '社区动态'}
        ]
      }
    },
    created: function () { // 初始化
      this.$api.get('category/categoryAll1', null, r => {
        if (r.status === 0) {
          this.data = r.data
        }
      })
      this.goodList()
    },
    computed: {
      activeIndex () {
        return this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data.categoryId)
      },
      handleSizeChange: function (size) {
        this.page.pageSize = size
        this.goodList()
      },
      handleCurrentChange: function (currentPage) {
        this.page.pn = currentPage
        this.goodList()
      },
      goodList () {
        this.$api.get('good/list', this.page, r => {
          if (r.status === 0) {
            this.tableData = r.data.list
            this.total = r.data.total
          }
        })
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      login () {
        this.$api.post('user/login ', this.user, function (re) {
          console.log(re)
        })
      }

    },
    mounted () {
      this.getConfigJson();
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
