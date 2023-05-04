import React from "react";
import { useEffect } from 'react';
  
function EventPage({ isLogged }){

  useEffect(() => {
    console.log(isLogged);
  }, [])

  return (
    <div>
      <h1>Event Page</h1>
      <h1>Check</h1>
    </div>
  );
};
  
export default EventPage;