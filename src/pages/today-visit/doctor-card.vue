<template>
  <div class="p-8 rounded-1 shadow bg-ffffff w-180">
    <div class="flex">
      <img class="w-54 h-54" :src="Default" />
      <ISymbol class="ml-auto" iconClass="icon-gengduo" />
    </div>
    <div class="mt-16">
      <span class="text-14">家元</span>
      <span class="ml-16 text-14 color-708ed7">心血管内科</span>
    </div>
    <div class="mt-8 flex items-center">
      <ISymbol iconClass="icon-tianmaociribida" />
      <span class="ml-8 text-14">19238293</span>
    </div>
    <div class="mt-8 flex items-center">
      <ISymbol iconClass="icon-dianhua2" />
      <span class="ml-8 text-14">13646103312</span>
    </div>
    <el-button class="mt-16 h-28 bg-e4eafc color-919fc8 text-12 px-20 py-8"
      >出诊</el-button
    >
  </div>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
export default {
  name: 'DoctorCard',
  componets: {
    ISymbol
  }
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
</script>

<style lang="scss" scoped></style>
