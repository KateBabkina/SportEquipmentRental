import React from "react";
import { useState, useEffect } from 'react';

var inventoryType = document.getElementById("inventoryType")

function FilterField(){

    return (
        <div className="filter">
            <h2>Фильтры поиска</h2>
            <div className="type">
                <h3>Тип оборудования:</h3>
                <select id="inventoryType">
                    <option value="">Выберите тип</option>
                    <option value="лыжи">Лыжи</option>
                    <option value="велосипед">Велосипед</option>
                    <option value="мяч футбольный">Мяч футбольный</option>
                    <option value="фрисби">Фрисби</option>
                </select>
                <button onClick={() => {console.log(inventoryType.value);}}></button>
                <h3>Дата начала аренды:</h3>
                <input></input>
            </div>
        </div>
    )
}

export default FilterField;