<template>
  <div class="flex-1 flex flex-col relative">
    <span class="text-14 font-semibold">患者年龄分布</span>
    <div id="ageChart" class="flex-1"></div>
    <div class="absolute right-10 top-0 text-14 font-semibold color-6b8ad8">
      2019-2020
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AgeDistribution'
};
</script>

<script setup lang="ts">
import { dispose, ECharts, EChartsOption, init } from 'echarts';
import { onBeforeUnmount, onMounted } from 'vue';
import { randomNum } from '@/util';
import debounce from 'lodash/debounce';

const getRandomNum = () => {
  const randomArr = [];
  for (let i = 0; i < 4; i++) {
    randomArr.push(randomNum(1000, 2000));
  }

  return randomArr;
};

let ageCharEch: ECharts;

const getChartInit = () => {
  if (document.getElementById('ageChart') == null) {
    return;
  }

  const charEle = document.getElementById('ageChart') as HTMLElement;
  // dom 存在的话先删除
  dispose(charEle);
  ageCharEch = init(charEle);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '7%',
      right: '2%',
      top: '15%',
      bottom: '9%'
    },
    xAxis: {
      type: 'category',
      data: ['5-11', '12-25', '26-45', '46-65']
    },
    yAxis: {
      type: 'value',
      max: 2500,
      min: 0,
      interval: 500,
      axisLabel: {
        formatter: function (value: number) {
          return `${value / 1000}k`;
        }
      }
    },
    series: [
      {
        data: getRandomNum(),
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          color: function (params) {
            var colorList = ['#82d2cc', '#718fd7', '#76498f', '#f05d82'];
            return colorList[params.dataIndex];
          }
        }
      }
    ]
  };
  ageCharEch.setOption(option);
};

onMounted(() => {
  getChartInit();

  window.addEventListener(
    'resize',
    debounce(() => {
      ageCharEch.resize();
    }, 100)
  );
});

onBeforeUnmount(() => {
  window.removeEventListener(
    'resize',
    debounce(() => {
      ageCharEch.resize();
    }, 100)
  );
});
</script>

<style lang="scss" scoped></style>
