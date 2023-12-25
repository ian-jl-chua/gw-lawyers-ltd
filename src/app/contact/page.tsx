'use client'
import { EBGaramond } from '../fonts/font'
import { useState } from 'react'

export interface FormData {
  name: string
  email: string
  message: string
}

const sendEmail = async (formData: FormData) => {
  try {
    // You can use a service like Email.js or a serverless function to send emails.
    // For now it is console logged
    console.log('Sending email to example@email.com:', formData)
    // Clear the form data after submission
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
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
      <div className="pb-20">
        <h2 style={EBGaramond.style} className="section-title">
          Our Office
        </h2>
        <h2 className="px-2 text-xl font-bold">Auckland location</h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-2">
          <iframe
            className="px-2 py-4 w-full aspect-square md:aspect-video"
            // width={768}
            // height={500}
            src={`http://maps.google.co.nz/maps?f=q&source=s_q&hl=en&geocode=&q=37+Totara+Avenue,+New+Lynn,+Auckland&sll=-36.909573,174.68202&sspn=0.011821,0.019205&ie=UTF8&hq=&hnear=37+Totara+Ave,+New+Lynn+0600,+Auckland&z=15&ll=-36.909573,174.68202&output=embed`}
          ></iframe>
          <div className="p-4 text-sm grid grid-cols-2 gap-8 md:grid-cols-3 md:text-base lg:grid-cols-2 lg:gap-0 lg:pb-16">
            <div className="pb-4">
              <b>Physical Address</b>
              <br />
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
            <div className="pb-4">
              <b>Postal Address</b>
              <br />
              PO Box 15799
              <br />
              New Lynn
              <br />
              Auckland 0640
            </div>
            <div className="lg:col-span-2">
              <p>
                <b>Phone </b>
                <a href="tel:+6498261905"> &#40;09&#41; 826 1905</a>
              </p>
              <p>
                <b>Fax </b>
                <a href="tel:+6498268239"> &#40;09&#41; 826 8239</a>
              </p>
              <p>
                <b>Email </b>
                <a href="#"> george@gwlawyers.co.nz</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <h2
          id="contactUs"
          style={EBGaramond.style}
          className="section-title scroll-mt-36"
        >
          Contact Us
        </h2>
        <div className="px-2 py-4 lg:grid lg:grid-cols-2">
          <div className="hidden px-2 py-4 lg:block  justify-center">
            <h3 className="text-3xl tracking-wider pb-8">
              <b>Let us discuss some options</b>
            </h3>
            <p className="text-xl pr-4">
              Please reach us via the details above, or fill out the online form
              provided.
              <br />
              One of our team will get back to you shortly.
            </p>
          </div>
          <div className="px-2 py-8 rounded-lg bg-amber-100/20 dark:bg-amber-950/30">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="block mb-2 text-sm font-bold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
                required
              />

              <label htmlFor="email" className="block mb-2 text-sm font-bold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
                required
              />

              <label htmlFor="message" className="block mb-2 text-sm font-bold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 text-slate-900 rounded-md"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-amber-950 text-amber-50 hover:bg-amber-800 dark:bg-amber-100/80 dark:text-neutral-950 dark:hover:bg-amber-100 transition ease-out duration-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
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
