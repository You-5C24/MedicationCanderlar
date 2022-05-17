<template>
  <div class="bg-ffffff rounded-1 p-12">
    <div class="font-semibold color-35405a mb-16">基本资料</div>
    <div class="flex items-center">
      <div>
        <div class="text-12 color-afbdf4">姓名</div>
        <el-input
          v-model="baseInfo.name"
          class="mt-4 w-126"
          placeholder="输入患者姓名"
        ></el-input>
      </div>
      <div class="ml-16 flex-1">
        <div class="text-12 color-afbdf4">年龄</div>
        <el-input
          v-model="baseInfo.age"
          class="mt-4"
          placeholder="输入患者年龄"
        ></el-input>
      </div>
      <div class="ml-16">
        <div class="text-12 color-afbdf4">性别</div>
        <div class="flex">
          <div
            class="w-30 h-30 border-1 mt-4 rounded-1 text-center leading-30 text-12 border-color-dddbdb cursor-pointer"
            :class="
              baseInfo.gender === 'male'
                ? 'bg-728cd7 color-ffffff'
                : ' bg-f2f5ff  color-afbdf4'
            "
            @click="baseInfo.gender = 'male'"
          >
            男
          </div>
          <div
            class="w-30 h-30 border-1 mt-4 rounded-1 text-center leading-30 text-12 border-color-dddbdb ml-8 cursor-pointer"
            :class="
              baseInfo.gender === 'female'
                ? 'bg-728cd7 color-ffffff'
                : ' bg-f2f5ff  color-afbdf4'
            "
            @click="baseInfo.gender = 'female'"
          >
            女
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center mt-16">
      <div>
        <div class="text-12 color-afbdf4">身高</div>
        <el-input
          v-model="baseInfo.height"
          class="mt-4 w-126"
          placeholder="输入患者身高"
        ></el-input>
      </div>
      <div class="ml-16 flex-1">
        <div class="text-12 color-afbdf4">电话</div>
        <el-input
          v-model="baseInfo.tel"
          class="mt-4"
          placeholder="输入患者电话"
        ></el-input>
      </div>
    </div>
    <div class="mt-16">
      <div class="text-12 color-afbdf4">家庭住址</div>
      <el-input
        v-model="baseInfo.address"
        class="mt-4"
        placeholder="输入家庭住址"
      ></el-input>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseInfo'
};
</script>

<script setup lang="ts">
import { reactive } from 'vue';
import { IBaseInfo } from './types/base-info';

const baseInfo: IBaseInfo = reactive({
  name: '',
  age: '',
  gender: '',
  height: '',
  tel: '',
  address: ''
});
</script>

<style lang="scss">
.el-input__inner::placeholder {
  color: #afbdf4;
  font-size: 12px;
}
.el-textarea__inner::placeholder {
  color: #afbdf4;
  font-size: 12px;
}
.el-range-input::placeholder {
  color: #afbdf4 !important;
  font-size: 12px;
}
</style>

<style lang="scss" scoped></style>
