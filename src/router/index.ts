import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import FrameBody from '@/pages/frame-body/index.vue';
import HomePage from '@/pages/home-page/index.vue';
import Workbench from '@/pages/workbench/index.vue';
import StatisticalForm from '@/pages/statistical-form/index.vue';
import SystemManagement from '@/pages/system-management/index.vue';
import MedicalDiagnosis from '@/pages/medical-diagnosis/index.vue';
import ConferenceRoom from '@/pages/conference-room/index.vue';

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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
