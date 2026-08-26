import React, { useState } from 'react'
// import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { DockFreeIcons } from '@hugeicons/core-free-icons'
import { useNavigate } from "react-router-dom";


const Programs = () => {

    const navigate = useNavigate();

    const [preview, setPreview] = useState("");

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

                    {/* Affiliation */}
                    <div className='container mx-auto'>

                        <div id='affiliation' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                            <h2 className='text-2xl tracking-wider font-semibold'>Affiliation -SVBIT</h2>

                            <p className='mt-5 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) is a recognized technical institute approved by All India Council for Technical Education (AICTE) and is a proud affiliate of Gujarat Technological University (GTU) which is accredited University with A+ grade by NAAC . Our affiliation with GTU ensures that we provide our students with a high-quality education that meets the standards of one of India’s most prestigious institutions.</p>

                            <p className='mt-5 text-lg'>At SVBIT Engineering College, we are committed to providing our students with an education that is both rigorous and rewarding. Our affiliation with GTU allows us to achieve this goal and help our students succeed in their academic and professional pursuits.</p>

                        </div>

                    </div>

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


                    {/* Achievement */}
                    <div id='achievement' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                        <h2 className='text-2xl tracking-wider font-semibold'>Special Achievement by SVBIT</h2>

                        <p className='mt-5 text-lg'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) is a recognized technical institute approved by All India Council for Technical Education (AICTE) and is a proud affiliate of Gujarat Technological University (GTU) which is accredited University with A+ grade by NAAC . Our affiliation with GTU ensures that we provide our students with a high-quality education that meets the standards of one of India’s most prestigious institutions.</p>


                        <div className='mt-10 md:grid md:grid-cols-2 justify-items-center space-y-10'>

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

                    {/* ITP Cell */}
                    <div id='itp' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                        <h2 className='text-2xl tracking-wider font-semibold'>ITP Cell – Incubation, Training & Placement Cell</h2>

                        <p className='mt-5 text-lg'>The Incubation, Training and Placement Cell of the college facilitates on campus training, innovation build up and recruitment by giving a common platform to students seeking jobs. It invites companies related to engineering field. The ITPC Cell of Shankersinh Vaghela Bapu Institute of Technology (SVBIT) working in close coordination with its faculty and relations to the industry. It provides a platform for students seeking professional training in different field of engineering and recruitments to interact with possible recruiters on the campus. The ITP Cell is operated by rules and principles to maintain warm relation with firms. Also, It provides the training to the students for start up by conducting different skill development seminars and workshops like Presentation skills, Interview skills, Communication skills, Resume building, Group discussion etc. It provides technical and financial supports to the students who have different idea and innovation.</p>


                        <div className='mt-10 md:grid md:grid-cols-3 justify-items-center space-y-10'>

                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp1.webp")}
                            >
                                <img src="./asset/itp1.webp" alt="" />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white">
                                        Click to View →
                                    </p>
                                </div>
                            </div>


                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp2.webp")}
                            >
                                <img src="./asset/itp2.webp" alt="" />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white">
                                        Click to View →
                                    </p>
                                </div>
                            </div>


                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp3.webp")}
                            >
                                <img src="./asset/itp3.webp" alt="" />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white">
                                        Click to View →
                                    </p>
                                </div>
                            </div>


                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp4.webp")}
                            >
                                <img src="./asset/itp4.webp" alt="" />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white">
                                        Click to View →
                                    </p>
                                </div>
                            </div>


                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp5.webp")}
                            >
                                <img src="./asset/itp5.webp" alt="" />

                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <p className="text-white">
                                        Click to View →
                                    </p>
                                </div>
                            </div>


                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-xl"
                                onClick={() => setPreview("./asset/itp6.webp")}
                            >
                                <img src="./asset/itp6.webp" alt="" />

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



                    {/* Techviden */}
                    <div id='techviden' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                        <h2 className='text-2xl tracking-wider font-semibold'>TECHVIDEN</h2>

                        <p className='mt-5 text-lg'>At SVBIT, we believe in transforming young minds into skilled and confident engineers, and to achieve this, an annual technical festival -TECHVIDEN, is organized for degree and diploma students. TECHVIDEN is known for hosting a variety of events that include competitions, exhibitions, lectures, and workshops organized by various departments.</p>

                        <p className='mt-5 text-lg'>The activities culminate in a grand two-day festival event on the BapuGKV campus, which attracts people from all over Gandhinagar and Ahmedabad cities, including students, academics, and corporate. SVBIT had also hosted GTU Tech Fest in the year 2016.</p>


                        <div className='mt-10 md:grid md:grid-cols-3 justify-items-center space-y-10'>

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


                    {/* Branch Toppers */}
                    <div id='btopper' className='bg-gray-50 mt-10 p-5 rounded-3xl container mx-auto'>

                        <h2 className='text-2xl tracking-wider font-semibold'>Branch Toppers</h2>

                        <div className='mt-10 md:grid md:grid-cols-3 justify-items-center space-y-10'>

                            {Array.from({ length: 8 }, (_, i) => {
                                const num = i + 1;

                                return (
                                    <div
                                        key={num}
                                        className="relative group cursor-pointer overflow-hidden rounded-xl"
                                        onClick={() => setPreview(`./asset/bt${num}.webp`)}
                                    >
                                        <img src={`./asset/bt${num}.webp`} alt="" />

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


                    {/* Startup Innovation */}
                    <div className='container mx-auto'>

                        <div id='startino' className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                            <h2 className='text-2xl tracking-wider font-semibold'>Startup Innovation</h2>

                            <p className='mt-5 text-lg'>At <span className='font-bold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> fostering innovation and entrepreneurial spirit is a key focus. Through the <span className='font-bold'> Student Startup and Innovation Policy (SSIP)-Cell,</span> the institute supports budding entrepreneurs with funding, mentorship, and resources to transform ideas into viable projects/products. Students are encouraged to participate in workshops, hackathons, idea competitions, and innovation challenges, gaining hands-on experience in product development, business planning, and technology commercialization. By combining practical guidance with SSIP support, SVBIT aims to nurture creative minds and prepare students to become successful innovators and future entrepreneurs.</p>

                        </div>

                    </div>

                </div>

                <Footer />

            </div >
        </>
    )
}

export default Programs
