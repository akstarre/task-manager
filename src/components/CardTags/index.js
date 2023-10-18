import styled from "styled-components";
import { CircleButton } from "../../components/CircleButton/index";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  font-size: 12px;
  color: #333;

  h5 {
    margin: 0 5px;
  }
`;

const CardTagsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const lightColors = [
  "#F5E0E0",
  "#F5E5CC",
  "#F5F5CC",
  "#E0F5E0",
  "#E0F5F5",
  "#E0E0F5",
  "#F5E0F5"
];

export const CardTags = ({ todo, isEdit, removeTag }) => {
  const colorIndex = todo?.tagColor;

  return (
    <CardTagsContainer>
      {todo?.tags &&
        todo.tags.map((tag, i) => {
          const backgroundColor =
            lightColors[(colorIndex + i) % lightColors.length];
          return (
            <Tag key={tag} backgroundColor={backgroundColor}>
              <h5>{tag}</h5>
              {isEdit && (
                <CircleButton
                  icon={faTimes}
                  size={"17px"}
                  backgroundColor="#FFCCCC"
                  onClick={() => {
                    removeTag(tag);
                  }}
                />
              )}
            </Tag>
          );
        })}
    </CardTagsContainer>
  );
};
