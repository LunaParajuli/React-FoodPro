import React from 'react'
import { Helmet } from "react-helmet";



const Homepage = () => {
  return (
    <>

      <Helmet>
        <title>Tastemandu|Homepage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="container max-w-screen h-[95vh]  bg-[url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg')] bg-no-repeat bg-cover overflow-x-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center  flex-col ">
          <h2 className="text-gray-700 text-3xl  p-4  tracking-wider">Order food from the widest range of restaurants.</h2>

          <div className="flex  justify-center w-[60%] align-center">
            <input type="text" placeholder="Restaurant or Cuisine(live it blank to browse all)" className="bg-white  w-[80%] h-12 "
            />
            <button className="bg-yellow-400  h-12  w-[20%]">Find Restaurants</button>
          </div>

        </div>

      </div>


    </>
  )
}

export default Homepage