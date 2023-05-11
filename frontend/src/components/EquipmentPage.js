import React from "react";
import { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import FilterField from "./FiltreField";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

function EquipmentPage() {

  var username = 'sport';
  var password = '123';


  const [itemList, setItemList] = useState([])
  const [currentItems, setCurrentItems] = useState(itemList)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
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
      {
        loading ?
          <ClipLoader
            color={"#1C62CD"}
            loading={loading}
            size={100}
          />
          :
          <div>
            <FilterField changeFilter={changeFilter} />
            <ItemList items={currentItems} />
          </div>
      }
    </div>
  );
};

export default EquipmentPage;