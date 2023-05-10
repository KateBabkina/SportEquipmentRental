import React from "react";
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import FilterField from "./FiltreField";
import axios from 'axios';

function EquipmentPage() {

  var username = 'sport';
  var password = '123';


  const [itemList, setItemList] = useState([])
  const [currentItems, setCurrentItems] = useState(itemList)

  useEffect(() => {
    axios.get("https://sportbox.up.railway.app/api/inventory_type/get_all", 
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setItemList(res.data)
        setCurrentItems(res.data)
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const changeFilter = (items) => {
      setCurrentItems(items)
      console.log(items);
  }

  return (
    <div className="base-part-sportEquipment-page">
      <FilterField changeFilter={changeFilter} />
      <ItemList items={currentItems}/>
    </div>
  );
};

export default EquipmentPage;