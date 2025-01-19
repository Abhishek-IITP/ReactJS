import React from "react";
import RestaurantCards from "./RestaurantCards";

function OnlineFoodDelivery({ data }) {
  return (
    <div>
      Restuarant with online food delivery in Delhi
      <div className="grid grid-cols-3 gap-8 min-w-10">
      {data.map(({info , cta : {link}}) => (
          <div
            className=" hover:scale-95 duration-300"
            
          >
            <RestaurantCards {...info} link ={link}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineFoodDelivery;
