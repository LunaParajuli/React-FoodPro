import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <>

      <div className="rounded w-full md:w-[50%] mx-auto my-10 bg-white p-3">
        <div className="flex justify-between mx-5">
          <h1 className="text-black text-3xl">Signup For Tastemandu</h1>
          <button className="text-3xl hover:text-red-600">
            &times;
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-4 "></div>

        <div className="w-[97%]">

          <div className="w-[100%] mt-8 ">
            <form action="" className="w-full">

              <div className="flex justify-between w-full">

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="fname">FIRST NAME:</label>
                  <input type="text" placeholder="Enter your name" name="fname" id="fname" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="fname">LAST NAME:</label>
                  <input type="text" placeholder="Enter your last name" name="lname" id="lname" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

              </div>


              <div className="flex justify-between w-full mt-6">

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="email">EMAIL ADDRESS:</label>
                  <input type="email" placeholder="name@email.com" name="email" id="email" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="number">MOBILE NUMBER:</label>
                  <input type="number" placeholder="98XXXXXXXX" name="number" id="number" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

              </div>


              <div className="flex justify-between w-full mt-6">

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="pwd">PASSWORD:</label>
                  <input type="password" placeholder="Enter your password" name="email" id="email" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="cpwd">CONFORM PASSWORD:</label>
                  <input type="password" placeholder="Conform your password" name="cpwd" id="cpwd" className="border-2 border-gray-400 p-2 w-[90%]" />
                </div>

              </div>

            </form>
          </div>


          <div className="g-recaptcha mt-6 mb-6" >
            <div className="w-[304px] h-[78px] flex justify-center items-center">
              <div>
                <iframe
                  title="reCAPTCHA"
                  width="304"
                  height="78"
                  role="presentation"
                  name="a-59pujjpbte0"
                  frameborder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Ld4AOQUAAAAAOl6JaxSmIyMUPJ8eGOBTqNfVDtx&amp;co=aHR0cHM6Ly9mb29kbWFuZHUuY29tOjQ0Mw..&amp;hl=en-GB&amp;v=-ZG7BC9TxCVEbzIO2m429usb&amp;size=normal&amp;cb=htm6kcbi7kpn">
                </iframe>
              </div>
              <textarea
                id="recaptcha"
                name="recaptacha"
                className="w-[250px] h-[40px] border border-gray-300 mt-2 mx-auto p-0 resize-none hidden">
              </textarea>
            </div>
            <iframe className="hidden"></iframe>
          </div>


          <h1 className=" text-sm md:text-xl text-gray-600">By Signing Up, I agree to Tastemandu’s Terms of Use and Privacy Policy.</h1>
          <button className="w-full bg-yellow-300 text-gray-700 my-3 text-xl p-1">Sign up </button>
          <div className="w-full h-[1px] bg-gray-300 "></div>


          <div className=" flex flex-col items-center">

            <div className="text-center  font-semibold text-gray-700 my-3">Or Signup Using</div>


            <div className="w-1/2 mb-3">
              <div className="bg-blue-600 text-white text-center rounded-md py-2">
                <a href="" className="text-white">Facebook</a>
              </div>
              <button className="hidden" id="btnFacebook" name="provider" value="Facebook"></button>
            </div>


            <div className="w-1/2 mb-3">
              <div className="bg-red-600 text-white text-center rounded-md py-2">
                <a href="" className="text-white">Google Plus</a>
              </div>
              <button className="hidden" id="btnGoogle" name="provider" value="Google"></button>
            </div>


            <div className="text-center mt-4">
              <p className="text-sm text-gray-700">Already have an account? <a href="" className="text-blue-600 underline">Sign in</a></p>
            </div>
          </div>






        </div>

      </div>

    </>
  )
}

export default SignUp