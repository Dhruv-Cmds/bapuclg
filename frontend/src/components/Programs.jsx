import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { DockFreeIcons } from '@hugeicons/core-free-icons'

import { useNavigate } from "react-router-dom";


const Programs = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10'>

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

                                    <img className='w-100 rounded-4xl' src="./asset/Principle-sir.webp" alt="" />

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


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Achievement</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Faculty</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Laboratory</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Mobinnovation</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>ITP</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>TECHVIDEN</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Branch Toppers</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Placement</div>


                            <div onClick={() => {
                                document.getElementById("")?.scrollIntoView({
                                    behavior: "smooth"
                                });
                            }} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Startup Innovation</div>


                        </div>


                    </div>

                    <div className='container mx-auto'>

                        {/* Affiliation */}
                        <div id='affiliation' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                            <h2 className='text-2xl tracking-wider font-semibold'>Affiliation -SVBIT</h2>

                            <p className='mt-5 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) is a recognized technical institute approved by All India Council for Technical Education (AICTE) and is a proud affiliate of Gujarat Technological University (GTU) which is accredited University with A+ grade by NAAC . Our affiliation with GTU ensures that we provide our students with a high-quality education that meets the standards of one of India’s most prestigious institutions.</p>

                            <p className='mt-5 text-lg'>At SVBIT Engineering College, we are committed to providing our students with an education that is both rigorous and rewarding. Our affiliation with GTU allows us to achieve this goal and help our students succeed in their academic and professional pursuits.</p>

                        </div>


                        {/* SVBIT Events */}
                        <div id='event' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                            <h2 className='text-2xl tracking-wider font-semibold'>SVBIT Events</h2>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Funding opportunity for Early Stage Entrepreneurs-SSIP Pitch Presentation (PITCHFEST)</h3>

                                </div>

                                <p className='text-gray-500'>by Bapugkv | Jul 31, 2025 | Technology</p>

                                <p className='mt-5 text-lg'>The SSIP Pitch Presentation aims to provide a platform for students to showcase their innovative ideas, projects, or startups under the Student Startup and Innovation Policy. It encourages creativity, problem-solving, and entrepreneurship among young innovators.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Boot Camp/Mentoring Session-The Ultimate Idea of Startup Pitching (PITCHFEST)</h3>

                                </div>

                                <p className='text-gray-500'>by Bapugkv | Jul 30, 2025 | Technology</p>

                                <p className='mt-5 text-lg'>The Boot Camp/Mentoring Session on "The Ultimate Idea of Startup Pitching" offered key insights into crafting effective startup pitches. Participants learned to present their ideas, highlight value, and engage investors with confidence and storytelling.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>An expert talk on the National Education Policy (NEP) 2020</h3>

                                </div>

                                <p className='text-gray-500'>by Bapugkv | Jul 29, 2025 | Technology</p>

                                <p className='mt-5 text-lg'>The objective of this expert talk is to enlighten engineering students about the vision, reforms, and opportunities introduced by the National Education Policy (NEP) 2020, as part of its 5th anniversary celebration.</p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>From Zero to Engineer: Building your Identity</h3>

                                </div>

                                <p className='text-gray-500'>by Bapugkv | Jul 25, 2025 | Technology</p>

                                <p className='mt-5 text-lg'>Primary aim of the session was to ignite the inner drive in students by encouraging them to believe in their potential, regardless of their starting point. </p>

                            </div>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Expert talk on Innovation/Prototype Validation – Converting Innovation into a Start-up</h3>

                                </div>

                                <p className='text-gray-500'>by Bapugkv | Jul 10, 2025 | Technology</p>

                                <p className='mt-5 text-lg'>The objective of the session was to understand and implement the process of innovation and prototype validation as a foundation for building successful startups. </p>

                            </div>

                        </div>

                    </div>

                </div>

                <Footer />

            </div>
        </>
    )
}

export default Programs
