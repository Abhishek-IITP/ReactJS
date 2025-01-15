import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";

function TopRestaurant({ data }) {
  const [value, setValue] = useState(0);

  function handlePrev() {
    value <= 0 ? "" : setValue((prev) => prev - 269);
  }
  function handleNext() {
    value>=1869?"":setValue((prev) => prev + 269);
    console.log(value);
  }
  return (
    <div>
      <div className="flex justify-between mt-12">
        <h1 className="font-bold text-2xl">Top Restaurant chains in Delhi</h1>
        <div className="flex gap-3 ">
          <div
            onClick={handlePrev}
            className={
              `bg-gray-200 cursor-pointer  rounded-full w-9 h-9 flex justify-center items-center ` +
              (value <= 0 ? "bg-gray-50" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                (value <= 0 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={
              `bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
              (value >= 1869 ? "bg-gray-50" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                (value >= 1869 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
        </div>
      </div>
      <div className={`flex mt-4 gap-10 w-full `} style={{ translate: `-${value}%` }}>
        {data.map(({info , cta : {link}}) => (
          <div
            className=" hover:scale-95 duration-300"
            
          >
            <RestaurantCards {...info} link ={link}/>
          </div>
        ))}
        
      </div>
      {/* <hr className="border" /> */}
    </div>
  );
}

export default TopRestaurant;
