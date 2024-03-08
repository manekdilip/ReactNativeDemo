import axios from 'axios';

import {BASE_URL} from '../constants/endPoints';

/** Create cancel token  ***/
const CancelToken = axios.CancelToken;
let source = CancelToken.source();

/** Set base url for api */
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 10000;
// const dateAsString = new Date().toString();

axios.interceptors.request.use(
  async (config: any) => {
    let request = config;
    return request;
  },
  (err: any) => {
    console.log('API_ERR', err);
  },
);

axios.interceptors.response.use((response: any) => {
  return response;
});

/** Set common header parameters */
axios.defaults.headers.common = {
  Accept: 'application/json; charset=utf-8',
  'App-Version': '1.0.0',
  'Content-type': 'multipart/form-data',
};

/**
 * Set header authorization
 * @param token     Authorization token
 */
const setHeaderAuthorization = (token: string | null | undefined) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = null;
  }
};

const setAdditionalHeaderField = (field: string | null | undefined) => {
  axios.defaults.headers.common.documentType = field;
};

/**
 * Set header timezone
 * @param timezone     timezone
 */
const setLocalTimezone = (timezone: string | null | undefined) => {
  if (timezone) {
    axios.defaults.headers.common.timezone = timezone;
  } else {
    axios.defaults.headers.common.timezone = null;
  }
};

/**
 * Cancel all Request
 */
const cancelAllRequest = () => {
  source.cancel();
  setTimeout(() => {
    source = CancelToken.source();
  }, 1500);
};

/**
 * Parse and return HTTP API response
 * @param res
 */
const getResponse = (res?: any) => {
  if (res && (res.status === 200 || res.status === 204)) {
    return res.data;
  }
  throw new Error('Something went wrong');
};

/**
 * Get request
 * @param path      API url path
 * @param params    Request parameters
 */
const get = (path: string, params?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(path, {params, cancelToken: source.token})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Post request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
const post = (path: string, params?: any, headers?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(path, params || {}, {headers})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Put request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
const put = (path: string, params?: any, headers?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .put(path, params || {}, {headers, cancelToken: source.token})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Post request
 * @param path      API url path
 * @param params    Request parameters
 * @param headers   Request headers
 */
const deleteService = (path: string, params?: any) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .delete(path, params || {})
        .then(getResponse)
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  get,
  post,
  put,
  deleteService,
  setHeaderAuthorization,
  cancelAllRequest,
  setLocalTimezone,
  setAdditionalHeaderField,
};
