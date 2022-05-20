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
      <div v-show="activeTag === 'card'" class="flex flex-wrap">
        <DoctorCard
          v-for="(visit, i) in visitList"
          :key="i"
          class="mr-24 mb-24"
          :visit="visit"
        />
      </div>
      <DoctortList v-show="activeTag === 'list'" :visitList="visitList" />
    </div>
    <!-- Right Vist -->
    <div class="flex-0-300 bg-ffffff ml-24 rounded-1 px-12 pt-24 pb-16">
      <div class="text-18 font-semibold color-35405a mb-24">今日已经出诊</div>
      <VisitedCard
        v-for="(visited, i) in haveVisitList"
        :key="i"
        class="mb-16"
        :visited="visited"
      />
    </div>
  </section>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
import DoctorCard from './doctor-card.vue';
import VisitedCard from './visited-card.vue';
import DoctortList from './doctor-list.vue';
export default {
  name: 'TodayVisit',
  components: {
    ISymbol,
    DoctorCard,
    VisitedCard,
    DoctortList
  }
};
</script>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import workbenchApi from '@/service/api/workbench';
import { IHaveVist, IVisit } from './types/doctor-card';

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

let visitList = ref<IVisit[]>([]);

const getVisitList = () => {
  workbenchApi.getVisitList().then((res) => {
    visitList.value = res.data;
  });
};

let haveVisitList = ref<IHaveVist[]>([]);

const getHaveVisitList = () => {
  workbenchApi.getHaveVisitList().then((res) => {
    haveVisitList.value = res.data;
  });
};

onMounted(() => {
  getVisitList();
  getHaveVisitList();
});
</script>

<style lang="scss" scoped></style>
