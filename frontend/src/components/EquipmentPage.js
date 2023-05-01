import React from "react";
import { useState } from 'react';
import ItemList from "./ItemList";
import FilterField from "./FiltreField";

function EquipmentPage() {

  const [searchTerm, setSearchTerm] = useState("")
  const [itemList, setItemList] = useState({
    items: [
      {
        id: 1,
        title: "лыжи",
        img: "лыжи.jpg",
        category: "лыжи",
        price: "123"
      },
      {
        id: 2,
        title: "велосипед",
        img: "велосипед.jpg",
        category: "велосипед",
        price: "234"
      },
      {
        id: 3,
        title: "мяч футбольный",
        img: "мяч футбольный.jpg",
        category: "мяч",
        price: "345"
      },
      {
        id: 4,
        title: "фрисби",
        img: "фрисби.jpg",
        category: "фрисби",
        price: "456"
      }
    ]
  })

  return (
    <div className="inventoryPage">
      <FilterField />
      <ItemList items={itemList} />
    </div>
  );
};

export default EquipmentPage;