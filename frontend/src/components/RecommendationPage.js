import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Event from "./Event";


function ReccomendationPage() {

    var username = 'sport';
    var password = '123';

    const [booking, setBooking] = useState(null)

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            await axios.get(`http://localhost:8080/api/booking/get_by_id?id=${localStorage.getItem("bookingId")}`,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    console.log(res.data);
                    if (!cleanupFunction) setBooking(res.data.booking);

                }).catch(() => {
                    alert("An error occurred on the server")
                })
        };
        fetchData();
        return () => cleanupFunction = true;
    }, [])

    const getReccomrndation = () => {
        return (
            <div className="centre-column-content">
                <div className="recommendation-wrapper">

                    <div className="order-status">
                        Заказ № {booking.id} успешно оплачен.
                    </div>

                    <div className="recommendation-lable">
                        Рекомендуем принять участие в следующих мероприятиях:
                    </div>

                    <div className="recommendation-event">
                        <div className="event-wrapper">

                            {booking.events.map(el => (
                                <Event key={el.id} event={el} />
                            ))}

                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {
                booking ? getReccomrndation() : false
            }
        </div>
    );
};

export default ReccomendationPage;