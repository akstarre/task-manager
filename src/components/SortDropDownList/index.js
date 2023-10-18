import styled from "styled-components";

const DropDownItem = styled.li`
  width: 135px;
  height: 20px;
  list-style: none;
  cursor: pointer;
  padding: 2px;
  font-size: 0.8rem;
  margin: auto;
  margin-top: 5px;
  :not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
  :hover {
    background-color: #dde7ed;
  }
`;

const DropdownItemDiv = styled.div`
  margin: 0 10px;
`;

export const SortDropDownList = ({ sortTypes, handleSelection }) => {
  return (
    <DropdownItemDiv>
      {sortTypes.map((type) => (
        <DropDownItem
          key={type.id}
          onClick={() => {
            handleSelection(type);
          }}
        >
          {type.name}
        </DropDownItem>
      ))}
    </DropdownItemDiv>
  );
};
