// Used for modifying array testing
import { useState } from "react";
import React from "react";

export default function App() {
  const [points, setPoints] = useState([1, 4, 6, 3]);
  const copy = [...points]; //create copy of the array to avoid mutating the original array

  const increment = () => {
    console.log("old value", copy);
    copy[2] += 1;
    setPoints(copy);
    console.log("new value: ", copy);
  };

  return (
    <div>
      <p>{copy[2]}</p>
      <button onClick={increment}>click the button </button>
    </div>
  );
}
