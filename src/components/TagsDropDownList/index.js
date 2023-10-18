import styled from "styled-components";

const Radial = styled.div`
  box-sizing: border-box;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: ${(props) => (props.isActive ? "#000" : "transparent")};
  margin-left: auto;
`;

const DropDownItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 150px;
  height: 30px;
  list-style: none;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 0.8rem;
  margin-top: 5px;

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
`;

const DropDownItemActive = styled(DropDownItem)`
  ::after {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #000;
    position: relative;
    left: -10px; // Adjust as per your design
  }
`;

const DropdownItemDiv = styled.div`
  margin: 0px 10px;
`;

export const TagsDropDownList = ({
  tags,
  handleTagsSelection,
  selectedTags
}) => {
  return (
    <DropdownItemDiv>
      {tags.length > 0 ? (
        tags.map((tag) => {
          const isActive = selectedTags.includes(tag);
          const ItemComponent = isActive ? DropDownItemActive : DropDownItem;

          return (
            <ItemComponent
              key={`${tag}`}
              onClick={() => handleTagsSelection(tag)}
            >
              <span>{tag}</span>
              <Radial isActive={isActive} />
            </ItemComponent>
          );
        })
      ) : (
        <span>No Tags Added</span>
      )}
    </DropdownItemDiv>
  );
};
