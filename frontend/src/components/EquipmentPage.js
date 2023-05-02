import React from "react";
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import FilterField from "./FiltreField";
import axios from 'axios';

function EquipmentPage() {

  var username = 'sport';
  var password = '123';


  const [itemList, setItemList] = useState([
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
    ])
  const [currentItems, setCurrentItems] = useState(itemList)
  

  

//   useEffect(() => {
//     axios.post("http://localhost:8080/api/inventory/filter", {},
//         {
//             auth: {
//                 username: username,
//                 password: password
//             }
//         }).then(res => {
//             console.log(res.data);
//         }).catch(() => {
//             alert("An error occurred on the server")
//         })
// }, [])

  

  const sendRequest = () => {
    console.log();
  }

  return (
    <div className="inventoryPage">
      <FilterField sendRequest={() => sendRequest()}/>
      <ItemList items={currentItems} />
    </div>
  );
};

export default EquipmentPage;