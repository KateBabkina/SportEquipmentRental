import React from 'react'
import Order from "./Order"

export default function AdminOrderList({ orders }) {

  console.log(orders);
  return (
    <div className="table-manager-wrapper">

      <div className="void-box">
      </div>

      <div className="table-wrapper">
        <div className="column-lables">
          <div className="event-id-lable">
            Id
          </div>
          <div className="event-name-lable">
            Оборудование
          </div>
          <div className="event-equipment-type-lable">
            Email
          </div>
          <div className="event-price-lable">
            Цена, руб.
          </div>
          <div className="event-data-from-lable">
            Дата заказа
          </div>
          <div className="event-data-from-lable">
            Дата начала
          </div>
          <div className="event-data-from-lable">
            Дата окончания
          </div>
          <div className='order-debt'>
            Долг, руб
          </div>
          <div className="event-action-lable">

          </div>
        </div>

        <div className="table-rows">
        {
            
            orders.map(order => {
              console.log(orders.length);
              if (orders[0] === null) {
                return false
              } else {
                return <Order key={order.id} order={order}></Order>
              }
            })
          }
        </div>
      </div>

    </div>
  )
}
