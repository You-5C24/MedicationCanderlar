<template>
  <div class="bg-ffffff rounded-1 p-12">
    <div class="font-semibold color-35405a mb-16">既往病史</div>
    <div>
      <div class="text-12 color-afbdf4">诊断</div>
      <el-input
        v-model="pastInfo.result"
        class="mt-4"
        placeholder="输入诊断结果"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">家族病史</div>
      <el-input
        v-model="pastInfo.familyMedicalHistory"
        class="mt-4"
        placeholder="输入家族病史"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">手术史</div>
      <el-input
        v-model="pastInfo.surgeryHistory"
        class="mt-4"
        placeholder="输入手术史"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">既往病史</div>
      <el-input
        v-model="pastInfo.pastMedicalHistory"
        class="mt-4"
        placeholder="输入既往病史"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">过敏史</div>
      <el-input
        v-model="pastInfo.allergyHistory"
        class="mt-4"
        placeholder="输入过敏史"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">药物不良反应</div>
      <el-input
        v-model="pastInfo.adverseReaction"
        class="mt-4"
        placeholder="输入药物不良反应"
      ></el-input>
    </div>
    <div class="mt-8">
      <div class="text-12 color-afbdf4">主诉</div>
      <el-input
        v-model="pastInfo.mainSuit"
        class="mt-4"
        placeholder="主诉"
        type="textarea"
      ></el-input>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PastHistory'
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { IPastHistory } from './types/past-history';

const pastInfo: IPastHistory = reactive({
  result: '',
  familyMedicalHistory: '',
  surgeryHistory: '',
  pastMedicalHistory: '',
  allergyHistory: '',
  adverseReaction: '',
  mainSuit: ''
});
</script>

<style lang="scss" scoped></style>
