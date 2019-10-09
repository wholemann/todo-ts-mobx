import React from 'react';
import TodoList from './components/TodoList';
import { StoreProvider } from './contexts';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <StoreProvider>
      <TodoList />
      <TodoForm />
    </StoreProvider>
  );
}

export default App;
