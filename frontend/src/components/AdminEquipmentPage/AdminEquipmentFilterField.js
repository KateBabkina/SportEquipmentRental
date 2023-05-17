import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function AdminEquipmentFilterField({ changeFilter }) {

  var username = 'sport';
  var password = '123';

  const [filter, setFilter] = useState({})
  const [types, setTypes] = useState([])


  useEffect(() => {
    axios.get("https://sportbox.up.railway.app/api/inventory_type/get_all",
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setTypes(res.data)
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const filtredInput = (event) => {
    if (event.target.id === "id") {
      setFilter((prev) => {
        return {
          ...prev,
          [event.target.id]: Number(event.target.value)
        }
      })
    } else if (event.target.id === "inventoryType" && event.target.value === ""){
      setFilter({})
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
      axios.post("https://sportbox.up.railway.app/api/inventory/filter", filter,
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

  const getTypes = () => {
    return types.map((type) => {
      return <option key={type.id} value={type.type}>{type.type}</option>;
    });
  }

  return (
    <div className="filter-panel-wrapper">

      <div className="filter-lable">
        Фильтры поиска
      </div>


      <div className="type-equipment-wrapper">

        <div className="type-equipment-lable">
          Тип оборудования:
        </div>

        <div className="field-type-equipment">

          <select id="inventoryType" name="type-equipment" onChange={(e) => filtredInput(e)}>
            <option key="-" value="">
              Выберите тип
            </option>
            {getTypes()}
          </select>

        </div>

        <div className="id-equipment-wrapper">

          <div className="id-equipment-lable">
            Идентификатор
            <br />
            оборудования:
          </div>

          <div className="field-id-equipment">

            <input type="number" id="id" name="fullName" required onChange={e => filtredInput(e)}
            minLength="4" maxLength="35"size="20" />

          </div>

        </div>

        <div className="button-find">
          <button className="find-button" type="button" onClick={() => sendFilter()}>
            Найти
          </button>
        </div>

      </div>

    </div>
  )
}
