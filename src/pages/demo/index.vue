<template>
  <button
    bg="green-500 hover:green-700"
    border="rounded-lg none "
    cursor="pointer"
    font="semibold"
    p="y-2 x-4"
    shadow="lg"
    text="white"
  >
    Click me
  </button>
  <div class="i-ic-baseline-add-circle-outline text-50 bg-green-500" />
  <div class="my-8">test uno rules</div>
  <el-button>I am ElButton</el-button>
  <el-pagination
    v-model:currentPage="currentPage4"
    v-model:page-size="pageSize4"
    :background="background"
    :disabled="disabled"
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="[100, 200, 300, 400]"
    :small="small"
    :total="400"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts">
export default {
  name: 'PageDemo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

const currentPage4 = ref(4);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>

<style lang="scss" scoped></style>
