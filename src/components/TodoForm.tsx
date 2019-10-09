import React, { useState } from 'react';
import { useStore } from '../contexts';

// type TodoFormProps = {
//   addTask: (taskTitle: string) => void;
// }

function TodoForm() {
  const [value, setValue] = useState('');
  const store = useStore();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    store.addTask(value)
    setValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={e => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  )

}

export default TodoForm;