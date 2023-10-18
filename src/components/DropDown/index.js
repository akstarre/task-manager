import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SortDropDownList } from "../../components/SortDropDownList";
import { TagsDropDownList } from "..";

const DropDownButton = styled.button`
  width: 160px;
  height: 40px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: ${(props) => (props.dropDownOpen ? "20px 20px 0 0" : "20px")};
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const DropDownList = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 1;
  width: 100%;
`;

const DropDownContainer = styled.div`
  position: relative;
  width: 160px;
`;

export const DropDown = ({
  powerMode,
  searchParams,
  handleSortSelection,
  sortTypes,
  backgroundColor,
  name,
  tags,
  handleTagsSelection,
  selectedTags
}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const closeDropDown = () => {
    setDropDownOpen(false);
  };

  const updateDropDown = () => {
    if (powerMode) {
      return;
    }
    setDropDownOpen(!dropDownOpen);
  };

  const handleSelection = (type) => {
    handleSortSelection(type);
    closeDropDown();
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropDownOpen) {
      dropdownRef.current.focus();
    }
  }, [dropDownOpen]);

  const dropDownVariants = {
    hidden: { opacity: 0, y: "-20px", transition: { duration: 0.1 } }, // Starting from below the button
    visible: {
      opacity: 1,
      y: "0px",
      transition: { duration: 0.2, type: "spring" }
    },
    exit: { opacity: 0, y: "-40px", transition: { duration: 0.15 } }
  };

  const getName = () => {
    if (name === "Sort") {
      return searchParams
        ? `${searchParams.catagory} ${searchParams.direction}`
        : "Sort";
    } else if (name === "Catagories") {
      return "Categories";
    }
  };

  return (
    <DropDownContainer>
      <DropDownButton
        onClick={updateDropDown}
        backgroundColor={backgroundColor}
        dropDownOpen={dropDownOpen}
        ref={dropdownRef}
      >
        {getName()}
      </DropDownButton>
      <AnimatePresence>
        {dropDownOpen && (
          <DropDownList
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropDownVariants}
            tabIndex="0"
            onBlur={closeDropDown}
            ref={dropdownRef}
          >
            {name === "Sort" ? (
              <SortDropDownList
                sortTypes={sortTypes}
                handleSelection={handleSelection}
              />
            ) : (
              <TagsDropDownList
                tags={tags}
                handleTagsSelection={handleTagsSelection}
                selectedTags={selectedTags}
              />
            )}
          </DropDownList>
        )}
      </AnimatePresence>
    </DropDownContainer>
  );
};
