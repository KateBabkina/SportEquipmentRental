import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"
import ClipLoader from "react-spinners/ClipLoader";

export default function AdminChangeEquipment() {

    var username = 'sport';
    var password = '123';

    const equipment = useSelector(state => state.user.dataForChange);
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [requestToChange, setRequestToChange] = useState({
        inventoryType: equipment.inventoryType.type,
        name: equipment.name
        
    })

    useEffect(() => {
        setLoading(true)
        axios.get("https://sportbox.up.railway.app/api/inventory_type/get_all",
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                setTypes(res.data)
                setLoading(false)
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }, [])

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

        if(inventoryType === "") {
            alert("Пожалуйста выберете тип оборудования")
            return false
        } else if (name === ""){
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
            axios.put("https://sportbox.up.railway.app/api/inventory/add", requestToChange,
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


    const getTypes = () => {
        return types.map((type) => {
            return <option key={type.id} value={type.type}>{type.type}</option>;
        });
    }

    return (

        <div className="base-part-registration">
            {
                loading ?
                    <ClipLoader
                        color={"#1C62CD"}
                        loading={loading}
                        size={100} />
                    : <div className="centre-column-registration">
                        <form name="registration-form-wraper">
                            <div className="create-label">
                                Для изменения оборудования введите новые данные
                            </div>


                            <div className="fullname-box">
                                <div className="fullname-box-label">
                                    Тип оборудования:
                                </div>
                                <div className="field-type-equipment-box">
                                    <select id="inventoryType" name="type-equipment" value={requestToChange.inventoryType}
                                        onChange={(e) => filtredInput(e)}>
                                        <option key="-" value="">
                                            Выберите тип
                                        </option>
                                        {getTypes()}
                                    </select>
                                </div>
                            </div>

                            <div className="account-box">
                                <div className="account-box-label">
                                    Название:
                                </div>
                                <div className="account-box-field">
                                    <input type="text" value={requestToChange.name} id="name" name="login" required onChange={(e) => filtredInput(e)}
                                        minLength="4" maxLength="35" size="20" />
                                </div>
                            </div>

                            {
                                equipment.inventoryType.isSizable ? <div className="firstpassword-box">
                                    <div className="firstpassword-box-label">
                                        Размер:
                                    </div>
                                    <div className="firstpassword-box-field">
                                        <input type="text" value={equipment.size} id="size" name="password" required onChange={(e) => filtredInput(e)}
                                            minLength="4" maxLength="35" size="20" />
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

            }

        </div>
    )
}
