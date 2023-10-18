import styled from "styled-components";
import { faArrowUp, faArrows } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateTime, createDateObject } from "../../utils/index";

const CardParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DateSpan = styled.span`
  color: ${(props) => props.color};
`;

const ParamSpan = styled.span`
  color: grey;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const CardParams = ({ todo }) => {
  const dueObject = createDateObject(todo.dueDate, todo.dueTime);
  const dueDate = formatDateTime(dueObject);

  return (
    <CardParamsContainer>
      <div>
        <Icon icon={faCalendar} /> <ParamSpan>Due Date: </ParamSpan>
        <DateSpan color={dueDate?.color}>{dueDate?.date}</DateSpan>
      </div>
      <div>
        <Icon icon={faArrowUp} /> <ParamSpan>Priority: </ParamSpan>{" "}
        {todo.priority ? `${todo.priority}/10` : "No Priority Set"}
      </div>
      <div>
        <Icon icon={faArrows} /> <ParamSpan>Complexity: </ParamSpan>
        {todo.complexity ? `${todo.complexity}/10` : "No Complexity Set"}
      </div>
    </CardParamsContainer>
  );
};
