// import React, { useState, useContext, useEffect } from "react";
// import { TodoContext } from "../../context/TodoContext/index";
// import { TagsContext } from "../../context/TagsContext/index";
// import { setTodosInStorage } from "../../utils/index";
// import styled from "styled-components";
// import { uid } from "uid";
// import { useNavigate } from "react-router-dom";
// import {
//   TodoInput,
//   TodoPriorityAndComplexity,
//   TodoDueDate,
//   TodoChecklist,
//   TodoTags,
//   ElipseButton
// } from "../../components";

// const ErrorMessage = styled.span`
//   color: red;
//   margin: 5px 0;
//   font-size: 0.9rem;
// `;

// const TodoFormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const TaskButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const EditTodoForm = ({ todoId }) => {
//   // const { todos, setTodos } = useContext(TodoContext);
//   // const todoData = todos.find((todo) => String(todo.id) === todoId);
//   // const [todoEdit, setTodoEdit] = useState(todoData);
//   const [inputValue, setInputValue] = useState(todoData.task);
//   const [showError, setShowError] = useState(false);
//   const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   //functions
//   const handleInputChange = (value) => {
//     setInputValue(value);
//     setTodoEdit({ ...todoEdit, task: value });
//   };

//   const handlePriorityChange = (value) => {
//     setTodoEdit({ ...todoEdit, priority: value });
//   };

//   const handleComplexityChange = (value) => {
//     setTodoEdit({ ...todoEdit, complexity: value });
//   };

//   const handleDueDateChange = (value) => {
//     setTodoEdit({ ...todoEdit, dueDate: value, dueString: value.toString() });
//   };

//   const handleDueTimeChange = (value) => {
//     setTodoEdit({ ...todoEdit, dueTime: value });
//   };

//   const handleChecklistChange = (value) => {
//     setTodoEdit({ ...todoEdit, checklist: value });
//   };

//   const removeChecklistItem = (checklistId) => {
//     const newChecklist = todoEdit.checklist.filter(
//       (checklistItem) => checklistItem.id !== checklistId
//     );
//     setTodoEdit({ ...todoEdit, checklist: newChecklist });
//   };

//   const handleTagsChange = (value) => {
//     const updatedTags = Array.from(new Set([...todoEdit.tags, ...value]));
//     setTodoEdit((prevTodo) => ({
//       ...prevTodo,
//       tags: updatedTags
//     }));
//   };

//   const removeTag = (tag) => {
//     const newTags = todoEdit.tags.filter((prevTag) => tag !== prevTag);
//     setTodoEdit({ ...todoEdit, tags: newTags });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let currentErrors = {};

//     // Check each field for errors
//     if (!todoEdit.task) currentErrors.task = "Task Name is required. ";

//     if (!Object.keys(currentErrors).length) {
//       setShowError(false);
//       navigate(`/todo/${todoId}`);
//     } else {
//       setShowError(true);
//       setErrors(currentErrors);
//     }
//   };

//   //render
//   return (
//     <TodoFormContainer>
//       <form onSubmit={handleSubmit}>
//         <h3>Task Name</h3>
//         <TodoInput onInputChange={handleInputChange} value={inputValue} />
//         <TodoPriorityAndComplexity
//           onPriorityChange={handlePriorityChange}
//           prioritySelection={todoEdit.priority}
//           onComplexityChange={handleComplexityChange}
//           complexitySelection={todoEdit.complexity}
//         />
//         <TodoDueDate
//           onDateChange={handleDueDateChange}
//           dateSelection={todoEdit.dueDate}
//           onTimeChange={handleDueTimeChange}
//           timeSelection={todoEdit.dueTime}
//         />
//         <TodoChecklist
//           onChecklistChange={handleChecklistChange}
//           checklist={todoEdit.checklist}
//           isEdit={true}
//           removeChecklistItem={removeChecklistItem}
//         />
//         <TodoTags
//           onTagsChange={handleTagsChange}
//           todo={todoEdit}
//           removeTag={removeTag}
//           isEdit={true}
//         />
//         <TaskButtonDiv>
//           <ElipseButton
//             text="Finish Editing"
//             onClick={handleSubmit}
//             backgroundColor="#3498db"
//             color="white"
//             width="150px"
//           />
//         </TaskButtonDiv>

//         <ErrorMessage>{errors.task}</ErrorMessage>
//       </form>
//     </TodoFormContainer>
//   );
// };
