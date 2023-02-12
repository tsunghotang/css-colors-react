import React from "react";
import { Color } from "./Color";
import { retrieveKeys } from "../utils";

function ColorList({ colors, currentFilter, showColor, isLight }) {
  const sortColorList = (arr) => {
    return arr.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fb > fa) {
        return 1;
      }
      return 0;
    });
  };

  const renderList = () => {
    if (currentFilter === "All") {
      const colorsArr = retrieveKeys(colors).map((color) => colors[color]);

      const sortedColorsArr = sortColorList(colorsArr.flat());

      return sortedColorsArr.map((color) => (
        <Color color={color} showColor={showColor} isLight={isLight} />
      ));
    } else {
      return sortColorList(colors[currentFilter.toLowerCase()]).map((color) => (
        <Color color={color} showColor={showColor} isLight={isLight} />
      ));
    }
  };

  return <section className="colors-container">{renderList()}</section>;
}

export { ColorList };
