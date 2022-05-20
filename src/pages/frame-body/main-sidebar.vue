<template>
  <div class="py-26">
    <div
      v-for="menu in menus"
      :key="menu.name"
      class="px-24 py-8 mb-16 cursor-pointer color-708ED7 flex items-center"
      :class="{ 'active-bar': menu.enName === sidebarStore.activeMenu }"
      @click="changeMenu(menu)"
    >
      <ISymbol :iconClass="menu.icon" />
      <span class="text-14 ml-12">{{ menu.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainSidebar'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IMenus } from './types/main-sidebar';
import { useSidebarStore } from '@/store/sidebar';

const menus: IMenus[] = [
  {
    name: '首页',
    enName: 'HomePage',
    router: '/',
    icon: 'icon-shouye'
  },
  {
    name: '工作台',
    enName: 'Workbench',
    router: '/workbench',
    icon: 'icon-medicinebox'
  },
  {
    name: '统计报表',
    enName: 'StatisticalForm',
    router: '/statisticalForm',
    icon: 'icon-tongjifenxi-xiangmubiaogetongji'
  },
  {
    name: '系统管理',
    enName: 'SystemManagement',
    router: '/systemManagement',
    icon: 'icon-shezhi'
  }
];

const sidebarStore = useSidebarStore();

const isCollapse = ref<boolean>(false);
const router = useRouter();
const changeMenu = (menu: IMenus) => {
  sidebarStore.changeActiveMenu(menu.enName);
  router.push(menu.router);
};
</script>

<style lang="scss" scoped>
.active-bar {
  border-left: 3px solid #35405a;
  padding-left: 21px !important;
  color: #35405a !important;
  background-color: #fcfbff;
}
</style>
