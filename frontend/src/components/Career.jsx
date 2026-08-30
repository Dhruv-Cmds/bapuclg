import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { TruckReturnFreeIcons } from '@hugeicons/core-free-icons';

const Career = () => {

  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    document.title = "Career | BGKV"
  }, [])

  return (
    <>

      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

        <Navbar />

        <div className='border-b mb-10'>

          <div className='mt-10 mb-10 flex justify-center md:items-center container md:space-x-10 md:mx-auto md:flex-row flex-col md:space-y-0 space-y-10 px-1'>

            <a className={`p-5 text-xl rounded-3xl hover:scale-110 font-medium duration-300 ease transition-all md:w-100 text-center ${swapped ? "bg-purple-500" : "bg-indigo-500"}`}
              href="https://bapugkv.ac.in/wp-content/uploads/2026/01/Application-format.pdf"
              target='_blank'
              onMouseEnter={() => setSwapped(true)}
              onMouseLeave={() => setSwapped(false)}>
              Application Format for Recruitment
            </a>

            <a className={`p-5 text-xl rounded-3xl hover:scale-110 font-medium duration-300 ease transition-all md:w-100 text-center ${swapped ? "bg-indigo-500" : "bg-purple-500"}`}
              href="https://bapugkv.ac.in/wp-content/uploads/2026/01/ADVT-1.pdf0"
              target='_blank'
              onMouseEnter={() => setSwapped(false)}
              onMouseLeave={() => setSwapped(true)}
            >
              Applications are invited
            </a>

          </div>

        </div>

        <div className='absolute bottom-0 md:static'>

          <Footer />
        </div>

      </div>

    </>
  )
}

export default Career
