import { ButtonContainer } from "../../components";

export const TodoPriorityAndComplexity = ({
  onPriorityChange,
  prioritySelection,
  onComplexityChange,
  complexitySelection
}) => {
  const handlePrioritySelection = (value) => {
    onPriorityChange(value);
  };

  const handleComplexitySelection = (value) => {
    onComplexityChange(value);
  };

  return (
    <div>
      <h3>Please Select Priority</h3>
      <ButtonContainer
        selected={prioritySelection}
        onSelectedChange={handlePrioritySelection}
      />
      <h3>Please Select Complexity</h3>
      <ButtonContainer
        selected={complexitySelection}
        onSelectedChange={handleComplexitySelection}
      />
    </div>
  );
};
