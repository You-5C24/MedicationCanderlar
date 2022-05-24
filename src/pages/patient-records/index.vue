<template>
  <section class="flex flex-col">
    <!-- Top Title -->
    <div class="flex items-center mb-24">
      <div
        class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
        @click="router.go(-1)"
      >
        <ISymbol
          iconClass="icon-xiangzuojiantou"
          @handleClick="router.go(-1)"
        />
      </div>
      <span class="text-18 font-semibold color-35405a">患者档案</span>
    </div>
    <!-- Personal Information -->
    <div class="my-24 flex">
      <div
        class="border-3 border-color-afbdf4 w-48 h-48 rounded-3 text-28 text-center leading-48 font-semibold"
      >
        {{ baseInfo.firstName }}
      </div>
      <div class="ml-16">
        <div class="text-24 font-semibold">{{ baseInfo.name }}</div>
        <div class="flex items-center mt-6">
          <ISymbol iconClass="icon-tianmaociribida" />
          <span class="text-14 ml-4">{{ baseInfo.id }}</span>
          <ISymbol class="ml-16" iconClass="icon-dianhua2" />
          <span class="text-14 ml-4">{{ baseInfo.tel }}</span>
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
          <div class="text-16 font-semibold">{{ baseInfo.doctor }}</div>
          <div class="text-12 color-666666 mt-4">{{ baseInfo.doctorDept }}</div>
        </div>
        <img class="w-48 h-48" :src="Default" />
      </div>
    </div>
    <div class="flex-1 flex overflow-auto">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'PatientRecords'
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { useRoute, useRouter } from 'vue-router';
import workbenchApi from '@/service/api/workbench';
import { onMounted, ref } from 'vue';
import { IBaseInfo } from './types/patient-records';

const router = useRouter();
const route = useRoute();

let baseInfo = ref<IBaseInfo>({});
const getPatientBaseInfo = (id: number) => {
  workbenchApi.getPatientBaseInfo({ id }).then((res) => {
    baseInfo.value = res.data;
  });
};

onMounted(() => {
  const id = route.query.id as unknown as number;
  getPatientBaseInfo(id);
});
</script>

<style lang="scss" scoped></style>
