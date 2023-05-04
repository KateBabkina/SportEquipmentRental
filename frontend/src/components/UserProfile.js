import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EventPage({ setIsLogged }) {

  var username = 'sport';
  var password = '123';

  const [booking, setBooking] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8080/api/person/profile?id=${localStorage.getItem("userId")}`, 
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setBooking(res.data.person.bookings)
        setName(res.data.person.name)
        setEmail(res.data.person.email)
        
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const logOut = () => {
    localStorage.setItem("isLogged", false)
    setIsLogged(false)
    localStorage.setItem("userId", -1)
  }

  const getHistory = () => {
    return booking?.map((el) => {
        return <div key={el.id}>
          №{el.id} Оборудование {el.inventory.name} Цена,руб. {el.price} Дата заказа {el.date} Дата начала {el.startDate} Дата окончания {el.endDate} Долг {el.debt}
          <button>Отменить</button>
        </div>; //поправить чтобы выводил все данные о заказе
    });
}

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
      <h1>История заказов</h1>
      {booking?.length === 0 ? <h3>Empty</h3>: getHistory()}
      
      <h1><Link className="headLink" to="/" onClick={logOut}>Выйти</Link></h1>
    </div>
  );
};