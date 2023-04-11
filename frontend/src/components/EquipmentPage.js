import React from "react";

const inputClick = () => {
    console.log("Clicked")
}

const mouseOver = () => {
    console.log("Mouse over");    
}
  
function EquipmentPage(){
  return (
    <div>
      <h1>Equipment Page</h1>
      <input  onClick={inputClick} onMouseEnter={mouseOver}></input>
    </div>
  );
};
  
export default EquipmentPage;