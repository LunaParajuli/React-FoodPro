import { createContext, useContext } from "react"

export const FoodContext = createContext({})

export const useFood = () => {
  return useContext(FoodContext)
}

export const FoodProvider = FoodContext.Provider