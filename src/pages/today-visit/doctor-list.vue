<template>
  <el-table :data="props.visitList">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :label="column.label"
      :prop="column.prop"
    >
      <template #default="scope">
        <span v-if="column.prop !== 'operate'">{{
          scope.row[column.prop]
        }}</span>
        <span v-else>
          <el-button v-if="!scope.row.isVisit" type="text">出诊</el-button>
          <span v-else>-</span>
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IVisit } from './types/doctor-card';

export default {
  name: 'DoctortList'
};
</script>

<script setup lang="ts">
const columns = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '部门',
    prop: 'department'
  },
  {
    label: 'ID',
    prop: 'workId'
  },
  {
    label: '电话号码',
    prop: 'tel'
  },
  {
    label: '操作',
    prop: 'operate'
  }
];

const props = defineProps({
  visitList: Object as PropType<IVisit[]>
});
</script>

<style lang="scss" scoped></style>
