import { InternalAxiosRequestConfig } from 'axios';
import { printRequestLog } from '@/utils/interceptor/logger';
// import { getServerAuthSession } from '@/utils/authOptions';
// import { getSession } from 'next-auth/react';

const publicRoutes = new Set<string>([]);
export async function setAccessToken(config: InternalAxiosRequestConfig) {
  if (config.url && publicRoutes.has(config.url)) {
    return config;
  }

  /**
   * NOTE: Handle authorization
   */
  //   const session = (await getSession()) ?? (await getServerAuthSession());

  //   if (!session) {
  //     return config;
  //   }

  //   (config.headers as AxiosRequestHeaders)['Authorization'] = `Bearer ${session.user.accessToken}`;
  return config;
}

export function logRequest(config: InternalAxiosRequestConfig) {
  printRequestLog({
    method: config.method,
    endPoint: config.url,
    requestParams: config.params,
    requestData: config.data,
    config,
  });

  return config;
}
