import React from "react";
import Event from "./Event"

function EventList({ events }) {
    return (
        <div className="centre-column-content">
            <div className="events">
                {events.map(el => (
                    <Event key={el.id} event={el} />
                ))}
            </div>
        </div>
    );
};

export default EventList;