import { useState } from "react";
import { AddTodo, TodoList } from "./Components/index";
import todoList from "./todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAdd = (title) => {
    let newId = 1
    todos.forEach((todo) => newId = newId < todo.id ? todo.id : newId)
    newId++

    let newTodo = {
      id: newId,
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed }
      } else {
        return todo
      }
    }))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo List:</h1>
      <AddTodo handleAdd={handleAdd} />
      <TodoList todos={todos} toggleComplete={toggleComplete} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
