import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Campus = () => {

  const navigate = useNavigate();

  const [preview, setPreview] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    document.title = "Affiliation | BGKV"
  })

  return (
    <>

      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


        <Navbar />

        <div className='border-b mb-10 md:mt-10'>

          <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


            {/* Campus */}
            <div className='container mx-auto'>

              <div id='affiliation' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h2 className='text-2xl tracking-wider font-semibold'>Affiliation -SVBIT</h2>

                <p className='mt-5 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) is a recognized technical institute approved by All India Council for Technical Education (AICTE) and is a proud affiliate of Gujarat Technological University (GTU) which is accredited University with A+ grade by NAAC . Our affiliation with GTU ensures that we provide our students with a high-quality education that meets the standards of one of India’s most prestigious institutions.</p>

                <p className='mt-5 text-lg'>At SVBIT Engineering College, we are committed to providing our students with an education that is both rigorous and rewarding. Our affiliation with GTU allows us to achieve this goal and help our students succeed in their academic and professional pursuits.</p>

              </div>

            </div>


            <div className='flex flex-col space-y-9 mt-10'>


              <div onClick={() => navigate("/download")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Download</div>

              <div onClick={() => navigate("/clibrary")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Library</div>

              <div onClick={() => navigate("/gallery")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Gallery</div>

              <div onClick={() => navigate("/nss")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>NSS Unit</div>

              <div onClick={() => navigate("/laboratory")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Career Counseling</div>

              <div onClick={() => navigate("/grievance")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Grievance Portal</div>

              <div onClick={() => navigate("/sports")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>SPORTS</div>

              <div onClick={() => navigate("/wdc")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>WDC Cell</div>

              <div onClick={() => navigate("/anti")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Anti Ragging</div>

            </div>
          </div>

        </div>
        <Footer />

      </div>

    </>
  )
}

export default Campus