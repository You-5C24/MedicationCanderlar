import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import FrameBody from '@/pages/frame-body/index.vue';
import Demo from '@/pages/demo/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: FrameBody,
    children: [
      {
        path: '/',
        name: 'Demo',
        component: Demo
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
