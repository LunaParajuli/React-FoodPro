import React from 'react'
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'

const HowToOrder = () => {
  return (

    <>

      <NextHeader />


      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16  pl-36  text-5xl text-gray-600">How to Order</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">
          <p className="text-xl ">Ordering food using our service is very easy! Follow the steps mentioned below to place your order with us.</p>

          <p className=" mt-5 text-gray-700 ">
            <strong> Step 1:</strong> Find a restaurant of your choice from here. There are hundreds of popular restaurants to choose from.<br /><br />
            <strong> Step 2:</strong> Select the foods of your choice from the selected restaurant's menu. The menu and price listed on our website is exactly the same as the restaurant's table menu.<br /><br />
            <strong> Step 3:</strong> Fill up the delivery details i.e. your detailed address, date and time for delivery and confirm your order. We’ll deliver your order at your place, and you’ll pay us in cash upon delivery.<br /><br />
            OR, Alternatively, you may place your orders with us over phone at 4444177 or 9802034008 in our delivery hours.
          </p>
        </div>

      </div>


      <Footer />

    </>

  )
}

export default HowToOrder