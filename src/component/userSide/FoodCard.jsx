import React from 'react'



const FoodCard = () => {
  return (
    <>
      <div className="w-60 h-40 mt-5 overflow-hidden">
        <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full hover:scale-110 ease-in-out duration-300" />
      </div>
      <div>
        <h3>Restaurant Name</h3>
        <h3>Place Name</h3>
      </div>
    </>
  )
}

export default FoodCard