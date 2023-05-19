import React, { useState, useEffect } from 'react'
import AdminClientFilterField from './AdminClientFilterField'
import AdminClientList from './AdminClientList'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

import classes from '../../css/admin_client_manager_page.module.css';

export default function AdminClientManagerPage() {

  var username = 'sport';
  var password = '123';

  const [clients, setClients] = useState([])
  const [currentClients, setCurrentClients] = useState(clients)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    axios.post("https://sportbox.up.railway.app/api/person/filter", {},
      {
        auth: {
          username: username,
          password: password
        }
      }).then(res => {
        console.log(res.data);
        setClients(res.data)
        setCurrentClients(res.data)
        setLoading(false)
      }).catch(() => {
        alert("An error occurred on the server")
      })
  }, [])

  const changeFilter = (clients) => {
    setCurrentClients(clients)
  }

  return (
    <div className={classes.managerWrapper}>
      {
        loading ?
          <ClipLoader
            color={"#1C62CD"}
            loading={loading}
            size={100}
          />
          :
          <>
            <AdminClientFilterField changeFilter={changeFilter} ></AdminClientFilterField>
            <AdminClientList clients={currentClients}></AdminClientList>
          </>
      }
    </div>
  )
}
