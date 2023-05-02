import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EventPage({ setIsLogged, user }) {

  const [booking, setBooking] = useState([])

  useEffect(() => {
    console.log(user)
    setBooking(user.person.bookings)
  }, [])

  const logOut = () => {
    localStorage.setItem("isLogged", false)
    setIsLogged(false)
  }

  const getHistory = () => {
    return booking?.map((el) => {
        return <div key={el.id}>{el.id}</div>; //поправить чтобы выводил все данные о заказе
    });
}

  return (
    <div>
      <h1>Информация о пользователе</h1>
      <div>
        <h1>{user.person.name}</h1>
        <h2>{user.person.email}</h2>
      </div>
      <h1>История заказов</h1>
      {booking?.length === 0 ? <h3>Empty</h3>: getHistory()}
      
      <h1><Link className="headLink" to="/" onClick={logOut}>Выйти</Link></h1>
    </div>
  );
};