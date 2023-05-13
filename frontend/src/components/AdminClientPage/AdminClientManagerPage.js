import React, { useState, useEffect } from 'react'
import AdminClientFilterField from './AdminClientFilterField'
import AdminClientList from './AdminClientList'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import Pagination from '../Pagination';

export default function AdminClientManagerPage() {

  var username = 'sport';
  var password = '123';

  const [clients, setClients] = useState([])
  const [currentClients, setCurrentClients] = useState(clients)
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [clientsPerPage] = useState(5)

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
    setCurrentPage(1)
  }

  const paginate = (pageNumder) => {
    setCurrentPage(pageNumder)
  }

  const lastItemIndex = currentPage * clientsPerPage
  const firstItemIndex = lastItemIndex - clientsPerPage
  const currentItemsOnPage = currentClients.slice(firstItemIndex, lastItemIndex)

  return (
    <div className="manager-wrapper">
      {
        loading ?
          <ClipLoader
            color={"#1C62CD"}
            loading={loading}
            size={100}
          />
          :
          <div>
            <AdminClientFilterField changeFilter={changeFilter} ></AdminClientFilterField>
            <AdminClientList clients={currentItemsOnPage}></AdminClientList>
            <Pagination itemsPerPage={clientsPerPage} totalItems={currentClients.length} paginate={paginate} />
          </div>
      }
    </div>
  )
}
