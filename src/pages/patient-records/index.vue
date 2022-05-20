<template>
  <section>
    <!-- Top Title -->
    <div class="flex items-center mb-24">
      <div
        class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
        @click="router.push('/workbench')"
      >
        <ISymbol
          iconClass="icon-xiangzuojiantou"
          @handleClick="router.push('/workbench')"
        />
      </div>
      <span class="text-18 font-semibold color-35405a">患者档案</span>
    </div>
    <!-- Personal Information -->
    <div class="mt-24 flex">
      <div
        class="border-3 border-color-afbdf4 w-48 h-48 rounded-3 text-28 text-center leading-48 font-semibold"
      >
        Z
      </div>
      <div class="ml-16">
        <div class="text-24 font-semibold">张治中</div>
        <div class="flex items-center mt-6">
          <ISymbol iconClass="icon-tianmaociribida" />
          <span class="text-14 ml-4">19238293</span>
          <ISymbol class="ml-16" iconClass="icon-dianhua2" />
          <span class="text-14 ml-4">13928383828</span>
        </div>
      </div>
      <el-button class="self-end ml-24 h-28 bg-e4eafc color-919fc8 text-12"
        >编辑档案</el-button
      >
      <el-button class="self-end ml-24 h-28 bg-e4eafc color-919fc8 text-12"
        >看诊</el-button
      >
      <div class="ml-auto flex">
        <div class="mr-16">
          <div class="text-16 font-semibold">赵亚麟</div>
          <div class="text-12 color-666666 mt-4">主治医师</div>
        </div>
        <img class="w-48 h-48" :src="Default" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
export default {
  name: 'PatientRecords',
  components: {
    ISymbol
  }
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped></style>
