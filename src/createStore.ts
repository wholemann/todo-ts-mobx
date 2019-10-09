export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export function createStore() {

  return {
    todos: [] as Todo[],
    addTask(text: string) {
      const nextId = Math.max(0, ...this.todos.map(todo => todo.id)) + 1;
      this.todos = [ 
        ...this.todos,
        {
          id: nextId,
          text,
          done: false
        }
      ]
    },
    toggleTask(todo: Todo) {
      todo.done = !todo.done;
    },
    removeTask(todo: Todo) {
      this.todos = this.todos.filter(v => !(v.id === todo.id));
    },
  }
}

export type TStore = ReturnType<typeof createStore>