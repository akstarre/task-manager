import React, { useState, useEffect, createContext, useContext } from "react";
import { setTagsInStorage, retrieveStoredTags } from "../../utils/index";
import { TodoContext } from "../TodoContext/index";

export const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    const storedTags = retrieveStoredTags() || [];
    setTags(storedTags);
  }, []);

  useEffect(() => {
    const currentTags = [
      ...new Set(
        todos?.flatMap((todo) => todo?.tags.map((tag) => tag?.toLowerCase()))
      )
    ];

    setTags(currentTags);
    setTagsInStorage(currentTags);
  }, [todos]);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {children}
    </TagsContext.Provider>
  );
};
