import React from "react";

function Filter({ value, selectFilter, currentFilter, colorCount }) {
  return (
    <li
      onClick={selectFilter}
      className={`filter-list__item ${
        currentFilter === value ? "filter-list__item--active" : ""
      }`}
    >
      <div className="filter">
        <span
          className={value === "All" ? "swatch--rainbow" : "swatch"}
          style={{
            backgroundColor: value,
          }}
        ></span>
        <a>{value}</a>
      </div>
      <span className="filter__count">{colorCount}</span>
    </li>
  );
}

export { Filter };
