import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User extends Omit<DefaultSession, 'name' | 'email' | 'image'> {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  }
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  }
}
