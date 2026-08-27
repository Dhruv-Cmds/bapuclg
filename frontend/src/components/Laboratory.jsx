import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Laboratory = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Laboratory | BGKV"
    })

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* Laboratory */}
                        <div id='laboratory' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                            <h2 className='text-2xl tracking-wider font-semibold'>Laboratory – SVBIT</h2>

                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Computer Lab</h3>

                                </div>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The <span className='font-black'>Computer Lab </span> at SVBIT is equipped with modem systems and software tools to support learning, programming, and research in computer and IT domains. Students gain hands-on experience in coding, software development, networking, and database management, enabling them to apply theoretical knowledge to practical challenges.</p>

                            </div>


                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Mechanical Lab</h3>

                                </div>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The <span className='font-black'>Mechanical Lab </span> provides students with access to advanced machinery, manufacturing equipment, and experimental setups. It allows hands-on learning in areas like production, thermodynamics, mechanics, and automation, helping students understand concepts through practical experimentation and real-world applications.</p>

                            </div>


                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Electrical Lab</h3>

                                </div>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The <span className='font-black'>Electrical Lab </span> is designed to give students practical exposure to electrical circuits, machines, power systems, and control devices. Well-equipped with instruments and tools, it enables students to perform experiments, understand electrical phenomena, and develop problem-solving skills for industry-ready  competencies.</p>

                            </div>


                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Civil Lab</h3>

                                </div>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>The <span className='font-black'>Civil Lab </span> offers facilities for surveying, construction material testing, structural experiments, and environmental studies. Students engage in practical exercises and projects that strengthen their understanding of civil engineering concepts and prepare them for real-world construction and infrastructure  challenges.</p>

                            </div>


                            <div>

                                <div className='flex font-medium tracking-wide text-xl md:items-center mt-5 space-x-1'>

                                    <span>-</span>
                                    <h3>Electronics and Communication Lab</h3>

                                </div>

                                <p className='mt-5 text-lg ml-4 md:ml-5'>An <span className='font-black'>Electronics and Communication Lab </span>  is some dedicated fundamentals labs for EC engineering; where students and researchers can do experiment, design, and analyze electronic circuits, communication systems, and related technologies. It bridges theory with hands-on practice, enabling learners to understand the functioning of electronic devices and communication networks.</p>

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

export default Laboratory