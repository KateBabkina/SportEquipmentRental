import React from "react";
import { useSelector } from "react-redux"
import Event from "./Event";


function ReccomendationPage() {

    const booking = useSelector(state => state.user.booking)

    const getReccomendation = () => {
        return (
            <div className="recommendation-event">
                <div className="event-wrapper">

                    {booking.events.map(el => (
                        <Event key={el.id} event={el} />
                    ))}
                    
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="centre-column-content">
                <div className="recommendation-wrapper">

                    <div className="order-status">
                        Заказ № {booking.id} успешно оплачен.
                    </div>

                    <div className="recommendation-lable">
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