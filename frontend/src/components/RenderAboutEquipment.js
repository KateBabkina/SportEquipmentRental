import React from "react";
import axios from 'axios';
import { useState } from 'react';

function RenderAboutEquipment({ item }) {

    var username = 'sport';
    var password = '123';

    const [rentRequest, setRentRequest] = useState({
        personId: localStorage.getItem("userId"),
        inventoryTypeId: localStorage.getItem("equipmentId"),
        startDate: "",
        endDate: ""
    })

    const filtredInput = (event) => {
        setRentRequest((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })

    }

    const handleRentButton = () => {
        axios.post(`http://localhost:8080/api/booking/add`, { rentRequest },
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }

    return (
        <div className="base-part-sportEquipment-page">

            <div className="centre-column-content">
                <div className="about-equipment-wrapper">

                    <div className="about-equipment-img">
                        <img src={require("../images/inventory/" + item.name + ".jpg")} alt="MISSING JPG" />
                    </div>

                    <div className="about-equipment-name">
                        {item.name}
                    </div>

                    <div className="about-equipment-description">
                        {item.inventoryType.description}
                    </div>

                    <div className="about-equipment-rent-data-wrapper">
                        <div className="rent-data-from-lable">
                            Дата начала аренды:
                        </div>
                        <div className="rent-data-to-lable">
                            Дата окончания аренды:
                        </div>
                        <div className="rent-size-lable">
                            Размер:
                        </div>
                        <div className="field-rent-data-from">
                            <input id="startDate" type="date" name="data-from" onChange={e => filtredInput(e)}
                                minLength="4" maxLength="35" size="20"></input>
                        </div>
                        <div className="field-rent-data-to">
                            <input id="endDate" type="date" name="data-to" onChange={e => filtredInput(e)}
                                minLength="4" maxLength="35" size="20"></input>
                        </div>
                        <div className="field-rent-size">
                            <input type="number" id="size" name="fullName"></input>
                        </div>

                        <div className="button-rent">
                            <button className="rent-button" type="submit" onClick={() => handleRentButton()}>
                                <div className="rent-button-text">
                                    Арендовать
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RenderAboutEquipment;