import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store";
import './css/about_equipment_page.css'
import './css/admin_client_add_page.css'
import './css/admin_client_manager_page.css'
import './css/admin_equipment_add_page.css'
import './css/admin_equipment_manager_page.css'
import './css/admin_event_add_page.css'
import './css/admin_event_manager_page.css'
import './css/admin_order_manager_page.css'
import './css/admin_order_modify_page.css'
import './css/admin_profile_page.css'
import './css/event_page.css'
import './css/main_page.css'
import './css/payment_page.css'
import './css/profile_page.css'
import './css/recommendation_page.css'
import './css/registration_page.css'
import './css/login.css'
import './css/home.css'
import './css/inventory_page.css'
import './css/registration_page.css'
import './css/item_list.css'
import App from "./App";


const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(
        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <App></App>
                </PersistGate>
        </Provider >
);

