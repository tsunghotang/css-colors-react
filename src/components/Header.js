import React from "react";
import { FilterList } from "./FilterList";

function Header({ selectFilter, currentFilter, colors, toggleFilterList }) {
  const handleClick = (e) => {
    toggleFilterList();
    if (filterEl.classList.contains("filter-list__filters--show")) {
      e.currentTarget.innerHTML = "Close";
    } else {
      e.currentTarget.innerHTML = "Filters";
    }
  };

  return (
    <header>
      <div className="header__top">
        <p className="header__title">CSS Colors</p>
        <a onClick={handleClick} className="filter-list__filter-btn">
          <p>Filters</p>
        </a>
      </div>
      <div className="header__bottom">
        <FilterList
          selectFilter={selectFilter}
          currentFilter={currentFilter}
          colors={colors}
        />
      </div>
    </header>
  );
}

export { Header };
