import { call, put, takeLatest } from "redux-saga/effects";
import { Actions } from "store/slices";
import api from "utils/api";
import { ResponseGenerator } from "store/types";

export function* getBlogSaga(action: any) {
  try {
    yield put(Actions.load.startLoading());
    const result: ResponseGenerator = yield call(
      async () =>
        await api().get("blog/", {
          params: {
            per_page: action.payload.perPage,
            page_num: action.payload.pageNum,
            sort: action.payload.sort,
            keyword: action.payload.keyword,
          },
        })
    );
    if (result.data) {
      yield put(
        Actions.blog.getBlogSuccess({
          blog: result.data.blog,
          len: result.data.len,
        })
      );
      yield put(Actions.error.clearError());
    }
    yield put(Actions.load.endLoading());
  } catch (e: any) {
    yield put(Actions.error.getError(e.message));
    yield put(Actions.load.endLoading());
  }
}

export function* createBlogSaga(action: any) {
  try {
    yield put(Actions.load.startLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().post("blog/", action.payload)
    );
    if (result.data) {
      yield put(Actions.blog.createBlogSuccess(result.data));
      yield put(Actions.error.clearError());
    }
    yield put(Actions.load.endLoading());
  } catch (e: any) {
    yield put(Actions.error.getError(e.message));
    yield put(Actions.load.endLoading());
  }
}

export function* getDetailBlogSaga(action: any) {
  try {
    yield put(Actions.load.startLoading());
    const result: ResponseGenerator = yield call(
      async () => await api().get(`blog/${action.payload}/`)
    );
    if (result.data) {
      yield put(Actions.blog.getDetailBlogSuccess(result.data));
      yield put(Actions.error.clearError());
    }
    yield put(Actions.load.endLoading());
  } catch (e: any) {
    yield put(Actions.error.getError(e.message));
    yield put(Actions.load.endLoading());
  }
}

function* blogSaga() {
  yield takeLatest(Actions.blog.getBlogRequest.type, getBlogSaga);
  yield takeLatest(Actions.blog.createBlogRequest.type, createBlogSaga);
  yield takeLatest(Actions.blog.getDetailBlogRequest.type, getDetailBlogSaga);
}

export default blogSaga;
