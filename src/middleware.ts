export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/analytics/:path*', '/overview/:path*', '/search/:path*'],
};
