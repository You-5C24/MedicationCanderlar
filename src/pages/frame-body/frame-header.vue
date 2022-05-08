<template>
  <div class="py-12 px-16 shadow-top">
    <span
      class="cursor-pointer font-semibold text-14 color-35405a"
      @click="toPageIndex"
      >Medication Calendar</span
    >
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
