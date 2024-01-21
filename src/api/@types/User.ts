export interface UserLoginPayload {
  username: string;
  password: string;
  expiresInMins?: number;
}
export interface UserLoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface UserClient {
  login(payload: UserLoginPayload): Promise<UserLoginResponse>;
}
