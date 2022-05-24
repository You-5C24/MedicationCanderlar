import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import FrameBody from '@/pages/frame-body/index.vue';
import HomePage from '@/pages/home-page/index.vue';
import Workbench from '@/pages/workbench/index.vue';
import StatisticalForm from '@/pages/statistical-form/index.vue';
import SystemManagement from '@/pages/system-management/index.vue';
import MedicalDiagnosis from '@/pages/medical-diagnosis/index.vue';
import ConferenceRoom from '@/pages/conference-room/index.vue';
import TodayVisit from '@/pages/today-visit/index.vue';
import PatientRecords from '@/pages/patient-records/index.vue';
import HistoryRecords from '@/pages/patient-records/history-record.vue';
import Details from '@/pages/patient-records/details.vue';
import DetectionIndex from '@/pages/patient-records/detection-index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: FrameBody,
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/workbench',
        name: 'Workbench',
        component: Workbench
      },
      {
        path: '/statisticalForm',
        name: 'StatisticalForm',
        component: StatisticalForm
      },
      {
        path: '/systemManagement',
        name: 'SystemManagement',
        component: SystemManagement
      },
      {
        path: '/medicalDiagnosis',
        name: 'MedicalDiagnosis',
        component: MedicalDiagnosis
      },
      {
        path: '/conferenceRoom',
        name: 'ConferenceRoom',
        component: ConferenceRoom
      },
      {
        path: '/todayVisit',
        name: 'TodayVisit',
        component: TodayVisit
      },
      {
        path: '/patientRecords',
        name: 'PatientRecords',
        component: PatientRecords,
        children: [
          {
            path: '',
            name: 'HistoryRecords',
            component: HistoryRecords
          },
          {
            path: '/patientRecords/details',
            name: 'Details',
            component: Details
          },
          {
            path: '/patientRecords/detectionIndex',
            name: 'DetectionIndex',
            component: DetectionIndex
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
