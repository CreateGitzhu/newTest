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
import { mount } from '@vue/test-utils';

@Component
export default class Home extends Vue {
  title = '你好a'
  getClick(){
    alert('你好')
  }

}
</script>

<style lang='scss' scoped>
</style>
