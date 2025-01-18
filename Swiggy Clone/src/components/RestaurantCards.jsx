import React from "react";
import { Link } from "react-router-dom";

function RestaurantCards(info) {
  // console.log(info.link.split("/"))
  // console.log(info.link)
  return (
    <Link to={`/RestaurantMenu/${info.link.split("/").at(-1)}`}>
      <div className="min-w-[295px] h-[175px] relative ">
        <img
          className="duration-1000  w-full h-full  object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            info?.cloudinaryImageId
          }
        />
        <div className="absolute w-full h-full rounded-2xl top-0 bg-gradient-to-t from-black from-0%  to-transparent to-40% text-white font-extrabold text-xl"></div>
        <p className="absolute tracking-tighter bottom-0 ml-4 mb-2 text-white font-extrabold text-[1.3rem] z-20">
          {
            info?.aggregatedDiscountInfoV3?.header  ? info?.aggregatedDiscountInfoV3?.header + " "+info?.aggregatedDiscountInfoV3?.subHeader : " "
          }
          
        </p>
      </div>
      <div className="p-3">
        <h2 className="font-bold text-[1.1rem] line-clamp-1">{info?.name}</h2>
        <p className="flex items-center gap-1 relative  font-medium">
          <i className="fi text-green-700 text-lg mt-1 fi-ss-circle-star"></i>{" "}
          {info?.avgRating} • <span>{info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-semibold">
          {info?.cuisines.join(", ")}
        </p>
        <p className=" text-black/60 font-semibold">{info?.locality}</p>
      </div>
    </Link>
  );
}

export default RestaurantCards;
