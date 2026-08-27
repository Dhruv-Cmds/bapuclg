import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { HugeiconsIcon } from "@hugeicons/react";
import { FolderClosedIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

import { useNavigate } from "react-router-dom";

const Be = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "BG/UG | BGKV"
  })

  return (
    <>
      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

        <Navbar />

        <div className='border-b mb-10 md:mt-10'>
          <div className="flex justify-center container mx-auto gap-10">

            {/* DESKTOP BUTTONS */}
            <div
              onClick={() => navigate("/pg")}
              className='hidden md:flex bg-indigo-500 text-white px-0 md:px-4 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-400 hover:text-black font-semibold tracking-wider hover:scale-110 items-center gap-5'
            >
              ME/PG Academic Program
              <HugeiconsIcon icon={FolderClosedIcon} size={30} />
            </div>

            <div
              onClick={() => navigate("/diploma")}
              className='hidden md:flex bg-indigo-500 text-white px-0 md:px-40 rounded-4xl whitespace-nowrap mx-3 md:mx-0 py-5 text-2xl text-center duration-300 ease hover:bg-indigo-400 hover:text-black font-semibold tracking-wider hover:scale-110 items-center gap-5'
            >
              Diploma
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
              <div onClick={() => navigate("/pg")} className="bg-indigo-500 text-white px-5 py-4 rounded-2xl">
                ME/PG Academic Program
              </div>

              <div onClick={() => navigate("/diploma")} className="bg-indigo-500 text-white px-5 py-4 rounded-2xl">
                Diploma
              </div>

            </div>

          </div>




          <div className='flex md:flex-row flex-col container gap-0 md:gap-20 mx-auto mb-10'>

            <div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h2 className='text-2xl tracking-wider font-semibold'>BE/UG Academic Program</h2>
              </div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>1. Computer Engineering</h3>

                <p className='mt-5 text-lg'>The Computer Engineering Department at <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) </span> offers a dynamic learning environment for students with an intake of 60, under the affiliation of Gujarat Technological University (GTU). The department dedicates itself to delivering robust computer science fundamentals and practical experience with cutting-edge technologies. Students are encouraged to enhance their skills through coding competitions, workshops, research projects, and industry interactions. With experienced faculty, well-equipped laboratories, and a focus on innovation, the department aims to prepare students for successful careers in software development, data science, artificial intelligence, and emerging fields of technology.</p>

              </div>


              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>2.  Information Technology</h3>

                <p className='mt-5 text-lg'>The Information Technology Department at <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT) </span> offers an intake of 60 students and is affiliated with Gujarat Technological University (GTU). The department focuses on building a strong foundation in core IT concepts while keeping pace with rapidly changing industry trends. Students get exposure to areas like programming, databases, networking, cloud computing, cybersecurity, and web technologies, supported by well­ equipped labs and dedicated faculty. The department emphasizes practical learning through projects, internships, and industry interactions, helping students to become skilled IT professionals ready to contribute to the digital world.</p>

              </div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>3. Civil Engineering

                </h3>

                <p className='mt-5 text-lg'>The Civil Engineering Department at  <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> with an intake of 30 students and affiliation to Gujarat Technological University (GTU), is dedicated to shaping future builders of society. The department provides a strong academic foundation along with practical exposure to core areas such as structural engineering, surveying, construction technology, transportation, and environmental engineering. Equipped with modem laboratories and guided by experienced faculty, the department encourages students to gain hands-on experience through site visits, projects, and workshops. With a focus on innovation and sustainability, the Civil Engineering Department prepares students to meet real-world challenges and contribute to infrastructure development with skill and responsibility.</p>

              </div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>4. Mechanical Engineering
                </h3>

                <p className='mt-5 text-lg'>The Mechanical Engineering Department at  <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> admits 30 students each year under the affiliation of Gujarat Technological University (GTU). The department emphasizes strong fundamentals in design, manufacturing, thermal sciences, and automation while fostering innovation and creative problem-solving. With advanced laboratories, modem tools, and dedicated faculty, students gain both theoretical knowledge and practical skills. The department regularly organizes workshops, industrial visits, and projects to ensure students are well-prepared for careers in core industries, research, and emerging fields like robotics and renewable energy.</p>

              </div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>5. Electrical Engineering
                </h3>

                <p className='mt-5 text-lg'>The Electrical Engineering Department at  <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> with an intake of 30 students and affiliation to Gujarat Technological University (GTU), focuses on creating skilled engineers with strong knowledge of power systems, electrical machines, control systems, and renewable energy technologies. The department provides well­ equipped laboratories, modern tools, and guidance from experienced faculty to ensure a balance of theory and practical learning. Through workshops, projects, and industry interactions, students are encouraged to develop innovative solutions and become competent professionals ready to meet the challenges of the energy and technology sectors.</p>

              </div>

              <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                <h3 className='mt-5 text-xl font-medium'>6. Electronics & Communication
                </h3>

                <p className='mt-5 text-lg'>The Electronics & Communication  Engineering Department at  <span className='font-semibold'>Shankersinh Vaghela Bapu Institute of Technology (SVBIT),</span> offers an intake of 30 students and is affiliated with Gujarat Technological University (GTU). The department emphasizes a strong blend of electronics, communication systems, embedded technologies, and modern digital applications. Students gain hands-on learning through well-equipped laboratories, projects, and workshops that connect theory with real-world applications. With guidance from experienced faculty and exposure to industry practices, the department prepares students to excel in fields like VLSI, embedded systems, wireless communication, IoT, and advanced electronics, shaping them into competent and innovative engineers.</p>

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

export default Be
