import React from "react";

function Event({ event }) {
    return (
        <div className="event-wrapper">
            <div className="event-img">
                <img src={require("../images/events/" + event.name + ".jpg") } alt="MISSING JPG"></img>
            </div>
            <div className="event-info-wrapper">
                <div className="event-name">
                    {event.name}
                </div>

                <div className="event-description">
                    {event.description}
                </div>

                <div className="event-equipment">
                    Необходимое оборудование: {event.inventoryType.type}
                </div>

                <div className="event-date">
                    Даты проведения: с {event.startDate} по {event.endDate}
                </div>

                <div className="event-price">
                    {event.price} руб.
                </div>
            </div>
        </div>
    );
};

export default Event;