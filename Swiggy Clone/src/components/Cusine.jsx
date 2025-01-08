import React, { useEffect, useState } from 'react'

function Cusine() {
    const[data, setData] = useState([]);
    const [value,setValue] = useState(0);
    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=")
        const result = await data.json();
        // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(value)
    function handlePrev(){
        value<=0?"":setValue((prev)=>prev-36)

    }

    function handleNext(){
        value>=180?"":setValue((prev)=>prev +36)
    }
  return (
    <div>
        
        <div className='flex justify-between mt-5'>
            <h1 className='font-bold text-3xl'>
                what's on your mind?
            </h1>
            <div className='flex gap-3 '>
            <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer  rounded-full w-9 h-9 flex justify-center items-center ` + (value <=0?"bg-gray-50":"bg-gray-200")}>
                <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0?"text-gray-300":"text-gray-800") }></i>
                </div>
                <div onClick={handleNext} className={`bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` + (value >=180?"bg-gray-50":"bg-gray-200")}>
                <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >=180?"text-gray-300":"text-gray-800") }></i>
                </div>

            </div>
        </div>
        <div style={{translate: `-${value}%` }} className={`flex mt-4 duration-1000 `}>
        {
            data.map((item)=>(
                
                <img key={item.imageId} className='w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`} alt="" />))
        }
        </div>
        <hr className='border' />
    </div>
  )
}

export default Cusine