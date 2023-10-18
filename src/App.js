import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Todo from "./pages/todo/index";
import AddTaskPage from "./pages/addTaskPage/index";
import EditTodoPage from "./pages/EditTodoPage/index";
import { TodoProvider } from "./context/TodoContext/index";
import { TagsProvider } from "./context/TagsContext/index";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    font-family: sans-serif;
    color: #001f3f;
}
body{
  background-color: #f2f2f2;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoProvider>
        <TagsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo/:todoId" element={<Todo />} />
              <Route path="/addTaskPage" element={<AddTaskPage />} />
              <Route path="/EditTodoPage/:todoId" element={<EditTodoPage />} />
            </Routes>
          </Router>
        </TagsProvider>
      </TodoProvider>
    </>
  );
};

export default App;
