<template>
  <section>
    <FrequentlyUse />
    <TodayCase class="mt-48" />
  </section>
</template>

<script lang="ts">
import FrequentlyUse from './frequently-use.vue';
import TodayCase from './today-case.vue';

export default {
  name: 'HomePage',
  components: {
    FrequentlyUse,
    TodayCase
  }
};
</script>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
