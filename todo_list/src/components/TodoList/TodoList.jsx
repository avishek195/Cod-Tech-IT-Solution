import React, { useContext, useState } from "react";
import "./TodoList.css";
import SearchBar from "../SearchBar/SearchBar";
import UserContext from "../../Context/UserContext";
import { FaCheck, FaEdit } from "react-icons/fa";

const TodoList = () => {
  const {
    todos,
    handleDeleteTodo,
    handelCheck,
    handleEditTodo,
    handleSaveEdit,
    editingIndex,
    isedit,
    editedText,
    setEditedText,
  } = useContext(UserContext);

  return (
    <>
      <h1 className="title">Todo List</h1>
      <SearchBar />
      <div className="todo-list-container">
        <ul className="todo-items">
          {todos.map((todo, index) => (
            <li key={todo.todoItem} className="todo-item">
              <div className="items" onClick={() => handelCheck(todo.todoItem)}>
                <span className="check" id="check">
                  {todo.isChecked && !isedit ? <FaCheck /> : null}
                </span>

                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="input edit"
                    />
                    <button
                      onClick={() => handleSaveEdit(todo.todoItem)}
                      className="save-btn"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <span className="todo-value">{todo.todoItem}</span>
                )}
              </div>
              <div className="btns">
                {editingIndex !== index && (
                  <button
                    className="edit-button "
                    onClick={() => handleEditTodo(index, todo.todoItem)}
                  >
                    {/* <FaEdit /> */}
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo.todoItem)}
                  className="delete-button "
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
