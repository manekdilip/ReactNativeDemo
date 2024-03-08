import {BASE_URL} from '../constants/endPoints';
import API from './apiHelper';

export const userList = async (params: any) => {
  const response = await API.get(`${BASE_URL}?page=${params.page}&results=10`);
  return response;
};
