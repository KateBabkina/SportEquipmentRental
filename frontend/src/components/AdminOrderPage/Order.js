import React from 'react'

import {useDispatch} from "react-redux"
import {setOrderForChange} from "../../store/userSlice"


export default function Order({ order }) {

    const dispatch = useDispatch()

    const linkToChangePage = () => {
        dispatch(setOrderForChange(order))
        window.location.href = "/admin/orders/change"
    }

    return (
        <div className="row">

            <div className="event-id-row">
                {order.id}
            </div>

            <div className="event-name-row">
                <div className="fullname-cell">
                    {order.inventory}
                </div>
            </div>
            <div className="event-equipment-type-row">
                <div className="event-equipment-type-cell">
                    {order.email}
                </div>
            </div>

            <div className="event-price-row">
                {order.price}
            </div>
            <div className="event-data-from-row">
                {order.date}
            </div>
            <div className="event-data-to-row">
                {order.startDate}
            </div>
            <div className="event-data-to-row">
                {order.endDate}
            </div>
            <div className="order-debt">
                {order.debt}
            </div>
            <div className="order-action-row">
                <div className="button-cancel">
                    <button className="cancel-button" type="button" onClick={() => linkToChangePage()}>
                        <div className="cancel-button-text">
                            Изменить
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
