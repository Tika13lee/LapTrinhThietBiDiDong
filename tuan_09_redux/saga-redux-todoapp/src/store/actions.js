// actions.js
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const SET_TODOS = "SET_TODOS";

export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const setTodos = (todos) => ({ type: SET_TODOS, payload: todos });

export const fetchTodoRequest = () => ({ type: FETCH_TODO_REQUEST });
export const fetchTodoSuccess = (todos) => ({
  type: FETCH_TODO_SUCCESS,
  payload: todos,
});
