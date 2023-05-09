import React from "react";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {setEquipmentForRent} from "../store/userSlice"

function Item({ item }) {

  const isLogged = useSelector(state => state.user.isLogged);
  const dispatch = useDispatch();

  const preRent = (item) => {
    dispatch(setEquipmentForRent(item))
  }

  const handleRentButton = () => {
    if (isLogged === true){
      preRent(item)
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