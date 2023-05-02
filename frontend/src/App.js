import React, { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import EquipmentPage from "./components/EquipmentPage";
import EventPage from "./components/EventPage";
import EnterPage from "./components/EnterPage";
import RegisterPage from "./components/RegisterPage";
import UserProfile from "./components/UserProfile"

const App = () => {

    const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") === "true");

    return (<div>
        <Router>
        <Header isLogged={isLogged}/>
            <Routes>

                <Route exact path="/" element={<Home></Home>} />

                <Route path="/equipments" element={<EquipmentPage></EquipmentPage>} />

                <Route path="/events" element={<EventPage setIsLogged={setIsLogged}></EventPage>} />

                <Route path="/profile" element={<UserProfile setIsLogged={setIsLogged}></UserProfile>} />

                <Route path="/enter" element={<EnterPage setIsLogged={setIsLogged}></EnterPage>} />

                <Route path="/api/person/add" element={<RegisterPage setIsLogged={setIsLogged}></RegisterPage>}/>

            </Routes>
        </Router>
        
        <Footer></Footer>
    </div>)
}

export default App