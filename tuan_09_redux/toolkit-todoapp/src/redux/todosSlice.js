import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
