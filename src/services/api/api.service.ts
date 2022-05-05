import axios, {AxiosRequestConfig} from 'axios';

import {Endpoints, IdentityResponse} from './types';

const axiosInstance = axios.create({
  baseURL: 'https://truefilter.herokuapp.com',
});

const ApiService = {
  get: async <T>(path: string, config?: AxiosRequestConfig): Promise<T> => {
    const {data} = await axiosInstance.get<T>(path, config);

    return data;
  },
  getIdentity: async (message: string): Promise<IdentityResponse> => {
    return await ApiService.get<IdentityResponse>(`${Endpoints.Identity}/${message}`);
  },
};

export default ApiService;
