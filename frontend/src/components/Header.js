import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import logo from "../images/person.png";

function Header() {

    const isLogged = useSelector(state => state.user.isLogged);
    console.log(useSelector(state => state.user))
    var isAdmin = false
    const role = useSelector(state => {
        if(isLogged === true){
            return state.user.user.role.name
        } else {
            return ""
        }
    })
    if (role === "Customer" || role === "") {
        isAdmin = false
    } else {
        isAdmin = true
    }

    return (
        <header className="header">
            <div className="logo">
                <a href="/">SPORTBOX</a>
            </div>
            {
                isAdmin ?
                    <div className="menu">
                        <ul className="left-menu">
                            <li><Link className="headLink" to="/">Главная</Link></li>
                            <li><Link className="headLink" to="/admin/equipments">Оборудование</Link></li>
                            <li><Link className="headLink" to="/admin/events">Мероприятия</Link></li>
                            <li><Link className="headLink" to="/admin/clients">Клиенты</Link></li>
                            <li><Link className="headLink" to="/admin/orders">Заказы</Link></li>
                        </ul>
                        <ul className="right-menu">
                            <div>
                                <li>
                                    <div className="profile-icon">
                                        <a href="/"><img src={logo} height="48" width="48" alt="nice"></img></a>
                                    </div>
                                </li>
                                <li><Link className="headLink" to="/profile">Профиль</Link></li>
                            </div>

                        </ul>
                    </div>
                    :
                    <div className="menu">
                        <ul className="left-menu">
                            <li><Link className="headLink" to="/">Главная</Link></li>
                            <li><Link className="headLink" to="/equipments">Оборудование</Link></li>
                            <li><Link className="headLink" to="/events">Мероприятия</Link></li>
                        </ul>
                        <ul className="right-menu">
                            {
                                isLogged ?
                                    <div>
                                        <li>
                                            <div className="profile-icon">
                                                <a href="/"><img src={logo} height="48" width="48" alt="nice"></img></a>
                                            </div>
                                        </li>
                                        <li><Link className="headLink" to="/profile">Профиль</Link></li>
                                    </div>
                                    : <div>
                                        <li>
                                            <div className="profile-icon">
                                                <a href="/"><img src={logo} height="48" width="48" alt="nice"></img></a>
                                            </div>
                                        </li>
                                        <li><Link className="headLink" to="/enter">Войти</Link></li>
                                    </div>
                            }

                        </ul>
                    </div>
            }


        </header>)
}

export default Header