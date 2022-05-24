<template>
  <div class="flex-1 flex flex-col">
    <!-- Title -->
    <div class="font-semibold border-b-1 border-color-e1e4ee pb-16 mb-24">
      就诊详情
    </div>
    <!-- Content -->
    <div v-if="recordsDetails" class="flex-1 flex overflow-auto">
      <div class="flex-1 bg-ffffff rounded-1 overflow-auto p-16 flex flex-col">
        <div class="flex items-center">
          <span class="text-14 font-semibold">{{ recordsDetails.time }}</span>
          <span class="text-14 font-semibold ml-8">就诊</span>
          <div
            class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer ml-auto"
          >
            <ISymbol iconClass="icon-bianjisekuai" />
          </div>
        </div>
        <div class="mt-4">
          <span class="text-14 color-666666 font-semibold">看诊药师</span>
          <span class="text-14 font-semibold ml-8">{{
            recordsDetails.doctors.map((item) => item.name).join(',')
          }}</span>
        </div>
        <div class="mt-8">
          <span class="text-14 color-666666 font-semibold">诊断描述</span>
          <div class="text-14 mt-8 border-b-1 border-color-e1e4ee pb-16">
            {{ recordsDetails.describe }}
          </div>
        </div>
        <div class="flex-1 overflow-auto mt-8">
          <!-- 诊断 -->
          <div>
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
              ></div>
              <span class="text-14 font-semibold ml-8">诊断</span>
              <span class="text-12 color-666666 ml-8"
                >-{{ recordsDetails.diagnose.lastUpdate }}最后修改</span
              >
            </div>
            <div class="ml-24 mt-8 text-14">
              {{ recordsDetails.diagnose.info }}
            </div>
          </div>
          <!-- 病史 -->
          <div class="mt-24">
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
              ></div>
              <span class="text-14 font-semibold ml-8">病史</span>
              <span class="text-12 color-666666 ml-8"
                >-{{ recordsDetails.caseHistory.lastUpdate }}最后修改</span
              >
            </div>
            <div class="ml-24">
              <div
                v-for="item in caseHistoryList"
                :key="item.enName"
                class="mt-8"
              >
                <div class="flex items-center">
                  <div class="w-4 h-4 bg-e86f8a rounded-full"></div>
                  <span class="text-12 color-666666 ml-4">{{
                    item.label
                  }}</span>
                </div>

                <div class="text-14 mt-8">
                  {{ recordsDetails?.caseHistory[item.enName] }}
                </div>
              </div>
            </div>
          </div>
          <!-- 主诉 -->
          <div class="mt-24">
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
              ></div>
              <span class="text-14 font-semibold ml-8">主诉</span>
              <span class="text-12 color-666666 ml-8"
                >-{{ recordsDetails.mainSuit.lastUpdate }}最后修改</span
              >
            </div>
            <div class="ml-24 mt-8 text-14">
              {{ recordsDetails.mainSuit.info }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-ffffff ml-24 rounded-1 overflow-auto p-16">
        <!-- 药物治疗问题 -->
        <div>
          <div class="flex items-center">
            <div
              class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
            ></div>
            <span class="text-14 font-semibold ml-8">药物治疗问题</span>
            <span class="text-12 color-666666 ml-8"
              >-{{ recordsDetails.problem.lastUpdate }}最后修改</span
            >
          </div>
          <div class="ml-24 mt-8 text-14">
            {{ recordsDetails.problem.info }}
          </div>
        </div>
        <!-- 用药 -->
        <div class="mt-24">
          <div class="flex items-center">
            <div
              class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
            ></div>
            <span class="text-14 font-semibold ml-8">用药</span>
            <span class="text-12 color-666666 ml-8"
              >-{{ recordsDetails.medication.lastUpdate }}最后修改</span
            >
          </div>
          <div class="ml-24">
            <div class="mt-8 flex items-center">
              <div class="w-4 h-4 bg-e86f8a rounded-full"></div>
              <span class="text-12 color-666666 ml-4">当前用药</span>
            </div>
            <div class="text-14 mt-8">
              {{ recordsDetails.medication.currentMedication }}
            </div>
            <div class="mt-8 flex items-center">
              <div class="w-4 h-4 bg-e86f8a rounded-full"></div>
              <span class="text-12 color-666666 ml-4">处方及建议</span>
            </div>
            <div class="text-14 mt-8">
              {{ recordsDetails.medication.suggest }}
            </div>
          </div>
        </div>
        <!-- 总结 -->
        <div class="mt-24">
          <div class="flex items-center">
            <div
              class="w-12 h-12 rounded-full border-2 border-color-81d0cd"
            ></div>
            <span class="text-14 font-semibold ml-8">总结</span>
            <span class="text-12 color-666666 ml-8"
              >-{{ recordsDetails.summary.lastUpdate }}最后修改</span
            >
          </div>
          <div class="ml-24 mt-8 text-14">
            {{ recordsDetails.summary.info }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageDetails'
};
</script>

<script setup lang="ts">
import workbenchApi from '@/service/api/workbench';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IRecordDetails } from './types/patient-records';

type caseKeys = {
  family: string;
  surgery: string;
  past: string;
  allergic: string;
  adr: string;
};

type CaseHistory = {
  label: string;
  enName: keyof caseKeys;
};

const caseHistoryList: CaseHistory[] = [
  {
    label: '家族病史',
    enName: 'family'
  },
  {
    label: '手术史',
    enName: 'surgery'
  },
  {
    label: '既往病史',
    enName: 'past'
  },
  {
    label: '过敏史',
    enName: 'allergic'
  },
  {
    label: '药物不良反应',
    enName: 'adr'
  }
];

const route = useRoute();

const recordsDetails = ref<IRecordDetails | null>(null);
const getRecordDetails = (id: number) => {
  workbenchApi.getRecordDetails({ id }).then((res) => {
    recordsDetails.value = res.data;
  });
};

onMounted(() => {
  const id = route.query.id as unknown as number;
  getRecordDetails(id);
});
</script>

<style lang="scss" scoped></style>
