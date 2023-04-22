import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/person.png";

function Header({ isLogged }) {


    return (
    <header className="header">
        {
            isLogged ?
            <><div className="logo">
                        <a href="/">SPORTBOX</a>
                    </div><div className="menu">
                            <ul className="left-menu">
                                <li><Link className="headLink" to="/">Главная</Link></li>
                                <li><Link className="headLink" to="/equipments">Оборудование</Link></li>
                                <li><Link className="headLink" to="/events">Мероприятия</Link></li>
                            </ul>
                            <ul className="right-menu">
                                <li>
                                    <div className="profile-icon">
                                        <a href="/"><img src={logo} height="48" width="48" alt="nice"></img></a>
                                    </div>
                                </li>
                                <li><Link className="headLink" to="/profile">Профиль</Link></li>
                            </ul>
                        </div></>
            
            :<><div className="logo">
                        <a href="/">SPORTBOX</a>
                    </div><div className="menu">
                            <ul className="left-menu">
                                <li><Link className="headLink" to="/">Главная</Link></li>
                                <li><Link className="headLink" to="/equipments">Оборудование</Link></li>
                                <li><Link className="headLink" to="/events">Мероприятия</Link></li>
                            </ul>
                            <ul className="right-menu">
                                <li>
                                    <div className="profile-icon">
                                        <a href="/"><img src={logo} height="48" width="48" alt="nice"></img></a>
                                    </div>
                                </li>
                                <li><Link className="headLink" to="/enter">Войти</Link></li>
                            </ul>
                        </div></>    
        }
    </header>)
}

export default Header