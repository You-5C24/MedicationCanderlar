<template>
  <div
    class="flex-1 overflow-auto flex flex-col ml-24 bg-ffffff rounded-1 pt-16 pb-24 px-24"
  >
    <!-- Header -->
    <div class="flex items-center pb-12 border-b-1 border-color-e1e4eb">
      <img class="w-32 h-32 rounded-full" :src="Default" />
      <div class="ml-8">
        <span class="text-14 font-semibold">{{
          props.chatsData?.chatName
        }}</span>
        <div class="flex items-center">
          <ISymbol iconClass="icon-renyuan" />
          <span class="text-12 color-afbdf4">{{
            props.chatsData?.personNum
          }}</span>
        </div>
      </div>
      <div
        class="flex items-center justify-content p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-auto cursor-pointer"
      >
        <ISymbol iconClass="icon-jiahao" />
      </div>
      <div
        class="flex items-center justify-content p-4 border-1 rounded-1 border-color-dddbdb bg-f2f5ff ml-16 cursor-pointer"
        @click="exitChat"
      >
        <ISymbol iconClass="icon-tuichudenglu" @handleClick="exitChat" />
      </div>
    </div>
    <!-- Main -->
    <div class="flex-1 overflow-auto mt-24">
      <div v-for="(chat, i) in props.chatsData?.chats" :key="i">
        <div class="flex items-center mb-24">
          <div class="flex-1 h-1 bg-e1e4eb"></div>
          <span class="ml-24 text-12 color-aaaab3">{{ chat.time }}</span>
        </div>

        <div v-for="(message, j) in chat.messages" :key="j" class="mb-16">
          <!-- Other Message -->
          <div v-if="message.userId !== 0" class="flex">
            <img class="w-32 h-32 rounded-full" :src="Default" />
            <div class="ml-8 mr-200">
              <span class="text-14">{{ message.name }}</span>
              <div class="p-8 bg-fcfbff mt-8 text-14 rounded-2">
                {{ message.info }}
              </div>
            </div>
          </div>
          <!-- My Message -->
          <div v-if="message.userId === 0" class="flex">
            <div class="ml-auto flex">
              <div class="flex flex-col mr-8 ml-200">
                <span class="text-14 ml-auto">我</span>
                <div class="p-8 bg-58a49f mt-8 text-14 rounded-2 color-ffffff">
                  {{ message.info }}
                </div>
              </div>
              <img class="w-32 h-32 rounded-full" :src="Default" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Foot -->
    <div class="mt-32">
      <el-input v-model="text" placeholder="输入你要说的话"></el-input>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageChat'
};
</script>

<script setup lang="ts">
import Default from '@/assets/images/default.png';
import { ref } from 'vue';
import { IChatsData } from './types/chat';

const props = defineProps<{ chatsData: IChatsData | null }>();

let text = ref<string>('');

const emits = defineEmits(['exitChat']);

const exitChat = () => {
  emits('exitChat');
};
</script>

<style lang="scss" scoped></style>
