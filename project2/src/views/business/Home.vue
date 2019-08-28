<template>
  <!-- 首页 -->
  <div>
    <div class="pro_container">{{title}}</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  title = '你好a'
}
</script>

<style lang="scss" scoped>
</style>
