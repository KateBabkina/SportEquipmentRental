import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';




function FilterField({ changeFilter }) {

    var username = 'sport';
    var password = '123';

    const [types, setTypes] = useState([])
    const [filter, setFilter] = useState({
        inventoryType: "",
        startDate: "",
        endDate: "",
        minPrice: 0,
        maxPrice: 0
    })

    useEffect(() => {
        axios.get("http://localhost:8080/api/inventory_type/get_all",
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                setTypes(res.data)
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }, [])

    const sendFilter = () => {
        console.log("-----------");
        console.log(filter);
        axios.post("http://localhost:8080/api/inventory_type/filter", filter,
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        changeFilter(res.data)
      }).catch(() => {
        alert("An error occurred on the server")
      })
    }

    const filtredInput = (event) => {
        setFilter((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }

    const getTypes = () => {
        return types.map((type) => {
            return <option key={type.id} value={type.type}>{type.type}
            </option>;
        });
    }

    return (

        <div className="filter">
            <h2>Фильтры поиска</h2>
            <div className="type">
                <h3>Тип оборудования:</h3>
                <div>
                    <select id="inventoryType" onChange={(e) => filtredInput(e)}>
                        <option key="-" value="">
                            Выберите тип
                        </option>
                        {getTypes()}
                    </select>
                </div>
                <h3>Дата начала аренды:</h3>
                <input id="startDate" placeholder="гггг-мм--дд" onChange={e => filtredInput(e)}></input>
                <h3>Дата окончания аренды:</h3>
                <input id="endDate" placeholder="гггг-мм--дд" onChange={e => filtredInput(e)}></input>
                <h3>Цена за день:</h3>
                <input id="minPrice" onChange={e => filtredInput(e)}></input><input id="maxPrice" onChange={e => filtredInput(e)}></input>
                <button onClick={sendFilter}>Найти</button>
            </div>
        </div>
    )
}

export default FilterField;