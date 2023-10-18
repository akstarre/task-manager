import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { CircleButton } from "../../components/CircleButton";

const Icon = styled(FontAwesomeIcon)`
  font-size: 0.9rem;
`;

const ChecklistDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 5px 7.5px 5px 15px;
  padding-left: 25px;
  margin: 5px;
  background-color: white;
`;

const CheckListButton = styled.button`
  justify-self: flex-end;
  border-radius: 25px;
  background-color: ${(props) => (props.completed ? "#3498db" : "#dde7ed")};
  border: 1.5px solid ${(props) => (props.completed ? "#3498db" : "#dde7ed")};
  padding: 5px 10px;
  visibility: ${(props) => props.visibility};

  :hover {
    border: 1.5px solid #3498db;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const ChecklistItem = ({
  id,
  check,
  completed,
  checklistCompleted,
  buttonVisibility,
  isEdit,
  removeChecklistItem
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (buttonVisibility !== "hidden") {
      checklistCompleted(id);
    }
  };

  return (
    <ChecklistDiv>
      <li key={id}>{check}</li>
      {isEdit ? (
        <CircleButton
          icon={faTimes}
          size={"30px"}
          backgroundColor="#FFCCCC"
          onClick={() => {
            removeChecklistItem(id);
          }}
        />
      ) : (
        <CheckListButton
          completed={completed}
          onClick={handleClick}
          visibility={buttonVisibility}
        >
          <Icon completed={completed} icon={faCheck} />
        </CheckListButton>
      )}
    </ChecklistDiv>
  );
};
