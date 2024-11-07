import React from 'react'
import { Helmet } from "react-helmet";



const Homepage = () => {

  return (
    <>

      <Helmet>
        <title>Tastemandu|Homepage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="container max-w-screen h-[95vh]  bg-[url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg')] bg-no-repeat bg-cover w-full overflow-x-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center  flex-col ">
          <h2 className="text-gray-700 text-3xl  p-4  tracking-wider text-center">Order food from the widest range of restaurants.</h2>

          <div className=" md:flex  md:justify-center w-[90%] md:w-[60%] mx-auto mt-10 p-2 ">
            <input type="text" placeholder="Restaurant or Cuisine(live it blank to browse all)" className="bg-white w-[100%] md:w-[80%] h-12 pl-2"
            />
            <button className="bg-yellow-400  h-12 w-[65%]  md:w-[20%] ml-12 md:ml-0 mt-5 md:mt-0">Find Restaurants</button>
          </div>

        </div>

      </div>


    </>
  )
}

export default Homepage