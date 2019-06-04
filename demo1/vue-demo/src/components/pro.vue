<template>
  <div class="">
    这是canBack页面
    <div @click='go'>点我跳转</div>
    <div @click='back'>点我返回</div>
  </div>
</template>

<script>


  // 传递给子组件的值
  export default {
    data () {
      return {}
    },
    methods: {
      go () {
        this.$router.push({name: 'index'})
      },
      back () {
        history.go(-1)
      }
    }
  }
</script>
<style>

</style>
