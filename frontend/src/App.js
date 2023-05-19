import React, { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClipLoader from "react-spinners/ClipLoader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EquipmentPage from "./components/EquipmentPage";
import EventPage from "./components/EventPage";
import EnterPage from "./components/EnterPage";
import RegisterPage from "./components/RegisterPage";
import UserProfile from "./components/UserProfile"
import AboutEquipment from "./components/AboutEquipment"
import PaymentPage from './components/PaymentPage';
import ReccomendationPage from './components/RecommendationPage';
import AdminClientMenager from './components/AdminClientPage/AdminClientManagerPage';
import AdminAddClient from './components/AdminClientPage/AdminAddClient';
import AdminEquipmentManagerPage from './components/AdminEquipmentPage/AdminEquipmentManagerPage';
import AdminAddEquipmentPage from './components/AdminEquipmentPage/AdminAddEquipmentPage';
import AdminChangeEquipment from './components/AdminEquipmentPage/AdminChangeEquipment';
import AdminOrderManagerPage from "./components/AdminOrderPage/AdminOrderManagerPage";
import AdminOrderChangePage from "./components/AdminOrderPage/AdminOrderChangePage"
import AdminEventManagerPage from './components/AdminEventPage/AdminEventManagerPage';
import AdminAddEventPage from './components/AdminEventPage/AdminAddEventPage';
import AdminChangeEventPage from './components/AdminEventPage/AdminChangeEventPage';

const App = () => {

    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (<div>
        <Router>
            {
                loading ?
                    <>
                        <div className="logo">
                            <a href="/">SPORTBOX</a>
                        </div>
                        <h1 style={{textAlign: 'center'}}>Приложение загрузается...</h1>
                        <ClipLoader
                            color={"#1C62CD"}
                            loading={loading}
                            size={200}
                            className="spin"
                        /></>
                    : <><Header isLogged={isLogged} />
                        <Routes>

                            <Route exact path="/" element={<Home></Home>} />

                            <Route path="/equipments" element={<EquipmentPage ></EquipmentPage>} />

                            <Route path="/about" element={<AboutEquipment></AboutEquipment>} />

                            <Route path="/payment" element={<PaymentPage></PaymentPage>} />

                            <Route path="/reccomendation" element={<ReccomendationPage></ReccomendationPage>} />

                            <Route path="/events" element={<EventPage setIsLogged={setIsLogged}></EventPage>} />

                            <Route path="/profile" element={<UserProfile setIsLogged={setIsLogged}></UserProfile>} />

                            <Route path="/enter" element={<EnterPage></EnterPage>} />

                            <Route path="/api/person/add" element={<RegisterPage setIsLogged={setIsLogged}></RegisterPage>} />

                            <Route path="/admin/clients" element={<AdminClientMenager></AdminClientMenager>} />

                            <Route path="/admin/clients/add" element={<AdminAddClient></AdminAddClient>} />

                            <Route path="/admin/equipments" element={<AdminEquipmentManagerPage></AdminEquipmentManagerPage>} />

                            <Route path="/admin/equipments/add" element={<AdminAddEquipmentPage></AdminAddEquipmentPage>} />

                            <Route path="/admin/equipments/change" element={<AdminChangeEquipment></AdminChangeEquipment>} />

                            <Route path="/admin/orders" element={<AdminOrderManagerPage></AdminOrderManagerPage>} />

                            <Route path="/admin/orders/change" element={<AdminOrderChangePage></AdminOrderChangePage>} />

                            <Route path="/admin/events" element={<AdminEventManagerPage></AdminEventManagerPage>} />

                            <Route path="/admin/events/add" element={<AdminAddEventPage></AdminAddEventPage>} />

                            <Route path="/admin/events/change" element={<AdminChangeEventPage></AdminChangeEventPage>} />
                        </Routes>
                        <Footer></Footer>
                    </>
            }

        </Router>
    </div>)
}

export default App