import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Achievement = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Achievement | BGKV"
    })

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* Achievement */}
                        <div id='achievement' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                            <h2 className='text-2xl tracking-wider font-semibold'>Special Achievement by SVBIT</h2>

                            <p className='mt-10 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) is a recognized technical institute approved by All India Council for Technical Education (AICTE) and is a proud affiliate of Gujarat Technological University (GTU) which is accredited University with A+ grade by NAAC . Our affiliation with GTU ensures that we provide our students with a high-quality education that meets the standards of one of India’s most prestigious institutions.</p>


                            <div className='mt-50 md:grid md:grid-cols-2 justify-items-center space-y-50'>

                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/SACH1.webp")}
                                >
                                    <img src="./asset/SACH1.webp" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/SACH2.webp")}
                                >
                                    <img src="./asset/SACH2.webp" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/SACH3.webp")}
                                >
                                    <img src="./asset/SACH3.webp" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/SACH4.webp")}
                                >
                                    <img src="./asset/SACH4.webp" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {preview && (
                                <div
                                    onClick={() => setPreview("")}
                                    className="fixed inset-0 bg-black/70 flex items-center justify-center"
                                >
                                    <img
                                        src={preview}
                                        className="md:w-150 w-100 animate-[zoom_0.3s_ease]"
                                    />
                                </div>
                            )}
                        </div>


                        <div className='flex flex-col space-y-9 mt-10'>

                            {/* Go bit down and you find Affiliaction */}
                            <div onClick={() => navigate("/affiliation")}

                                className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Affiliation</div>

                            {/* Go bit down and you find SVBIT event */}
                            <div onClick={() => navigate("/events")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>SVBIT Event</div>

                            {/* connect to admission.jsx */}
                            <div onClick={() => navigate("/admission")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Admission Intake</div>

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


                            <div onClick={() => navigate("/startup")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>

                    </div>

                </div>
                <Footer />

            </div>

        </>
    )
}

export default Achievement