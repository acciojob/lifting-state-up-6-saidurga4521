import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      TodoList
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completion && (
              <button
                onClick={() => {
                  handleComplete(todo.id);
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
