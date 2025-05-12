import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completion: false,
    },
    {
      id: 2,
      text: "Bulid a React app",
      completion: false,
    },
    {
      id: 3,
      text: "Deploy the React app",
      completion: false,
    },
  ]);
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completion: true } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
