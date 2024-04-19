import React, { useState } from "react";
import Dino from "./Dino.jpg";

function ImageDimensionResizer() {
  const [height, setHeight] = useState(320);
  const [width, setWidth] = useState(320);

  return (
    <>
      <div className="main">
        <form>
          <label htmlFor="height-slider">Height Slider</label>
          <input
            id="height-slider"
            type="range"
            min="100"
            max="800"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label htmlFor="width-slider">Width Slider</label>
          <input
            id="width-slider"
            type="range"
            min="100"
            max="800"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </form>
        <img
          src={Dino}
          alt="Dino"
          style={{ height: `${height}px`, width: `${width}px` }}
          id="resizable-img"
        />
      </div>
    </>
  );
}

export default ImageDimensionResizer;
