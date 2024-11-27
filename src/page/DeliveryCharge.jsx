import React from 'react'
import { Helmet } from "react-helmet";
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'

const DeliveryCharge = () => {
  return (
    <>
      <Helmet>
        <title>Tastemandu|DeliveryCharge</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NextHeader />

      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16 pl-36 text-5xl text-gray-600">Delivery Charge</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">
          <h3 className="text-xl font-semibold">Foodmandu Fresh Orders:</h3>
          <p className="text-xl ">Rs. 100 per order</p>

          <h3 className="text-xl mt-5 font-semibold">Restaurants and other stores</h3>
          <p className="text-gray-700">
            The delivery charge is calculated based on the restaurant bill total and the approximate road distance between the selected restaurant and the delivery location.
          </p>
          <ul className="mt-5 list-disc list-inside">
            <li className="">Up to 1 Km: Rs. 20</li>
            <li className="">After 1 Km: Additional Rs. 20/km</li>
          </ul>
        </div>

      </div >

      <Footer />
    </>
  )
}

export default DeliveryCharge