import React, { useState } from 'react'

function TopRestaurant() {
    const [value,setValue]= useState(0);


    function handlePrev(){
        setValue((prev)=>prev-20)
        
    }
    function handleNext(){
        setValue((prev)=>prev+20)

    }
  return (
    <div>
        
    <div className='flex justify-between mt-16'>
        <h1 className='font-bold text-3xl'>
            Top Restaurant chains in Delhi 
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
    <div  className={`flex mt-4 `}>

    </div>
    <hr className='border' />
</div>
  )
}

export default TopRestaurant