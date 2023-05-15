import React from 'react'
import Equipment from "./Equipment"

export default function AdminEquipmentList({ equipments }) {

  const linkToAddPage = () => {
    window.location.href = "/admin/equipments/add"
  }

  return (
    <div className="table-manager-wrapper">

      <div className="button-add">
        <button className="add-button" type="submit" onClick={() => linkToAddPage()}>
          Добавить оборудование
        </button>
      </div>

      <div className="table-wrapper">
        <div className="column-lables">
          <div className="order-number-lable">
            Id
          </div>
          <div className="order-equipment-lable">
            Название
          </div>
          <div className="order-price-lable">
            Тип
          </div>
          <div className="order-data-lable">
            Размер
          </div>
          <div className="order-data-from-lable">
            Цена в день, руб.
          </div>
          <div className="order-action-lable">

          </div>
          <div className="order-action-lable">

          </div>
        </div>

        <div className="table-rows">

          {
            equipments.map(equipment => {
              console.log(equipments.length);
              if (equipments[0] === null) {
                return false
              } else {
                return <Equipment key={equipment.id} equipment={equipment}></Equipment>
              }
            })
          }

        </div>
      </div>
    </div>
  )
}
