import React from "react";

function Item({ item }) {
  return (
    <div className="item" >
        <img src={require("../images/inventory/" + item.type + ".jpg")} alt="MISSING JPG"/>
        <h2>{item.type}</h2>
        <h3>{item.price} руб./день</h3>
        <button className="rent" >Арендовать</button>
    </div>
  );
};

export default Item;