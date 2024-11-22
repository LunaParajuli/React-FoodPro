import React from 'react'
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'

const AboutUs = () => {
  return (
    <>
      <NextHeader />



      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16 pl-36  text-5xl text-gray-600">About us</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">
          <p className="text-xl ">Foodmandu is the first company in Nepal that delivers food from hundreds of popular restaurants. As a pioneer food delivery service provider, we are making life easier through online ordering.</p>

          <p className=" mt-5 text-gray-700">
            We know that your time is valuable and sometimes every minute in the day counts. That’s why we deliver! So you can spend more time doing the things you love. You can get anything from Indian food to high French cuisine by placing a simple order online through our website, mobile app or over the phone. Then just sit back, relax, and wait for your order to arrive.
          </p>
        </div>

      </div>




      <Footer />

    </>
  )
}

export default AboutUs
