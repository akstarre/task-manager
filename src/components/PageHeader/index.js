import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircleButton } from "../";

const TodoHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
`;

const FakeDiv = styled.div`
  width: 50px;
  height: 50px;
`;

export const PageHeader = ({
  text,
  firstIcon,
  firstIconDisplay,
  secondIconDisplay,
  secondIcon,
  todoId,
  hasFirstButton,
  hasSecondButton
}) => {
  return (
    <TodoHeader>
      {hasFirstButton ? (
        <Link to="/">
          <CircleButton
            icon={firstIcon}
            size={"50px"}
            backgroundColor={
              firstIconDisplay === "hidden" ? "#f2f2f2" : "white"
            }
            firstIconDisplay={firstIconDisplay}
          />
        </Link>
      ) : (
        <FakeDiv />
      )}
      <h1>{text}</h1>
      {hasSecondButton ? (
        <Link to={`/EditTodoPage/${todoId}`}>
          <CircleButton
            icon={secondIcon}
            size={"50px"}
            backgroundColor={
              secondIconDisplay === "hidden" ? "#f2f2f2" : "#c5d4de"
            }
            secondIconDisplay={secondIconDisplay}
          />
        </Link>
      ) : (
        <FakeDiv />
      )}
    </TodoHeader>
  );
};
