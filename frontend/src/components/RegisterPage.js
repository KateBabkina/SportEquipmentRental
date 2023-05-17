import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { authorizeUser } from "../store/userSlice"
import axios from 'axios';
import validator from 'validator';

import '../css/registration_page.css'

function RegisterPage({ setIsLogged }) {

    const [register, setRegister] = useState(() => {
        return {
            usermame: "",
            email: "",
            password: ""
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const dispatch = useDispatch();

    const authorize = (person) => {
        dispatch(authorizeUser(person));
    }

    var username = 'sport';
    var password = '123';

    function submitChacking(event) {
        event.preventDefault();
        if (!validator.isEmail(register.email)) {
            alert("You did not enter email")
        } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            axios.post("https://sportbox.up.railway.app/api/person/add", {
                name: register.usermame,
                email: register.email,
                password: register.password
            },
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    if (res.data.status === true) {
                        authorize(res.data.person)
                        window.location.href = "/enter"
                    } else {
                        alert(res.data.message)
                    }
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }
    }

    return (
        <div className="base-part-registration">
            <div className="centre-column-registration">
                <form name="registration-form-wraper" method="POST" onSubmit={(e) => submitChacking(e)}>

                    <div className="create-label">

                        Для регистрации введите данные

                    </div>

                    <div className="fullname-box">
                        <div className="fullname-box-label">
                            ФИО:
                        </div>
                        <div className="fullname-box-field">
                            <input type="text" placeholder="Иванов Иван Иванович" id="usermame" name="usermame" value={register.usermame}
                                onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="account-box">
                        <div className="account-box-label">
                            Адрес эл. почты:
                        </div>
                        <div className="account-box-field">
                            <input type="text" placeholder="example@example.ru" id="email" name="email" value={register.email}
                                onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="firstpassword-box">
                        <div className="firstpassword-box-label">
                            Пароль:
                        </div>
                        <div className="firstpassword-box-field">
                            <input type="password" placeholder="********" id="password" name="password" value={register.password}
                                onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                        </div>
                    </div>



                    <div className="registration-box-action-box">
                        <button className="create-new-user-button" type="submit">
                            <div className="create-new-user-button-text">
                                Зарегистрироваться
                            </div>
                        </button>
                    </div>

                    <div className="login-box-action-box">
                        <a href="/enter">Войти, если есть аккаунт</a>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;