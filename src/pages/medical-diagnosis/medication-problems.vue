<template>
  <div>
    <div v-for="(problem, i) in problems" :key="i" class="mb-16 last--m-0">
      <div class="bg-ffffff rounded-1 p-12">
        <div class="font-semibold color-35405a mb-16">药物治疗问题</div>
        <div class="flex">
          <div class="flex-1 mr-16">
            <div class="text-12 color-afbdf4">问题类别</div>
            <el-input
              v-model="problem.type"
              class="mt-4"
              placeholder="输入治疗问题类别"
            ></el-input>
          </div>
          <div>
            <div class="text-12 color-afbdf4">优先级</div>
            <el-select v-model="problem.priority" class="mt-4 w-60">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="mt-8">
          <div class="text-12 color-afbdf4">问题细节</div>
          <el-input
            v-model="problem.detail"
            class="mt-4"
            placeholder="输入治疗问题细节"
          ></el-input>
        </div>
        <div class="flex justify-center mt-8">
          <div
            v-if="i === problems.length - 1"
            class="w-24 h-24 border-1 mt-4 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer flex items-center justify-center"
            @click="addProblem"
          >
            <ISymbol iconClass="icon-jiahao" @handleClick="addProblem" />
          </div>
          <div
            v-if="problems.length > 1"
            class="w-24 h-24 border-1 mt-4 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer ml-16 flex items-center justify-center"
            @clikc="delProblem(i)"
          >
            <ISymbol iconClass="icon-lajixiang" @handleClick="delProblem(i)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MedicationProblems'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { IProblem } from './types/medication-problems';

const options = [
  { label: '高', value: 'high' },
  { label: '低', value: 'low' }
];

const problems = ref<IProblem[]>([
  {
    type: '',
    detail: '',
    priority: 'high'
  }
]);

const addProblem = () => {
  problems.value.push({
    type: '',
    detail: '',
    priority: 'high'
  });
};

const delProblem = (index: number) => {
  problems.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
