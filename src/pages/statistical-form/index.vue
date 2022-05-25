<template>
  <section class="flex-c">
    <div>
      <span class="text-18 font-semibold color-35405a">统计数据看板</span>
    </div>
    <!-- 患者数据 -->
    <div class="mt-24 grid grid-cols-4" style="grid-gap: 24px">
      <InfoCard v-for="info in patientInfos" :key="info.enName" :info="info" />
    </div>
    <!-- 看诊数量 科室压力 -->
    <div class="mt-24 grid grid-cols-4 h-310" style="grid-gap: 24px">
      <div class="bg-ffffff rounded-2 flex" style="grid-column: 1 / 4">
        <SeeingChart />
      </div>
      <div class="bg-ffffff rounded-2 p-24">
        <SectionPressure />
      </div>
    </div>
    <!-- 患者年龄分布 患者性别比例 -->
    <div class="mt-24 grid grid-cols-2 h-280" style="grid-gap: 24px">
      <div class="bg-ffffff rounded-2 p-24"></div>
      <div class="bg-ffffff rounded-2 p-24"></div>
    </div>
  </section>
</template>

<script lang="ts">
import InfoCard from './info-card.vue';
import SectionPressure from './section-pressure.vue';
import SeeingChart from './seeing-chart.vue';
export default {
  name: 'StatisticalForm',
  components: {
    InfoCard,
    SectionPressure,
    SeeingChart
  }
};
</script>

<script setup lang="ts">
import severeCase from '@/assets/images/severeCase.png';
import allPatient from '@/assets/images/allPatient.png';
import newPatient from '@/assets/images/newPatient.png';
import visit from '@/assets/images/visit.png';

type IpatientInfo = {
  label: string;
  enName: 'severe' | 'all' | 'new' | 'followUp';
  img: string;
};

const patientInfos: IpatientInfo[] = [
  {
    label: '重症患者',
    enName: 'severe',
    img: severeCase
  },
  {
    label: '全部患者',
    enName: 'all',
    img: allPatient
  },
  {
    label: '新增患者',
    enName: 'new',
    img: newPatient
  },
  {
    label: '医生随访',
    enName: 'followUp',
    img: visit
  }
];
</script>

<style lang="scss" scoped></style>
