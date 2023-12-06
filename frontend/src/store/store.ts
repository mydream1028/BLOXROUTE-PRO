import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { Slices, Actions } from "./slices";
import { appSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer: Slices,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});

export const AppActions = Actions;

sagaMiddleware.run(appSaga);

export * as AppActionTypes from "./types";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
