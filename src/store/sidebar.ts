import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export const useSidebarStore = defineStore('sidebar', () => {
  const route = useRoute();
  const initActive = route.name as string;
  const activeMenu = ref<string>(initActive);
  function changeActiveMenu(name: string) {
    activeMenu.value = name;
  }

  return { activeMenu, changeActiveMenu };
});
