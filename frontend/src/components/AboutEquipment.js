import React from "react";
import { useState } from 'react';
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {setBooking} from "../store/userSlice"
import axios from 'axios';


function AboutEquipment() {
    
    var username = 'sport';
    var password = '123';

    const equipmentForRent = useSelector(state => state.user.equipmentForRent)
    const personId = useSelector(state => state.user.userId)
    const inventoryTypeId = equipmentForRent.id

    const [rentRequest, setRentRequest] = useState({
        personId: personId,
        inventoryTypeId: inventoryTypeId,
        startDate: "",
        endDate: "",
        size: 0
    })

    const filtredInput = (event) => {
        if (event.target.id === "size") {
            setRentRequest((prev) => {
                return {
                    ...prev,
                    [event.target.id]: Number(event.target.value)
                }
            })
        } else {
            setRentRequest((prev) => {
                return {
                    ...prev,
                    [event.target.id]: event.target.value
                }
            })
        }
    }

    function checkData(e){

        var startDate = document.getElementById("startDate").value
        var endDate = document.getElementById("endDate").value
        var startTime = new Date(startDate)
        var endTime = new Date(endDate)

        if (startDate === "" && endDate !== ""){
            e.preventDefault()
            alert("Заполните дату начала")
            return false
            
        } else if (startDate !== "" && endDate === "") {
            e.preventDefault()
            alert("Заполните дату окончания")
            return false
            
        } else if (startTime.getTime() > endTime.getTime()) {
            e.preventDefault()
            alert("Дата начала не может превышать дату окончания")
            return false
            
        } else {
            return true
        }
    }

    const dispatch = useDispatch()
    const sendBooking = (request) => {
        dispatch(setBooking(request))
    }

    const handleRentButton = (e) => {
        var check = checkData(e)
        if (check) {
            console.log(rentRequest);
            axios.post(`https://sportbox.up.railway.app/api/booking/check`, rentRequest,
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                if (res.data.status === true) {
                    console.log(res.data);
                    sendBooking(res.data.booking)
                    window.location.href = "/payment"
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
        } 
    }

    return (
        <div className="base-part-sportEquipment-page">

            <div className="centre-column-content">
                <div className="about-equipment-wrapper">

                    <div className="about-equipment-img">
                        <img src={require("../images/inventory/" + equipmentForRent.type + ".jpg")} alt="MISSING JPG" />
                    </div>

                    <div className="about-equipment-name">
                        {equipmentForRent.type}
                    </div>

                    <div className="about-equipment-description">
                        {equipmentForRent.description}
                    </div>

                    <form>

                        <div className="about-equipment-rent-data-wrapper">
                            <div className="rent-data-from-lable">
                                Дата начала аренды:
                            </div>
                            <div className="rent-data-to-lable">
                                Дата окончания аренды:
                            </div>
                            {
                                equipmentForRent.isSizable ? <div className="rent-size-lable">
                                    Размер:
                                </div> : false
                            }

                            <div className="field-rent-data-from">
                                <input id="startDate" type="date" name="data-from" required={true} onChange={e => filtredInput(e)}
                                    minLength="4" maxLength="35" size="20"></input>
                            </div>
                            <div className="field-rent-data-to">
                                <input id="endDate" type="date" name="data-to" onChange={e => filtredInput(e)}
                                    minLength="4" maxLength="35" size="20"></input>
                            </div>
                            {
                                equipmentForRent.isSizable ? <div className="field-rent-size">
                                    <input type="number" id="size" name="fullName" onChange={e => filtredInput(e)}
                                        min="29" maxLength="46"></input>
                                </div> : false
                            }

                            <div className="button-rent">
                                <button className="rent-button" type="button" onClick={(e) => handleRentButton(e)}>
                                    <div className="rent-button-text">
                                        Арендовать
                                    </div>
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AboutEquipment;