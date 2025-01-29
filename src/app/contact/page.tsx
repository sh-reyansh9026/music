import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="h-full w-full flex items-center justify-center absolute">
      <div className="absolute w-full h-full">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            
          </div>
 
          <h1 className="font-bold text-6xl text-white mb-4 relative z-50">
            Contact Us
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 justify-center text-center">
            We're here to help with any questions about our courses, programs, or <br />
                   events. Reach out and let us know how we can assist you in your musical<br/>
                                journey.
          </p>

                  <form className="flex flex-col w-[500px] relative">
                      <input type="string"
                          placeholder="Your email address"
                          className="mb-4 p-2 bg-black h-12 rounded-md"
                      />
                      <textarea
  placeholder="Your message"
  className="bg-black h-32 w-full rounded-md text-left mb-4 p-2 text-white"
></textarea>

            
                  </form>
          <button className="border mt-8 px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Send Message
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={50} />
        </div>
      </div>
    </div>
  )
}

export default page
