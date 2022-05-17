import http from '@/service/http';
import { IWokbenchApi } from './types';

// 可以根据 process.env.NODE_ENV 灵活改变 base
const base =
  'https://www.fastmock.site/mock/a24ff42960d950df4856834e9a3d499f/api/workbench';

const wokbenchApi: IWokbenchApi = {
  getPatientList() {
    return http.get(`${base}/getPatientList`);
  },
  getConferenceCardList() {
    return http.get(`${base}/getConferenceCardList`);
  }
};

export default wokbenchApi;
