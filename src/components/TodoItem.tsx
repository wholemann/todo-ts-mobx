import React from 'react';
import './TodoItem.css';
import { Todo } from '../createStore';
import { useObserver } from 'mobx-react';

export type TodoItemProps = {
  todo: Todo;
  toggleTask: (todo: Todo) => void;
  removeTask: (todo: Todo) => void;
}

function TodoItem({ todo, toggleTask, removeTask }: TodoItemProps) {

  const onToggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    toggleTask(todo);
  };

  const onRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    removeTask(todo);
  };

  return useObserver(() =>
    <li className={`TodoItem ${todo.done ? 'done' : ''}`} onClick={onToggle} >
      <span className="text" >
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove} >
        (X)
      </span>
    </li>
  );
}

export default TodoItem;