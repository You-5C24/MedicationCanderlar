<template>
  <div class="p-16 rounded-1 border-1 border-color-e9edf2">
    <div class="flex">
      <div>
        <div class="flex">
          <img class="w-36 h-36" :src="Default" />
          <div class="ml-16">
            <div class="text-14">{{ props.visited.name }}</div>
            <div class="text-14 color-708ed7">
              {{ props.visited.department }}
            </div>
          </div>
        </div>
        <div class="flex items-center mt-8">
          <ISymbol iconClass="icon-dianhua2" />
          <span class="text-14 ml-4">{{ props.visited.tel }}</span>
        </div>
      </div>

      <div class="ml-auto flex flex-col">
        <ISymbol class="ml-auto" iconClass="icon-gengduo" />
        <div class="text-14 ml-auto mt-8">{{ props.visited.time }}</div>
        <div class="text-14 color-babbbf mt-4">{{ props.visited.date }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VisitedCard'
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { IHaveVist } from './types/doctor-card';

const props = defineProps<{ visited: IHaveVist }>();
</script>

<style lang="scss" scoped></style>
