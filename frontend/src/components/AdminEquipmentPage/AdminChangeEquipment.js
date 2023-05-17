import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"

export default function AdminChangeEquipment() {

    var username = 'sport';
    var password = '123';

    const equipment = useSelector(state => state.user.dataForChange);
    const [requestToChange, setRequestToChange] = useState(() => {
        if (equipment.inventoryType.isSizable === true) {
            return {
                inventoryType: equipment.inventoryType.type,
                name: equipment.name,
                size: equipment.size
            }
        } else {
            return {
                inventoryType: equipment.inventoryType.type,
                name: equipment.name
            }
        }

    })

    const filtredInput = (event) => {

        if (event.target.id === "size") {
            setRequestToChange((prev) => {
                return {
                    ...prev,
                    [event.target.id]: Number(event.target.value)
                }
            })
        } else {
            setRequestToChange((prev) => {
                return {
                    ...prev,
                    [event.target.id]: event.target.value
                }
            })
        }

    }

    function checkData() {

        var inventoryType = document.getElementById("inventoryType").value
        var name = document.getElementById("name").value
        var size = "";

        if (equipment.inventoryType.isSizable === true) {
            size = document.getElementById("size").value
            if (Number(size) > 45 || Number(size) < 29) {
                alert("Размер должен быть в диапазоне от 29 до 45")
                return false
            }
        }

        if (inventoryType === "") {
            alert("Пожалуйста выберете тип оборудования")
            return false
        } else if (name === "") {
            alert("Введите название")
            return false
        } else {
            return true
        }
    }

    const changeEquipment = () => {
        var check = checkData()
        console.log(check);
        console.log(requestToChange);
        if (check) {
            axios.put(`https://sportbox.up.railway.app/api/inventory/change?id=${equipment.id}`, requestToChange,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    console.log(res.data);
                    alert(res.data.message)
                    window.location.href = "/admin/equipments"
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }
    }

    return (

        <div className="base-part-registration">
            <div className="centre-column-registration">
                <form name="registration-form-wraper">
                    <div className="create-label">
                        Для изменения оборудования введите новые данные
                    </div>


                    <div className="fullname-box">
                        <div className="fullname-box-label">
                            Тип оборудования:
                        </div>
                        <div className="field-type-equipment-box">
                            <input id="inventoryType" name="type-equipment" value={equipment.inventoryType.type} readOnly></input>
                        </div>
                    </div>

                    <div className="account-box">
                        <div className="account-box-label">
                            Название:
                        </div>
                        <div className="account-box-field">
                            <input type="text" value={requestToChange.name} id="name" name="login" required onChange={(e) => filtredInput(e)}
                                minLength="4" maxLength="50" size="20" />
                        </div>
                    </div>

                    {
                        equipment.inventoryType.isSizable ? <div className="firstpassword-box">
                            <div className="firstpassword-box-label">
                                Размер:
                            </div>
                            <div className="firstpassword-box-field">
                                <input type="text" value={requestToChange.size} id="size" name="password" required onChange={(e) => filtredInput(e)}
                                />
                            </div>
                        </div> : false
                    }



                    <div className="registration-box-action-box">
                        <button className="create-new-user-button" type="button" onClick={() => changeEquipment()}>
                            <div className="create-new-user-button-text">
                                Изменить
                            </div>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
