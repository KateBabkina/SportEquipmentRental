import React from "react";
import * as ReactDOMClient from "react-dom/client";
import './css/login.css'
import './css/home.css'
import './css/inventory_page.css'
import './css/registration.css'
import App from "./App";


const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(
        <App></App>
);

