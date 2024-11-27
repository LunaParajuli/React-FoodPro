import React from 'react'
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'
import { Helmet } from "react-helmet";

const AvailableAreas = () => {
  return (
    <>

      <Helmet>
        <title>Tastemandu|AvailableAreas</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NextHeader />

      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16  pl-36  text-5xl text-gray-600">Available Areas</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">
          <p className="text-xl ">Tastemandu offers food delivery services in following areas at the moment. We will continue expanding our service areas regularly. Please check this page later if your area is not available already.</p>

          <div className=" mt-5  grid grid-rows-20 grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-10">
            <p className="text-gray-700">Anamnagar</p>
            <p className="text-gray-700">Baluwater</p>
            <p className="text-gray-700">Bhaisipati</p>
            <p className="text-gray-700">Charkhal</p>
            <p className="text-gray-700">Hadigaun</p>
            <p className="text-gray-700">Machhapokhari</p>
            <p className="text-gray-700">Balaju</p>
            <p className="text-gray-700">Swayambu</p>
            <p className="text-gray-700">Sitapaila</p>
            <p className="text-gray-700">Bagbazar</p>
            <p className="text-gray-700">Putalisadak</p>
            <p className="text-gray-700">Ratopul</p>
            <p className="text-gray-700">Gaushala</p>
            <p className="text-gray-700">Basundhara</p>
            <p className="text-gray-700">Newroad</p>
            <p className="text-gray-700">Thamel</p>
            <p className="text-gray-700">Kapurdhara</p>
            <p className="text-gray-700">Samakhusi</p>
            <p className="text-gray-700">Shesmati</p>
            <p className="text-gray-700">Minbhawan</p>
            <p className="text-gray-700">New Baneswor</p>
            <p className="text-gray-700">Patan Dhoka</p>
            <p className="text-gray-700">Teku</p>
            <p className="text-gray-700">Jawalakhel</p>
            <p className="text-gray-700">Kalimati</p>
            <p className="text-gray-700">Mahabaudha</p>
            <p className="text-gray-700">Naxal</p>
            <p className="text-gray-700">Paknajol</p>
            <p className="text-gray-700">Rani Pokhari</p>
            <p className="text-gray-700">Sorakhutte</p>
            <p className="text-gray-700">Tahachal</p>
            <p className="text-gray-700">Tripureswor</p>
            <p className="text-gray-700">Thapathali</p>
            <p className="text-gray-700">Mitrapark</p>
            <p className="text-gray-700">Pulchowk</p>
            <p className="text-gray-700">Old Baneswor</p>
            <p className="text-gray-700">Talimkendra</p>
            <p className="text-gray-700">Sinamangal</p>
            <p className="text-gray-700">Sifal</p>
            <p className="text-gray-700">Solti Mode</p>
            <p className="text-gray-700">Tangal</p>
            <p className="text-gray-700">SukeDhara</p>
            <p className="text-gray-700">Singa Durbar</p>
            <p className="text-gray-700">Sano Gaucharan</p>
            <p className="text-gray-700">Chakrapath</p>

          </div>

        </div>

      </div>


      <Footer />


    </>
  )
}

export default AvailableAreas