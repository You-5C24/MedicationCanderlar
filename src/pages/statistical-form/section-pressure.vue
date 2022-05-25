<template>
  <div>
    <div class="text-14 font-semibold">科室压力</div>
    <div
      v-for="item in sections"
      :key="item.enName"
      class="mt-24 flex items-center"
    >
      <img class="h-24 w-24" :src="item.img" />
      <span class="text-14 ml-8">{{ item.label }}</span>
      <span class="ml-auto text-14 color-9cd9db">20%</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SectionPressure'
};
</script>

<script setup lang="ts">
import clinic from '@/assets/images/clinic.png';
import cardiovascular from '@/assets/images/cardiovascular.png';
import cardiothoracic from '@/assets/images/cardiothoracic.png';
import stomatology from '@/assets/images/stomatology.png';
import gastroenterology from '@/assets/images/gastroenterology.png';

const sections = [
  {
    label: '全科门诊',
    enName: 'clinic',
    img: clinic
  },
  {
    label: '心血管内科',
    enName: 'cardiovascular',
    img: cardiovascular
  },
  {
    label: '心胸外科',
    enName: 'cardiothoracic',
    img: cardiothoracic
  },
  {
    label: '口腔科',
    enName: 'stomatology',
    img: stomatology
  },
  {
    label: '消化内科',
    enName: 'gastroenterology',
    img: gastroenterology
  }
];
</script>

<style lang="scss" scoped></style>
