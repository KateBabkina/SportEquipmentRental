import React, { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";


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

const App = () => {

    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");

    return (<div>
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

            </Routes>
        </Router>

        <Footer></Footer>
    </div>)
}

export default App