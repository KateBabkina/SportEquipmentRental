import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux"

import classes from '../../css/admin_order_modify_page.module.css';

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
        <div className={classes.basePartRegistration}>

            <div className={classes.centreColumnRegistration}>

                <div className={classes.orderWrapper}>

                    <div className={classes.orderInformationLable}>
                        Информация о заказе:
                    </div>

                    <div className={classes.orderInformationWrapper}>
                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Id:
                            </div>
                            <div className={classes.id}>
                                {order.id}
                            </div>
                        </div>
                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Оборудование:
                            </div>

                            <div className={classes.equipment}>
                                {order.inventory}
                            </div>
                        </div>

                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                            Адрес эл. почты:
                            </div>
                            {order.email}
                        </div>

                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Дата начала:
                            </div>
                            {order.startDate}
                        </div>

                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Дата окончания:
                            </div>
                            {order.endDate}
                        </div>

                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Дата:
                            </div>
                            {order.date}
                        </div>

                        <div className={classes.rowInformation}>
                            <div className={classes.idLable}>
                                Долг:
                            </div>
                            {order.debt}
                        </div>
                    </div>

                    <div className={classes.buttonFind}>
                        <button className={classes.findButton} type="button" onClick={() => acceptOrder()} >
                            Принять оборудование
                        </button>
                    </div>

                </div>


            </div>


        </div>
    )
}
