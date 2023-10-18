import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext/index";
import { TagsContext } from "../../context/TagsContext/index";
import { uid } from "uid";
import styled from "styled-components";
import {
  filterTodos,
  sortTodos,
  tagTodos,
  powerTodos
} from "../../utils/index";
import {
  TodoCard,
  DropDown,
  ElipseButton,
  PowerModeSwitch,
  PageHeader
} from "../../components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterInput = styled.input`
  margin: 2px;
  border-radius: 20px;
  height: 30px;
  padding-left: 10px;
  width: 350px;
  border: 1px solid lightgray;
`;

const TodoListContainer = styled.div``;

const HomeButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 5px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const Styledh5 = styled.h5`
  margin: 0;
  color: red;
  visibility: ${(props) => (props.powerMode ? "visible" : "hidden")};
`;

const sortTypes = [
  {
    name: "Priority Ascending",
    id: uid(),
    catagory: "Priority",
    direction: "Ascending"
  },
  {
    name: "Priority Descending",
    id: uid(),
    catagory: "Priority",
    direction: "Descending"
  },
  {
    name: "Complexity Ascending",
    id: uid(),
    catagory: "Complexity",
    direction: "Ascending"
  },
  {
    name: "Complexity Descending",
    id: uid(),
    catagory: "Complexity",
    direction: "Descending"
  },
  {
    name: "Date Ascending",
    id: uid(),
    catagory: "Date",
    direction: "Ascending"
  },
  {
    name: "Date Descending",
    id: uid(),
    catagory: "Date",
    direction: "Descending"
  }
];

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const { tags, setTags } = useContext(TagsContext);
  const [searchParams, setSearchParams] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [powerMode, setPowerMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleEdit = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditMode = (id) => {
    setEditMode(!editMode);
    setEditingTodoId(id);
  };

  const handleFilterChange = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setSearchParams({ ...searchParams, filter: searchInput });
  };

  const handleSortSelection = (type) => {
    const newSortObject = {
      catagory: type.catagory,
      direction: type.direction
    };
    setSearchParams(newSortObject);
  };

  const handleTagsSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePowerMode = () => {
    setPowerMode(!powerMode);
  };

  const handleCompleteTask = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todoId === todo.id) {
        let newChecklist = [];
        if (!todo.completed) {
          newChecklist = todo.checklist.map((item) => ({
            ...item,
            completed: true
          }));
          return { ...todo, checklist: newChecklist, completed: true };
        } else if (!todo.completed && todo.checklist.length === 0) {
          return { ...todo, completed: true };
        } else {
          newChecklist = todo.checklist.map((item) => ({
            ...item,
            completed: false
          }));
          return { ...todo, checklist: newChecklist, completed: false };
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <HomeContainer>
      <HeaderContainer>
        <PageHeader
          text="Home"
          handlePowerMode={handlePowerMode}
          powerMode={powerMode}
        />
        <PowerModeSwitch
          handlePowerMode={handlePowerMode}
          powerMode={powerMode}
        />
      </HeaderContainer>
      <FilterInput placeholder="Search" onChange={handleFilterChange} />
      <HomeButtonsContainer>
        <DropDown
          name="Sort"
          searchParams={searchParams}
          handleSortSelection={handleSortSelection}
          sortTypes={sortTypes}
          backgroundColor={powerMode ? "#e9e9e9" : "white"}
          powerMode={powerMode}
        />
        <DropDown
          name="Catagories"
          searchParams={searchParams}
          handleTagsSelection={handleTagsSelection}
          selectedTags={selectedTags}
          tags={tags}
          backgroundColor={powerMode ? "#e9e9e9" : "white"}
          powerMode={powerMode}
        />
      </HomeButtonsContainer>
      <Styledh5 powerMode={powerMode}>
        Power Mode is on. Sorting Disabled.
      </Styledh5>
      <TodoListContainer>
        {powerMode
          ? (() => {
              const powerTodo = todos
                .sort(powerTodos)
                .find((todo) => !todo.completed);
              if (powerTodo) {
                return (
                  <TodoCard
                    key={powerTodo.id}
                    todo={powerTodo}
                    handleCompleteTask={handleCompleteTask}
                    onEdit={handleEdit}
                    handleEditMode={() => handleEditMode(powerTodo.id)}
                    editMode={editMode && editingTodoId === powerTodo.id}
                  />
                );
              }
              return null;
            })()
          : tagTodos(todos, selectedTags)
              .filter((todo) => filterTodos(todo, searchParams))
              .sort((a, b) => sortTodos(a, b, searchParams))
              .map((todo) => {
                return (
                  <TodoCard
                    key={todo.id}
                    todo={todo}
                    handleCompleteTask={handleCompleteTask}
                    onEdit={handleEdit}
                    handleEditMode={() => handleEditMode(todo.id)}
                    editMode={editMode && editingTodoId === todo.id}
                  />
                );
              })}
      </TodoListContainer>
      <Link to="/addTaskPage">
        {!powerMode && (
          <ElipseButton
            text="+ Add New Task"
            backgroundColor="#3498db"
            color="white"
            width="150px"
          />
        )}
      </Link>
    </HomeContainer>
  );
};

export default Home;
