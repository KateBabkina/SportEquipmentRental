import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterEventField from "./FilterEventField"
import EventList from "./EventList";
  
function EventPage({ isLogged }){

  var username = 'sport';
  var password = '123';

  const [eventList, setEventList] = useState([])
  const [currentEvents, setCurrentEvents] = useState(eventList)


  useEffect(() => {
    axios.post("http://localhost:8080/api/event/filter", {},
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setEventList(res.data)
        setCurrentEvents(res.data)
        
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const changeFilter = (items) => {
    setCurrentEvents(items)
}

  return (
    <div className="base-part-sportEquipment-page">
      <FilterEventField changeFilter={changeFilter}></FilterEventField>
      <EventList events={currentEvents}></EventList>
    </div>
  );
};
  
export default EventPage;