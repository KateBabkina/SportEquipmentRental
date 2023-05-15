import React from 'react'
import axios from 'axios';

import {useDispatch} from "react-redux"
import {setDataForChange} from "../../store/userSlice"

export default function Equipment({ equipment }) {

    var username = 'sport';
    var password = '123';

    const dispatch = useDispatch()

    const deleteUser = () => {
        axios.delete(`https://sportbox.up.railway.app/api/inventory/delete?id=${equipment.id}`,
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                if (res.data.status === true) {
                    console.log(res.data);
                    alert(res.data.message)
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }

    const changeUser = () => {
        dispatch(setDataForChange(equipment))
        window.location.href = "/admin/equipments/change"
    }

    return (
        <div className="row">

            <div className="order-number-row">
                {equipment.id}
            </div>

            <div className="order-equipment-row">

                {equipment.name}

            </div>
            <div className="order-price-row">
                {equipment.inventoryType.type}
            </div>

            <div className="order-data-row">
                {equipment.inventoryType.isSizable ? equipment.size : "-"}
            </div>
            <div className="order-data-from-row">
                {equipment.inventoryType.price}
            </div>
            <div className="order-action-row">
                <div className="button-cancel">
                    <button className="cancel-button" type="submit" onClick={() => deleteUser()}>
                        <div className="cancel-button-text">
                            Удалить
                        </div>
                    </button>
                </div>
            </div>
            <div className="order-action-row">
                <div className="button-cancel">
                    <button className="cancel-button" type="submit" onClick={() => changeUser()}>
                        <div className="cancel-button-text">
                            Изменить
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
