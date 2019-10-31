<template>
  <!-- 首页 -->
  <div>
    <div class="pro_container" @click="getClick">{{title}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { axiosClient } from '../../utils/request'
// import { mount } from '@vue/test-utils';

@Component
export default class Home extends Vue {
  title = '你好a'
  created() {
    if (!this.$store.state.home.isLogin) {
      console.log(12323)
    }
  }
  // mounted
  mounted() {}
  // methods
  getClick() {
    console.log(this.$store.state.home)
  }
}
</script>

<style lang='scss' scoped>
.pro_container {
  border: 1px solid red;
}
</style>
