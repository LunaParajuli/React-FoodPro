import React, { useRef, useState, useEffect } from 'react'
import Login from './userSide/Login';


const NextHeader = () => {



  const loginRef = useRef(null);
  const [showLogin, setShowLogin] = useState(false); // State to control Login component visibility


  useEffect(() => {

    const loginButton = loginRef.current;


    if (loginButton) {
      loginButton.addEventListener('click', () => {
        // loginButton.style.border = "2px solid yellow"
        setShowLogin(true); // Show the Login component
      })
    }




    // Cleanup event listener
    return () => {
      if (loginButton) {
        loginButton.removeEventListener('click', () => setShowLogin(true));
      }

    };


  }, []);

  return (
    <>

      <div className="flex justify-around bg-[#f0f3f4]  h-14 items-center shadow shadow-gray-400  fixed top-0 left-0 right-0 overflow-x-hidden z-10  ">
        <div className="flex h-10 items-center ">
          <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" className="h-full rounded" alt="img" />
          <h2 className="text-2xl ml-3 font-bold">Tastemandu</h2>
        </div>

        <div className="flex">
          <input className="p-1 w-96 text-gray-400 border-2 hover:border-gray-200" type="text" placeholder="Restaurant name or cuisine" />
          <button className="py-1 px-4 bg-yellow-300 ml-1 text-gray-800">Find Restaurants</button>
        </div>


        <button id="ilogin"
          ref={loginRef}
          onClick={() => setShowLogin(true)}
          className=" bg-black text-yellow-400 px-5  rounded h-7 hover:border-2 hover:border-yellow-400 ">Login
        </button>

      </div>


      //Conditionally render the Login modal overlay
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <Login onClose={() => setShowLogin(false)} />
        </div>

      )}


    </>
  )
}

export default NextHeader