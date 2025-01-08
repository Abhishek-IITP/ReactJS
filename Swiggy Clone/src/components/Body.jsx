import React, { useEffect, useState } from 'react'
import Cusine from './Cusine'
import TopRestaurant from './TopRestaurant'

function Body() {

  return (
    <div className='w-full '>

        <div className='w-[75%] mx-auto  mt-4   overflow-hidden '>

            <Cusine/>
            <TopRestaurant/>
        </div>
    </div>
  )
}

export default Body