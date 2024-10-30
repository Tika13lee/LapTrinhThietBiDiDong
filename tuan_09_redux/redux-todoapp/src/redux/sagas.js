import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS, setTodos,  REMOVE_TODO, DELETE_TODO_SUCCESS } from './actions';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, API_URL);
    const data = yield response.json();
    yield put(setTodos(data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}


function* todoSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
}

export default todoSaga;
