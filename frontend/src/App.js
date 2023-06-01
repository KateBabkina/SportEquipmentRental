import React, { useState, useEffect } from 'react'
import Header from "./components/Supporting components/Header";
import Footer from "./components/Supporting components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/MainPage/Home";
import EquipmentPage from "./components/EquipmentPage/EquipmentPage";
import EventPage from "./components/EventPage/EventPage";
import EnterPage from "./components/LoginPage/EnterPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserProfile from "./components/UserProfilePage/UserProfile"
import AboutEquipment from "./components/AboutEquipmentPage/AboutEquipment"
import PaymentPage from './components/PaymentPage/PaymentPage';
import ReccomendationPage from './components/ReccomendationPage/RecommendationPage';
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
import SplashScreen from './components/Supporting components/SplashScreen';


const App = () => {

    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");
    const [loading, setLoading] = useState(true)
   
   useEffect(() => {
    document.title = "SportBox"
    const timer = setTimeout(() => {
        setLoading(false)
    }, 3000)

    return () => clearTimeout(timer);
   }, [])

    return (<div>
        {
            loading ?
                <SplashScreen loading={loading}></SplashScreen>
                :
                <Router>
                    <Header isLogged={isLogged} />
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
                </Router>
        }
    </div>)
}

export default App