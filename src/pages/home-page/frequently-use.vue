<template>
  <div>
    <!-- Title -->
    <span class="text-18 font-semibold color-35405a">我的常用</span>
    <!-- Frequently use items -->
    <div class="mt-48 flex flex-wrap">
      <div
        v-for="frequentlyUse in frequentlyUses"
        :key="frequentlyUse.label"
        class="mr-24 last--m-0"
      >
        <UseModule :item="frequentlyUse" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UseModule from '@/components/use-module.vue';
export default {
  name: 'FrequentlyUse',
  components: {
    UseModule
  }
};
</script>

<script setup lang="ts">
import { IFrequentlyUse } from './types/frequently-use';
import Setting from '@/assets/images/setting.png';
import Doctor from '@/assets/images/doctor.png';
import Medicate from '@/assets/images/medicate.png';
import Office from '@/assets/images/office.png';
import Patient from '@/assets/images/patient.png';
import Role from '@/assets/images/role.png';

const frequentlyUses: IFrequentlyUse[] = [
  {
    label: '用药诊疗',
    icon: Medicate,
    router: '',
    sideBarKey: ''
  },
  {
    label: '患者列表',
    icon: Patient,
    router: '',
    sideBarKey: ''
  },
  {
    label: '今日出诊',
    icon: Doctor,
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
    label: '角色管理',
    icon: Role,
    router: '',
    sideBarKey: ''
  },
  {
    label: '系统管理',
    icon: Setting,
    router: '/systemManagement',
    sideBarKey: 'systemManagement'
  }
];
</script>

<style lang="scss" scoped></style>
