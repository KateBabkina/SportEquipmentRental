import React from 'react'
import axios from 'axios';

export default function Client({ client }) {

    var username = 'sport';
    var password = '123';

    const banUser = () => {
        axios.put(`https://sportbox.up.railway.app/api/person/ban?id=${client.id}`, {
            isBaned: true
        },
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                if (res.data.status === true) {
                    console.log(res.data);
                    alert(res.data.message)
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }
    const unbanUser = () => {
        axios.put(`https://sportbox.up.railway.app/api/person/unban?id=${client.id}`, {
            isBaned: false
        },
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                if (res.data.status === true) {
                    console.log(res.data);
                    alert(res.data.message)
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }
    const deleteUser = () => {
        axios.delete(`https://sportbox.up.railway.app/api/person/delete?id=${client.id}`,
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                if (res.data.status === true) {
                    console.log(res.data);
                    alert(res.data.message)
                    window.location.reload()
                } else {
                    alert(res.data.message)
                }
            }).catch(() => {
                alert("An error occurred on the server")
            })
    }


    return (
        <div className="row">

            <div className="order-number-row">
                {client.id}
            </div>

            <div className="order-equipment-row">
                <div className="fullname-cell">
                    {client.name}
                </div>
            </div>
            <div className="order-price-row">
                <div className="email-cell">
                    {client.email}
                </div>
            </div>

            <div className="order-data-row">
                {client.isBaned ? <div>Заблокирован</div> : <div>Не заблокирован</div>}
            </div>
            <div className="order-data-from-row">
                {client.role.name === "Customer" ? <div>Покупатель</div> : <div>Админ</div>}
            </div>
            <div className="order-action-row">
                <div className="button-cancel">
                    <button className="cancel-button" type="submit" onClick={() => deleteUser()}>
                        <div className="cancel-button-text">
                            Удалить
                        </div>
                    </button>
                </div>
            </div>
            <div className="order-action-row">
                {
                    client.isBaned ?
                        <div className="button-cancel">
                            <button className="cancel-button" type="submit" onClick={() => unbanUser()}>
                                <div className="cancel-button-text">
                                    Разблокировать
                                </div>
                            </button>
                        </div>
                        :
                        <div className="button-cancel">
                            <button className="cancel-button" type="submit" onClick={() => banUser()}>
                                <div className="cancel-button-text">
                                    Заблокировать
                                </div>
                            </button>
                        </div>
                }

            </div>

        </div>
    )
}
