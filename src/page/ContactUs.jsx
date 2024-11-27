import React from 'react'
import { Helmet } from "react-helmet";
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Tastemandu|ContactUs</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NextHeader />

      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16  pl-36  text-5xl text-gray-600">Contact Us</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">

        </div>

      </div>

      <Footer />
    </>
  )
}

export default ContactUs