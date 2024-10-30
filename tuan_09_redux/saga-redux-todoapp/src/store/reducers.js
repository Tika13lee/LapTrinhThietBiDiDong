// reducers.js
import { ADD_TODO, REMOVE_TODO, SET_TODOS } from "./actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state };
    case FETCH_TODO_SUCCESS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
