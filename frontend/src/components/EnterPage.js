import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {authorizeUser} from "../store/userSlice"

import axios from 'axios';
import validator from 'validator';

const EnterPage = () => {

    const dispatch = useDispatch();

    const authorize = (person) => {
        dispatch(authorizeUser(person));
    }

    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: ""
        }
    })

    const changeInputLogin = event => {
        event.persist()
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    var username = 'sport';
    var password = '123';

    function submitChacking(event) {
        event.preventDefault();
        if (!validator.isEmail(login.email)) {
            alert("You did not enter email")
        } else {
            axios.post("https://sportbox.up.railway.app/api/person/login", {
                email: login.email,
                password: login.password
            },
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    if (res.data.status === true) {
                        console.log(res.data);
                        authorize(res.data.person)
                        window.location.href = "/"  // при переходе на другую страницу не сохраняет состояние response
                    } else {
                        alert(res.data.message)
                    }
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }

    }

    return (
        <div className='login-main'>
            <form name="login-form" method="POST" onSubmit={(e) => submitChacking(e)}>

                <div className="login-panel">

                    <div className="login-box">
                        <div className="login-title">
                            <b>Введите адрес электронной почты:</b>
                        </div>
                        <div className="login-field">
                            <input type="text" id="email" name="email" value={login.email}
                                onChange={(e) => changeInputLogin(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="password-box">
                        <div className="password-title">
                            <b>Введите пароль:</b>
                        </div>
                        <div className="password-field">
                            <input type="password" id="password" name="password" value={login.password}
                                onChange={(e) => changeInputLogin(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="action-box">

                        <div className="action-buttons">

                            <div className="button-login">
                                <button className="login-button" type="submit">
                                    <div className="login-button-text">
                                        Вход
                                    </div>
                                </button>
                            </div>

                            <a href="/api/person/add">Зарегистрироваться, если нет аккаунта</a>

                        </div>

                    </div>

                </div>
            </form>
        </div>
    );
};

export default EnterPage;