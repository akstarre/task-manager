import React from "react";
import styled from "styled-components";
import { ProgressRadial, CardHeader, CardParams, CardTags } from "../";
import { calculateCompletionPercentage } from "../../utils/index";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 15px;
  width: 350px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  :hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const CardProgress = styled.div`
  width: 70px;
  height: 70px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TodoCard = ({
  todo,
  handleCompleteTask,
  editMode,
  onEdit,
  handleEditMode
}) => {
  const completionPercentage = calculateCompletionPercentage(todo);

  return (
    <CardContainer>
      <CardHeader
        todo={todo}
        handleCompleteTask={handleCompleteTask}
        handleEditMode={handleEditMode}
        editMode={editMode}
        onEdit={onEdit}
      />

      <StyledLink to={`/todo/${todo.id}`}>
        <CardContent>
          <CardParams todo={todo} />
          <CardProgress>
            <ProgressRadial percentage={completionPercentage} />
          </CardProgress>
        </CardContent>
      </StyledLink>
      <CardTags todo={todo} isEdit={false} />
    </CardContainer>
  );
};
