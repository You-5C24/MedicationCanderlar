<template>
  <div
    v-if="props.card"
    class="flex items-center p-16 bg-ffffff border-l-3 border-color-81d0cd rounded-1 cursor-pointer"
    :class="{ 'relative active shadow': activeCardId === props.card.id }"
    @click="handleClick()"
  >
    <div class="w-36 h-36 rounded-full relative">
      <img class="w-36 h-36" :src="Default" />
      <div
        v-if="props.card.unread > 0"
        class="absolute w-16 h-16 text-12 text-center leading-16 color-ffffff rounded-full bg-ef5379 -top-5 -right-5"
      >
        {{ props.card.unread }}
      </div>
    </div>
    <div class="ml-16 flex-1">
      <div class="flex items-center">
        <span class="text-14 font-semibold">{{ props.card.chatName }}</span>
        <ISymbol class="ml-auto" iconClass="icon-gengduo" />
      </div>
      <div class="flex items-start">
        <span class="text-12 color-999999"
          >{{ props.card.originator }} 发起群聊</span
        >
        <span class="ml-auto text-12 color-999999">{{ props.card.time }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SingleCard'
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { ICard } from './types/single-card';
import { PropType } from 'vue';

const props = defineProps({
  card: Object as PropType<ICard>,
  activeCardId: Number
});

const emits = defineEmits(['changeActiveId']);

const handleClick = () => {
  emits('changeActiveId', props.card?.id);
};
</script>

<style lang="scss" scoped>
.active:before,
.active:after {
  width: 0;
  height: 0;
  content: '';
  position: absolute;
  border: solid transparent;
  left: 100%;
}
.active:before {
  border-width: 12px;
  border-left-color: rgba(185, 184, 184, 0.1);
  top: 20px;
}
.active:after {
  border-width: 10px;
  border-left-color: #fff;
  top: 22px;
}
</style>
