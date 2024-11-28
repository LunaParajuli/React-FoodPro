import React from 'react'
import { Helmet } from "react-helmet";
import Footer from '../component/Footer'
import NextHeader from '../component/NextHeader'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Tastemandu|ContactUs</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NextHeader />

      <div className="bg-[#f0f3f4] h-40 ">
        <p className="pt-16  pl-36  text-5xl text-gray-600">Contact Us</p>
      </div>

      <div className="border-y-2 border-gray-200  ">

        <div className="w-[60%] mx-auto my-16 text-gray-700">

          <p className="mt-5 text-gray-700">Please fill out the form below and submit if you have any feedback or queries about our service.</p>

          <Formik

            initialValues={{ name: "", email: "", enq: "" }}
            validationSchema={Yup.object({

              name: Yup.string()
                .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
                .max(20, "Not more than twenty characters")
                .required("First name is mandatory"),


              email: Yup.string()
                .email("Invalid email")
                .required("Email is mandatory"),

              enq: Yup.string()
                .matches(/^([a-zA-Z])+$/, "Only contain alphabets")
                .max(20, "Not more than twenty characters")
                .required("It is required"),

            }

            )}

          >

            <form action="" className="w-full">
              <div className="flex mx-auto mt-5 gap-4 ">

                <div className="grid grid-row-1 gap-2">
                  <label htmlFor="name" className="font-semibold">Your Name:</label>
                  <Field type="text" placeholder="your_name" name="name" id="name" className="border-2 border-gray-200 p-2 w-80" />
                  <ErrorMessage name='name'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

                <div className="grid grid-row-1 gap-2">
                  <label htmlFor="email" className="font-semibold">Email Address:</label>
                  <Field type="text" placeholder="name@gmail.com" name="email" id="email" className="border-2 border-gray-200 p-2 w-80" />
                  <ErrorMessage name='email'>
                    {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                  </ErrorMessage>
                </div>

              </div>


              <div className="grid grid-row-1 gap-2 mt-7">
                <label htmlFor="enq" className="font-semibold">Enquiry:</label>
                <Field as="textarea" type="text" placeholder="Write details here..." name="enq" id="enq" className="border-2 border-gray-200 p-2 h-32 w-[73%]" />
                <ErrorMessage name='enq'>
                  {mgs => (<div style={{ color: 'red' }}>{mgs}</div>)}
                </ErrorMessage>
              </div>

              <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-500 py-2 text-center w-[73%] mt-5"><a href="">Submit</a></button>

            </form>
          </Formik>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default ContactUs