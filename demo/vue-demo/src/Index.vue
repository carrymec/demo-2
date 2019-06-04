<template>
  <div id="index">
    <div class="block">
      <el-container style="height: 100%">
        <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
          <el-row id="logo">
            <img :src="imgUrl" height="100">
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">
                <div class="el-icon-message" style="margin-right: 20px" @click="page"></div>
                首页
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">设备状态趋势</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">运检基础工作</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple">设备状态评价</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple" id="time">time</div>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px;height: 100px">
            <div style="height: 50px;width: 100%">
              <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>王小虎</span>
            </div>
            <div style="height: 50px;width: 100%">
              <el-select v-model="value5" multiple placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-select
                v-model="value11"
                multiple
                collapse-tags
                style="margin-left: 20px;"
                placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select
                v-model="value12"
                multiple
                collapse-tags
                style="margin-left: 20px;"
                placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-header>
          <el-main>
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in imgs" :key="index">
                <img :src="item.name" :title="item.detail">
              </el-carousel-item>
            </el-carousel>
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText" @click="send">
            </el-input>
            <button @click="send">发送AJAX请求</button>
            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree2">
            </el-tree>
          </el-main>
        </el-container>
      </el-container>

    </div>
  </div>
</template>

<script>
  import img from "./assets/power.png";

  export default {

    data() {
      return {
        imgUrl: img,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        value11: [],
        value12: [],
        imgs: [{
          name: img,
          detail:'hello'
        }, {
            name: img,
          detail:'hello1'
          }],
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }

    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      page: function () {
        alert("hello");
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
    send(){
      this.$axios({
        method:'get',
        url:'./assets/data.json'
      }).then(function(resp){
        console.log(resp.data);
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.data);
      });
    }
    }
  };
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
    height: 50px;
    line-height: 50px;
  }

  #logo {
    height: 100px;

  }

  #time {
    padding-left: 20px;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

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

  .block {
    height: 600px;
  }

  .header {
    height: 100px;
    line-height: 100px;
  }
</style>
