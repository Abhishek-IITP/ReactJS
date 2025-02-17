import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RestaurantMenu() {
  const { id } = useParams();
  // console.log(id)
  let mainId = id.split("-").at(-1).replace(/\D/g, "");
  console.log(mainId);
  const [menuData, setMenuData] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [discountData, setDiscountData] = useState([]);

  async function fetchMenu() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let res = await data.json();
    console.log(res);
    setMenuData(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offer
    );
  }

  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-7">
        <p className="text-[10px] text-slate-400">
         <Link to={"/"}><span className="hover:text-slate-600 cursor-pointer">Home</span> </Link> / 
         <Link to={"/"}> <span className="hover:text-slate-600 cursor-pointer">
            {resInfo.city}
          </span> </Link>
           /  <span className="text-slate-600">{resInfo.name}</span>
        </p>
      </div>
    </div>
  );
}

export default RestaurantMenu;
