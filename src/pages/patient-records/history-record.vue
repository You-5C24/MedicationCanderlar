<template>
  <div v-if="records" class="flex-1 flex">
    <div class="flex-1 flex">
      <!-- Medical Record -->
      <div class="flex-1 mr-24">
        <div class="flex items-center border-b-1 border-color-e1e4ee pb-8">
          <span class="text-14 font-semibold">就诊记录</span>
          <div
            class="flex items-center justify-content ml-auto p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
          >
            <ISymbol iconClass="icon-jiahao" />
          </div>
        </div>
        <!-- Card -->
        <div
          v-for="item in records.medicalRecord"
          :key="item.id"
          class="mt-16 p-12 bg-ffffff cursor-pointer rounded-2"
          @click="getDetails(item.id)"
        >
          <div class="flex items-center">
            <span class="text-14 color-708ed7">{{ item.type }}</span>
            <span class="text-14 color-a4a5a9 ml-8">{{ item.time }}</span>
            <ISymbol
              class="ml-auto"
              iconClass="icon-wenjian"
              iconHeight="24"
              iconWidth="24"
              @handleClick="getDetails(item.id)"
            />
          </div>
          <div class="text-14 mt-16">{{ item.info }}</div>
        </div>
      </div>
      <!-- Checkout -->
      <div class="flex-1 mr-24">
        <div class="flex items-center border-b-1 border-color-e1e4ee pb-8">
          <span class="text-14 font-semibold">检验/检查</span>
          <div
            class="flex items-center justify-content ml-auto p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
          >
            <ISymbol iconClass="icon-jiahao" />
          </div>
        </div>
        <!-- Card -->
        <div
          v-for="item in records.checkout"
          :key="item.id"
          class="mt-16 p-12 bg-dfe5f8 flex items-center cursor-pointer rounded-2"
        >
          <div class="flex flex-col">
            <span class="text-14">{{ item.title }}</span>
            <span class="text-14 color-a4a5a9">{{ item.time }}</span>
          </div>
          <ISymbol
            class="ml-auto"
            iconClass="icon-wenjian"
            iconHeight="24"
            iconWidth="24"
          />
        </div>
      </div>
      <!-- Follow-up Record -->
      <div class="flex-1 mr-24">
        <div class="flex items-center border-b-1 border-color-e1e4ee pb-8">
          <span class="text-14 font-semibold">随访记录</span>
          <div
            class="flex items-center justify-content ml-auto p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
          >
            <ISymbol iconClass="icon-jiahao" />
          </div>
        </div>
        <!-- Card -->
        <div
          v-for="item in records.followupRecord"
          :key="item.id"
          class="mt-16 p-12 bg-ffffff cursor-pointer rounded-2"
        >
          <div class="flex items-center">
            <span class="text-14">{{ item.time }}</span>
            <ISymbol
              class="ml-auto"
              iconClass="icon-wenjian"
              iconHeight="24"
              iconWidth="24"
            />
          </div>
          <div>
            <span class="text-14 color-a4a5a9">{{ item.doctorDept }}</span>
            <span class="text-14 ml-8">{{ item.doctor }}</span>
          </div>
          <div class="text-14 mt-16">
            {{ item.info }}
          </div>
        </div>
      </div>
    </div>
    <!-- Detection Index -->
    <div class="flex-0-140">
      <div class="flex items-center border-b-1 border-color-e1e4ee pb-8">
        <span class="text-14 font-semibold">检测指标</span>
        <div
          class="flex items-center justify-content ml-auto p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
        >
          <ISymbol iconClass="icon-jiahao" />
        </div>
      </div>
      <!-- Card -->
      <div
        v-for="item in records.detectionIndex"
        :key="item.id"
        class="mt-16 p-12 bg-ffffff flex items-center cursor-pointer rounded-2"
        @click="getDetectionindex(item.id)"
      >
        <div class="flex flex-col">
          <span class="text-14">{{ item.year }}</span>
          <span class="text-14">{{ item.time }}</span>
        </div>
        <ISymbol
          class="ml-auto"
          iconClass="icon-wenjian"
          iconHeight="24"
          iconWidth="24"
          @handleClick="getDetectionindex(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HistoryRecord'
};
</script>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import workbenchApi from '@/service/api/workbench';
import { onMounted, ref } from 'vue';
import { IPatientRecords } from './types/patient-records';

const router = useRouter();
const route = useRoute();

const records = ref<IPatientRecords | null>(null);
const getPatientRecords = (id: number) => {
  workbenchApi.getPatientRecords({ id }).then((res) => {
    records.value = res.data;
  });
};

const getDetails = (id: number) => {
  router.push(`/patientRecords/details?id=${id}`);
};

const getDetectionindex = (id: number) => {
  router.push(`/patientRecords/detectionIndex?id=${id}`);
};

onMounted(() => {
  const id = route.query.id as unknown as number;
  getPatientRecords(id);
});
</script>

<style lang="scss" scoped></style>
