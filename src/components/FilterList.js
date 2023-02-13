import React from "react";
import { Filter } from "./Filter";
import { capitalize, retrieveKeys } from "../utils";

function FilterList({ colors, selectFilter, currentFilter }) {
  return (
    <ul className="filter-list">
      <Filter
        value="All"
        selectFilter={selectFilter}
        currentFilter={currentFilter}
      />
      {retrieveKeys(colors).map((color) => (
        <Filter
          value={capitalize(color)}
          selectFilter={selectFilter}
          currentFilter={currentFilter}
          colorCount={colors[color].length}
          key={color}
        />
      ))}
    </ul>
  );
}

export { FilterList };
