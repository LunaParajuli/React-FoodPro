import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <div id="loginpage" className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
        <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mt-20">
          <img className="w-8 h-8 mr-2" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="logo" />

          <span className="font-bold text-xl">Tastemandu</span>


        </Link>
        <div className="md:flex rounded overflow-hidden shadow-md shadow-[#0e6655] my-3">
          <div className=" ">
            <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded  " />
          </div>


          <div className="w-full  mx-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
                  Login to Tastemandu
                </h1>
                <i class="fas fa-times hover:text-red-700"></i>
              </div>

              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="" />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link to="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
                <button type="submit" className="w-full text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>

                <div className="mt-5">
                  <div className="w-[97%] h-[1px] bg-gray-400 mx-auto mb-2"></div>
                  <h2 className="text-center mb-4 mt-2 text-xl ">Or Login Using</h2>

                  <div className="flex flex-wrap justify-around mt-2">
                    <button className="bg-blue-900  text-white h-10 w-24">Facebook</button>
                    <button className="bg-red-600  text-white h-10 w-24">Google</button>
                  </div>

                </div>


                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="#" className="font-medium text-green-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </form>



            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Login