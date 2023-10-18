import { useEffect, useRef } from "react";
import styled from "styled-components";

const ButtonContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  border: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.buttonSelected ? "#3498db" : "#dde7ed"};
  color: ${(props) => (props.buttonSelected ? "white" : "black")};
  :hover {
    cursor: pointer;
    border: none;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonContainer = ({ selected, onSelectedChange }) => {
  const ratingValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ButtonContainerDiv>
      {ratingValue.map((value) => {
        const buttonSelected = value === selected;
        return (
          <StyledButton
            type="button"
            buttonSelected={buttonSelected}
            onClick={() => onSelectedChange(value)}
          >
            {value}
          </StyledButton>
        );
      })}
    </ButtonContainerDiv>
  );
};
