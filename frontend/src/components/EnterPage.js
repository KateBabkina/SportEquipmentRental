import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

const EnterPage = ({ setIsLogged }) => {

    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: ""
        }
    })

    const [response, setResponse] = useState(() => {
        return {
            message: "",
            status: true,
            person: null
        }
    });

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
        } else if (!validator.isStrongPassword(login.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            axios.get("http://localhost:8080/api/person/login", {
                email: login.email,
                password: login.password
            },
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    if (res.data.status === true) { //возможно нужны ""
                        localStorage.setItem("isLogged", true)
                        setIsLogged(true)
                        setResponse(res.data)
                        window.location.href = "/"
                    } else {
                        setResponse(res.data)
                        //alert("There is already a user with this email")
                    }
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }
    }

    return (
        <div className='login-main'>
            <form name="login-form" method="GET" onSubmit={(e) => submitChacking(e)}>

                <div className="login-panel">

                    <div className="login-box">
                        <div className="login-title">
                            <b>Введите адрес электронной почты:</b>
                        </div>
                        <div className="login-field">
                            <input type="text" id="email" name="email" value={login.email}
                                onChange={(e) => changeInputLogin(e)} required minLength="8" maxLength="35" size="20"></input>
                        </div>
                    </div>

                    <div className="password-box">
                        <div className="password-title">
                            <b>Введите пароль:</b>
                        </div>
                        <div className="password-field">
                            <input type="password" id="password" name="password" value={login.password}
                                onChange={(e) => changeInputLogin(e)} required minLength="8" maxLength="35" size="20"></input>
                        </div>
                    </div>

                    {
                        response.status ?
                            ""
                            : <div>response.message</div>
                    }

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