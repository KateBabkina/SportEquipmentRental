import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

export default function AdminClientFilterField({ changeFilter }) {

    var username = 'sport';
    var password = '123';

    const [filter, setFilter] = useState({})

    const filtredInput = (event) => {
        if (event.target.value === "") {
            setFilter({})
        } else {
            setFilter(() => {
                return {
                    email: event.target.value
                }
            })
        }
    }

    
    function checkData(){

        var email = document.getElementById("email").value

        if (validator.isEmail(email) || email === ""){
            return true
        } else {
            return false
        }
    }

    const sendRequest = () => {
        console.log(filter);
        var check = checkData()
        console.log(check);
        if (check) {
            console.log(filter);
            axios.post("https://sportbox.up.railway.app/api/person/filter", filter,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    console.log(res.data);
                    changeFilter(res.data)
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }
    }

    return (
        <div className="filter-panel-wrapper">

            <div className="filter-lable">
                Фильтры поиска
            </div>

            <div className="email-wrapper">

                <div className="email-lable">
                    Email:
                </div>

                <div className="field-email">
                    <input type="email" placeholder="example@example.ru" id="email" name="email"
                        minLength="4" maxLength="35" size="20" onChange={(e) => filtredInput(e)} />
                </div>

            </div>

            <div className="button-find">
                <button className="find-button" type="submit" onClick={() => sendRequest()}>
                    Найти
                </button>
            </div>
        </div>
    )
}
