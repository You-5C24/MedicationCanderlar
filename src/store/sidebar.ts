import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const activeMenu = ref<string>('homePage');
  function changeActiveMenu(name: string) {
    activeMenu.value = name;
  }

  return { activeMenu, changeActiveMenu };
});
