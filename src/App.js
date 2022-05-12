import { useEffect, useState } from "react";
import Todos from "./Todos";
import Filter from "./Filter";
import "./App.css";
import Hehe from "./Hehe";

function App() {
  const [input, setInput] = useState(null);
  const [todos, setTodo] = useState([]);
  const [inputEdit, setInputEdit] = useState();
  const [btnFilter, setBtnFilter] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => setTodo(todos.filter((todo) => todo.id < 15)));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(() => {
      const newTodo = {
        userId: 1,
        id: new Date().getTime(),
        title: input,
        completed: false,
      };
      return [...todos, newTodo];
    });
    setInput("");
  };
  const handleDelete = (id) => {
    setTodo(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEditTodo = (id, e, disableEditBox) => {
    e.preventDefault();
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return {
          userId: todo.userId,
          id: todo.id,
          title: inputEdit,
          completed: todo.completed,
        };
      } else return todo;
    });
    setTodo(newArray);
    disableEditBox();
  };

  const handleCompleted = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return {
          userId: todo.userId,
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        };
      } else return todo;
    });
    setTodo(newArray);
  };

  const handleFilter = (a) => {
    setBtnFilter(a);
  };
  const handleDeleteCompleted = () => {
    setTodo(todos.filter((todo) => todo.completed !== true));
    console.log(1);
  };
  return (
    <Hehe>
      <div className="App">
        <h1 className="heading">Todolist</h1>
        <div className="content">
          <div className="contentTop">
            <label className="plus">+</label>
            <form onSubmit={handleSubmit}>
              <input
                className="inputTodo"
                placeholder="Nhap gi do di"
                value={input || ""}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          <hr className="hr"></hr>
          <Todos
            todos={todos}
            onDeleteTodo={handleDelete}
            onEditTodo={handleEditTodo}
            setInputEdit={setInputEdit}
            inputEdit={inputEdit}
            btnFilter={btnFilter}
            handleCompleted={handleCompleted}
          />
          <Filter
            todos={todos}
            handleFilter={handleFilter}
            handleDeleteCompleted={handleDeleteCompleted}
            btnFilter={btnFilter}
          />
        </div>
      </div>
    </Hehe>
  );
}

export default App;
