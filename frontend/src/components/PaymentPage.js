import React from "react";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setBooking } from "../store/userSlice"

import axios from 'axios';
import validator from 'validator';
import qr from "../images/QR-code.JPG"


function PaymentPage() {

    var username = 'sport';
    var password = '123';

    const booking = useSelector(state => state.user.booking)

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

    const checkMonthCard = (monthCard) => {
        if(monthCard.length !== 2){
            return false
        } 
        if(monthCard.charAt(0) === "0"){
            var num = Number(monthCard.charAt(1))
            if(num < 1 || num > 9){
                return false
            }
        } else {
            var num = Number(monthCard)
            if(num < 1 || num > 12){
                return false
            }
        }
        return true
    }

    const checkYearCard = (yearCard) => {
        if(yearCard.length !== 2){
            return false
        } 
        if(yearCard.charAt(0) === "0"){
            var num = Number(yearCard.charAt(1))
            if(num < 1 || num > 9){
                return false
            }
        } else {
            var num = Number(yearCard)
            if(num < 1 || num > 99){
                return false
            }
        }
        return true
    }

    function checkData(e) {

        var numderCard = document.getElementById("numderCard").value
        var yearCard = document.getElementById("yearCard").value
        var monthCard = document.getElementById("monthCard").value
        var cvc = document.getElementById("cvc").value

        if (!validator.isCreditCard(numderCard)) {
            e.preventDefault()
            alert("Проверьте номер карты")
            return false
        } else if (!checkMonthCard(monthCard)) {
            e.preventDefault()
            alert("Проверьте месяц")
            return false
        } else if (!checkYearCard(yearCard)) {
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
    const dispatch = useDispatch()

    const handlePaymentButton = (e) => {

        var check = checkData(e)
        console.log(check);
        if (check) {
            console.log(data);
            axios.post(`https://sportbox.up.railway.app/api/booking/add`, {
                personId: personId,
                inventoryTypeId: booking.inventory.inventoryType.id,
                startDate: booking.startDate,
                endDate: booking.endDate,
                size: booking.inventory.size
            },
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    if (res.data.status === true) {
                        console.log(res.data);
                        dispatch(setBooking(res.data.booking))
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
                                {booking.inventory.name}
                            </div>

                            <div className="order-data">
                                С {booking.startDate.substring(0, 10)} по {booking.endDate.substring(0, 10)}
                                
                            </div>
                            {
                                booking.inventory.inventoryType.isSizable ?
                                    <div className="order-equipment-size">
                                        {booking.inventory.size} размер
                                    </div> : false
                            }
                            
                            <div className="order-price">
                                {booking.price} руб.
                            </div>


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