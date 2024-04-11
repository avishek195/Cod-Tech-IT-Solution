import React, { useState } from "react";
import UserContext from "./UserContext";
import { ImSpellCheck } from "react-icons/im";
const UserContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [isedit, setIsEdit] = useState(false);

  const handleEditTodo = (index, todoItem) => {
    setIsEdit(true);
    setEditingIndex(index);
    setEditedText(todoItem);
  };

  const handleSaveEdit = (value) => {
    if (editedText.trim() !== "") {
      const newTodos = todos.filter((item) => {
        if (item.todoItem === value) {
          item.todoItem = editedText;
        }
        return item;
      });
      setTodos(newTodos);
    }
    setEditingIndex(null);
    setEditedText("");
    setIsEdit(false);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          todoItem: inputValue.trim(),
          todoId: todos.length + 1,
          isChecked: false,
        },
      ]);
      setInputValue("");
    }
  };
  // console.log(todos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteTodo = (value) => {
    const updatedTodos = todos.filter((item) => item.todoItem !== value);

    setTodos(updatedTodos);
  };

  const handelCheck = (value) => {
    const updatedTodos = todos.filter((item) => {
      if (item.todoItem === value) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const stores = {
    clicked,
    setClicked,
    todos,
    setTodos,
    inputValue,
    setInputValue,
    handleAddTodo,
    handleInputChange,
    handleDeleteTodo,
    handelCheck,
    handleEditTodo,
    handleSaveEdit,
    editingIndex,
    editedText,
    isedit,
    setEditedText,
  };
  return <UserContext.Provider value={stores}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
