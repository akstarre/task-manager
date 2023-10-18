export const setTodosInStorage = (todoList) => {
  window.localStorage.setItem("todos", JSON.stringify(todoList));
};

export const retrieveStoredTodos = () => {
  return JSON.parse(window.localStorage.getItem("todos")) || [];
};

export const setTagsInStorage = (tagsList) => {
  window.localStorage.setItem("tags", JSON.stringify(tagsList));
};

export const retrieveStoredTags = () => {
  return JSON.parse(window.localStorage.getItem("tags")) || [];
};

export const calculateCompletionPercentage = (todo) => {
  const completedTasks = todo.checklist.filter((task) => task.completed).length;
  const totalTasks = todo.checklist.length;
  let completionPercentage = Math.floor(
    totalTasks !== 0 ? (completedTasks / totalTasks) * 100 : 0
  );
  if (todo.checklist.length === 0 && todo.completed) {
    completionPercentage = 100;
  }
  return completionPercentage;
};

export const createDateObject = (date, time) => {
  if (typeof date === "string" && typeof time === "string") {
    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");
    return new Date(year, month - 1, day, hour, minute);
  }
};

export const filterTodos = (todo, searchParams) => {
  if (searchParams?.filter) {
    return todo.task.toLowerCase().includes(searchParams.filter);
  }
  return true;
};

export const tagTodos = (todos, selectedTags) => {
  return todos.filter((todo) => {
    return selectedTags.every((tag) =>
      todo.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    );
  });
};

export const sortTodos = (a, b, searchParams) => {
  switch (searchParams?.catagory) {
    case "Priority":
      return searchParams.direction === "Ascending"
        ? a.priority - b.priority
        : b.priority - a.priority;
    case "Complexity":
      return searchParams.direction === "Ascending"
        ? a.complexity - b.complexity
        : b.complexity - a.complexity;
    case "Date":
      return searchParams.direction === "Ascending"
        ? new Date(a.dueObject).getTime() - new Date(b.dueObject).getTime()
        : new Date(b.dueObject).getTime() - new Date(a.dueObject).getTime();
    default:
      return 0;
  }
};

export const powerTodos = (a, b) => {
  const powerA = a.priority + a.complexity;
  const powerB = b.priority + b.complexity;
  return powerB - powerA;
};

export const formatDateTime = (dueDate) => {
  if (typeof dueDate === "undefined") {
    return { date: "No due date Set", color: "black" };
  }

  if (typeof dueDate === "object") {
    const todaysDate = new Date();
    const dateDifference = (dueDate - todaysDate) / (1000 * 60 * 60 * 24);

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let returnObject = {};

    const time = dueDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    //Format color
    if (dateDifference < 1) {
      returnObject.color = `red`;
    } else if (dateDifference >= 1 && dateDifference < 4) {
      returnObject.color = `orange`;
    } else {
      returnObject.color = `blue`;
    }

    //Format String
    if (dateDifference < 1) {
      returnObject.date = `Today at ${time}`;
    } else if (dateDifference === 1) {
      returnObject.date = `Tomorrow at ${time}`;
    } else if (dateDifference > 1 && dateDifference < 7) {
      returnObject.date = `${weekdays[dueDate.getDay()]} at ${time}`;
    } else if (dateDifference > 7 && dateDifference < 14) {
      returnObject.date = `Next ${weekdays[dueDate.getDay()]} at ${time}`;
    } else {
      returnObject.date = `${
        months[dueDate.getMonth()]
      }, ${dueDate.getDay()} at ${time}`;
      returnObject.color = "green";
    }
    return returnObject;
  }
};
