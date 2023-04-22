import React from "react";
import { Link } from "react-router-dom";
  
export default function EventPage({ setIsLogged }){

    const logOut = () => {
        localStorage.setItem("isLogged", false)
        setIsLogged(false)
    }

  return (
    <div>
      <h1>Profile Page</h1>
      <h1><Link className="headLink" to="/" onClick={logOut}>Выйти</Link></h1>
    </div>
  );
};