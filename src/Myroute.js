import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Homepage from './page/Homepage'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Homepage />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Myroute