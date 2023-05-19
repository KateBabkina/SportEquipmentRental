import React, { useState } from 'react'
import axios from 'axios';

import classes from '../../css/admin_order_manager_page.module.css';

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
    <div className={classes.filterPanelWrapper}>

      <div className={classes.filterLable}>
        Фильтры поиска
      </div>

      <div className={classes.idOrderWrapper}>


        <div className={classes.idOrderLable}>
          Id заказа:
        </div>

        <div className={classes.fieldIdOrder}>

          <input type="number" id="id" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>


      </div>

      <div className={classes.idEquipmentWrapper}>
        <div className={classes.idEquipmentLable}>
          Адрес электронной почты:
        </div>

        <div className={classes.fieldIdEquipment}>

          <input type="text" id="email" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>

      </div>

      <div className={classes.idEquipmentWrapper}>

        <div className={classes.idEquipmentLable}>
          Дата заказа:
        </div>

        <div className={classes.fieldIdEquipment}>

          <input type="date" id="date" name="fullName" required onChange={(e) => filtredInput(e)}
           minLength="4" maxLength="35" size="20" />

        </div>

      </div>

      <div className={classes.buttonFind}>
        <button className={classes.findButton} type="button" onClick={() => sendFilter()}>
          Найти
        </button>
      </div>
    </div>
  )
}
