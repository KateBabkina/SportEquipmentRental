import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { authorizeUser } from "../store/userSlice"

import axios from 'axios';
import validator from 'validator';

import '../css/login.css'

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
        <div className='base-part-registration'>
            <div class="centre-column-registration">
                <form name="registration-form-wraper" method="POST" onSubmit={(e) => submitChacking(e)}>

                    <div class="create-label">
                        Для входа введите данные
                    </div>

                    <div className="account-box">
                        <div className="account-box-label">
                            <b>Адрес эл. почты:</b>
                        </div>
                        <div className="account-box-field">
                            <input type="text" placeholder="example@example.ru" id="email" name="email" value={login.email}
                                onChange={(e) => changeInputLogin(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="firstpassword-box">
                        <div className="firstpassword-box-label">
                            <b>Пароль:</b>
                        </div>
                        <div className="firstpassword-box-field">
                            <input type="password" placeholder="********" id="password" name="password" value={login.password}
                                onChange={(e) => changeInputLogin(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>


                    <div className="registration-box-action-box">

                        <button className="create-new-user-button" type="submit">
                            <div className="create-new-user-button-text">
                                Войти
                            </div>
                        </button>

                    </div>

                    <div className="login-box-action-box">
                        <a href="/api/person/add">Зарегистрироваться, если нет аккаунта</a>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default EnterPage;