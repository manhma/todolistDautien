import { useState, useEffect } from "react";

function Todo({
  onDeleteTodo,
  todo,
  setInputEdit,
  onEditTodo,
  handleCompleted,
}) {
  const [editBox, setEditBox] = useState(false);

  const disableEditBox = () => {
    setEditBox(false);
  };
  return (
    <div className="todo">
      <div className="todoContent">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCompleted(todo.id)}
        />
        {editBox ? (
          <>
            <form onSubmit={(e) => onEditTodo(todo.id, e, disableEditBox)}>
              <input
                onChange={(e) => setInputEdit(e.target.value)}
                defaultValue={todo.title}
              />
            </form>
          </>
        ) : (
          <div
            style={{
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? "rgb(245, 195, 195)" : "black",
            }}
            className="todoTitle"
            onDoubleClick={() => setEditBox(!editBox)}
          >
            {todo.title}
          </div>
        )}

        <span className="btnDelete" onClick={() => onDeleteTodo(todo.id)}>
          x
        </span>
      </div>
      <hr></hr>
    </div>
  );
}
export default Todo;
