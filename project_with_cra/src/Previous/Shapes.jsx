import React, { useState } from "react";
import "./Shapes.css";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selected, setSelected] = useState("square");

  const handleAddShape = () => {
    const oldShapes = [...shapes];
    // const oldShapes = ["circle", "square", "circle", "square, "square"];

    oldShapes.push(selected.toLowerCase());
    setShapes(oldShapes);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e) => setSelected(e.target.value)} value={selected}>
          <option>Square</option>
          <option>Circle</option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index) => {
          return (
            <div className={shape} key={index}>
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
