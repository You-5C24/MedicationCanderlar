<template>
  <div class="flex-1 flex flex-col">
    <!-- Title -->
    <div class="font-semibold border-b-1 border-color-e1e4ee pb-16 mb-24">
      就诊详情
    </div>
    <!-- Content -->
    <div class="flex-1 flex">
      <div class="flex-1 bg-ffffff rounded-1 overflow-auto p-16">left</div>
      <div class="flex-1 bg-ffffff ml-24 rounded-1 overflow-auto p-16">
        right
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageDetails'
};
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
