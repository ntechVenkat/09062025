import React from "react";
import Child from "./childContext";

const Parent = () => {
  return (
    <div style={{ border: "5px solid blue", margin: "20px" }}>
      <center>
        <h1>Parent Component</h1>
        <Child />
      </center>
    </div>
  );
};
export default Parent;
