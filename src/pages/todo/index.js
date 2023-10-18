import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useParams, Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext/index";
import { setTodosInStorage } from "../../utils/index";

import { calculateCompletionPercentage } from "../../utils";
import {
  ColoredCircle,
  CardParams,
  CardTags,
  ProgressBar,
  ChecklistItem,
  PageHeader,
  ElipseButton
} from "../../components";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: 0 auto;
`;

const TodoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 15px;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TodoCardHeader = styled.div`
  display: flex;
`;

const TodoChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledList = styled.ol`
  margin: 0;
  padding: 0;
`;

const TodoButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const DuoButtonContainer = styled.div``;

const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 18px 0;
  width: 250px;
`;

const Todo = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const todoId = useParams().todoId;
  const todoData = todos.find((todo) => String(todo.id) === todoId);
  const completionPercentage = calculateCompletionPercentage(todoData);

  if (!todoData) {
    return <div>Loading...</div>;
  }

  const handleRemoveTodo = () => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodosInStorage(newTodos);
    setTodos(newTodos);
  };

  const handleChecklistItemCompleted = (checklistId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        const updatedChecklist = todo.checklist.map((checklistItem) => {
          if (checklistItem.id === checklistId) {
            return { ...checklistItem, completed: !checklistItem.completed };
          }
          return checklistItem;
        });
        const tempTodo = { ...todo, checklist: updatedChecklist };
        const completionPercentage = calculateCompletionPercentage(tempTodo);

        return {
          ...todo,
          checklist: updatedChecklist,
          completed: completionPercentage === 100
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContainer>
      <PageHeader
        text="Task Details"
        firstIcon={faArrowLeft}
        secondIconDisplay="visible"
        secondIcon={faEdit}
        todoId={todoId}
        hasFirstButton={true}
        hasSecondButton={true}
      />
      <TodoCardContainer>
        <TodoCardHeader>
          <ColoredCircle size={20} todo={todoData} />
          <h2>{todoData.task}</h2>
        </TodoCardHeader>
        <CardParams todo={todoData} />
        <CardTags todo={todoData} />
        <ProgressBar percentage={completionPercentage} />
      </TodoCardContainer>
      <TodoChecklistContainer>
        <h4>Checklist for subtasks</h4>
        <StyledList>
          {todoData.checklist.map((checklistItem) => {
            return (
              <ChecklistItem
                id={checklistItem.id}
                check={checklistItem.check}
                completed={checklistItem.completed}
                checklistCompleted={handleChecklistItemCompleted}
                isEdit={false}
              />
            );
          })}
        </StyledList>
      </TodoChecklistContainer>
      <TodoButtonContainer>
        <DuoButtonContainer>
          <Link to={`/EditTodoPage/${todoId}`}>
            <ElipseButton
              text="Edit Task"
              width="150px"
              backgroundColor="#dde7ed"
            />
          </Link>
          <Link to="/">
            <ElipseButton
              text="Remove Task"
              width="150px"
              backgroundColor="#edc5c5"
              onClick={handleRemoveTodo}
            />
          </Link>
        </DuoButtonContainer>
        <ElipseButton
          text="Repeat Tasks"
          width="325px"
          backgroundColor="#3498db"
          color="white"
        />
      </TodoButtonContainer>
    </TodoContainer>
  );
};

export default Todo;
