import { useState } from "react";

interface ITodoItem {
    todo: ITodos,
    onToggle: (id: number) => void
}

function TodoItem({ todo, onToggle }: ITodoItem) {
  return (
    <div onClick={() => onToggle(todo.id)}>
      <input 
        type="checkbox" 
        checked={todo.completed}
      />
      <span>{todo.text}</span>
    </div>
  );
}

interface ITodos {
    id: number,
    text: string,
    completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<ITodos[]>([
    { id: 1, text: 'Купить молоко', completed: false },
    { id: 2, text: 'Изучить React', completed: false }
  ]);
  
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={() => toggleTodo(todo.id)} />
      ))}
    </div>
  );
}

//проставить типизацию и проверить функционал исправить ошибку