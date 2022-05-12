import { useState } from "react";
import Todo from "./Todo";

function Todos({
  onDeleteTodo,
  todos,
  onEditTodo,
  setInputEdit,
  btnFilter,
  handleCompleted,
}) {
  const todoActive = todos.filter((todo) => todo.completed !== true);
  const todoCompleted = todos.filter((todo) => todo.completed === true);
  if (btnFilter === 1) {
    return (
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            setInputEdit={setInputEdit}
            handleCompleted={handleCompleted}
          />
        ))}
      </div>
    );
  }
  if (btnFilter === 2) {
    return (
      <div>
        {todoActive.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            setInputEdit={setInputEdit}
            handleCompleted={handleCompleted}
          />
        ))}
      </div>
    );
  }
  if (btnFilter === 3) {
    return (
      <div>
        {todoCompleted.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
            setInputEdit={setInputEdit}
            handleCompleted={handleCompleted}
          />
        ))}
      </div>
    );
  }
}
export default Todos;
