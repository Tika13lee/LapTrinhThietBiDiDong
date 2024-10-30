import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './src/screen/TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
