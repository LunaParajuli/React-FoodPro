import React, { useState, useEffect } from 'react'
import { FoodProvider } from '../contexts'


const FoodCard = () => {

 

  return (
    <>
      {/* <FoodProvider value={{ foods, addFood, updatedFood, deleteFood, toogleFood }}></FoodProvider> */}
      <div className="w-60 h-40 mt-5 overflow-hidden">
        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full hover:scale-110 ease-in-out duration-300" />
      </div>
      <div className="hover:text-green-500">
        <h3 >Restaurant Name</h3>
        <h3 >Place Name</h3>
      </div >

    </>
  )
}

export default FoodCard