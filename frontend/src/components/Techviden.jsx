import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Techviden = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Teachviden | BGKV"
    }, [])

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* Techviden */}
                        <div className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                            <h2 className='text-2xl tracking-wider font-semibold'>TECHVIDEN</h2>

                            <p className='mt-5 text-lg'>At SVBIT, we believe in transforming young minds into skilled and confident engineers, and to achieve this, an annual technical festival -TECHVIDEN, is organized for degree and diploma students. TECHVIDEN is known for hosting a variety of events that include competitions, exhibitions, lectures, and workshops organized by various departments.</p>

                            <p className='mt-5 text-lg'>The activities culminate in a grand two-day festival event on the BapuGKV campus, which attracts people from all over Gandhinagar and Ahmedabad cities, including students, academics, and corporate. SVBIT had also hosted GTU Tech Fest in the year 2016.</p>


                            <div className='mt-10 md:grid md:grid-cols-2 justify-items-center space-y-10'>

                                {Array.from({ length: 23 }, (_, i) => {
                                    const num = i + 1;

                                    return (
                                        <div
                                            key={num}
                                            className="relative group cursor-pointer overflow-hidden rounded-xl"
                                            onClick={() => setPreview(`./asset/tech${num}.webp`)}
                                        >
                                            <img src={`./asset/tech${num}.webp`} alt="" />

                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                                <p className="text-white">Click to View →</p>
                                            </div>
                                        </div>
                                    )
                                })}

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

                            {/* Go bit down and you find Achievement */}
                            <div onClick={() => navigate("/achievement")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Achievement</div>


                            <div onClick={() => navigate("/faculty")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Faculty</div>

                            {/* Go bit down and you find Laboratory */}
                            <div onClick={() => navigate("/laboratory")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Laboratory</div>

                            <div onClick={() => navigate("/mobinnovation")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Mobinnovation</div>

                            {/* Go bit down and you find ITP Cell */}
                            <div onClick={() => navigate("/itp")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>ITP</div>

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

export default Techviden