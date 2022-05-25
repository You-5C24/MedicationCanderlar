<template>
  <div class="bg-ffffff rounded-2 p-24 flex-1">
    <div class="flex items-center">
      <span class="text-14 font-semibold">{{ props.info.label }}</span>
      <span class="ml-auto text-18 font-semibold">{{
        patientInfoDataMock[props.info.enName]
      }}</span>
    </div>
    <div class="flex items-center mt-8">
      <img class="w-24 h-24" :src="props.info.img" />
      <span class="ml-auto">
        <span class="text-12 color-999999">同比</span>
        <span
          v-if="patientInfoDataMock[`${props.info.enName}Percent`] < 0"
          class="text-12 color-00a000 ml-4"
          >{{ patientInfoDataMock[`${props.info.enName}Percent`] }}%</span
        >
        <span
          v-if="patientInfoDataMock[`${props.info.enName}Percent`] > 0"
          class="text-12 color-ff0000 ml-4"
          >+{{ patientInfoDataMock[`${props.info.enName}Percent`] }}%</span
        >
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'InfoCard'
};
</script>

<script setup lang="ts">
type IpatientInfoData = {
  severe: number;
  severePercent: number;
  all: number;
  allPercent: number;
  new: number;
  newPercent: number;
  followUp: number;
  followUpPercent: number;
};

type IpatientInfo = {
  label: string;
  enName: 'severe' | 'all' | 'new' | 'followUp';
  img: string;
};

const props = defineProps<{
  info: IpatientInfo;
}>();

const patientInfoDataMock: IpatientInfoData = {
  severe: 120,
  severePercent: -1.2,
  all: 8129,
  allPercent: 3.5,
  new: 1231,
  newPercent: -0.4,
  followUp: 48271,
  followUpPercent: -1.2
};
</script>

<style lang="scss" scoped></style>
