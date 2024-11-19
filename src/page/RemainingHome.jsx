import React from 'react'
import FoodCard from '../component/userSide/FoodCard';
import { FaArrowRightLong } from "react-icons/fa6";

const RemainingHome = () => {
  return (
    <>
      {/* Foodmandu Fresh Content */}
      <div className="w-full lg:w-[70%] mx-auto my-10 ">
        <p className="uppercase font-semibold text-gray-700">Tastemandu Fresh</p>
        <div className="h-60 w-full overflow-hidden ">
          <img src="https://images.contentstack.io/v3/assets/blt9039451385f46c16/bltdb8568f806825477/635f6bf10232162595fcba47/Veg-Basket_1180.jpg?width=1033&height=350&format=jpg&quality=95" alt="food_img" className="w-full h-full hover:scale-105" />
        </div>

      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>



      {/* FoodCard Content */}
      <div className="w-[70%] mt-10 mx-auto">

        <div className="flex justify-between">
          <h3 className="font-semibold">Featured Restaurants</h3>
          <div className="flex items-center ">
            <p className="text-gray-600 mr-2 text-sm hover:text-green-500">View All </p>
            <div className="flex text-gray-600 text-sm hover:text-green-500"><FaArrowRightLong /></div>
          </div>

        </div>
        <FoodCard />
      </div>





      {/* About Us Content */}
      <div className="w-full my-10 h-80 relative  shadow-sm shadow-black">

        <div className=" w-full h-full overflow-hidden  ">
          <img src="https://images.pexels.com/photos/1079020/pexels-photo-1079020.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-full opacity-80 " />
        </div>

        <div className="w-full lg:w-[50%] mx-auto content-center absolute top-1 lg:top-10 lg:left-96  ">

          <h3 className="text-white text-center md:text-3xl ">About Us</h3>
          <p className="text-white text-center my-2 md:my-7 md:font-semibold ">Tastemandu is the fastest, easiest and most convenient way to enjoy the best food of your favourite restaurants at home, at the office or wherever you want to.</p>

          <p className="text-white text-center md:font-semibold ">We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love.</p>
          <div className="mx-auto w-[20%] mt-4 md:mt-10">
            <button className="uppercase px-10 md:px-4 md:py-2 bg-white rounded hover:text-green-600">learn more</button>
          </div>
        </div>

      </div>





      {/* Download Content */}

      <div className="lg:flex justify-center  md:mt-10 w-full items-center">

        <div className=" w-full lg:w-[40%] p-5 md:p-10 lg:ml-0 md:ml-40">
          <h1 className="text-4xl font-semibold">Download the app</h1>
          <p className="mt-3 text-gray-700">Always on the go.</p>
          <p className="mt-4 text-gray-700">Food - whenever and wherever you want it!</p>

          <div className="flex justify-start  mt-5 gap-4 ">

            <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="applestore_img" className="w-[20%]" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="googleplay_img" className="w-[20%] " />


          </div>

        </div>

        <div className=" w-full lg:w-[40%] ">
          <img src="https://media.istockphoto.com/id/1160735344/photo/woman-using-meal-delivery-service-through-mobile-app.jpg?b=1&s=612x612&w=0&k=20&c=YBXm5O2n2QkZQg-uL88oTX-md2Eb7Hhnif2gAB4opyk=" alt="download_app" className="w-full " />
        </div>

      </div>




      {/* Request Content */}

      <div className="w-full bg-gray-100 border-[1px] border-y-gray-200 p-12 content-center" >
        <h2 className="text-center text-3xl font-semibold text-gray-700">List your Restaurant at Tastemandu! <br />
          Reach 2,00,000 + new customers.</h2>

        <div className="w-[10%] mx-auto mt-7">
          <button className="bg-yellow-400 tex-white p-2 ">Send a request</button>
        </div>
      </div>


    </>
  )
}

export default RemainingHome