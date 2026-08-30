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
    document.title = "Campus | BGKV"
  }, [])

  return (
    <>

      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


        <Navbar />

        <div className='border-b mb-10 md:mt-10'>

          <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


            {/* Campus */}
            <div className='container mx-auto'>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h2 className='text-2xl tracking-wider font-semibold'>Campus</h2>

                <p className='mt-5 text-lg'>Bapu Gujarat Knowledge Village offers a vibrant and welcoming campus where students can learn, grow, and prepare for successful careers. With modern classrooms, well-equipped laboratories, a central library, sports facilities, and spaces for cultural and co-curricular activities, the campus supports both academic excellence and personal development. Through quality education, innovation, and a strong sense of community, Bapu GKV creates an enriching environment for students from diverse backgrounds.</p>

              </div>

            </div>


            <div className='flex flex-col space-y-9 mt-10'>


              <div onClick={() => navigate("/download")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Download</div>

              <div onClick={() => navigate("/library")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Library</div>

              <div onClick={() => navigate("/gallery")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Gallery</div>

              <div onClick={() => navigate("/nss")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>NSS Unit</div>

              <div onClick={() => navigate("/ncc")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>NCC Unit</div>

              <div onClick={() => navigate("/counsel")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Career Counseling</div>

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
