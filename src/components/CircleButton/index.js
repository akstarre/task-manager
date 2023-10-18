import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CircleButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: ${(props) => props.backgroundColor};
  visibility: ${(props) => props.display};
  border: ${(props) => props.border};
  &:active {
    transform: scale(0.95);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  height: 50%;
`;

export const CircleButton = ({
  icon,
  size,
  backgroundColor,
  display,
  onClick,
  border
}) => {
  return (
    <CircleButtonContainer
      type="button"
      size={size}
      backgroundColor={backgroundColor}
      display={display}
      onClick={onClick}
      border={border || "none"}
    >
      <Icon icon={icon} />
    </CircleButtonContainer>
  );
};
