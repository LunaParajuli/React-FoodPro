import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Myroute