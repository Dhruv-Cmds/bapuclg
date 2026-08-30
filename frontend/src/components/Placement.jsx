import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Placement = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Placement | BGKV"
    }, [])

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* Placement */}
                        <div className='container mx-auto'>

                            <div id='placement' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h2 className='text-2xl tracking-wider font-semibold'>Placement</h2>

                                <p className='mt-5 text-lg'>The Placement Cell is essential to closing the gap between students and business. It gives students the tools they need for their professional careers and gives them the chance to get jobs or places in further education.</p>

                                <p className='mt-5 text-lg'>The Placement Department, also known as the Training & Placement Cell, or TPC, is in charge of giving students the tools, chances, and exposure they need to launch their careers. It serves as a bridge connecting students, businesses, and the college.</p>

                                <h3 className='text-lg tracking-wider font-semibold mt-5'>Major Objectives</h3>

                                <li className='ml-5 text-lg'>Employment Opportunities: Through campus recruitment, we assist students in obtaining positions in reputable</li>
                                <li className='ml-5 text-lg'>Skill Development: To improve students’ employability, soft, and technical</li>
                                <li className='ml-5 text-lg'>Industry Interface: To establish solid connections with businesses, hiring managers,  and trade</li>
                                <li className='ml-5 text-lg'>Guidance for Higher Education: To offer assistance to those who wish to pursue post­ graduate education in India or</li>
                                <li className='ml-5 text-lg'>Support for Entrepreneurship: To encourage and mentor students who wish to launch their own businesses.</li>


                                <h3 className='text-lg tracking-wider font-semibold mt-5'>Functions of the Placement Cell</h3>

                                <li className='ml-5 text-lg'>Campus recruitment: involves coordinating with recruiters and planning placement</li>

                                <li className='ml-5 text-lg'>Training Programs: Holding sessions for communication skills, coding practice, group discussions, mock interviews, and aptitude.</li>

                                <li className='ml-5 text-lg'>Internship Opportunities: Helping students find internships that expose them to the business.</li>

                                <li className='ml-5 text-lg'>Career counseling: offering advice on potential career paths, competitive tests (such as the GATE, GRE, UPSC, ), and international further education.</li>

                                <li className='ml-5 text-lg'>Company tie-ups: establishing a network with businesses   and planning workshops, industry visits, and guest.</li>

                                <li className='ml-5 text-lg'>Resume & Portfolio Building: Assisting students with creating e-portfolios,  Linkedin profiles, and professional.</li>


                                <h3 className='text-lg tracking-wider font-semibold mt-5'>Activities Conducted</h3>

                                <p className='text-lg'>Companies’ pre-placement presentations (PPTs); recruitment efforts both on and off campus; technical seminars, hackathons, and coding competitions; programs for developing soft skills and personalities; alumni interaction sessions for career counseling; job fairs and industry-academia conclaves.</p>


                                <h3 className='text-lg tracking-wider font-semibold mt-5'>Impact on Students</h3>

                                <p className='text-lg'>
                                    Employability and industry readiness are increased; confidence is bolstered by actual interview experience; communication and presentation skills are enhanced; career choices (job, higher education, or entrepreneurship) are clarified; and the institution’s reputation is enhanced by better placement records.</p>

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

                            <div onClick={() => navigate("/startup")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>
                    </div>

                </div>
                <Footer />

            </div>

        </>
    )
}

export default Placement