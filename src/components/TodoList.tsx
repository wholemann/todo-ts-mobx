import React from 'react';
import TodoItem from './TodoItem';
import { useStore } from '../contexts';
import { useObserver } from 'mobx-react';

function TodoList() {
  const store = useStore();

  return useObserver(() => 
    <>
        {store.todos.map(todo => 
          <TodoItem todo={todo} key={todo.id} toggleTask={store.toggleTask} removeTask={store.removeTask} />
        )}
    </>
  );
}

export default TodoList;