import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';




function FilterField({ sendRequest }) {

    var username = 'sport';
    var password = '123';

    const [types, setTypes] = useState([])
    const [filter, setFilter] = useState({
        type: "",
        startRent: "",
        finishRent: "",
        priceFrom: 0,
        priceTo: 0
    })

    // useEffect(() => {
    //     console.log(filter);
    //   }, [filter])


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

    const filtredInventory = (event, type) => {
        if (type !== "") {
            setFilter((prev) => {
                return {
                    ...prev,
                    [event.target.id]: event.target.value
                }
            })
        }
    }
    const filtredStartRent = (event) => {

        setFilter((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }
    const filtredFinishRent = (event) => {

        setFilter((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }
    const filtredPriceTo = (event) => {

        setFilter((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }

    const filtredPriceFrom = (event) => {

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
                    <select id="type" onChange={(e) => filtredInventory(e)}>
                        <option key="-" value="всё">
                            Выберите тип
                        </option>
                        {getTypes()}
                    </select>
                </div>
                <h3>Дата начала аренды:</h3>
                <input id="startRent" placeholder="гггг-мм--дд" onChange={e => filtredStartRent(e)}></input>
                <h3>Дата окончания аренды:</h3>
                <input id="finishRent" placeholder="гггг-мм--дд" onChange={e => filtredFinishRent(e)}></input>
                <h3>Цена за день:</h3>
                <input id="priceFrom" onChange={e => filtredPriceFrom(e)}></input><input id="priceTo" onChange={e => filtredPriceTo(e)}></input>
                <button onClick={() => console.log(filter)}>Найти</button>
            </div>
        </div>
    )
}

export default FilterField;