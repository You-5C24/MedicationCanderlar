<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  font-family: 'Microsoft YaHei', PingFangSC-Regular, 'PingFang SC';
  width: 100%;
  margin: 0;
  > section {
    height: 100%;
    width: 100%;
  }
}
</style>
