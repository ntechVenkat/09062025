import React from "react";
import SubChild from "./subChildContext";

const Child = () => {
  return (
    <div style={{ border: "5px solid red", margin: "5px" }}>
      <h1>Child Component(Child to Parent)</h1>
      <SubChild />
    </div>
  );
};
export default Child;
