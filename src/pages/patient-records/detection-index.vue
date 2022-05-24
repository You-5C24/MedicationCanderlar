<template>
  <div class="flex-1 flex flex-col">
    <!-- Title -->
    <div class="font-semibold border-b-1 border-color-e1e4ee pb-16 mb-24">
      检测指数详情
    </div>
    <div class="flex">
      <div
        v-for="info in detectionInfos"
        :key="info.enName"
        class="flex-1 mr-24 last--m-0 py-24 px-36 bg-ffffff rounded-1 flex items-center"
      >
        <img class="w-48 h-48" :src="info.img" />
        <div class="ml-auto flex flex-col">
          <span class="text-14 color-666666">{{ info.label }}</span>
          <span class="self-end text-24 font-semibold">123</span>
        </div>
      </div>
    </div>
    <!-- Chart -->
    <div
      class="flex-1 p-16 overflow-hidden bg-ffffff rounded-1 mt-24 flex flex-col"
    >
      <div class="mb-24">
        <span class="font-semibold">心率/血压标</span>
        <span class="color-666666 font-semibold ml-16">2019-2020</span>
      </div>
      <div id="myChart" class="flex-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DetectionIndex'
};
</script>

<script setup lang="ts">
import calendar from '@/assets/images/calendar.png';
import heart from '@/assets/images/heart.png';
import blood from '@/assets/images/blood.png';
import { dispose, ECharts, EChartsOption, init } from 'echarts';
import { onBeforeUnmount, onMounted } from 'vue';
import { randomNum } from '@/util';
import debounce from 'lodash/debounce';

type IDetectionInfo = {
  img: string;
  label: string;
  enName: string;
};

const detectionInfos: IDetectionInfo[] = [
  {
    img: calendar,
    label: '连续检测天数',
    enName: 'runningDays'
  },
  {
    img: heart,
    label: '检测平均心率',
    enName: 'avgHeartRate'
  },
  {
    img: blood,
    label: '检测平均血压',
    enName: 'avgBloodPressure'
  }
];

const getRandomNum = () => {
  const randomArr = [];
  for (let i = 0; i < 46; i++) {
    randomArr.push(randomNum(100, 150));
  }

  return randomArr;
};

let charEch: ECharts;

const getChartInit = () => {
  if (document.getElementById('myChart') == null) {
    return;
  }

  const charEle = document.getElementById('myChart') as HTMLElement;
  // dom 存在的话先删除
  dispose(charEle);
  charEch = init(charEle);
  const option: EChartsOption = {
    grid: {
      left: '3%',
      right: '3%',
      top: '14%',
      bottom: '6%'
    },
    color: ['#6183d5', '#e7567d'],
    legend: {
      data: ['心率', '血压'],
      left: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        // 间隔个数
        interval: 4
      },
      data: [
        '2019/12/25',
        '2019/12/26',
        '2019/12/27',
        '2019/12/28',
        '2019/12/29',
        '2019/12/30',
        '2019/01/01',
        '2019/12/02',
        '2019/12/03',
        '2019/12/04',
        '2020/01/05',
        '2020/01/06',
        '2020/01/07',
        '2020/01/08',
        '2020/01/09',
        '2020/01/10',
        '2020/01/11',
        '2020/01/12',
        '2020/01/13',
        '2020/01/14',
        '2020/01/15',
        '2020/01/16',
        '2020/01/17',
        '2020/01/18',
        '2020/01/19',
        '2020/01/20',
        '2020/01/21',
        '2020/01/22',
        '2020/01/23',
        '2020/01/24',
        '2020/01/25',
        '2020/01/26',
        '2020/01/27',
        '2020/01/28',
        '2020/01/29',
        '2020/01/30',
        '2020/01/31',
        '2020/02/01',
        '2020/02/02',
        '2020/02/03',
        '2020/02/04',
        '2020/02/05',
        '2020/02/06',
        '2020/02/07',
        '2020/02/08',
        '2020/02/09'
      ]
    },
    yAxis: [
      {
        type: 'value',
        name: '',
        max: 250,
        min: 0,
        interval: 50
      },
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
        name: '心率',
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
        name: '血压',
        symbol: 'none',
        smooth: true,
        type: 'line',
        lineStyle: {
          color: '#e7567d'
        },
        data: getRandomNum()
      }
    ]
  };
  charEch.setOption(option);
};

onMounted(() => {
  getChartInit();

  window.onresize = debounce(() => {
    charEch.resize();
  }, 300);
});

onBeforeUnmount(() => {
  window.onresize = null;
});
</script>

<style lang="scss" scoped></style>
