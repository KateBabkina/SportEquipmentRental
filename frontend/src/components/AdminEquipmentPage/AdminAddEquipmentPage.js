import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

export default function AdminAddEquipmentPage() {

    var username = 'sport';
    var password = '123';

    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [requestToAdd, setRequestToAdd] = useState({
        inventoryType: "",
        name: ""
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
            for (let i = 0; i < types.length; i++) {
                if (requestToAdd.inventoryType === types[i].type) {
                    if (types[i].isSizable === true) {
                        setRequestToAdd((prev) => {
                            return {
                                ...prev,
                                [event.target.id]: Number(event.target.value)
                            }
                        })
                    } else {
                        setRequestToAdd((prev) => {
                            return {
                                ...prev
                            }
                        })
                    }
                }
            }
        } else {
            setRequestToAdd((prev) => {
                return {
                    ...prev,
                    [event.target.id]: event.target.value
                }
            })
        }

    }

    const getTypes = () => {
        return types.map((type) => {
            return <option key={type.id} value={type.type}>{type.type}</option>;
        });
    }

    function checkData() {

        var inventoryType = document.getElementById("inventoryType").value
        var name = document.getElementById("name").value

        var size = "";
        console.log(requestToAdd);
        for (let i = 0; i < types.length; i++) {
            if (requestToAdd.inventoryType === types[i].type) {
                if (types[i].isSizable === true) {
                    size = document.getElementById("size").value
                    if (Number(size) > 45 || Number(size) < 29) {
                        alert("Размер должен быть в диапазоне от 29 до 45")
                        return false
                    }
                }
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

    const addClient = () => {
        var check = checkData()
        console.log(check);
        console.log(requestToAdd);
        if (check) {
            axios.post("https://sportbox.up.railway.app/api/inventory/add", requestToAdd,
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
        <div className="centre-column-registration">
            {
                loading ?
                    <ClipLoader
                        color={"#1C62CD"}
                        loading={loading}
                        size={100}
                    />
                    :
                    <form name="registration-form-wraper">
                        <div className="create-label">
                            Для добавления оборудования введите данные
                        </div>


                        <div className="fullname-box">
                            <div className="fullname-box-label">
                                Тип оборудования:
                            </div>
                            <div className="field-type-equipment-box">
                                <select id="inventoryType" name="type-equipment" onChange={(e) => filtredInput(e)}>
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
                                <input type="text" id="name" name="login" required onChange={(e) => filtredInput(e)}
                                    minLength="4" maxLength="35" size="20" />
                            </div>
                        </div>


                        <div className="firstpassword-box">
                            <div className="firstpassword-box-label">
                                Размер:
                            </div>
                            <div className="firstpassword-box-field">
                                <input type="text" id="size" name="password" required onChange={(e) => filtredInput(e)}
                                    minLength="4" maxLength="35"
                                    size="20" />
                            </div>
                        </div>

                        <div className="registration-box-action-box">
                            <button className="create-new-user-button" type="button" onClick={() => addClient()}>
                                <div className="create-new-user-button-text">
                                    Добавить
                                </div>
                            </button>
                        </div>
                    </form>
            }
        </div>

    )
}
