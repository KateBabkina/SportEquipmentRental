import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterEventField from "./FilterEventField"
import EventList from "./EventList";
import ClipLoader from "react-spinners/ClipLoader";

function EventPage({ isLogged }) {

  var username = 'sport';
  var password = '123';

  const [loading, setLoading] = useState(true)
  const [eventList, setEventList] = useState([])
  const [currentEvents, setCurrentEvents] = useState(eventList)


  useEffect(() => {
    setLoading(true)
    axios.post("https://sportbox.up.railway.app/api/event/filter", {},
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setEventList(res.data)
        setCurrentEvents(res.data)
        setLoading(false)
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const changeFilter = (items) => {
    setCurrentEvents(items)
  }

  return (
    <div className="base-part-sportEquipment-page">
      {
        loading ?
          <ClipLoader
            color={"#1C62CD"}
            loading={loading}
            size={100}
          />
          :
          <div>
            <FilterEventField changeFilter={changeFilter}></FilterEventField>
            <EventList events={currentEvents}></EventList>
          </div>
      }

    </div>
  );
};

export default EventPage;