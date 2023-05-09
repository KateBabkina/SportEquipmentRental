import React from "react";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {setBookingId} from "../store/userSlice"
import axios from 'axios';
import qr from "../images/QR-code.JPG"


function PaymentPage() {

    var username = 'sport';
    var password = '123';

    const equipmentForRent = useSelector(state => state.user.equipmentForRent)

    const [data, setData] = useState({
        numderCard: 0,
        yearCard: 0,
        monthCard: 0,
        cvc: 0
    })

    const filtredInput = (event) => {
        setData((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })
    }
    
    function checkData(e){

        var numderCard = document.getElementById("numderCard").value
        var yearCard = document.getElementById("yearCard").value
        var monthCard = document.getElementById("monthCard").value
        var cvc = document.getElementById("cvc").value

        if (numderCard.length !== 16){
            e.preventDefault()
            alert("Проверьте номер карты")
            return false
        } else if (monthCard.length !== 2){
            e.preventDefault()
            alert("Проверьте месяц")
            return false
        } else if (yearCard.length !== 2){
            e.preventDefault()
            alert("Проверьте год")
            return false
        } else if (cvc.length !== 3) {
            e.preventDefault()
            alert("Проверьте CVC")
            return false
        } else {
            return true
        }
        
    }

    const personId = useSelector(state => state.user.userId)
    const inventoryTypeId = equipmentForRent.id
    const dataForBooking = useSelector(state => state.user.dataForBooking)
    console.log(equipmentForRent);

    const dispatch = useDispatch();
    const bookingId = (id) => {
        dispatch(setBookingId(id))
    }

    const handlePaymentButton = (e) => {

        var check = checkData(e)
        console.log(check);
        if (check){
            console.log(data);
            axios.post(`http://localhost:8080/api/booking/add`, {
                personId: personId,
                inventoryTypeId: inventoryTypeId,
                startDate: dataForBooking.startDate,
                endDate: dataForBooking.endDate,
                size: dataForBooking.size
            },
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                if (res.data.status === true) {
                    console.log(res.data);
                    bookingId(res.data.booking.id)
                    window.location.href = "/reccomendation"
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
                <div className="payment-wrapper">
                    <div className="payment-box-wrapper">
                        <div className="information-about-order-wrapper">

                            <div className="order-equipment">
                                {equipmentForRent.inventory.name}
                            </div>

                            <div className="order-data">
                                С {dataForBooking.startDate} по {dataForBooking.endDate}
                            </div>

                            <div className="order-equipment-size">
                                {dataForBooking.inventory.size} размер
                            </div>


                            {
                                equipmentForRent.inventory.isSizable ?
                                    <div className="order-price">
                                        {equipmentForRent.price} руб.
                                    </div> : false
                            }


                        </div>

                        <div className="payment-instruction">
                            Для оплаты введите данные карты или отсканируйте QR-код на экране.
                        </div>

                        <form>

                            <div className="payment-card-information-wrapper">
                                <div className="card-number">
                                    <input type="tel" placeholder="Номер карты" id="numderCard" name="fullName" required
                                        minLength="16" maxLength="16" size="16" onChange={e => { filtredInput(e) }} />
                                </div>

                                <div className="other-information-card-wrapper">
                                    <div className="card-month">
                                        <input type="number" placeholder="ММ" id="monthCard" name="fullName" required
                                            minLength="2" maxLength="2" min="1" max="12" onChange={e => { filtredInput(e) }} />
                                    </div>

                                    <div className="separator">
                                        /
                                    </div>

                                    <div className="card-year">
                                        <input type="number" placeholder="ГГ" id="yearCard" name="fullName" required
                                            minLength="2" maxLength="2" min="00" max="99" onChange={e => { filtredInput(e) }} />
                                    </div>

                                    <div className="card-cvc-lable">
                                        Три цифры на обороте карты
                                    </div>

                                    <div className="card-cvc">
                                        <input type="tel" placeholder="CVC" id="cvc" name="fullName" required
                                            minLength="3" maxLength="3" min="000" max="999" onChange={e => { filtredInput(e) }} />
                                    </div>

                                </div>
                            </div>
                            <div className="button-pay">
                                <button className="pay-button" type="button" onClick={(e) => handlePaymentButton(e)}>
                                    Оплатить
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className="qr-code-box">
                        <div className="qr-code">
                            <img src={qr} alt="Missing picture" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;