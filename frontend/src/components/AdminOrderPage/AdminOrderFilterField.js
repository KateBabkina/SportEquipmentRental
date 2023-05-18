import React, { useState } from 'react'
import axios from 'axios';

export default function AdminOrderFilterField({ changeFilter }) {

  var username = 'sport';
  var password = '123';

  const [filter, setFilter] = useState({})

  const filtredInput = (event) => {
    if (event.target.id === "id") {
      setFilter((prev) => {
        return {
          ...prev,
          [event.target.id]: Number(event.target.value)
        }
      })
    } else {
      setFilter((prev) => {
        return {
          ...prev,
          [event.target.id]: event.target.value
        }
      })
    }
  }

  function checkData() {
    return true
  }

  const sendFilter = () => {
    var check = checkData()
    if (check) {
      console.log(filter);
      axios.post("https://sportbox.up.railway.app/api/booking/filter", filter,
        {
          auth: {
            username: username,
            password: password
          }
        }).then(res => {
          console.log(res.data);
          changeFilter(res.data)
        }).catch(() => {
          alert("An error occurred on the server")
        })
    }
  }

  return (
    <div className="filter-panel-wrapper">

      <div className="filter-lable">
        Фильтры поиска
      </div>

      <div className="id-order-wrapper">


        <div className="id-order-lable">
          Id заказа:
        </div>

        <div className="field-id-order">

          <input type="number" id="id" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>


      </div>

      <div className="id-equipment-wrapper">

        <div className="id-equipment-lable">
          Адрес электронной почты:
        </div>

        <div className="field-id-equipment">

          <input type="text" id="email" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>

      </div>

      <div className="id-equipment-wrapper">

        <div className="id-equipment-lable">
          Дата заказа:
        </div>

        <div className="field-id-equipment">

          <input type="date" id="date" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>

      </div>

      <div className="button-find">
        <button className="find-button" type="button" onClick={() => sendFilter()}>
          Найти
        </button>
      </div>
    </div>
  )
}
