<template>
  <!-- 首页 -->
  <div>
    <div class="pro_container" @click="getClick">{{title}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  title = '你好a'
  getClick() {
    console.log(23)
  }
}
</script>

<style lang='scss' scoped>
</style>
