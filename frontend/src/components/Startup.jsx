import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Startup = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Startup | BGKV"
    }, [])

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* Startup Innovation */}
                        <div className='container mx-auto'>

                            <div id='startino' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h2 className='text-2xl tracking-wider font-semibold'>Startup Innovation</h2>

                                <p className='mt-5 text-lg'>At <span className='font-bold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> fostering innovation and entrepreneurial spirit is a key focus. Through the <span className='font-bold'> Student Startup and Innovation Policy (SSIP)-Cell,</span> the institute supports budding entrepreneurs with funding, mentorship, and resources to transform ideas into viable projects/products. Students are encouraged to participate in workshops, hackathons, idea competitions, and innovation challenges, gaining hands-on experience in product development, business planning, and technology commercialization. By combining practical guidance with SSIP support, SVBIT aims to nurture creative minds and prepare students to become successful innovators and future entrepreneurs.</p>

                            </div>

                        </div>


                        <div className='flex flex-col space-y-9 mt-10'>

                            {/* Go bit down and you find Affiliaction */}
                            <div onClick={() => navigate("/affiliation")}

                                className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Affiliation</div>

                            {/* Go bit down and you find SVBIT event */}
                            <div onClick={() => navigate("/events")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>SVBIT Event</div>

                            {/* connect to admission.jsx */}
                            <div onClick={() => navigate("/admission")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Admission Intake</div>

                            {/* Go bit down and you find Achievement */}
                            <div onClick={() => navigate("/achievement")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Achievement</div>


                            <div onClick={() => navigate("/faculty")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Faculty</div>

                            {/* Go bit down and you find Laboratory */}
                            <div onClick={() => navigate("/laboratory")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Laboratory</div>

                            <div onClick={() => navigate("/mobinnovation")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Mobinnovation</div>

                            {/* Go bit down and you find ITP Cell */}
                            <div onClick={() => navigate("/itp")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>ITP</div>

                            {/* Go bit down and you find TechViden */}
                            <div onClick={() => navigate("/techviden")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>TECHVIDEN</div>

                            <div onClick={() => navigate("/toppers")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Branch Toppers</div>

                            <div onClick={() => navigate("/placement")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Placement</div>



                        </div>
                    </div>

                </div>
                <Footer />

            </div>

        </>
    )
}

export default Startup