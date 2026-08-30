import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";


const Diploma = () => {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        document.getElementById("/diploma")?.scrollIntoView({
            behavior: "smooth",
        });


        setMenuOpen(false);
    };

    useEffect(() => {
        document.title = "Diploma | BGKV"
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

                        </div>

                    </div>




                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>

                        <div>

                            <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h2 className='text-2xl tracking-wider font-semibold'>Diploma Program</h2>

                            </div>

                            <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h3 className='mt-5 text-xl font-medium'>1. Diploma in Electrical Engineering</h3>

                                <p className='mt-5 text-lg'>The <span className='font-semibold'>Diploma in Electrical Engineering </span> at SVBIT, with an intake of 60 students, provides a strong foundation in electrical circuits, machines, power systems, and control technologies. Through hands-on training in well-equipped laboratories and workshops, students gain practical experience that prepares them for technical roles in the electrical and energy sectors.</p>

                            </div>


                            <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h3 className='mt-5 text-xl font-medium'>2. Diploma in Mechanical Engineering</h3>

                                <p className='mt-5 text-lg'>The <span className='font-semibold'>Diploma in Mechanical Engineering,</span> having an intake of 60, focuses on core concepts  of mechanics, production, thermodynamics, and manufacturing processes. Students participate in practical sessions, workshops, and industrial visits to develop problem-solving skills and technical expertise for careers in manufacturing, production, and allied industries.</p>

                            </div>

                            <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                <h3 className='mt-5 text-xl font-medium'>3. Diploma in Civil Engineering</h3>

                                <p className='mt-5 text-lg'>The <span className='font-semibold'>Diploma in Civil Engineering,</span> with an intake of 60 students, equips students with theoretical and practical knowledge in construction, surveying, structural design, and environmental engineering. Students are prepared through laboratory sessions, hands-on projects, and site visits to contribute effectively to infrastructure development and the construction industry.</p>

                            </div>



                        </div>

                        <div className='flex flex-col space-y-9 mt-40'>

                            {/* Go bit down and you find Affiliaction */}
                            <div onClick={() => {
                                document.getElementById("affiliation")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Affiliation</div>

                            {/* Go bit down and you find SVBIT event */}
                            <div onClick={() => {
                                document.getElementById("event")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>SVBIT Event</div>

                            {/* connect to admission.jsx */}
                            <div onClick={() => navigate("/admission")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Admission Intake</div>

                            {/* Go bit down and you find Achievement */}
                            <div onClick={() => {
                                document.getElementById("achievement")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Achievement</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Faculty</div>

                            {/* Go bit down and you find Laboratory */}
                            <div onClick={() => {
                                document.getElementById("laboratory")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Laboratory</div>

                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Mobinnovation</div>


                            {/* Go bit down and you find ITP Cell */}
                            <div onClick={() => {
                                document.getElementById("itp")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>ITP</div>


                            {/* Go bit down and you find TechViden */}
                            <div onClick={() => {
                                document.getElementById("techviden")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>TECHVIDEN</div>


                            <div onClick={() => {
                                document.getElementById("btopper")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Branch Toppers</div>


                            <div onClick={() => {
                                document.getElementById("placement")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Placement</div>


                            <div onClick={() => {
                                document.getElementById("startino")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>

                    </div>

                </div>

                <Footer />

            </div>
        </>
    )
}

export default Diploma
