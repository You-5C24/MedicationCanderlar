<template>
  <div class="py-12 px-16 shadow-top flex items-center">
    <span
      class="cursor-pointer font-semibold text-14 color-35405a"
      @click="toPageIndex"
      >Medication Calendar</span
    >
    <i-symbol class="ml-auto mr-24" icon-class="icon-jilu"></i-symbol>
    <i-symbol class="mr-24" icon-class="icon-lingdang"></i-symbol>
    <img class="w-24 h-24 mr-8" :src="defaultImg" />
    <span class="text-14 color-25326a font-semibold mr-16">Dr.Howine</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FrameHeader'
};
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSidebarStore } from '@/store/sidebar';
import defaultImg from '@/assets/images/default.png';

const router = useRouter();
const sidebarStore = useSidebarStore();
const toPageIndex = () => {
  sidebarStore.changeActiveMenu('homePage');
  router.push('/');
};
</script>

<style lang="scss" scoped>
.shadow-top {
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
  z-index: 100;
}
</style>
