import { createContext, useContext } from "react"

export const FoodContext = createContext({
  foods: [
    {
      id: 1,
      res_name: "Fire And Ice Pizzeria",
      place: "Thamel",
      image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 2,
      res_name: "The Workshop Eatery",
      place: "Bakhundole",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"

    },

    {
      id: 3,
      res_name: "Le Trio",
      place: "Jhamsikhel",
      image: "https://images.pexels.com/photos/4001867/pexels-photo-4001867.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 4,
      res_name: "Burger Shack",
      place: "Jhamsikhel",
      image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 5,
      res_name: "Koto Restaurant",
      place: "Durbar Marg",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 6,
      res_name: "Kathamndu Marriott",
      place: "Naxal",
      image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 7,
      res_name: "Burger Shack ",
      place: "Kamaladi",
      image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
      id: 8,
      res_name: "4 Corners ",
      place: "Sanepa",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
  ],
  addFood: (food) => { },
  // updatedFood: (id, res_name, place),
  deleteFood: (id) => { },
  toggleComplete: (id) => { }

})

export const useFood = () => {
  return useContext(FoodContext)
}

export const FoodProvider = FoodContext.Provider