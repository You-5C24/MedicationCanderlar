<template>
  <section
    class="flex"
    :class="controlOverflow ? 'overflow-hidden' : 'overflow-auto'"
  >
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
    <transition
      enter-active-class="animate__animated animate__fadeInRightBig"
      leave-active-class="animate__animated animate__fadeOutRightBig"
    >
      <Chat
        v-if="activeCardId > -1 && chatsData"
        id="chat"
        :chatsData="chatsData"
        @exitChat="exitChat"
      />
    </transition>
  </section>
</template>

<script lang="ts">
import Chat from './chat.vue';
import SingleCard from './single-card.vue';
export default {
  name: 'ConferenceRoom',
  components: {
    Chat,
    SingleCard
  }
};
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import workbenchApi from '@/service/api/workbench';
import { ICard } from './types/single-card';
import { onMounted, ref } from 'vue';
import { IChatsData } from './types/chat';

const router = useRouter();

let cards = ref<ICard[]>([]);
let activeCardId = ref<number>(-1);
let chatsData = ref<IChatsData | null>(null);

const getCards = () => {
  workbenchApi.getConferenceCardList().then((res) => {
    cards.value = res.data;
  });
};

const changeActiveId = (id: number) => {
  if (activeCardId.value !== id) {
    activeCardId.value = id;
    getChat(id);
  }
};

const getChat = (id: number) => {
  workbenchApi.getChat({ id }).then((res) => {
    chatsData.value = res.data;
    setOverflow();
  });
};

const exitChat = () => {
  activeCardId.value = -1;
  chatsData.value = null;
  setOverflow();
};

let controlOverflow = ref<boolean>(false);
const setOverflow = () => {
  controlOverflow.value = true;
  setTimeout(() => {
    controlOverflow.value = false;
  }, 1000);
};

onMounted(() => {
  getCards();
});
</script>

<style lang="scss">
#chat {
  animation-duration: 0.5s;
}
</style>

<style lang="scss" scoped></style>
