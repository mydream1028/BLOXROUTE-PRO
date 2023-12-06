import { createSlice } from "@reduxjs/toolkit";

interface ILoadState {
  loading: boolean;
}

const initialState: ILoadState = {
  loading: false,
};

const loadSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    startLoading(state: ILoadState) {
      state.loading = true;
    },
    endLoading(state: ILoadState){
        state.loading = false;
    }
  },
});

export const loadActions = loadSlice.actions;
export const loadReducers = loadSlice.reducer;
