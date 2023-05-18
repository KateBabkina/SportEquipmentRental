import React from "react";
import { useSelector } from "react-redux"
import Event from "./Event";

import classes from '../css/recommendation_page.module.css';

function ReccomendationPage() {

    const booking = useSelector(state => state.user.booking)

    const getReccomendation = () => {
        return (
            <div className={classes.recommendationEvent}>
                <div className={classes.eventWrapper}>

                    {booking.events.map(el => (
                        <Event key={el.id} event={el} />
                    ))}
                    
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={classes.centreColumnContent}>
                <div className={classes.recommendationWrapper}>

                    <div className={classes.orderStatus}>
                        Заказ № {booking.id} успешно оплачен.
                    </div>

                    <div className={classes.recommendationLable}>
                        Рекомендуем принять участие в следующих мероприятиях:
                    </div>
                    {
                        booking ? getReccomendation() : false
                    }
                </div>
            </div>

        </div>
    );
};

export default ReccomendationPage;