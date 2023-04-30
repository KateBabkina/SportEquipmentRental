import React from "react";
import { useState } from 'react';
import ItemList from "./ItemList";

function EquipmentPage() {

  const [itemList, setItemList] = useState({
    items: [
      {
        id: 1,
        title: "Лыжи",
        img: "лыжи.jpg",
        category: "лыжи",
        price: "123"
      },
      {
        id: 2,
        title: "Велосипед",
        img: "велосипед.jpg",
        category: "велосипед",
        price: "234"
      },
      {
        id: 3,
        title: "Мяч футбольный",
        img: "мяч футбольный.jpg",
        category: "мяч",
        price: "345"
      },
      {
        id: 4,
        title: "Фрисби",
        img: "фрисби.jpg",
        category: "фрисби",
        price: "456"
      }
    ]
  })

  return (
    <div>
        <ItemList items={itemList} />
    </div>
  );
};

export default EquipmentPage;