import { formatDateTime, createDateObject } from "../../utils/index";

export const ColoredCircle = ({ todo, size }) => {
  const dueObject = createDateObject(todo.dueDate, todo.dueTime);
  const formattedDueDate = formatDateTime(dueObject);
  size = String(size);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: `${formattedDueDate.color}`,
          marginRight: "5px"
        }}
      ></div>
    </div>
  );
};
