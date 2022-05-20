import http from '@/service/http';
import { IWokbenchApi } from './types';

// 可以根据 process.env.NODE_ENV 灵活改变 base
const base =
  'https://www.fastmock.site/mock/a24ff42960d950df4856834e9a3d499f/api/workbench';

const workbenchApi: IWokbenchApi = {
  getPatientList() {
    return http.get(`${base}/getPatientList`);
  },
  getConferenceCardList() {
    return http.get(`${base}/getConferenceCardList`);
  },
  getChat(params: { id: number }) {
    return http.get(`${base}/getChat`, params);
  },
  getVisitList() {
    return http.get(`${base}/getVisitList`);
  },
  getHaveVisitList() {
    return http.get(`${base}/getHaveVisitList`);
  }
};

export default workbenchApi;
