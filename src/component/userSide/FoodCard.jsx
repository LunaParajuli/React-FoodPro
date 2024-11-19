import React, { useState, useEffect } from 'react'
import { FoodProvider } from '../contexts'


const FoodCard = () => {

  const [foods, setFoods] = useState([])

  const addFood = (food) => {
    setFoods((prev) => [food, ...prev])
  }

  const updatedFood = (id, food) => {
    setFoods((prev) => prev.map((prevFood) => (prevFood.id === id ? food : prevFood)))
  }

  const deleteFood = (id) => {
    setFoods((prev) => prev.filter((food) => food.id !== id))
  }

  const toogleFood = (id) => {
    setFoods((prev) => prev.map((prevFood) => prevFood === id ? { ...prevFood } : prevFood))
  }

  useEffect(() => {
    const foods = JSON.parse(localStorage.getItem("foods"))

    if (foods && foods.length > 0) {
      setFoods(foods)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods))
  }, [foods])


  return (
    <>
      <FoodProvider value={{ foods, addFood, updatedFood, deleteFood, toogleFood }}>
        <div className="w-60 h-40 mt-5 overflow-hidden">
          <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full hover:scale-110 ease-in-out duration-300" />
        </div>
        <div className="hover:text-green-500">
          <h3 >Restaurant Name</h3>
          <h3 >Place Name</h3>
        </div >
      </FoodProvider>
    </>
  )
}

export default FoodCard