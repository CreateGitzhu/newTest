<template>
  <!-- 总入口 -->
  <div id="app" class="app">
    <Header></Header>
    <div class="wrap">
      <div class="min">
        <!-- 页面入口 -->
        <router-view class="container"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import Header from '@/components/public/Header.vue'
import Footer from '@/components/public/Footer.vue'

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '../assets/css/reset.scss';
@import '../assets/css/common.scss';
</style>
