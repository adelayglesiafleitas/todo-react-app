import "../styles/InputTodo.css";
import IconCheck from "../assets/images/icon-check.svg";
import { useState } from "react";

const InputTodo = ({ listObj, setListObj, darkMode, setDarkMode }) => {
  const [checkInput, setCheckInput] = useState(false);
  const [input, setInput] = useState("");
  const backgroundColor =
    darkMode && !checkInput
      ? "var(--Very_Dark_Desaturated_Blue)"
      : !darkMode && checkInput
      ? "linear-gradient(118deg, rgba(85, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 80%)"
      : !darkMode
      ? "var(--Very_Light_Grayish_Blue)"
      : "";

  const borderColor = checkInput
    ? "none"
    : "1px solid var(--Dark_Grayish_Blue)";

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      const number = listObj.length + 1;
      const data = {
        id: number,
        complete: false,
        data: input.trim(),
        select: checkInput,
      };

      setListObj([...listObj, data]);
      setInput("");
    }
  };

  console.log(darkMode);

  return (
    <div
      className="input_container"
      style={{
        background: darkMode
          ? "var(--Very_Dark_Desaturated_Blue)"
          : "var(--Very_Light_Grayish_Blue)",
      }}
    >
      <div
        className="icon_check_container"
        style={{
          background: backgroundColor,

          border: borderColor,
        }}
        // Added onClick handler to toggle checkInput
        onClick={() => setCheckInput(!checkInput)} // Toggle checkInput state
      >
        {checkInput && <img src={IconCheck} alt="icon_check" />}
      </div>

      <input
        type="text"
        className="josefin_sans_400 input_todo"
        placeholder="Create a new todo..."
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        style={{
          background: darkMode
            ? "var(--Very_Dark_Desaturated_Blue)"
            : "var(--Very_Light_Grayish_Blue)",
        }}
      />
    </div>
  );
};

export default InputTodo;
