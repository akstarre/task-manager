import styled from "styled-components";
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { ColoredCircle, CircleButton } from "../../components";
import { useState } from "react";

const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditCheckContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: bold;
  color: black;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 220px;
`;

export const CardHeader = ({ todo, handleCompleteTask }) => {
  return (
    <CardHeaderContainer>
      <TitleDiv>
        <ColoredCircle todo={todo} size={18} />
        <StyledLink to={`/todo/${todo.id}`}>{todo.task}</StyledLink>
      </TitleDiv>

      <EditCheckContainer>
        <Link to={`/EditTodoPage/${todo.id}`}>
          <CircleButton
            icon={faEdit}
            size={"30px"}
            backgroundColor={"#dde7ed"}
            onClick={() => {}}
          />
        </Link>

        <CircleButton
          icon={faCheck}
          size={"30px"}
          backgroundColor={todo.completed ? "#3498db" : "#dde7ed"}
          onClick={() => handleCompleteTask(todo.id)}
        />
      </EditCheckContainer>
    </CardHeaderContainer>
  );
};
