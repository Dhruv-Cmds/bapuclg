import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Itp = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = "Itp | BGKV"
    }, [])

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">


                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>


                        {/* ITP Cell */}
                        <div id='itp' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                            <h2 className='text-2xl tracking-wider font-semibold'>ITP Cell – Incubation, Training & Placement Cell</h2>

                            <p className='mt-10 text-lg'>The Incubation, Training and Placement Cell of the college facilitates on campus training, innovation build up and recruitment by giving a common platform to students seeking jobs. It invites companies related to engineering field. The ITPC Cell of Shankersinh Vaghela Bapu Institute of Technology (SVBIT) working in close coordination with its faculty and relations to the industry. It provides a platform for students seeking professional training in different field of engineering and recruitments to interact with possible recruiters on the campus. The ITP Cell is operated by rules and principles to maintain warm relation with firms. Also, It provides the training to the students for start up by conducting different skill development seminars and workshops like Presentation skills, Interview skills, Communication skills, Resume building, Group discussion etc. It provides technical and financial supports to the students who have different idea and innovation.</p>


                            <div className='mt-30 md:grid md:grid-cols-3 justify-items-center space-y-30'>

                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp1.webp1")}
                                >
                                    <img src="./asset/itp1.webp1" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp2.webp1")}
                                >
                                    <img src="./asset/itp2.webp1" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp3.webp1")}
                                >
                                    <img src="./asset/itp3.webp1" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp4.webp1")}
                                >
                                    <img src="./asset/itp4.webp1" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp5.webp1")}
                                >
                                    <img src="./asset/itp5.webp1" alt="" />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                        <p className="text-white">
                                            Click to View →
                                        </p>
                                    </div>
                                </div>


                                <div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                                    onClick={() => setPreview("./asset/itp6.webp1")}
                                >
                                    <img src="./asset/itp6.webp1" alt="" />

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

                            {/* Go bit down and you find Achievement */}
                            <div onClick={() => navigate("/achievement")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Achievement</div>


                            <div onClick={() => navigate("/faculty")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Faculty</div>

                            {/* Go bit down and you find Laboratory */}
                            <div onClick={() => navigate("/laboratory")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Laboratory</div>

                            <div onClick={() => navigate("/mobinnovation")} className='bg-black text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-300 hover:text-black font-semibold tracking-wider hover:scale-110 active:scale-110'>Mobinnovation</div>

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

export default Itp
