import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";


const Programs = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Program";
    }, [])

    return (


        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className="flex justify-center container mx-auto gap-10">

                        {/* DESKTOP BUTTONS */}
                        <div
                            onClick={() => navigate("/be")}
                            className='hidden md:flex bg-indigo-500 text-white px-0 md:px-4 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-400 hover:text-black font-semibold tracking-wider hover:scale-110 items-center gap-5'
                        >
                            BE/UG Academic Program
                            <HugeiconsIcon icon={FolderClosedIcon} size={30} />
                        </div>

                        <div
                            onClick={() => navigate("/pg")}
                            className='hidden md:flex bg-indigo-500 text-white px-0 md:px-4 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-400 hover:text-black font-semibold tracking-wider hover:scale-110 items-center gap-5'
                        >
                            ME/PG Academic Program
                            <HugeiconsIcon icon={FolderClosedIcon} size={30} />
                        </div>

                        <div
                            onClick={() => navigate("/diploma")}
                            className='hidden md:flex bg-indigo-500 text-white px-0 md:px-25 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-400 hover:text-black font-semibold tracking-wider hover:scale-110 items-center gap-5'
                        >
                            Diploma Program
                            <HugeiconsIcon icon={FolderClosedIcon} size={30} />
                        </div>


                        {/* HAMBURGER */}
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="md:hidden fixed bottom-6 right-6 z-50 bg-indigo-500 text-white p-4 rounded-full shadow-lg"
                        >
                            <HugeiconsIcon
                                icon={menuOpen ? Cancel01Icon : Menu01Icon}
                                size={30}
                            />
                        </button>

                        {/* MOBILE MENU */}
                        <div
                            className={`md:hidden fixed bottom-24 right-6 z-40 flex flex-col gap-3
                            transition-all duration-300 ease-in-out origin-bottom-right

                            ${menuOpen
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-0 translate-y-10 pointer-events-none"
                                }`}
                        >
                            <div onClick={() => navigate("/be")} className="bg-indigo-500 text-white px-5 py-4 rounded-2xl">
                                BE/UG Academic Program
                            </div>

                            <div onClick={() => navigate("/pg")} className="bg-indigo-500 text-white px-5 py-4 rounded-2xl">
                                ME/PG Academic Program
                            </div>

                            <div onClick={() => navigate("/diploma")} className="bg-indigo-500 text-white px-5 py-4 rounded-2xl">
                                Diploma Program
                            </div>

                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>

                        <div>

                            <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h2 className='text-2xl tracking-wider font-semibold'>Welcome to</h2>

                                <h3 className='mt-5 text-xl font-medium'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT)</h3>

                                <p className='mt-5 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT), Gandhinagar, established in 2009, has been a pillar of technical education in the region. Affiliated with Gujarat Technological University (GTU), the institute is dedicated to delivering high-quality education while promoting innovation, research, and overall development of its students. Over the years, SVBIT has built a dynamic academic environment that balances strong theoretical foundations with practical learning to prepare students for the evolving demands of industry and society.</p>

                            </div>

                            <div className='bg-gray-50 rounded-3xl mt-10 p-5'>

                                <h2 className='tracking-wider font-semibold text-2xl'>Principal’s Message</h2>

                                <div className='flex justify-center mt-2'>

                                    <img className='w-100 rounded-4xl' src="./asset/Principle-sir.webp1" alt="" />

                                </div>

                                <h3 className='tracking-wider font-semibold text-2xl'>Dear Students,</h3>

                                <p className='mt-5 text-lg font-light'>
                                    It gives me great pleasure to welcome you to Shankersinh Vaghela Bapu Institute of Technology (SVBIT) – a place where innovation, creativity, and excellence meet.
                                </p>

                                <p className='mt-5 text-lg font-light'>
                                    We believe that education is a lifelong process and our mission is to provide you with an environment that fosters your intellectual, social and emotional growth. Our faculty members are dedicated professionals who strive to bring out the best in every student and help them develop the skills they need to succeed in their respective fields.
                                </p>

                                <p className='mt-5 text-lg font-light'>
                                    At SVBIT, we aim to create a learning culture that encourages critical thinking, problem-solving and teamwork. We are committed to providing you with the best educational resources, opportunities for hands-on learning, and exposure to the latest technologies.
                                </p>

                                <p className='mt-5 text-lg font-light'>
                                    We understand that you are the future of our society, and it is our responsibility to empower you with the knowledge, skills, and values that will help you make a positive impact on the world. We are confident that you will emerge from SVBIT as confident, competent, and compassionate professionals who are ready to face the challenges of the world.
                                </p>

                                <p className='mt-5 text-lg font-light'>
                                    I invite you to join us on this exciting journey of discovery, learning, and growth. We look forward to supporting you in achieving your dreams and aspirations.
                                </p>

                                <p className='mt-5 text-xl font-semibold'>Dr.Anilkumar Suthar(ME., Ph.D.)</p>
                                <p className='text-lg font-medium'>Principal</p>

                            </div>

                        </div>

                        <div className='flex flex-col space-y-9 mt-40'>

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


                            <div onClick={() => navigate("/startup")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>

                    </div>



                </div>

                <Footer />

            </div >
        </>
    )
}

export default Programs
