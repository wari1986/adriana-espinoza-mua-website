import React from 'react'
import Image from 'next/image'

const contactForm = () => {
  return (
    <div className="flex h-6/7 justify-center items-center space-x-8">
      <div className="w-1/2 m-12">
        <Image
          src="/assets/contact-image.jpg"
          width={550}
          height={750}
          alt=""
        />
      </div>
      <div className="w-1/2 mt-16">
        <form
          method="POST"
          action="https://getform.io/f/310da053-04ce-4a6f-94a6-19b8bd86bd18"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-3xl  text-[#333333]">
              Contact Form
            </p>
            <p className="text-[#686868] py-4">
              <a
                href="mailto:nicolaycamacho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email:{" "}
                <span className="text-[#A5A5A5]">
                  adrianaespinoza@gmail.com
                </span>
              </a>
            </p>
            <p className="text-[#A5A5A5] py-4">
              <a
                href="mailto:nicolaycamacho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Ph: <span className="text-[#686868]">702.445.9531</span>
              </a>
            </p>
          </div>
          <p className="mt-6 mb-2 text-sm text-[#686868]">Name *</p>
          <div className="flex space-x-4">
            <div className="w-1/2 block">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm"
                type="text"
                name="name"
              />
              <p className="text-xs text-[#686868] mt-2">First Name</p>
            </div>
            <div className="w-1/2 block">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm"
                type="text"
                name="last name"
              />
              <p className="text-xs text-[#686868] mt-2">Last Name</p>
            </div>
          </div>
          <p className="mt-6 mb-2 text-sm text-[#686868]">Email *</p>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            type="email"
            name="email"
          />
          <p className="mt-6 mb-2 text-sm text-[#686868]">Phone *</p>
          <input
            className="p-2 border border-gray-200 rounded-sm"
            type="phone"
            name="phone"
          />
          <p className="mt-6 mb-2 text-sm text-[#686868]">Message *</p>
          <textarea
            className="p-2 border border-gray-200 rounded-sm"
            name="message"
            rows="4"
          ></textarea>
          <button className="text-white bg-[#686868] border-2 px-6 py-5 my-12 w-1/5 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactForm
