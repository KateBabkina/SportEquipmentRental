import React from "react";

function Item({ item }) {

  const handleRentButton = () => {
    if (localStorage.getItem("isLogged") === "true"){
      localStorage.setItem("equipmentId", item.id)
      window.location.href = "/about"
    } else {
      window.location.href = "/enter"
    }
  }

  return (
    <div className="equipment-wrapper">

      <div className="equipment-img">
        <img src={require("../images/inventory/" + item.type + ".jpg")} alt="MISSING JPG" />
      </div>

      <div className="equipment-info">
        <div className="equipment-name">
          {item.type}
        </div>

        <div className="equipment-price">
          {item.price} руб./день
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