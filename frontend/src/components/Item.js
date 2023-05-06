import React from "react";

function Item({ item }) {

  const handleRentButton = () => {
    if (localStorage.getItem("isLogged") === "true"){
      localStorage.setItem("equipmentId", item.id)
      window.location.href = "/about"
      console.log("true");
    } else {
      window.location.href = "/enter"
    }
  }

  return (
    <div className="equipment-wrapper">

      <div className="equipment-img">
        <img src={require("../images/inventory/" + item.name + ".jpg")} alt="MISSING JPG" />
      </div>

      <div className="equipment-info">
        <div className="equipment-name">
          {item.name}
        </div>

        <div className="equipment-price">
          {item.inventoryType.price} руб./день
        </div>
      </div>

      <div className="button-rent">
        <button className="rent-button" type="submit" onClick={() => handleRentButton()}>
          <div className="rent-button-text">
            Арендовать
          </div>
        </button>
      </div>

    </div>
  );
};

export default Item;