import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="centre-column-content">
      <div className="equipments">

        {items.map(el => (
          <Item key={el.id} item={el} />
        ))}

      </div>
    </div>
  );
};

export default ItemList;