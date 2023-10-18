import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TDInput = styled.input`
  border-radius: 20px;
  border: none;
  height: 35px;
  width: 350px;
  padding-left: 15px;
`;

export const TodoInput = ({ onInputChange, value }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onInputChange(newValue);
  };

  return (
    <InputDiv>
      <TDInput onChange={handleChange} value={value} />
    </InputDiv>
  );
};
