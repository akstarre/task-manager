import React, { useState, useEffect, createContext } from "react";
import { retrieveStoredTodos } from "../../utils/index";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = retrieveStoredTodos();
    setTodos(storedTodos);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
