import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Events = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Events | BGKV"
    })

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* SVBIT Events */}
                        <div id='event' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                            <h2 className='text-2xl tracking-wider font-semibold'>SVBIT Events</h2>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Funding opportunity for Early Stage Entrepreneurs-SSIP Pitch Presentation (PITCHFEST)</h3>

                                </div>

                                <p className='text-gray-500 ml-4 md:ml-5'>by Bapugkv | Jul 31, 2025 | Technology</p>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The SSIP Pitch Presentation aims to provide a platform for students to showcase their innovative ideas, projects, or startups under the Student Startup and Innovation Policy. It encourages creativity, problem-solving, and entrepreneurship among young innovators.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Boot Camp/Mentoring Session-The Ultimate Idea of Startup Pitching (PITCHFEST)</h3>

                                </div>

                                <p className='text-gray-500 ml-4 md:ml-5'>by Bapugkv | Jul 30, 2025 | Technology</p>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The Boot Camp/Mentoring Session on "The Ultimate Idea of Startup Pitching" offered key insights into crafting effective startup pitches. Participants learned to present their ideas, highlight value, and engage investors with confidence and storytelling.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>An expert talk on the National Education Policy (NEP) 2020</h3>

                                </div>

                                <p className='text-gray-500 ml-4 md:ml-5'>by Bapugkv | Jul 29, 2025 | Technology</p>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The objective of this expert talk is to enlighten engineering students about the vision, reforms, and opportunities introduced by the National Education Policy (NEP) 2020, as part of its 5th anniversary celebration.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>From Zero to Engineer: Building your Identity</h3>

                                </div>

                                <p className='text-gray-500 ml-4 md:ml-5'>by Bapugkv | Jul 25, 2025 | Technology</p>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>Primary aim of the session was to ignite the inner drive in students by encouraging them to believe in their potential, regardless of their starting point. </p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Expert talk on Innovation/Prototype Validation – Converting Innovation into a Start-up</h3>

                                </div>

                                <p className='text-gray-500 ml-4 md:ml-5'>by Bapugkv | Jul 10, 2025 | Technology</p>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The objective of the session was to understand and implement the process of innovation and prototype validation as a foundation for building successful startups. </p>

                            </div>

                        </div>


                        <div className='flex flex-col space-y-9 mt-10'>

                            {/* Go bit down and you find Affiliaction */}
                            <div onClick={() => navigate("/affiliation")}

                                className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Affiliation</div>

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


                            <div onClick={() => navigate("/startup")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>

                    </div>

                </div>
                <Footer />

            </div>

        </>
    )
}

export default Events