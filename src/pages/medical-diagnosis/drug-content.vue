<template>
  <div>
    <div v-for="(drug, i) in drugs" :key="i" class="mb-16 last--m-0">
      <div class="bg-ffffff rounded-1 p-12">
        <div class="font-semibold color-35405a mb-16">用药内容</div>
        <div>
          <div class="text-12 color-afbdf4">药物名称</div>
          <el-input
            v-model="drug.name"
            class="mt-4"
            placeholder="输入药物名称"
          ></el-input>
        </div>
        <div class="mt-8 flex">
          <div>
            <div class="text-12 color-afbdf4">剂量</div>
            <el-input
              v-model="drug.dosage"
              class="mt-4 w-96"
              placeholder="输入剂量"
            ></el-input>
          </div>
          <div class="ml-16">
            <div class="text-12 color-afbdf4">用途</div>
            <el-input
              v-model="drug.use"
              class="mt-4 w-106"
              placeholder="输入用途"
            ></el-input>
          </div>
          <div class="ml-16 flex-1">
            <div class="text-12 color-afbdf4">服用时间</div>
            <el-input
              v-model="drug.takeTime"
              class="mt-4"
              placeholder="输入服用时间"
            ></el-input>
          </div>
        </div>
        <div class="mt-8">
          <div class="text-12 color-afbdf4">开始结束</div>
          <el-date-picker
            v-model="drug.rangeTime"
            class="mt-4"
            end-placeholder="开始时间"
            range-separator="-"
            start-placeholder="结束时间"
            type="daterange"
            value-format="YYYY-MM-DD"
          />
        </div>
        <div class="mt-8">
          <div class="text-12 color-afbdf4">备注</div>
          <el-input
            v-model="drug.remark"
            class="mt-4"
            placeholder="输入备注"
            type="textarea"
          ></el-input>
        </div>
        <div class="flex justify-center mt-8">
          <div
            v-if="i === drugs.length - 1"
            class="w-24 h-24 border-1 mt-4 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer flex items-center justify-center"
            @click="addDrug"
          >
            <ISymbol iconClass="icon-jiahao" @handleClick="addDrug" />
          </div>
          <div
            v-if="drugs.length > 1"
            class="w-24 h-24 border-1 mt-4 rounded-1 border-color-dddbdb bg-f2f5ff cursor-pointer ml-16 flex items-center justify-center"
            @clikc="delDrug(i)"
          >
            <ISymbol iconClass="icon-lajixiang" @handleClick="delDrug(i)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ISymbol from '@/components/ISymbol.vue';
export default {
  name: 'DrugContent',
  components: {
    ISymbol
  }
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { IDug } from './types/drug-content';

const drugs = ref<IDug[]>([
  {
    name: '',
    dosage: '',
    use: '',
    takeTime: '',
    rangeTime: null,
    remark: ''
  }
]);

const addDrug = () => {
  drugs.value.push({
    name: '',
    dosage: '',
    use: '',
    takeTime: '',
    rangeTime: null,
    remark: ''
  });
};

const delDrug = (index: number) => {
  drugs.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
