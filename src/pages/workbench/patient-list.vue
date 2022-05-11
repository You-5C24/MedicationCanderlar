<template>
  <el-table :data="tableData">
    <el-table-column
      v-for="column in columns"
      :key="column.prop"
      :label="column.label"
      :prop="column.prop"
      :width="column.width"
    />
  </el-table>
</template>

<script lang="ts">
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
  }
];

const tableData = [
  {
    id: 19238293,
    name: '刘耕红',
    firstName: 'T',
    age: 18,
    gender: '男',
    tel: '17020143339',
    message: '多运动，呼吸新鲜空气，戒烟戒酒，进食忌辛辣，少吃发物'
  }
];
</script>

<style lang="scss" scoped></style>
