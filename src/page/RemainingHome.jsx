import React from 'react'

const RemainingHome = () => {
  return (
    <>
      <div className="w-[70%] mx-auto my-10 ">
        <p className="uppercase font-semibold text-gray-700">Tastemandu Fresh</p>
        <div className="h-60 w-full overflow-hidden ">
          <img src="https://images.contentstack.io/v3/assets/blt9039451385f46c16/bltdb8568f806825477/635f6bf10232162595fcba47/Veg-Basket_1180.jpg?width=1033&height=350&format=jpg&quality=95" alt="food_img" className="w-full h-full hover:scale-105" />
        </div>

      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>





      <div className="w-full my-10 h-80 relative  shadow-sm shadow-black">

        <div className=" w-full h-full overflow-hidden  ">
          <img src="https://b.zmtcdn.com/data/pictures/chains/1/18472661/63e7ad10eda7117ab01c505afeab8b15.jpg?fit=around|960:500&crop=960:500;*,*" alt="" className="w-full h-full opacity-85 " />
        </div>

        <div className="w-[50%] mx-auto content-center absolute top-10 left-96  ">

          <h3 className="text-white text-center text-3xl">About Us</h3>
          <p className="text-white text-center  my-7">Tastemandu is the fastest, easiest and most convenient way to enjoy the best food of your favourite restaurants at home, at the office or wherever you want to.</p>

          <p className="text-white text-center ">We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love.</p>
          <div className="mx-auto w-[20%] mt-10">
            <button className="uppercase px-4 py-2 bg-white rounded hover:text-green-600">learn more</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default RemainingHome