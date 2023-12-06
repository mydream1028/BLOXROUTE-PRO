import { combineReducers } from "@reduxjs/toolkit";
import { authReducers, authActions } from "./auth.slice";
import { blogReducers, blogActions } from "./blog.slice";
import { errorReducers, errorActions } from "./error.slice";
import { loadReducers, loadActions } from "./load.slice";

export const Slices = combineReducers({
  auth: authReducers,
  blog: blogReducers,
  error: errorReducers,
  load: loadReducers,
});

export const Actions = {
  auth: authActions,
  blog: blogActions,
  error: errorActions,
  load: loadActions,
};
