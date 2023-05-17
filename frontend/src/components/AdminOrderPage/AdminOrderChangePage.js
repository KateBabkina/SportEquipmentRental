import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"

export default function AdminOrderChangePage() {

    var username = 'sport';
    var password = '123';

    const order = useSelector(state => state.user.orderForChange);

    const acceptOrder = () => {
        axios.put(`https://sportbox.up.railway.app/api/booking/return?id=${order.id}`, {},
        {
            auth: {
                username: username,
                password: password
            }
        }).then(res => {
            console.log(res.data);
            alert(res.data.message)
            window.location.href = "/admin/orders"
        }).catch(() => {
            alert("An error occurred on the server")
        })
    }

    return (
        <div className="base-part-registration">

            <div className="centre-column-registration">

                <div className="order-wrapper">

                    <div className="order-information-lable">
                        Информация о заказе:
                    </div>

                    <div className="order-information-wrapper">
                        <div className="row-information">
                            <div className="id-lable">
                                Id:
                            </div>
                            <div className="id">
                                {order.id}
                            </div>
                        </div>
                        <div className="row-information">
                            <div className="id-lable">
                                Оборудование:
                            </div>

                            <div className="equipment">
                                {order.inventory}
                            </div>
                        </div>

                        <div className="row-information">
                            <div className="id-lable">
                                email:
                            </div>
                            {order.email}
                        </div>

                        <div className="row-information">
                            <div className="id-lable">
                                Дата начала:
                            </div>
                            {order.startDate}
                        </div>

                        <div className="row-information">
                            <div className="id-lable">
                                Дата окончания:
                            </div>
                            {order.endDate}
                        </div>

                        <div className="row-information">
                            <div className="id-lable">
                                Дата:
                            </div>
                            {order.date}
                        </div>

                        <div className="row-information">
                            <div className="id-lable">
                                Долг:
                            </div>
                            {order.debt}
                        </div>
                    </div>

                    <div className="button-find">
                        <button className="find-button" type="button" onClick={() => acceptOrder()} >
                            Принять оборудование
                        </button>
                    </div>

                </div>


            </div>


        </div>
    )
}
