<template>
  <section>
    <div class="flex mt-40">
      <!-- Use Items -->
      <div v-for="item in useItems" :key="item.label">
        <UseModule :item="item" />
      </div>
    </div>
    <!-- Patient Title -->
    <div class="flex items-center my-24">
      <span class="text-18 font-semibold color-35405a">患者列表</span>
      <el-input
        v-model="patient"
        class="w-220 ml-auto"
        placeholder="请输入患者姓名"
        :prefix-icon="Search"
      ></el-input>
      <div class="rounded-1 bg-f2f2ff p-4 ml-16 flex show-tag">
        <div
          v-for="showTag in showTags"
          :key="showTag.type"
          class="w-48 h-24 rounded-1 flex items-center justify-center cursor-pointer"
          :class="{ 'bg-ffffff': activeTag === showTag.type }"
          @click="changeTag(showTag.type)"
        >
          <ISymbol
            :iconClass="showTag.icon"
            @handleClick="changeTag(showTag.type)"
          />
        </div>
      </div>
    </div>
    <!-- Patient Card -->
    <div v-show="activeTag === 'card' && patientList" class="flex flex-wrap">
      <PatientCard
        v-for="patient in patientList"
        :key="patient.id"
        class="mr-24"
        :info="patient"
      />
    </div>
    <!-- Patient List -->
    <PatientList v-show="activeTag === 'list'" :patientList="patientList" />
  </section>
</template>

<script lang="ts">
import UseModule from '@/components/use-module.vue';
import ISymbol from '@/components/ISymbol.vue';
import PatientCard from './patient-card.vue';
import PatientList from './patient-list.vue';
export default {
  name: 'PageWorkbench',
  components: {
    UseModule,
    ISymbol,
    PatientCard,
    PatientList
  }
};
</script>

<script setup lang="ts">
import Medicate from '@/assets/images/medicate.png';
import Doctor from '@/assets/images/doctor.png';
import Office from '@/assets/images/office.png';
import { onMounted, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import wokbenchApi from '@/service/api/workbench';
import { IPatientInfo } from './types/workbench';
import { randomNum } from '@/util';

const patientColors = ['acddee', '708ed7', 'ef5d84'];

const useItems = [
  {
    label: '用药诊疗',
    icon: Medicate,
    router: '',
    sideBarKey: ''
  },
  {
    label: '会诊室',
    icon: Office,
    router: '',
    sideBarKey: ''
  },
  {
    label: '今日出诊',
    icon: Doctor,
    router: '',
    sideBarKey: ''
  }
];

const showTags = [
  {
    icon: 'icon-fenlei',
    type: 'card'
  },
  {
    icon: 'icon-liebiao',
    type: 'list'
  }
];

let activeTag = ref<string>('card');
const changeTag = (val: string) => {
  activeTag.value = val;
};
// 患者姓名查询
let patient = ref<string>('');

let patientList = ref<IPatientInfo[]>([]);
const getPatientList = async () => {
  wokbenchApi.getPatientList().then((res) => {
    res.data.forEach((item: IPatientInfo) => {
      item.randomColor = patientColors[randomNum(0, 2)];
    });
    patientList.value = res.data;
  });
};

onMounted(() => {
  getPatientList();
});
</script>

<style lang="scss" scoped>
.show-tag {
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
}
</style>
