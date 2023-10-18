import React from "react";
import styled from "styled-components";

const DueDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  border-radius: 20px;
  border: none;
  height: 30px;
  padding: 0 15px;
`;

export const TodoDueDate = ({
  onTimeChange,
  onDateChange,
  dateSelection,
  timeSelection
}) => {
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    onDateChange(newDate.toString());
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    onTimeChange(newTime);
  };

  return (
    <DueDateContainer>
      <div>
        <h3>Select Due Date</h3>
        <StyledInput
          type="date"
          onChange={handleDateChange}
          value={dateSelection}
        />
      </div>
      <div>
        <h3>Time</h3>
        <StyledInput
          type="time"
          onChange={handleTimeChange}
          value={timeSelection}
        />
      </div>
    </DueDateContainer>
  );
};
