import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <>
      <div className="flex justify-around bg-[#f0f3f4 ]  h-14 items-center shadow shadow-gray-400">
        <div className="flex h-10 items-center">
          <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" className="h-full rounded" alt="img" />
          <h2 className="text-2xl ml-3 font-bold">Tastemandu</h2>
        </div>
        <button className=" bg-black text-yellow-400 px-5 rounded h-7 ">Login</button>
      </div>

    </>
  )
}

export default Headers