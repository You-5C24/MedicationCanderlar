<template>
  <section class="flex">
    <!-- Left Not Vist -->
    <div class="flex-1">
      <!-- Left Top -->
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
        <span class="text-18 font-semibold color-35405a">今日出诊</span>
        <el-input
          v-model="doctor"
          class="w-220 ml-auto"
          placeholder="请输入药师姓名"
          :prefix-icon="Search"
        ></el-input>
        <div class="rounded-1 bg-f2f2ff p-4 ml-16 flex show-tag">
          <div
            v-for="showTag in showTags"
            :key="showTag.type"
            class="w-48 h-24 rounded-1 flex items-center justify-center cursor-pointer"
            :class="{ 'bg-ffffff': activeTag === showTag.type }"
            @click="changeTag(showTag.type)"
          >
            <ISymbol
              :iconClass="showTag.icon"
              @handleClick="changeTag(showTag.type)"
            />
          </div>
        </div>
      </div>
      <!-- Left Main -->
      <div class="flex flex-wrap">
        <DoctorCard />
      </div>
    </div>
    <!-- Right Vist -->
    <div class="flex-0-260 bg-ffffff ml-24 rounded-1 px-8 pt-24 pb-16">
      right
    </div>
  </section>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
import DoctorCard from './doctor-card.vue';
export default {
  name: 'TodayVisit',
  components: {
    ISymbol,
    DoctorCard
  }
};
</script>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showTags = [
  {
    icon: 'icon-fenlei',
    type: 'card'
  },
  {
    icon: 'icon-liebiao',
    type: 'list'
  }
];

let activeTag = ref<string>('card');
const changeTag = (val: string) => {
  activeTag.value = val;
};

let doctor = ref<string>('');
</script>

<style lang="scss" scoped></style>
