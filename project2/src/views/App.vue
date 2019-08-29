<template>
  <!-- 总入口 -->
  <div id="app" class="app">
    <div class="wrap">
      <div class="min">
        <!-- 页面入口 -->
        <router-view class="container"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../assets/css/reset.scss';
@import '../assets/css/common.scss';
</style>
