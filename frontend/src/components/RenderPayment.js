import React from "react";
import { useState } from 'react';
import qr from "../images/QR-code.JPG"

function RenderAboutEquipment({ booking }) {

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


    function handlePaymentButton() {
        console.log(data);
        window.location.href = "/reccomendation"
    }

    return (
        <div className="centre-column-content">
            <div className="payment-wrapper">
                <div className="payment-box-wrapper">
                    <div className="information-about-order-wrapper">

                        <div className="order-number">
                            Заказ №{booking.id}:
                        </div>

                        <div className="order-equipment">
                            {booking.inventory.name}
                        </div>

                        <div className="order-data">
                            С {booking.startDate} по {booking.endDate}
                        </div>

                        <div className="order-equipment-size">
                            {booking.inventory.size} размер
                        </div>

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
                            <button className="pay-button" type="submit" onClick={() => handlePaymentButton()}>
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
    );
};

export default RenderAboutEquipment;