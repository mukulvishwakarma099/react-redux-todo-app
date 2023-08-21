import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: 1, content: "Hit the gym" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: nanoid(),
        content: action.payload,
      };
      state.value.push(newTodoList);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
