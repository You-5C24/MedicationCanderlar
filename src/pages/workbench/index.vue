<template>
  <section>
    <div class="flex mt-40">
      <!-- Use Items -->
      <div v-for="item in useItems" :key="item.label">
        <UseModule :item="item" />
      </div>
    </div>
    <!-- Patient Title -->
    <div class="mt-24 flex items-center">
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
    <div class="flex flex-wrap mt-24">
      <PatientCard />
    </div>
  </section>
</template>

<script lang="ts">
import UseModule from '@/components/use-module.vue';
import ISymbol from '@/components/ISymbol.vue';
import PatientCard from './patient-card.vue';
export default {
  name: 'PageWorkbench',
  components: {
    UseModule,
    ISymbol,
    PatientCard
  }
};
</script>

<script setup lang="ts">
import Medicate from '@/assets/images/medicate.png';
import Doctor from '@/assets/images/doctor.png';
import Office from '@/assets/images/office.png';
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

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

let patient = ref<string>('');
</script>

<style lang="scss" scoped>
.show-tag {
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
}
</style>
