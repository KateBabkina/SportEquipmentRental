import React, { useState, useEffect } from 'react'
import AdminOrderFilterField from "./AdminOrderFilterField"
import AdminOrderList from "./AdminOrderList"



import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

import classes from '../../css/admin_order_manager_page.module.css';

export default function AdminOrderManagerPage() {

    var username = 'sport';
    var password = '123';

    const [orders, setOrders] = useState([])
    const [currentOrders, setCurrentOrders] = useState(orders)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.post("https://sportbox.up.railway.app/api/booking/filter", {},
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                setOrders(res.data)
                setCurrentOrders(res.data)
                setLoading(false)
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }, [])

    const changeFilter = (orders) => {
        setCurrentOrders(orders)
    }

    return (
        <div className={classes.managerWrapper}>
            {
                loading ?
                    <ClipLoader
                        color={"#1C62CD"}
                        loading={loading}
                        size={200}
                        className="spin"
                    />
                    :
                    <>
                        <AdminOrderFilterField changeFilter={changeFilter} ></AdminOrderFilterField>
                        <AdminOrderList orders={currentOrders}></AdminOrderList>
                    </>
            }
        </div>
    )
}
