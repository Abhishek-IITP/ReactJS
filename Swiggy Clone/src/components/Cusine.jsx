import React, { useEffect, useState } from 'react'

function Cusine({data}) {
    const [value,setValue] = useState(0);

    console.log(value)
    function handlePrev(){
        value<=0?"":setValue((prev)=>prev-30)

    }

    function handleNext(){
        value>=210?"":setValue((prev)=>prev +30)
    }
  return (
    <div>
        
        <div className='flex justify-between mt-3 '>
            <h1 className='font-extrabold text-[1.42rem]'>
                What's on your mind?
            </h1>
            <div className='flex gap-3 '>
            <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer  rounded-full w-9 h-9 flex justify-center items-center ` + (value <=0?"bg-gray-50":"bg-gray-200")}>
                <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0?"text-gray-300":"text-gray-800") }></i>
                </div>
                <div onClick={handleNext} className={`bg-gray-200 cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` + (value >=210?"bg-gray-50":"bg-gray-200")}>
                <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >=210?"text-gray-300":"text-gray-800") }></i>
                </div>

            </div>

        </div>
        <div style={{translate: `-${value}%` }} className={`flex mt-4 duration-1000 gap-12 mb-14  `}>
        {
            data.map((item)=>{
                return     <img className='w-56 h-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`} alt="" />
               
            })
        }
        </div>
        <hr className='border' />
    </div>
  )
}

export default Cusine