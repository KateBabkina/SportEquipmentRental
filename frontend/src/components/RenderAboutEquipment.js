import axios from 'axios';
import { useState, useEffect } from 'react';

function RenderAboutEquipment({ item }) {

    var username = 'sport';
    var password = '123';

    const [rentRequest, setRentRequest] = useState({
        personId: Number(localStorage.getItem("userId")),
        inventoryTypeId: Number(localStorage.getItem("equipmentId")),
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

    const handleRentButton = (e) => {

        var check = checkData(e)
        console.log(check);
        if (check) {
            console.log(rentRequest);
            axios.post(`http://localhost:8080/api/booking/add`, rentRequest,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    if (res.data.status === true){
                        e.returnValue = true;
                        console.log(res.data);
                        localStorage.setItem("bookingId", res.data.booking.id)
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
                        <img src={require("../images/inventory/" + item.inventoryType.type + ".jpg")} alt="MISSING JPG" />
                    </div>

                    <div className="about-equipment-name">
                        {item.inventoryType.type}
                    </div>

                    <div className="about-equipment-description">
                        {item.inventoryType.description}
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
                                item.inventoryType.isSizable ? <div className="rent-size-lable">
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
                                item.inventoryType.isSizable ? <div className="field-rent-size">
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

export default RenderAboutEquipment;