import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Blog } from "store/types";

interface IBlogState {
  blog: Array<Blog.BlogItem>;
  blogDetail: Blog.BlogItem | null;
  len: number;
}

const initialState: IBlogState = {
  blog: [],
  blogDetail: null,
  len: 0,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    getBlogRequest(
      _state: IBlogState,
      _action: PayloadAction<Blog.IBlogPayload>
    ) {},
    getBlogSuccess(
      state: IBlogState,
      action: PayloadAction<Blog.IBlogSuccessPayload>
    ) {
      state.blog = [...action.payload.blog];
      state.len = action.payload.len;
    },
    createBlogRequest(
      _state: IBlogState,
      _action: PayloadAction<Blog.ICreateBlogPaylod>
    ) {},
    createBlogSuccess(
      state: IBlogState,
      action: PayloadAction<Blog.ICreateBlogSuccessPayload>
    ) {
      state.blog = action.payload.blog;
      state.len = action.payload.len;
    },
    getDetailBlogRequest(_state: IBlogState, _action: PayloadAction<number>) {},
    getDetailBlogSuccess(
      state: IBlogState,
      action: PayloadAction<Blog.BlogItem>
    ) {
      state.blogDetail = action.payload;
    },
  },
});

export const blogActions = blogSlice.actions;
export const blogReducers = blogSlice.reducer;
