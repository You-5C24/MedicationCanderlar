import axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';

/**
 * 错误提示函数
 */
const tip = (msg: string) => {
  ElMessage.error(msg);
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status: number, msg: string) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      // cookies.remove('5c24_token');
      setTimeout(() => {
        // toLogin();
      }, 500);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      tip(msg);
  }
};

// 创建axios实例
const instance = axios.create({
  timeout: 1000 * 15
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err) => err
);
// 响应拦截
instance.interceptors.response.use(
  // 请求成功
  (res) => res,
  // 请求失败
  (err) => err
);

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  upload<T>(url: string, params: unknown): Promise<ResType<T>>;
}
const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params })
        .then((res) => {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            reject(res.data);
            errorHandle(res.data.code, res.data.message);
          }
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, params)
        .then((res) => {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            reject(res.data);
            errorHandle(res.data.code, res.data.message);
          }
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
};

export default http;
