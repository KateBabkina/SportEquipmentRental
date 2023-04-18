import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import EquipmentPage from "./components/EquipmentPage";
import EventPage from "./components/EventPage";
import EnterPage from "./components/EnterPage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
    
    return (<div>
        <Router>
        <Header/>
            <Routes>

                <Route exact path="/" element={<Home></Home>} />

                <Route path="/equipments" element={<EquipmentPage></EquipmentPage>} />

                <Route path="/events" element={<EventPage></EventPage>} />

                <Route path="/enter" element={<EnterPage></EnterPage>} />

                <Route path="/api/person/add" element={<RegisterPage></RegisterPage>} />

            </Routes>
        </Router>
        
        <Footer></Footer>
    </div>)
}

export default App