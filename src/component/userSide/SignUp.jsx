import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';



const SignUp = ({ signup_props }) => {

  const signCloseRef = useRef(null)

  useEffect(() => {


    const signCloseButton = signCloseRef.current

    if (signCloseButton) {
      signCloseButton.addEventListener('click', () => {
        if (signup_props) signup_props();
      })

    }


    // Cleanup the event listener on unmount
    return () => {
      if (signCloseButton) {
        signCloseButton.removeEventListener('click', signup_props);
      }
    }

  }, [signup_props])

  return (
    <>

      <div className="rounded w-full md:w-[50%] mx-auto my-10 bg-white p-3">
        <div className="flex justify-between mx-5">
          <h1 className="text-black text-3xl">Signup For Tastemandu</h1>
          <button
            ref={signCloseRef}
            id="sign_close"
            className="text-3xl hover:text-red-600">
            <Link to="/">
              &times;
            </Link>
          </button>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-4 "></div>

        <div className="w-[97%]">


          <Formik>

            initialValues={{ fname: "", lname: "", email: "", number: "", pwd: "", cpwd: "" }}
            validationSchema={Yup.object({


            }

            )}






            <div className="w-[100%] mt-8 ">

              <form action="" className="w-full">

                <div className="flex justify-between w-full">

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="fname">FIRST NAME:</label>
                    <Field type="text" placeholder="Enter your name" name="fname" id="fname" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='fname'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="lname">LAST NAME:</label>
                    <Field type="text" placeholder="Enter your last name" name="lname" id="lname" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='lname'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                </div>


                <div className="flex justify-between w-full mt-6">

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="email">EMAIL ADDRESS:</label>
                    <Field type="email" placeholder="name@email.com" name="email" id="email" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='email'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="number">MOBILE NUMBER:</label>
                    <Field type="number" placeholder="98XXXXXXXX" name="number" id="number" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='number'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                </div>


                <div className="flex justify-between w-full mt-6">

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="pwd">PASSWORD:</label>
                    <Field type="password" placeholder="Enter your password" name="email" id="email" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='pwd'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                  <div className="grid grid-rows-1 gap-1 w-full">
                    <label htmlFor="cpwd">CONFORM PASSWORD:</label>
                    <Field type="password" placeholder="Conform your password" name="cpwd" id="cpwd" className="border-2 border-gray-400 p-2 w-[90%]" />
                    <ErrorMessage name='cpwd'>
                      {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                    </ErrorMessage>
                  </div>

                </div>

              </form>

            </div>
          </Formik>

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
                <Link to="" className="text-white">Facebook</Link>
              </div>
              <button className="hidden" id="btnFacebook" name="provider" value="Facebook"></button>
            </div>


            <div className="w-1/2 mb-3">
              <div className="bg-red-600 text-white text-center rounded-md py-2">
                <Link to="" className="text-white">Google Plus</Link>
              </div>
              <button className="hidden" id="btnGoogle" name="provider" value="Google"></button>
            </div>


            <div className="text-center mt-4">
              <p className="text text-gray-700">Already have an account? <Link to="/login" className="text-blue-600 hover:underline hover:text-green-500">Sign in</Link></p>
            </div>
          </div>






        </div>

      </div>

    </>
  )
}

export default SignUp