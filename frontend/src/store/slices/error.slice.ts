import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IErrorState {
  error: string;
}

const initialState: IErrorState = {
  error: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    getError(state: IErrorState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state: IErrorState){
        state.error = "";
    }
  },
});

export const errorActions = errorSlice.actions;
export const errorReducers = errorSlice.reducer;
