import React from "react";
import Event from "./Event"
import Pagination from "./Pagination";

import '../css/event_page.css';

function EventList({ events, eventsPerPage, currentEvents, paginate}) {
    return (
        <div className="centre-column-content">
            <div className="events">
                {events.map(el => (
                    <Event key={el.id} event={el} />
                ))}
            </div>
            <Pagination itemsPerPage={eventsPerPage}  totalItems={currentEvents.length} paginate={paginate}/>
        </div>
    );
};

export default EventList;