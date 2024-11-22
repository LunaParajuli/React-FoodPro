import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepage from './page/Homepage'
import SignUp from './component/userSide/SignUp'
import Login from './component/userSide/Login'
import AboutUs from './page/AboutUs'
import HowToOrder from './page/HowToOrder'

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
        </Routes>
      </Router>
    </>
  )
}

export default Myroute