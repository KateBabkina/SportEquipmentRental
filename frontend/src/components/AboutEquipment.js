import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import RenderAboutEquipment from "./RenderAboutEquipment";


function AboutEquipment() {

    var username = 'sport';
    var password = '123';

    const [item, setItem] = useState(null)

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            await axios.get(`http://localhost:8080/api/inventory/get_by_id?id=${localStorage.getItem("equipmentId")}`,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    console.log(res.data);
                    if (!cleanupFunction) setItem(res.data.inventory);

                }).catch(() => {
                    alert("An error occurred on the server")
                })
        };
        fetchData();
        return () => cleanupFunction = true;
    }, [])



    return (
        <div>
            {
                item ? <RenderAboutEquipment item={item}></RenderAboutEquipment> : false
            }
        </div>
    );
};

export default AboutEquipment;