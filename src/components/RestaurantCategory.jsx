import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="category">
        <div className="category-item" onClick={handleClick}>
          <span className="category-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="arrow">⬇️</span>
        </div>
        {showItems ? <ItemList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantCategory;
