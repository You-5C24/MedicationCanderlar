<template>
  <el-table :data="props.patientList">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :label="column.label"
      :prop="column.prop"
      :width="column.width"
    >
      <template #default="scope">
        <span v-if="column.prop !== 'operate'">{{
          scope.row[column.prop]
        }}</span>
        <span v-else>
          <el-button type="text">档案</el-button>
          <el-button type="text">看诊</el-button>
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { IPatientInfo } from './types/workbench';

export default {
  name: 'PatientList'
};
</script>

<script setup lang="ts">
const columns = [
  {
    label: '姓名',
    prop: 'name',
    width: '106'
  },
  {
    label: 'ID',
    prop: 'id',
    width: '106'
  },
  {
    label: '性别',
    prop: 'gender',
    width: '106'
  },
  {
    label: '年龄',
    prop: 'age',
    width: '106'
  },
  {
    label: '最近医嘱',
    prop: 'message'
  },
  {
    label: '电话号码',
    prop: 'tel',
    width: 126
  },
  {
    label: '操作',
    prop: 'operate',
    width: 106
  }
];

const props = defineProps({
  patientList: Object as PropType<IPatientInfo[]>
});
</script>

<style lang="scss" scoped></style>
