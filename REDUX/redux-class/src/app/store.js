import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//Setup Basic Store--passing Reducers
export const store = configureStore({
  reducer: todoReducer,
});
