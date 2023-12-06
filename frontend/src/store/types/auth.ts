export interface ILoginPayload {
  username: string;
  password: string;
  next: () => void;
}

export interface ILoginSuccessPayload {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginFailurePayload {
  error: string;
}

export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
  next: () => void;
}

export interface IRegisterFailurePayload {
  error: string;
}

export interface ILogoutPayload {
  next: () => void;
}

export interface User {
  username: string;
  email: string;
  id: number;
}
