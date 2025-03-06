//reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }], //sample todo inside todos array  //initial state //store in const variable
};

//createSlice fuction---using creating slice(bundle of reducer and actions)
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // all reducers change state and return updated state
    //reducer--1
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation of array etc //in normal ract array we cant pass noraml value like this--...destructure krna padta waha..push nhi kr skte, new array create krna padta, aur purnae array ko uspe copy krna hota aur naye array ko uske annder addd krte
    },
    //reducer ---2
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // reducer --3
    marksAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

//action creators are generated for each case reducer function
export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;
