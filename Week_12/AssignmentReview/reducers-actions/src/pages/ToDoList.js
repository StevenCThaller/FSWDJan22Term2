import React, { useReducer, useState } from "react";
import { ToDoItem, CompletedItem, AddItem } from "../components";
import { Container, Button } from "react-bootstrap";

function reducer(state, action) {
  switch (action.type) {
    case "edit":
      state.toDoItems[action.index].inEdit = true;
      return { ...state };
    case "save":
      state.toDoItems[action.index].inEdit = false;
      state.toDoItems[action.index].task = action.task;
      return { ...state };
    case "complete":
      state.toDoItems[action.index].completed = true;
      return { ...state };
    case "delete":
      state.toDoItems.splice(action.index, 1);
      return { ...state };
    case "add":
      state.toDoItems.push({ task: "", completed: false, inEdit: true });
      return { ...state };
    case "reOrder": // direction is "increase" or "decrease"
      const swapIndex =
        action.direction === "increase" && action.index > 0
          ? -1
          : action.direction === "decrease" &&
            action.index < state.toDoItems.length - 1
          ? 1
          : 0;
      // [
      //   state.toDoItems[action.index],
      //   state.toDoItems[action.index + swapIndex],
      // ] = [
      //   state.toDoItems[action.index + swapIndex],
      //   state.toDoItems[action.index],
      // ];

      let removed = state.toDoItems[action.index];
      state.toDoItems.splice(action.index, 1);
      state.toDoItems.splice(action.index + swapIndex, 0, removed);
      return { ...state };
    case "deComplete":
      state.toDoItems[action.index].completed = false;
      return { ...state };
    default:
      throw new Error();
  }
}

export default function ContactList(props) {
  const [seeCompleted, setSeeCompleted] = useState(false);

  const initialState = { toDoItems: props.toDoItems, inEdit: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  /** 
    function editTask
    parameter: index - index of toDo item in array

    dispatch type: 'edit'
  */
  const editTask = (index) => {
    dispatch({ type: "edit", index });
  };

  /** 
    function saveTask
    parameter: index - index of toDo item in array
    parameter: task - text of toDo item task

    dispatch type: 'save'
  */
  const saveTask = (index, task) => {
    dispatch({ type: "save", index, task });
  };

  /** 
    function completeTask
    parameter: index - index of toDo item in array

    dispatch type: 'complete'
  */
  const completeTask = (index) => {
    dispatch({ type: "complete", index });
  };

  /** 
    function deleteTask
    parameter: index - index of toDo item in array

    dispatch type: 'delete'
  */
  const deleteTask = (index) => {
    dispatch({ type: "delete", index });
  };

  /** 
    function addTask

    dispatch type: 'add'
  */
  const addTask = () => {
    dispatch({ type: "add" });
  };

  /** 
    function reOrderTask
    parameter: index - index of toDo item in array
    parameter: direction - either 'increment' or 'decrement' signifies which direction to move a task

    dispatch type: 'add'
  */
  const reOrderTask = (index, direction) => {
    dispatch({ type: "reOrder", index, direction });
  };

  /** 
    function completeTask
    parameter: index - index of toDo item in array

    dispatch type: 'complete'
  */
  const deCompleteTask = (index) => {
    dispatch({ type: "deComplete", index });
  };

  const list = state.toDoItems.map((v, i) => {
    if (!v.completed) {
      return (
        <ToDoItem
          key={i}
          index={i}
          toDoItem={v}
          handlers={{
            editTask,
            saveTask,
            completeTask,
            deleteTask,
            reOrderTask,
          }}
        />
      );
    }
  });
  const completedList = state.toDoItems.map((v, i) => {
    if (v.completed) {
      return (
        <CompletedItem
          key={i}
          index={i}
          task={v.task}
          deCompleteTask={deCompleteTask}
        />
      );
    }
  });
  return (
    <>
      {JSON.stringify(state)}
      <Container className="justify-content-lg-center ContactContainer">
        <Button
          variant="primary"
          onClick={() => setSeeCompleted(!seeCompleted)}
        >
          {seeCompleted ? "See Incomplete Tasks" : "See Completed Tasks"}
        </Button>
        {seeCompleted ? completedList : list}
        <AddItem addTask={addTask} />
      </Container>
    </>
  );
}
