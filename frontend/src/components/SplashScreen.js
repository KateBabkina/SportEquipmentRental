import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import classes from '../css/main_page.module.css';

export default function SplashScreen({ loading }) {
    return (
        <div>
            <div className={classes.logo}>
                SPORTBOX
            </div>
            <h1 style={{ textAlign: 'center' }}>Приложение загружается. Пожалуйста подождите.</h1>
            <ClipLoader
                color={"#1C62CD"}
                loading={loading}
                size={200}
                className="spin"
            />
        </div>
    )
}
