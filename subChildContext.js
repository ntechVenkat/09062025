import React, { useContext } from "react";
import { ThemeContext } from "./ContextAPI";

const SubChild = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ border: "5px solid green", margin: "8px" }}>
      <h1>Sub-Child Component (sub-child to parent) </h1>
      <h3>Current Theme : {theme}</h3>
      <button className="btn btn-primary m-2" onClick={toggleTheme}>
        Theme Change
      </button>
    </div>
  );
};
export default SubChild;
