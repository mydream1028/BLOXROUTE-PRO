import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { Actions } from "store/slices";
import { ResponseGenerator } from "store/types";
import { ILoginPayload, IRegisterPayload } from "store/types/auth";
import api from "utils/api";

export function* loginSaga(action: PayloadAction<ILoginPayload>) {
  try {
    yield put(Actions.load.endLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().post("login/", action.payload)
    );
    if (result.data) {
      yield put(
        Actions.auth.loginSuccess({
          accessToken: result.data.access,
          refreshToken: result.data.refresh,
        })
      );
      localStorage.clear();
      localStorage.setItem("access_token", result.data.access);
      localStorage.setItem("refresh_token", result.data.refresh);
      action.payload.next();
    }
  } catch (e: any) {
    yield put(
      Actions.auth.loginFailure({ error: "Email or password is incorrect." })
    );
    localStorage.clear();
  }
}

export function* registerSaga(action: PayloadAction<IRegisterPayload>) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api().post("register/", action.payload)
    );
    if (result.data) {
      action.payload.next();
    }
  } catch (e: any) {
    yield put(Actions.auth.registerFailure({ error: e.message }));
  }
}

export function* getUserSaga() {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api(false, false).get("getuser/")
    );
    if (result.data) {
      yield put(Actions.auth.getUserSuccess(result.data));
      yield put(Actions.error.clearError());
    }
  } catch (e: any) {
    yield put(Actions.error.getError(e.message));
  }
}

function* authSaga() {
  yield takeLatest(Actions.auth.loginRequest.type, loginSaga);
  yield takeLatest(Actions.auth.registerRequest.type, registerSaga);
  yield takeLatest(Actions.auth.getUserRequest.type, getUserSaga);
}

export default authSaga;
