import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';

export default function AdminAddClient() {

    var username = 'sport';
    var password = '123';

    const [requestToAdd, setRequestToAdd] = useState({
        name: "",
        password: "",
        email: ""
    })

    const filtredInput = (event) => {
        setRequestToAdd((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value
            }
        })
    }

    function checkData() {

        var email = document.getElementById("email").value
        var name = document.getElementById("name").value
        var password = document.getElementById("password").value

        if (!validator.isEmail(email)) {
            alert("Проверьте почту")
            return false
        } else if (name === ""){
            alert("Введите имя")
            return false
        } else if (!validator.isStrongPassword(password, { minSymbols: 0 })){
            alert("Пароль должен состоять из 8 символов и иметь как заглавные, так и прописные символы")
            return false
        } else {
            return true
        }
    }

    const addClient = () => {
        var check = checkData()
        console.log(check);
        if (check) {
            axios.post("https://sportbox.up.railway.app/api/person/filter", requestToAdd,
                {
                    auth: {
                        username: username,
                        password: password
                    }
                }).then(res => {
                    console.log(res.data);
                    alert(res.data.message)
                }).catch(() => {
                    alert("An error occurred on the server")
                })
        }
    }

    return (
        <div className="base-part-registration">

            <div className="centre-column-registration">
                <form name="registration-form-wraper" method="POST" action="test.php">
                    <div className="create-label">
                        Для добавления клиента введите данные
                    </div>


                    <div className="fullname-box">
                        <div className="fullname-box-label">
                            ФИО:
                        </div>
                        <div className="fullname-box-field">
                            <input type="text" placeholder="Иванов Иван Иванович" id="name" name="fullName" required
                                minLength="4" maxLength="35" size="20" onChange={(e) => filtredInput(e)} />
                        </div>
                    </div>

                    <div className="account-box">
                        <div className="account-box-label">
                            Адрес эл. почты:
                        </div>
                        <div className="account-box-field">
                            <input type="text" placeholder="example@example.ru" id="email" name="login" required
                                minLength="4" maxLength="35" size="20" onChange={(e) => filtredInput(e)} />
                        </div>
                    </div>


                    <div className="firstpassword-box">
                        <div className="firstpassword-box-label">
                            Пароль:
                        </div>
                        <div className="firstpassword-box-field">
                            <input type="text" placeholder="********" id="password" name="password" required
                                minLength="4" maxLength="35" size="20" onChange={(e) => filtredInput(e)} />
                        </div>
                    </div>


                    <div className="registration-box-action-box">
                        <button className="create-new-user-button" type="submit" onClick={() => addClient()}>
                            <div className="create-new-user-button-text">
                                Добавить
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
