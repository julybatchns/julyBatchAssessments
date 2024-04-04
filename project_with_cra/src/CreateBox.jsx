import React, { useState } from "react";

function CreateBox() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  function handleCreateBox() {
    const newBox = document.createElement("div");
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    newBox.style.backgroundColor = backgroundColor;
    document.getElementById("box-container").appendChild(newBox);
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  }

  return (
    <>
      <div className="main">
        <h1>Box Creater</h1>
        <div>
          <form>
            <label htmlFor="width">Width:</label>
            <input
              type="text"
              name="width"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <br />
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
              type="text"
              name="backgroundColor"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </form>
        </div>
        <button onClick={handleCreateBox} className="create-btn">
          Create Box
        </button>
        <br />
        <br />
        <div id="box-container"></div>
      </div>
    </>
  );
}

export default CreateBox;
