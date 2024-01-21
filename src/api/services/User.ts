import { UserClient } from '@/api/@types/User';
import { axiosInstance } from '@/api/client';

const ROUTE_V1 = '/auth';

export const UserService: UserClient = {
  login: async (request) => {
    return await axiosInstance.post(`${ROUTE_V1}/login`, request);
  },
};
