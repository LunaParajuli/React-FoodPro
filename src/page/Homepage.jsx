import React, { useRef, useEffect } from 'react'
import { Helmet } from "react-helmet";
import RemainingHome from './RemainingHome';





const Homepage = () => {

  const browseRef = useRef(null)
  const foodImages = useRef([])// Array of refs for each image

  useEffect(() => {
    const browse_res = browseRef.current


    const handleBrowseClick = () => {
      // Apply scale transform to each image when browse is clicked
      foodImages.current.forEach((img) => {
        if (img) {
          img.style.transform = "scale(1.05)"
        }
      })
    }

    const removeBrowseClick = () => {
      // Apply scale transform to each image when browse is clicked
      foodImages.current.forEach((img) => {
        if (img) {
          img.style.transform = "scale(1)"
        }
      })
    }


    if (browse_res) {
      browse_res.addEventListener('mouseover', handleBrowseClick)
    }
    if (browse_res) {
      browse_res.addEventListener('mouseout', removeBrowseClick)
    }

  }, [])

  return (
    <>

      <Helmet>
        <title>Tastemandu|Homepage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div

        className="container max-w-screen h-[95vh]  bg-[url('https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg')] bg-no-repeat bg-cover w-full overflow-x-hidden relative mb-10">

        <div className="absolute inset-0 flex items-center justify-center  flex-col mt-20 z-10">
          <h2 className="text-gray-500 text-3xl  p-4  tracking-widest text-center">Order food from the widest range of restaurants.</h2>

          <div
            ref={browseRef}
            id="browse_res"
            className=" md:flex  md:justify-center w-[90%] md:w-[60%] mx-auto  p-2  ">

            <input type="text" placeholder="Restaurant or Cuisine(live it blank to browse all)" className="bg-white w-[100%] md:w-[80%] h-12 pl-2 "
            />
            <button className="bg-yellow-400  h-12 w-[65%]  md:w-[20%] ml-12 md:ml-0 mt-3 md:mt-0">Find Restaurants</button>
          </div>

        </div>

        <div id="food_image" className="hidden  lg:flex flex-wrap justify-between w-full h-full ">

          <div className="  ">
            <img
              ref={(el) => foodImages.current[0] = el}
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" alt="f1" className="food_image_img h-44 w-44 rounded-full mt-32 ml-20 shadow-lg shadow-gray-500 hover:scale-125 transition-all" />

            <img
              ref={(el) => foodImages.current[1] = el}
              src="https://images.pexels.com/photos/7425137/pexels-photo-7425137.jpeg?auto=compress&cs=tinysrgb&w=600" alt="f2" className="food_image_img h-56 w-56 rounded-full ml-72 mt-28 shadow-lg shadow-gray-500" />
          </div>

          <div className=" ">
            <img
              ref={(el) => foodImages.current[2] = el}
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="f3" className="food_image_img h-60 w-60 rounded-full  mt-10 ml-36 shadow-lg shadow-gray-500 " />

            <img
              ref={(el) => foodImages.current[3] = el}
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="f4" className="food_image_img h-72 w-72 rounded-full mt-20 mr-56 shadow-lg shadow-gray-500 " />
          </div>

        </div>
      </div>

      <RemainingHome />


    </>
  )
}

export default Homepage