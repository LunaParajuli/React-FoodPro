import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Headers = () => {

  const loginRef = useRef(null);


  useEffect(() => {

    const loginButton = loginRef.current;

    if (loginButton) {
      loginButton.addEventListener('click', () => {
        loginButton.style.border = "2px solid yellow";
      });
    }


  }, []);


  return (
    <>


      <ToastContainer theme='colored' position='top-center' />

      <div className="flex justify-around bg-[#f0f3f4]  h-14 items-center shadow shadow-gray-400  fixed top-0 left-0 right-0 overflow-x-hidden z-10">
        <div className="flex h-10 items-center">
          <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" className="h-full rounded" alt="img" />
          <h2 className="text-2xl ml-3 font-bold">Tastemandu</h2>
        </div>
        <Link to="#">
          <button id="ilogin"
            ref={loginRef}
            className=" bg-black text-yellow-400 px-5  rounded h-7 hover:border-yellow-400 ">Login</button>
        </Link>
      </div>

    </>
  )
}

export default Headers