<template>
  <section class="flex">
    <!-- Left Info -->
    <div class="flex-1 mr-24">
      <!-- Top Operate -->
      <div class="flex items-center">
        <div
          class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
          @click="router.push('/workbench')"
        >
          <ISymbol
            iconClass="icon-xiangzuojiantou"
            @handleClick="router.push('/workbench')"
          />
        </div>
        <span class="text-16">用药诊疗</span>
        <div
          class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-auto cursor-pointer"
        >
          <ISymbol iconClass="icon-lajixiang" />
        </div>
        <el-button class="h-28 bg-708ED7 color-ffffff text-12 py-8 px-20"
          >提交</el-button
        >
      </div>
      <!-- Main Info -->
      <div class="flex mt-24">
        <!-- Main Left Info -->
        <div class="w-400">
          <BaseInfo />
          <DrugContent class="mt-24" />
        </div>
        <!-- Main Right Info -->
        <div class="w-400 ml-24">
          <PastHistory />
          <MedicationProblems class="mt-24" />
        </div>
      </div>
    </div>
    <!-- Right History -->
    <div class="flex-1 rounded-1 bg-ffffff"></div>
  </section>
</template>

<script lang="ts">
import BaseInfo from './base-info.vue';
import PastHistory from './past-history.vue';
import DrugContent from './drug-content.vue';
import MedicationProblems from './medication-problems.vue';
export default {
  name: 'MedicalDiagnosis',
  components: {
    BaseInfo,
    PastHistory,
    DrugContent,
    MedicationProblems
  }
};
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped></style>
