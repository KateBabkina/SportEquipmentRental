import React from "react";
import Item from "./Item";
import Pagination from "./Pagination";


function ItemList({ items, itemsPerPage, currentItems, paginate }) {
  return (
    <div className="centre-column-content">
      <div className="equipments">

        {items.map(el => (
          <Item key={el.id} item={el} />
        ))}
      </div>
      <Pagination itemsPerPage={itemsPerPage} totalItems={currentItems.length} paginate={paginate}/>
    </div>
  );
};

export default ItemList;