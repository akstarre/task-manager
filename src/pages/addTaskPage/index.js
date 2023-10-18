import React, { useState, useContext } from "react";
import { TodoForm, PageHeader } from "../../components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/TodoContext/index";
import { setTodosInStorage } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";

const CreateTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: 0 auto;
`;

const CreateTodoPage = () => {
  const [newTodo, setNewTodo] = useState({
    id: uid(),
    task: "",
    priority: null,
    complexity: null,
    dueDate: null,
    dueTime: null,
    dueObject: null,
    checklist: [],
    tags: [],
    tagColor: Math.floor(Math.random() * 7),
    completed: false
  });
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  const updateNewTodo = (updatedTodo) => {
    setNewTodo(updatedTodo);
  };

  const submitNewTodo = (e) => {
    e.preventDefault();
    newTodo.dueObject = new Date(`${newTodo.dueDate}T${newTodo.dueTime}`);
    const newestTodo = newTodo;
    const newTodos = [...todos, newestTodo];
    setTodos(newTodos);
    setTodosInStorage(newTodos);

    //reset todo
    setNewTodo({
      id: uid(),
      task: "",
      priority: 0,
      complexity: 0,
      dueDate: null,
      dueTime: null,
      dueObject: null,
      checklist: [],
      tags: [],
      completed: false
    });
    navigate("/");
  };

  return (
    <CreateTodoContainer>
      <PageHeader
        text="Add New Task"
        firstIcon={faArrowLeft}
        secondIconDisplay="hidden"
        switchDisplay="hidden"
        hasFirstButton={true}
      />
      <TodoForm
        todoData={newTodo}
        updateTodo={updateNewTodo}
        handleTodoSubmit={submitNewTodo}
        pageText="Add Task"
      />
    </CreateTodoContainer>
  );
};

export default CreateTodoPage;
