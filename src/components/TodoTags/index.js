import { useState, useContext } from "react";
import { CardTags, ElipseButton } from "../";
import styled from "styled-components";
import { TagsContext } from "../../context/TagsContext/index";

const InputContainer = styled.div`
  position: relative;
  width: 350px;
  height: 40px;
`;

const StyledInput = styled.input`
  border-radius: 20px;
  border: none;
  height: 45px;
  padding: 0 15px;
  width: 330px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 5px 0;
  font-size: 0.8rem;
  height: 20px;
`;

const StyledElipseButtonDiv = styled.div`
  position: absolute;
  top: 55%;
  left: 275px;
  transform: translateY(-50%);
`;

export const TodoTags = ({ onTagsChange, todo, isEdit, removeTag }) => {
  const { tags, setTags } = useContext(TagsContext);

  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value.includes(",")) {
      setError("Please separate tags with a comma.");
    } else {
      setError("  ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTags = inputValue.split(",").map((tag) => tag.trim());
    onTagsChange(newTags);
    newTags.forEach((tag) => {
      if (!tags.includes(tag)) {
        setTags([...tags, tag]);
      }
    });
    setInputValue("");
  };

  return (
    <div>
      <h1>Add Tags</h1>
      <InputContainer>
        <StyledInput
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="List some tags to add"
        />
        <StyledElipseButtonDiv>
          <ElipseButton
            text="Add Tags"
            backgroundColor="#3498db"
            color="white"
            onClick={handleSubmit}
            width="70px;"
          />
        </StyledElipseButtonDiv>
      </InputContainer>
      <CardTags todo={todo} isEdit={isEdit} removeTag={removeTag} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
