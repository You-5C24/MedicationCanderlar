<template>
  <div class="p-8 rounded-1 shadow bg-ffffff w-180">
    <div class="flex">
      <div
        class="w-54 h-54 rounded-full"
        :class="{ ' profile-photo': props.visit.isVisit }"
      >
        <img class="w-54 h-54" :src="Default" />
      </div>
      <ISymbol class="ml-auto" iconClass="icon-gengduo" />
    </div>
    <div class="mt-16">
      <span class="text-14">{{ props.visit.name }}</span>
      <span class="ml-16 text-14 color-708ed7">{{
        props.visit.department
      }}</span>
    </div>
    <div class="mt-8 flex items-center">
      <ISymbol iconClass="icon-tianmaociribida" />
      <span class="ml-8 text-14">{{ props.visit.workId }}</span>
    </div>
    <div class="mt-8 flex items-center">
      <ISymbol iconClass="icon-dianhua2" />
      <span class="ml-8 text-14">{{ props.visit.tel }}</span>
    </div>
    <el-button
      v-if="!props.visit.isVisit"
      class="mt-16 h-28 bg-e4eafc color-919fc8 text-12 px-20 py-8"
      >出诊</el-button
    >
    <div
      v-if="props.visit.isVisit"
      class="mt-16 w-64 h-26 bg-e4eafc color-919fc8 text-12 rounded-1 border-color-e4eafc border-1 text-center leading-26"
    >
      已出诊
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DoctorCard'
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { IVisit } from './types/doctor-card';

const props = defineProps<{ visit: IVisit }>();
</script>

<style lang="scss" scoped>
.profile-photo {
  position: relative;
}
.profile-photo::after {
  position: absolute;
  content: '已出诊';
  background: #7f8bb0;
  color: #ffffff;
  opacity: 0.5;
  font-size: 12px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  text-align: center;
  line-height: 54px;
  top: 0;
  left: 0;
}
</style>
