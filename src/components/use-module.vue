<template>
  <div
    class="w-144 h-48 rounded-1 bg-ffffff flex flex-col items-center py-8 mr-24 last--m-0 relative cursor-pointer shadow"
    @click="toPosition()"
  >
    <img class="absolute w-48 h-48 -top-22" :src="item.icon" />
    <span class="mt-auto text-14">{{ item.label }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UseModule'
};
</script>

<script setup lang="ts">
import { IFrequentlyUse } from '@/pages/home-page/types/frequently-use';
import { useSidebarStore } from '@/store/sidebar';
import { PropType } from 'vue';
import { useRouter } from 'vue-router';

type IUseModule = IFrequentlyUse;

let props = defineProps({
  item: {
    type: Object as PropType<IUseModule>,
    default: () => ({})
  }
});

const router = useRouter();
const sidebarStore = useSidebarStore();
const toPosition = () => {
  router.push(props.item.router);
  sidebarStore.changeActiveMenu(props.item.sideBarKey);
};
</script>

<style lang="scss" scoped></style>
