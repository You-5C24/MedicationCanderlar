<template>
  <div class="flex-1 flex flex-col p-24 relative">
    <div class="text-14 font-semibold mb-8">看诊数量</div>
    <div id="seeingChart" class="flex-1"></div>
    <div class="absolute right-48 top-48 text-14 font-semibold color-6b8ad8">
      2019-2020
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SeeingChart'
};
</script>

<script setup lang="ts">
import { dispose, ECharts, EChartsOption, init } from 'echarts';
import { onBeforeUnmount, onMounted } from 'vue';
import { randomNum } from '@/util';
import debounce from 'lodash/debounce';

const getRandomNum = () => {
  const randomArr = [];
  for (let i = 0; i < 12; i++) {
    randomArr.push(randomNum(100, 200));
  }

  return randomArr;
};

let charEch: ECharts;

const getChartInit = () => {
  if (document.getElementById('seeingChart') == null) {
    return;
  }

  const charEle = document.getElementById('seeingChart') as HTMLElement;
  // dom 存在的话先删除
  dispose(charEle);
  charEch = init(charEle);
  const option: EChartsOption = {
    grid: {
      left: '4%',
      right: '2%',
      top: '15%',
      bottom: '9%'
    },
    color: ['#6183d5', '#a7daed'],
    legend: {
      data: ['本年度', '上年度'],
      left: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ]
    },
    yAxis: [
      {
        type: 'value',
        name: '',
        max: 250,
        min: 0,
        interval: 50
      }
    ],
    series: [
      {
        name: '本年度',
        symbol: 'none',
        smooth: true,
        type: 'line',
        lineStyle: {
          color: '#6183d5'
        },
        areaStyle: {
          color: '#f0f3fb'
        },
        data: getRandomNum()
      },
      {
        name: '上年度',
        symbol: 'none',
        smooth: true,
        type: 'line',
        lineStyle: {
          color: '#a7daed'
        },
        data: getRandomNum()
      }
    ]
  };
  charEch.setOption(option);
};

onMounted(() => {
  getChartInit();

  window.addEventListener(
    'resize',
    debounce(() => {
      charEch.resize();
    }, 100)
  );
});

onBeforeUnmount(() => {
  window.removeEventListener(
    'resize',
    debounce(() => {
      charEch.resize();
    }, 100)
  );
});
</script>

<style lang="scss" scoped></style>
