import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepage from './page/Homepage'
import SignUp from './component/userSide/SignUp'
import Login from './component/userSide/Login'
import AboutUs from './page/AboutUs'
import HowToOrder from './page/HowToOrder'
import AvailableAreas from './page/AvailableAreas'
import DeliveryCharge from './page/DeliveryCharge'
import ContactUs from './page/ContactUs'
import SendRequest from './component/userSide/SendRequest'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Homepage />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />

          </Route>
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='howtoorder' element={<HowToOrder />} />
          <Route path='availableareas' element={<AvailableAreas />} />
          <Route path='deliverycharge' element={<DeliveryCharge />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='sendrequest' element={<SendRequest />} />
        </Routes>
      </Router>
    </>
  )
}

export default Myroute