import React, { useState } from "react";
import { ElipseButton, ChecklistItem } from "../";
import styled from "styled-components";
import { uid } from "uid";

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledInput = styled.input`
  border-radius: 20px;
  border: none;
  height: 45px;
  width: 350px;
  padding-left: 10px;
  text-align: left;
`;

const TodoChecklistForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ElipseButtonDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 275px;
  transform: translateY(-50%);
`;

const StyledList = styled.ol`
  margin-left: -25px;
  margin-right: 20px;
`;

export const TodoChecklist = ({
  onChecklistChange,
  checklist,
  handleChecklistCompleted,
  isEdit,
  removeChecklistItem
}) => {
  const [checklistItem, setChecklistItem] = useState("");

  const handleInputChange = (e) => {
    setChecklistItem(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (checklistItem) {
      let newChecklist = [
        ...checklist,
        { id: uid(), check: checklistItem, completed: false }
      ];
      onChecklistChange(newChecklist);
      setChecklistItem("");
    }
  };

  return (
    <div>
      <h3>Add Checklist Items</h3>
      <TodoChecklistForm onSubmit={handleAddItem}>
        <InputContainer>
          <StyledInput
            value={checklistItem}
            onChange={handleInputChange}
            placeholder="Checklist item"
          />
          <ElipseButtonDiv>
            <ElipseButton
              text="Add Subtask"
              color="white"
              backgroundColor="#3498db"
              onClick={handleAddItem}
              width="70px"
            />
          </ElipseButtonDiv>
        </InputContainer>
      </TodoChecklistForm>
      <div>
        <StyledList>
          {checklist?.map((item, index) => (
            <div key={index}>
              <ChecklistItem
                id={item.id}
                check={item.check}
                completed={item.completed}
                buttonVisibility="hidden"
                isEdit={isEdit}
                removeChecklistItem={removeChecklistItem}
              />
            </div>
          ))}
        </StyledList>
      </div>
    </div>
  );
};
