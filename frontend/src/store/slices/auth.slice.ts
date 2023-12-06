import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Auth } from "store/types";

interface IAuthState {
  isAuth: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: Auth.User | null;
  error: {
    login: string;
    register: string;
  };
}

const initialState: IAuthState = {
  isAuth: false,
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
  user: null,
  error: { login: "", register: "" },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest(
      state: IAuthState,
      _action: PayloadAction<Auth.ILoginPayload>
    ) {
      state.isAuth = false;
    },
    loginSuccess(
      state: IAuthState,
      action: PayloadAction<Auth.ILoginSuccessPayload>
    ) {
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    loginFailure(
      state: IAuthState,
      action: PayloadAction<Auth.ILoginFailurePayload>
    ) {
      state.isAuth = false;
      state.error.login = action.payload.error;
      state.error.register = "";
    },
    registerRequest(
      _state: IAuthState,
      _action: PayloadAction<Auth.IRegisterPayload>
    ) {},
    registerSuccess(state: IAuthState) {
      state.error.login = "";
      state.error.register = "";
    },
    registerFailure(
      state: IAuthState,
      action: PayloadAction<Auth.IRegisterFailurePayload>
    ) {
      state.error.login = "";
      state.error.register = action.payload.error;
    },
    logoutRequest(
      state: IAuthState,
      action: PayloadAction<Auth.ILogoutPayload>
    ) {
      localStorage.clear();
      state.isAuth = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.error.login = "";
      state.error.register = "";
      state.user = null;
      action.payload.next();
    },
    getUserRequest(_state: IAuthState) {},
    getUserSuccess(state: IAuthState, action: PayloadAction<Auth.User>) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;
