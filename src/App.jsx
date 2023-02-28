import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleChildData = (childData) => {
    setTodos([...todos, childData]);
  };

  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <hr />  
      <NewTodo onChildData={handleChildData} />
      <div className="todos">
        <h2>Todos</h2>
        {todos.map((todo, index) => (
          <Todos
            key={index}
            title={todo.title}
            description={todo.description}
            id={todo.id}
            onRemoveTodo={handleRemoveTodo}
          />
        ))}
      </div>
    </div>
  );
}
