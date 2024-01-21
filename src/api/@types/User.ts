import { Awaitable, User } from 'next-auth';

export interface UserLoginPayload {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface UserClient {
  login(payload: UserLoginPayload): Awaitable<User | null>;
}
