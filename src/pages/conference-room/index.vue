<template>
  <section class="flex">
    <!-- Left Card -->
    <div class="flex-0-340">
      <!-- Header -->
      <div class="flex items-center mb-24">
        <div
          class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer"
          @click="router.push('/workbench')"
        >
          <ISymbol
            iconClass="icon-xiangzuojiantou"
            @handleClick="router.push('/workbench')"
          />
        </div>
        <span class="text-16">会议室</span>
        <div
          class="flex items-center justify-content mr-8 p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-auto cursor-pointer"
        >
          <ISymbol iconClass="icon-jiahao" />
        </div>
      </div>
      <!-- Card -->
      <div>
        <SingleCard
          v-for="card in cards"
          :key="card.id"
          :activeCardId="activeCardId"
          :card="card"
          class="mb-24 last--m-0"
          @changeActiveId="changeActiveId"
        />
      </div>
    </div>
    <!-- Right Chat -->
    <Chat />
  </section>
</template>

<script lang="ts">
import SingleCard from './single-card.vue';
import Chat from './chat.vue';
export default {
  name: 'ConferenceRoom',
  components: {
    SingleCard,
    Chat
  }
};
</script>

<script setup lang="ts">
import ISymbol from '@/components/ISymbol.vue';
import { useRouter } from 'vue-router';
import wokbenchApi from '@/service/api/workbench';
import { ICard } from './types/single-card';
import { onMounted, ref } from 'vue';

const router = useRouter();

let cards = ref<ICard[]>([]);
let activeCardId = ref<number>(-1);

const getCards = () => {
  wokbenchApi.getConferenceCardList().then((res) => {
    cards.value = res.data;
  });
};

const changeActiveId = (id: number) => {
  activeCardId.value = id;
};

onMounted(() => {
  getCards();
});
</script>

<style lang="scss" scoped></style>
