import { all, fork } from "redux-saga/effects";
import authSaga from "./auth.saga";
import blogSaga from "./blog.saga";

export function* appSaga() {
  yield all([fork(authSaga), fork(blogSaga)]);
}
