import { TodoItem } from "./index";

const TodoList = ({ todos, toggleComplete, handleDelete }) => {



  return (
    <ul className="TodoList">
      {
        todos && todos.map((todo, index) =>
          <TodoItem todo={todo} key={index} toggleComplete={toggleComplete} handleDelete={handleDelete} />
        )
      }
    </ul>
  );
};

export default TodoList;
