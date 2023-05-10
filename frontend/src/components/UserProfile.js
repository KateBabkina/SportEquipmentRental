import React from "react";
import { useState, useEffect } from 'react';
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {unauthorizeUser, updateUser} from "../store/userSlice"
import axios from 'axios';

export default function EventPage({ setIsLogged }) {

  var username = 'sport';
  var password = '123';
  var now = new Date();

  const userId = useSelector(state => state.user.userId);
  const [user, setUser] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    let cleanupFunction = false;
    const fetchData = async () => {
        await axios.get(`https://sportbox.up.railway.app/api/person/profile?id=${userId}`,
            {
                auth: {
                    username: username,
                    password: password
                }
            }).then(res => {
                console.log(res.data);
                if (!cleanupFunction) {
                  dispatch(updateUser(res.data.person))
                  setUser(res.data.person)
                }

            }).catch(() => {
                alert("An error occurred on the server")
            })
    };
    fetchData();
    return () => cleanupFunction = true;
}, [])

  const cancelBooking = (id) => {
    axios.delete(`https://sportbox.up.railway.app/api/booking/cancel?id=${id}`,
    {
      auth: {
        username: username,
        password: password
      }
    }).then(res => {
      console.log(res.data);
      alert(res.data.message);
      window.location.reload();
    }).catch(() => {
      alert("An error occurred on the server")
    })
  }


  const logOut = () => {
    dispatch(unauthorizeUser())
    window.location.href = "/"
  }

  const getHistory = () => {
    return user.bookings?.map((el) => {
      return (<div className="row" key={el.id}>

        <div className="order-number-row">
          {el.id}
        </div>

        <div className="order-equipment-row">
          {el.inventory.name}
        </div>

        <div className="order-price-row">
          {el.price}
        </div>

        <div className="order-data-row">
          {el.date}
        </div>

        <div className="order-data-from-row">
          {el.startDate}
        </div>

        <div className="order-data-to-row">
          {el.endDate}
        </div>

        <div className="order-debt-row">
          {el.debt}
        </div>

        {
          now < new Date(el.startDate) ? <div className="order-action-row">
            <div className="button-cancel">
              <button className="cancel-button" type="submit" onClick={() => cancelBooking(el.id)}>
                <div className="cancel-button-text">
                  Отменить
                </div>
              </button>
            </div>
          </div> : false

        }

      </div>)
    });
  }

  return (
    <div className="profile-wrapper">

      <div className="information-about-user-lable">
        <p>Информация о пользователе:</p>
      </div>

      <div className="information-about-user-wrapper">

        <div className="full-name-user-lable">
          ФИО:
        </div>
        <div className="full-name-user">
          {user.name}
        </div>

        <div className="email-user-lable">
          Алрес эл. почты:
        </div>

        <div className="email-user">
          {user.email}
        </div>

      </div>

      <div className="information-about-orders-wrapper">

        <div className="information-about-orders-lable">
          История заказов:
        </div>

        <div className="column-lables">

          <div className="order-number-lable">
            №
          </div>

          <div className="order-equipment-lable">
            Оборудование
          </div>

          <div className="order-price-lable">
            Цена, руб.
          </div>

          <div className="order-data-lable">
            Дата заказа
          </div>

          <div className="order-data-from-lable">
            Дата начала
          </div>

          <div className="order-data-to-lable">
            Дата окончания
          </div>

          <div className="order-debt-lable">
            Долг, руб.
          </div>

          <div className="order-action-lable">

          </div>
        </div>

        <div className="information-about-orders-table-wrapper">
          <div className="table-rows">
            {user.bookings?.length === 0 ? <h3>Пусто</h3> : getHistory()}
          </div>
        </div>

      </div>

      <div className="button-exit">
        <button className="exit-button" type="submit" onClick={logOut}>
          <div className="exit-button-text">
            Выйти
          </div>
        </button>
      </div>

    </div>
  );
};