import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import RenderPayment from "./RenderPayment"


function PaymentPage() {

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



    return (
        <div className="base-part-sportEquipment-page">
            {
                booking ? <RenderPayment booking={booking}></RenderPayment> : false
            }
        </div>
    );
};

export default PaymentPage;