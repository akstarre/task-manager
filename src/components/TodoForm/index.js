import { useState } from "react";
import styled from "styled-components";
import {
  TodoInput,
  TodoPriorityAndComplexity,
  TodoDueDate,
  TodoChecklist,
  TodoTags,
  ElipseButton
} from "../../components";

const ErrorMessage = styled.span`
  color: red;
  margin: 5px 0;
  font-size: 0.9rem;
`;

const TodoFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoForm = ({
  todoData,
  updateTodo,
  handleTodoSubmit,
  pageText
}) => {
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const [inputValue, setInputValue] = useState(todoData?.task || "");

  //functions
  const handleInputChange = (value) => {
    setInputValue(value);
    const updatedTodo = { ...todoData, task: value };
    updateTodo(updatedTodo);
  };

  const handlePriorityChange = (value) => {
    const updatedTodo = { ...todoData, priority: value };
    updateTodo(updatedTodo);
  };

  const handleComplexityChange = (value) => {
    const updatedTodo = { ...todoData, complexity: value };
    updateTodo(updatedTodo);
  };

  const handleDueDateChange = (value) => {
    const updatedTodo = {
      ...todoData,
      dueDate: value,
      dueString: value.toString()
    };
    updateTodo(updatedTodo);
  };

  const handleDueTimeChange = (value) => {
    const updatedTodo = { ...todoData, dueTime: value };
    updateTodo(updatedTodo);
  };

  const handleChecklistChange = (value) => {
    const updatedTodo = { ...todoData, checklist: value };
    updateTodo(updatedTodo);
  };

  const removeChecklistItem = (checklistId) => {
    const updatedChecklist = todoData.checklist.filter(
      (checklistItem) => checklistItem.id !== checklistId
    );
    const updatedTodo = { ...todoData, checklist: updatedChecklist };
    updateTodo(updatedTodo);
  };

  const handleTagsChange = (value) => {
    const updatedTags = Array.from(new Set([...todoData.tags, ...value]));
    const updatedTodo = { ...todoData, tags: updatedTags };
    updateTodo(updatedTodo);
  };

  const removeTag = (tag) => {
    const updatedTags = todoData.tags.filter((prevTag) => tag !== prevTag);
    const updatedTodo = { ...todoData, tags: updatedTags };
    updateTodo(updatedTodo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentErrors = {};

    // Check each field for errors
    if (!todoData.task) currentErrors.task = "Task Name is required. ";

    if (!Object.keys(currentErrors).length) {
      handleTodoSubmit(e);
      setShowError(false);
    } else {
      setShowError(true);
      setErrors(currentErrors);
    }
  };

  //render
  return (
    <TodoFormContainer>
      <form onSubmit={handleSubmit}>
        <h3>Task Name</h3>
        <TodoInput onInputChange={handleInputChange} value={inputValue} />
        <TodoPriorityAndComplexity
          onPriorityChange={handlePriorityChange}
          prioritySelection={todoData?.priority}
          onComplexityChange={handleComplexityChange}
          complexitySelection={todoData?.complexity}
        />
        <TodoDueDate
          onDateChange={handleDueDateChange}
          dateSelection={todoData?.dueDate}
          onTimeChange={handleDueTimeChange}
          timeSelection={todoData?.dueTime}
        />
        <TodoChecklist
          onChecklistChange={handleChecklistChange}
          checklist={todoData?.checklist}
          isEdit={true}
          removeChecklistItem={removeChecklistItem}
        />
        <TodoTags
          onTagsChange={handleTagsChange}
          todo={todoData}
          removeTag={removeTag}
          isEdit={true}
        />
        <TaskButtonDiv>
          <ElipseButton
            text={pageText}
            onClick={handleSubmit}
            backgroundColor="#3498db"
            color="white"
            width="150px"
          />
        </TaskButtonDiv>

        <ErrorMessage>{errors.task}</ErrorMessage>
        <ErrorMessage>{errors.priority}</ErrorMessage>
        <ErrorMessage>{errors.complexity}</ErrorMessage>
        <ErrorMessage>{errors.dueDate}</ErrorMessage>
        <ErrorMessage>{errors.dueTime}</ErrorMessage>
      </form>
    </TodoFormContainer>
  );
};
