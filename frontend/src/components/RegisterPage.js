import React, { useState } from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {authorizeUser} from "../store/userSlice"
import axios from 'axios';
import validator from 'validator';

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
            axios.post("http://localhost:8080/api/person/add", {
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
            <form name="registration-form" method="POST" onSubmit={(e) => submitChacking(e)}>

                <div className="create-label">

                    <h2 align="center">Для регистрации введите данные</h2>

                </div>

                <div className="fullname-box">
                    <div className="fullname-box-label">
                        <b>Введите ФИО:</b>
                    </div>
                    <div className="fullname-box-field">
                        <input type="text" id="usermame" name="usermame" value={register.usermame}
                            onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                    </div>
                </div>

                <div className="account-box">
                    <div className="account-box-label">
                        <b>Введите Email:</b>
                    </div>
                    <div className="account-box-field">
                        <input type="text" id="email" name="email" value={register.email}
                            onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                    </div>
                </div>

                <div className="firstpassword-box">
                    <div className="firstpassword-box-label">
                        <b>Введите Пароль:</b>
                    </div>
                    <div className="firstpassword-box-field">
                        <input type="password" id="password" name="password" value={register.password}
                            onChange={(e) => changeInputRegister(e)} required maxLength="35" size="20"></input>
                    </div>
                </div>

                <div className="action-box">
                    <div className="action-buttons">

                        <div className="registration-box-action-box">
                            <button className="create-new-user-button" type="submit">
                                <div className="create-new-user-button-text">
                                    Зарегистрироваться
                                </div>
                            </button>
                        </div>

                        <a href="/enter">Войти, если есть аккаунт</a>

                    </div>

                </div>


            </form>
        </div>
    );
};

export default RegisterPage;