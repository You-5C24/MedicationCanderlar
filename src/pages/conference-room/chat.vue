<template>
  <div
    class="flex-1 overflow-auto flex flex-col ml-24 bg-ffffff rounded-1 pt-16 pb-24 px-24"
  >
    <!-- Header -->
    <div class="flex items-center pb-12 border-b-1 border-color-e1e4eb">
      <img class="w-32 h-32 rounded-full" :src="Default" />
      <div class="ml-8">
        <span class="text-14 font-semibold">新冠疫情紧急会议-全员参加</span>
        <div class="flex items-center">
          <ISymbol iconClass="icon-renyuan" />
          <span class="text-12 color-afbdf4">123</span>
        </div>
      </div>
      <div
        class="flex items-center justify-content p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-auto cursor-pointer"
      >
        <ISymbol iconClass="icon-jiahao" />
      </div>
      <div
        class="flex items-center justify-content p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-16 cursor-pointer"
      >
        <ISymbol iconClass="icon-tuichudenglu" />
      </div>
    </div>
    <!-- Main -->
    <div class="flex-1 overflow-auto">
      <div v-for="i in 100" :key="i">内容</div>
    </div>
    <!-- Foot -->
    <div>输入框位置</div>
  </div>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
export default {
  name: 'PageChat',
  components: {
    ISymbol
  }
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
</script>

<style lang="scss" scoped></style>
