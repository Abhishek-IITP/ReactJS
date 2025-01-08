import React from 'react'

function Head() {
    const navItem=[
        {
            name: "Swiggy Corporate",
            image : "fi-rr-shopping-bag"
        },
        {
            name: "Search",
            image : "fi-rr-search"
        },
        {
            name: "Offers",
            image : "fi-rr-badge-percent"
        },
        {
            name: "Help",
            image : "fi-sr-life-ring"
        },
        {
            name: "Sign In",
            image : "fi-rr-user"
        },
        {
            name: "Cart",
            image : "fi-rr-shopping-cart"
        },
    ]

  return (
    <div className='w-full shadow-md h-20 flex  justify-center items-center'>
        <div className='  w-[70%] flex justify-between'>
            <div className='flex items-center gap-3'>
            <img className='w-14' src="src/assets/1369418.webp" alt="" />
            <div className='flex items-center gap-2 mt-1'>
            <p className='font-bold border-b-2 border-black'>Other</p>
            <img className='w-6' src="src/assets/down.png" alt="" />
            </div>
            </div>

            {/* center */}

            <div className='flex justify-between items-center gap-12 w-30'>
                {
                    navItem.map((data ,i)=>(
                        
                    <div key={i} className='flex gap-3'>
                        <i className={"fi  text-gray-700 "+(data.image)}></i>
                        <p className='text-sm font-medium text-gray-700 '>{data.name}</p>
                    </div>  
                    ))
                }
  
            </div>
        </div>
    </div>

  )
}

export default Head
