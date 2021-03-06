import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from './components/Todo'

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="background">
      <header className="header">
        <h1> To do</h1>
      </header>
      <body className="paper">
        <Form
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setinputText={setinputText}
          setStatus={setStatus}
        />
        <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
      </body>
    </div>
  );
}

export default App;
