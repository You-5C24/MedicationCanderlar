<template>
  <div>
    <span class="text-18 font-semibold color-35405a">今日病例</span>
    <div class="p-24 mt-24 bg-ffffff rounded-1 overflow-auto">
      <div class="text-14 font-semibold">2020年03月09日 星期一</div>
      <div class="overflow-auto flex mt-24">
        <!-- 第一列 -->
        <div class="border-r-1 border-color-eeecf3">
          <div class="w-60 h-67 border-b-1 border-color-eeecf3"></div>
          <!-- 时间  -->
          <div v-for="time in times" :key="time">
            <div class="h-48 relative">
              <span class="text-12 color-8b98c7 absolute right-8 -bottom-8">{{
                time
              }}</span>
            </div>
          </div>
        </div>
        <!-- 日期  行程-->
        <div class="flex-1 overflow-auto relative">
          <!-- 日期 -->
          <div class="flex">
            <div
              v-for="(date, i) in dates"
              :key="i"
              class="flex-0-279 py-8 flex flex-col items-center justify-center border-b-1 border-r-1 border-color-eeecf3 last--border-r-0"
            >
              <span class="text-12 color-999999">{{ date.week }}</span>
              <span class="text-14 font-semibold">{{ date.solar }}</span>
              <span class="text-12 color-999999">{{ date.lunar }}</span>
            </div>
          </div>
          <div v-for="i in 9" :key="i">
            <div class="flex">
              <div
                v-for="i in dates.length"
                :key="i"
                class="flex-0-279 h-47 border-b-1 border-r-1 border-color-eeecf3 last--border-r-0"
              ></div>
            </div>
          </div>

          <div
            v-for="(schedule, i) in schedules"
            :key="i"
            class="absolute border-l-6 w-250 pb-4 overflow-auto"
            :style="`left: ${schedule.left}px; top: ${schedule.top}px; height: ${schedule.height}px; border-color: ${schedule.borderColor}; background: ${schedule.background}`"
          >
            <div class="ml-8 mt-4">
              <span class="text-14 font-semibold">{{
                schedule.patientName
              }}</span>
              <span class="text-12 ml-8" :style="`color: ${schedule.timeColor}`"
                >{{ schedule.startTime }}~{{ schedule.endTime }}</span
              >
            </div>
            <div class="ml-8 mt-4 text-12">{{ schedule.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TodayCase'
};
</script>

<script setup lang="ts">
import { randomNum } from '@/util';
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';

const dates = [
  {
    week: '一',
    solar: '9',
    lunar: '十五'
  },
  {
    week: '二',
    solar: '10',
    lunar: '十六'
  },
  {
    week: '三',
    solar: '11',
    lunar: '十七'
  },
  {
    week: '四',
    solar: '12',
    lunar: '十八'
  },
  {
    week: '五',
    solar: '13',
    lunar: '十九'
  },
  {
    week: '六',
    solar: '14',
    lunar: '二十'
  },
  {
    week: '七',
    solar: '15',
    lunar: '二十一'
  }
];

const times = [
  '9AM',
  '10AM',
  '11AM',
  '12AM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM'
];

interface ISchedule {
  startTime: string;
  endTime: string;
  patientName: string;
  message: string;
  left?: number;
  top?: number;
  height?: number;
  borderColor?: string;
  background?: string;
  timeColor?: string;
}

interface IData {
  time: string;
  scheduling: ISchedule[];
}

const datas = ref<IData[]>([
  {
    time: '2020-03-09',
    scheduling: [
      {
        startTime: '8:30',
        endTime: '10:00',
        patientName: '张鹤洋',
        message: '发热，炎症，肠道菌群失调症状'
      },
      {
        startTime: '10:40',
        endTime: '12:00',
        patientName: '王立华',
        message: '血压血糖偏高'
      }
    ]
  },
  {
    time: '2020-03-10',
    scheduling: [
      {
        startTime: '9:40',
        endTime: '10:50',
        patientName: '赵楚',
        message: '血压血糖偏高'
      }
    ]
  },
  {
    time: '2020-03-11',
    scheduling: [
      {
        startTime: '10:10',
        endTime: '11:40',
        patientName: '张睿',
        message: '血压血糖偏高'
      }
    ]
  },
  {
    time: '2020-03-12',
    scheduling: [
      {
        startTime: '8:40',
        endTime: '11:10',
        patientName: '李学基',
        message: '血压血糖偏高'
      }
    ]
  },
  {
    time: '2020-03-13',
    scheduling: [
      {
        startTime: '13:30',
        endTime: '15:30',
        patientName: '王丽萍',
        message: '血压血糖偏高'
      }
    ]
  },
  {
    time: '2020-03-14',
    scheduling: []
  },
  {
    time: '2020-03-15',
    scheduling: []
  }
]);

const getCardPosition = (item: IData, index: number) => {
  item.scheduling.forEach((schedule: ISchedule) => {
    const start = `${item.time} ${schedule.startTime}`;
    const end = `${item.time} ${schedule.endTime}`;
    const calInitMinutes =
      dayjs(start).diff(dayjs(`${item.time} 08:00`), 'minutes') / 10;
    const calUseMinutes = dayjs(end).diff(dayjs(start), 'minutes') / 10;

    const left = index * 280 + 12;
    const top = calInitMinutes * 8 + 70;
    const height = calUseMinutes * 7;
    console.log(calInitMinutes, calUseMinutes, left, top, height);

    schedule.left = left;
    schedule.top = top;
    schedule.height = height;
  });
};

const cardStyle = [
  {
    borderColor: '#51a5a4',
    background: '#e0fdff',
    timeColor: '#6c999a'
  },
  {
    borderColor: '#f36088',
    background: '#fff8fa',
    timeColor: '#e78ba1'
  },
  {
    borderColor: '#794693',
    background: '#f5f2f7',
    timeColor: '#816c8c'
  }
];

const schedules = ref<ISchedule[]>([]);

onMounted(() => {
  for (let i = 0; i < datas.value.length; i++) {
    getCardPosition(datas.value[i], i);
  }

  datas.value.map((d) => {
    schedules.value = [...schedules.value, ...d.scheduling];
  });

  schedules.value.forEach((item) => {
    const randomStyle = cardStyle[randomNum(0, 2)];
    item.background = randomStyle.background;
    item.borderColor = randomStyle.borderColor;
    item.timeColor = randomStyle.timeColor;
  });
});
</script>

<style lang="scss" scoped></style>
