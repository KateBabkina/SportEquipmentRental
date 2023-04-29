import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="main">
        {items.items.map(el => (
            <Item key={el.id} item={el}/>
        ))}
    </div>
  );
};

export default ItemList;