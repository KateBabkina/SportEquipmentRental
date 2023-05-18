import React, { useState, useEffect } from 'react'
import AdminEventFilterField from "./AdminEventFilterField"
import AdminEventList from "./AdminEventList"
import classes from '../../css/admin_event_manager_page.css';

import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

export default function AdminEventManagerPage() {

    var username = 'sport';
    var password = '123';

    const [events, setEvents] = useState([])
    const [currentEvents, setCurrentEvents] = useState(events)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.post("https://sportbox.up.railway.app/api/event/filter", {},
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                setEvents(res.data)
                setCurrentEvents(res.data)
                setLoading(false)
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }, [])

    const changeFilter = (events) => {
        setCurrentEvents(events)
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
                        <AdminEventFilterField changeFilter={changeFilter} ></AdminEventFilterField>
                        <AdminEventList events={currentEvents}></AdminEventList>
                    </>
            }
        </div>
    )
}
