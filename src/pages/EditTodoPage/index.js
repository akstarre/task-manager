import React, { useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { EditTodoForm, PageHeader, TodoForm } from "../../components";
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../../context/TodoContext/index";
import { TagsContext } from "../../context/TagsContext/index";
import { setTodosInStorage } from "../../utils/index";

const EditTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: 0 auto;
`;

const EditTodoPage = () => {
  const todoId = useParams().todoId;
  const { todos, setTodos } = useContext(TodoContext);
  const todoData = todos.find((todo) => String(todo.id) === todoId);
  const [todoEdit, setTodoEdit] = useState(todoData);
  const navigate = useNavigate();

  const updateTodoData = (updatedTodoData) => {
    setTodoEdit(updatedTodoData);
  };

  const submitTodoEdit = (e) => {
    e.preventDefault();
    todoEdit.dueObject = new Date(`${todoEdit.dueDate}T${todoEdit.dueTime}`);

    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return todoEdit;
      }
      return todo;
    });
    setTodos(newTodos);
    setTodosInStorage(newTodos);
    navigate(`/todo/${todoId}`);
  };

  return (
    <EditTodoContainer>
      <PageHeader
        text="Edit Todo"
        firstIcon={faArrowLeft}
        hasFirstButton={true}
      />
      <TodoForm
        todoData={todoEdit}
        updateTodo={updateTodoData}
        handleTodoSubmit={submitTodoEdit}
        isTodoEdit={true}
        todoId={todoId}
        pageText="Save Task"
      />
    </EditTodoContainer>
  );
};

export default EditTodoPage;
