<template>
  <div class="p-24 bg-ffffff rounded-1 shadow w-192 cursor-pointer">
    <div class="flex items-center">
      <div
        class="w-36 h-36 border-3 border-color-afbdf4 rounded-full flex items-center justify-center font-semibold color-324280"
      >
        {{ info.firstName }}
      </div>
      <div
        class="ml-auto border-1 border-color-708ED7 border text-12 color-708ED7 rounded-1 px-4 py-6"
      >
        看诊
      </div>
    </div>
    <div class="mt-16">
      <div class="flex items-center">
        <span class="text-18 font-semibold">{{ info.name }}</span>
        <span class="ml-auto flex-0-62 flex items-center">
          <span class="text-14 color-999999">性别:</span>
          <span class="text-14 ml-auto">{{ info.gender }}</span>
        </span>
      </div>
      <div class="flex items-center mt-4">
        <span class="text-14">ID{{ info.id }}</span>
        <span class="ml-auto flex-0-62 flex items-center">
          <span class="text-14 color-999999">年龄:</span>
          <span class="text-14 ml-auto">{{ info.age }}</span>
        </span>
      </div>
    </div>
    <div class="mt-24">
      <span class="text-14 color-999999">最近医嘱:</span>
      <div class="text-12 mt-8">
        {{ info.message }}
      </div>
    </div>
    <div class="mt-24 flex items-center">
      <ISymbol iconClass="icon-dianhua" />
      <span class="text-12">{{ info.tel }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';

export default {
  name: 'PatientCard',
  components: {
    ISymbol
  }
};
</script>

<script setup lang="ts">
const info = {
  id: 19238293,
  name: '刘耕红',
  firstName: 'T',
  age: 18,
  gender: '男',
  tel: '17020143339',
  message: '多运动，呼吸新鲜空气，戒烟戒酒，进食忌辛辣，少吃发物'
};
</script>

<style lang="scss" scoped></style>
