import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>


      <footer className="bg-[#f0f3f4] dark:bg-gray-900 mt-2 overflow-x-hidden">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">WE'RE TASTEMANDU</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <Link to="#" className=" hover:underline">About Us</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Available Areas</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Delivery Charges</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">GET HELP</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <Link to="#" className="hover:underline">How to Order?</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">FAQs</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Call Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <Link to="#" className="hover:underline">Kathmandu:4567891, 5674321
                    <br /> 6573249, 9843987321
                  </Link>
                </li>
                <h2 className="mb-3  mt-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Call Us</h2>
                <li className="mb-2">
                  <Link to="#" className="hover:underline">Pokhara:4567891, 5674321
                    <br />Chitwan: 9843987321
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download App</h2>
              <div>
                <img src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" alt="" className="w-28" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" className="w-28" />
              </div>

              <h2 className="mt-6 mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Connect with us</h2>
              <div className="mb-2">
                <i className="fab fa-facebook hover:text-blue-900 text-2xl mr-2"></i>
                <i className="fab fa-instagram hover:text-red-700 text-2xl mr-2"></i>
                <i className="bi bi-twitter-x hover:text-blue-900 text-2xl mr-2"></i>

                <i className="fab fa-youtube hover:text-red-600 text-2xl"></i>
              </div>

            </div>
          </div>
          <p><span className="uppercase font-semibold text-sm mr-1 ml-3">SERVICE HOUR</span> 08:00 AM to 9:00 PM (NST)</p>
          <div className="w-full h-[1px] bg-slate-300 mt-3"></div>


          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">

            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Terms of Usage | Privacy Policy</span>

            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 Tastemandu™. All Rights Reserved.
            </span>


          </div>
        </div>
      </footer >

    </>
  )
}

export default Footer