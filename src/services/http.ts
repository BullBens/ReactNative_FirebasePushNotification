import storage from '../store';
import axios from 'axios';
import {TGenerateOptions, TFormatResponse} from '@types';

const baseURL = __DEV__ ? 'https://fayno.dev.artjoker.ua' : 'https://fayno.dev.artjoker.ua';

const instance = axios.create();
instance.defaults.baseURL = baseURL;
instance.defaults.timeout = 24000;
instance.defaults.maxContentLength = 100000;

export const httpPost = (url: string, data: any) => sendRequest({method: 'POST', url, data});
export const httpGet = (url: string, params: any) => sendRequest({method: 'GET', url, params});

const formatResponse: (response?: any) => TFormatResponse = (response = {}) => ({
  data: response.data || {},
  status: response.status || 418,
  statusText: response.statusText || '',
});

const sendRequest = async ({method, url, data = undefined, params = undefined}: TGenerateOptions) => {
  const OPTIONS = generateOptions({method, url, data, params});

  try {
    const response = await instance(OPTIONS);
    return formatResponse(response);
  } catch (error) {
    if (error.response?.status === 408 || error.code === 'ECONNABORTED') {
      throw formatResponse({
        status: 408,
        statusText: 'Request timeout!!',
      });
    }

    throw formatResponse(error.response);
  }
};

const generateOptions = ({method, url, data, params}: TGenerateOptions) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Authorization:
      'key=AAAASQIjVfs:APA91bEROf-hINnpsKNWSbf8ThiXA0X-1lMm-G_xULcNZRHD9bm_G6aGbJueX4VKlUg2SA8xnrdUjH6ym9CxdEQN8zGMJbAUvkgtys0OHu6b-FAJWxgNxE7api_2JSIMnzM1gUthwBgZ',
    project_id: '313568482811',
  };

  return {
    method,
    url,
    data,
    params,
    headers: {
      ...defaultHeaders,
    },
  };
};
