<template>
  <section class="flex flex-col">
    <FrameHeader />
    <div class="flex-1 flex">
      <MainSidebar class="flex-0-220" />
      <section class="flex-1 p-24 overflow-auto bg-fcfbff main-section">
        <router-view></router-view>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import FrameHeader from './frame-header.vue';
import MainSidebar from './main-sidebar.vue';

export default {
  name: 'FrameBody',

  components: {
    FrameHeader,
    MainSidebar
  }
};
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  section {
    flex: 1;
    overflow: auto;
  }
}
</style>
