import React from "react";

function Color({ color, showColor, isLight }) {
  return (
    <a
      className={`color ${isLight(color.rgb) ? "white" : "black"}`}
      onClick={() => showColor(color)}
      style={{
        backgroundColor: color.name,
      }}
    >
      <span className="color__name noselect">{color.name}</span>
    </a>
  );
}

export { Color };
