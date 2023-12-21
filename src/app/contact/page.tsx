'use client'
import { EBGaramond } from '../fonts/font'
import { useState } from 'react'

const sendEmail = async (formData: any) => {
  try {
    // You can use a service like Email.js or a serverless function to send emails.
    // For simplicity, I'll just log the data to the console.
    console.log('Sending email to example@email.com:', formData)
    // Clear the form data after submission
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Add your form submission logic here
    const isSubmissionSuccessful = await sendEmail(formData)

    // Clear the form only if the submission was successful
    if (isSubmissionSuccessful) {
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <section className="section">
      <>
        <h1 style={EBGaramond.style} className="section-title">
          Contact Us
        </h1>
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="px-8">
            <label className="block mb-2 text-sm font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
              required
            />

            <label className="block mb-2 text-sm font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
              required
            />

            <label className="block mb-2 text-sm font-bold">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </>
      <>
        <h1 style={EBGaramond.style} className="section-title">
          Our Office
        </h1>
        <h2 className="px-2 text-xl font-bold">Auckland location</h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-2 ">
          <iframe
            className="px-2 py-4 w-full aspect-square md:aspect-video"
            // width={768}
            // height={500}
            src="http://maps.google.co.nz/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=37+Totara+Avenue,+New+Lynn,+Auckland&amp;sll=-36.909573,174.68202&amp;sspn=0.011821,0.019205&amp;ie=UTF8&amp;hq=&amp;hnear=37+Totara+Ave,+New+Lynn+0600,+Auckland&amp;z=15&amp;ll=-36.909573,174.68202&amp;output=embed"
          ></iframe>
          <div className="p-4 text-sm grid grid-cols-2 gap-8 md:grid-cols-3 md:text-base lg:grid-cols-2 lg:gap-0 lg:pb-16">
            <div className="">
              Office 3
              <br />
              37 Totara Ave
              <br />
              New Lynn
              <br />
              Auckland 0600
              <br />
              &#40;Two hours free parking at 3088 Great North Rd, New Lynn&#41;
            </div>
            <div>
              PO Box 15799
              <br />
              New Lynn
              <br />
              Auckland 0640
            </div>
            <div className="lg:col-span-2">
              <p>
                Phone <a href="tel:+6498261905">09 826 1905</a>
              </p>
              <p>
                Fax <a href="tel:+6498268239">09 826 8239</a>
              </p>
              <p>
                Email <a href="#">george@gwlawyers.co.nz</a>
              </p>
            </div>
          </div>
        </div>
      </>
    </section>
  )
}

// NOTE: YOU CAN USE THE CODE BELOW IF YOU ARE USING GOOGLE MAP API, BUT FOR NOW THE ABOVE CODE IS USED FOR SIMPLICITY SAKE

// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function Contact() {
//  const { isLoaded } = useLoadScript({
//    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//  });

//  if (!isLoaded) return <div>Loading...</div>;
//  return <Map />;
// }

// function Map() {
//  const center = useMemo(() => ({ lat: -36.9095, lng: 174.6821 }), []);

//  return (
//    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//      <Marker position={center} />
//    </GoogleMap>
//  );
// }
