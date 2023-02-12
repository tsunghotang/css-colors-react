import React, { useState } from "react";
import { Header } from "./Header";
import { ColorList } from "./ColorList";
import { colorJSON } from "../data/css_colors";
import { ColorDetails } from "./ColorDetails";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [colors] = useState(colorJSON);
  const [color, setColor] = useState(null);

  const selectFilter = ({ currentTarget }) => {
    toggleFilterList();
    setCurrentFilter(currentTarget.querySelector("a").innerHTML);
  };

  const showColor = (color) => {
    setColor(color);
  };

  const toggleFilterList = () => {
    const filterEl = document.querySelector(".filter-list");
    filterEl.classList.toggle("filter-list--show");
  };

  const isLight = (color) => {
    // method used to discern if the current color stored in the state is light or dark
    // Used to change the text color to white or black (accessibility)
    const rgb = color.split(",");
    return rgb.reduce((a, b) => parseInt(a) + parseInt(b)) < 127 * 3;
  };

  let body;

  if (color) {
    body = <ColorDetails color={color} setColor={setColor} isLight={isLight} />;
  } else {
    body = (
      <div className="app">
        <Header
          currentFilter={currentFilter}
          selectFilter={selectFilter}
          colors={colors}
          toggleFilterList={toggleFilterList}
        />
        <main>
          <ColorList
            colors={colors}
            showColor={showColor}
            currentFilter={currentFilter}
            isLight={isLight}
          />
        </main>
      </div>
    );
  }

  return body;
};

export default App;
