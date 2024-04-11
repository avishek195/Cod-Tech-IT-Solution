import { useContext } from "react";
import "./SearchBar.css";
import UserContext from "../../Context/UserContext";
const SearchBar = () => {
  const { inputValue, handleAddTodo, handleInputChange } =
    useContext(UserContext);

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter your todo"
        className="input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add
      </button>
    </div>
  );
};

export default SearchBar;
