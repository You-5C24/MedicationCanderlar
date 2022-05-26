<template>
  <div class="flex-1 flex flex-col relative">
    <span class="text-14 font-semibold">患者性别比例</span>
    <div id="genderChart" class="flex-1"></div>
    <div class="absolute right-10 top-0 text-14 font-semibold color-6b8ad8">
      2019-2020
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GenderPercentage'
};
</script>

<script setup lang="ts">
import { dispose, ECharts, EChartsOption, init } from 'echarts';
import { onBeforeUnmount, onMounted } from 'vue';
import debounce from 'lodash/debounce';

const chartData = [
  { value: 4662, name: '男' },
  { value: 3467, name: '女' }
];

let genderCharEch: ECharts;

const getChartInit = () => {
  if (document.getElementById('genderChart') == null) {
    return;
  }

  const charEle = document.getElementById('genderChart') as HTMLElement;
  // dom 存在的话先删除
  dispose(charEle);
  genderCharEch = init(charEle);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      bottom: 60,
      itemGap: 35
    },
    series: [
      {
        type: 'pie',
        color: ['#83d1cd', '#ee6082'],
        radius: ['80%', '60%'],
        center: ['20%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
          color: '#4c4a4a',
          formatter: '{total|' + 8129 + '}' + '\n\r' + '{active|年度患者总数}',
          rich: {
            total: {
              fontSize: 24,
              fontFamily: '微软雅黑',
              color: '#333333'
            },
            active: {
              fontFamily: '微软雅黑',
              fontSize: 12,
              color: '#666666',
              lineHeight: 30
            }
          }
        },
        data: chartData
      }
    ]
  };
  genderCharEch.setOption(option);
};

onMounted(() => {
  getChartInit();

  window.addEventListener(
    'resize',
    debounce(() => {
      genderCharEch.resize();
    }, 100)
  );
});

onBeforeUnmount(() => {
  window.removeEventListener(
    'resize',
    debounce(() => {
      genderCharEch.resize();
    }, 100)
  );
});
</script>

<style lang="scss" scoped></style>
