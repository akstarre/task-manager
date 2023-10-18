import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  height: 40px;
  border-radius: 20px;
  border: none;
  margin: 10px;

  :hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const ElipseButton = ({
  text,
  width,
  backgroundColor,
  onClick,
  color
}) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      width={width}
      onClick={onClick}
      color={color}
    >
      {text}
    </Button>
  );
};
