import React, { useEffect, useState } from 'react'
import Cusine from './Cusine'
import TopRestaurant from './TopRestaurant'
import Head from './Head'

function Body() {
  const [topRestaurantData,setTopRestaurantData] = useState([])
  const [cusine,setCusine] = useState([])
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type="
    );
    const result = await data.json();
    setTopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCusine(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full '>
        <div className='w-[73.5%] mx-auto  overflow-hidden '>

            <Cusine data ={cusine}/>
            <TopRestaurant data={topRestaurantData}/>
        </div>
    </div>
  )
}

export default Body