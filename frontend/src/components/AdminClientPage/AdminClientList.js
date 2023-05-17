import React from 'react'
import Client from './Client'

export default function AdminClientList({ clients }) {

    const linkToAddPage = () => {
        window.location.href = "/admin/clients/add"
    }

    return (
        <div className="table-manager-wrapper">

            <div className="button-add">
                <button className="add-button" type="submit" onClick={() => linkToAddPage()}>
                    Добавить клиента
                </button>
            </div>

            <div className="table-wrapper">
                <div className="column-lables">
                    <div className="order-number-lable">
                        Id
                    </div>
                    <div className="order-equipment-lable">
                        ФИО
                    </div>
                    <div className="order-price-lable">
                        Email
                    </div>
                    <div className="order-data-lable">
                        Статус
                    </div>
                    <div className="order-data-from-lable">
                        Роль
                    </div>
                    <div className="order-action-lable">

                    </div>
                    <div className="order-action-lable">

                    </div>
                </div>

                <div className="table-rows">
                    {
                        clients.map(client => {
                            console.log(clients.length);
                            if (clients[0] === null) {
                                return false
                            } else {
                                return <Client key={client.id} client={client}></Client>
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
}
