import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const SendRequest = () => {
  return (
    <>
      <div className="bg-gray-400 rounded-lg mx-auto my-10 w-[80vh] h-[90vh]">

        <div className="p-7">
          <h1 className="text-xl">Get Listed in Tastemandu</h1>
          <p className="mt-3">Please fill up your details.</p>
          <div className="w-full h-[1px] bg-gray-200 mt-3"></div>

          <Formik


            initialValues={{ fname: "", lname: "", email: "", number: "", pwd: "", cpwd: "" }}
            validationSchema={Yup.object({

              name: Yup.string()
                .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
                .max(20, "Not more than twenty characters")
                .required("First name is mandatory"),

              rname: Yup.string()
                .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
                .max(20, "Not more than twenty characters")
                .required("Last name is mandatory"),


              email: Yup.string()
                .email("Invalid email")
                .required("Email is mandatory"),

              contact: Yup.string()
                .required("Phone Number is mandatory"),


              detail: Yup.string()
                .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
                .max(20, "Not more than twenty characters")
                .required("Last name is mandatory"),

            }

            )}



          >

            <form action="" className="w-full">

              <div className="flex justify-between w-full mt-5">

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="name">YOUR NAME:</label>
                  <Field type="text" placeholder="Enter your name" name="name" id="name" className="border-2 border-gray-400 p-2 w-[90%]" />
                  <ErrorMessage name='name'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="rname">RESTAURANT/STORE NAME:</label>
                  <Field type="text" placeholder="name@gmail.com" name="rname" id="rname" className="border-2 border-gray-400 p-2 w-[90%]" />
                  <ErrorMessage name='rname'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

              </div>

              <div className="flex justify-between w-full mt-7">

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="email">EMAIL:</label>
                  <Field type="text" placeholder="name@gmail.com" name="email" id="email" className="border-2 border-gray-400 p-2 w-[90%]" />
                  <ErrorMessage name='email'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

                <div className="grid grid-rows-1 gap-1 w-full">
                  <label htmlFor="contact">CONTACT NUMBER:</label>
                  <Field type="text" placeholder="98XXXXXXXX" name="contact" id="contact" className="border-2 border-gray-400 p-2 w-[90%]" />
                  <ErrorMessage name='contact'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

              </div>

              <div className="grid grid-row-1 gap-2 mt-7">
                <label htmlFor="detail" className="font-semibold">Details:</label>
                <Field as="textarea" type="text" placeholder="Write details here..." name="detail" id="enq" className="border-2 border-gray-200 p-2 h-32 " />
                <ErrorMessage name='detail'>
                  {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                </ErrorMessage>
              </div>


              <button className="bg-yellow-300 text-gray-700 py-2 text-center w-full mt-5"><a href="">Send Message</a></button>

            </form>

          </Formik>

        </div>
      </div>
    </>
  )
}

export default SendRequest