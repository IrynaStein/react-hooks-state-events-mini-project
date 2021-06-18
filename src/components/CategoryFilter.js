import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, setCategory }) {

  function renderButtons() {
    return categories.map((category) => {
      const buttonClass = category === selectedCategory ? "selected" : null
      return <button
        className={buttonClass}
        onClick={() => { setCategory(category) }}
        key={category}>{category}
      </button>
    })
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderButtons()}
    </div>
  );
}

export default CategoryFilter;
