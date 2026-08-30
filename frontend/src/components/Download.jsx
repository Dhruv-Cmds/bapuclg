import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Download = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const colorClasses = [
    'bg-indigo-500 hover:bg-indigo-600',
    'bg-violet-500 hover:bg-violet-600',
    'bg-fuchsia-500 hover:bg-fuchsia-600',
  ];

  const getColorClass = (index) => {
    if (hoveredIndex === null) return colorClasses[index];

    const swappedIndex = (hoveredIndex + 1) % colorClasses.length;
    if (index === hoveredIndex) return colorClasses[swappedIndex];
    if (index === swappedIndex) return colorClasses[hoveredIndex];
    return colorClasses[index];
  };

  useEffect(() => {
    document.title = "Download | BGKV"
  }, [])

  return (
    <>

      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

        <Navbar />

        <div className='border-b mb-10'>

          <div className='mt-10 mb-10 flex justify-center md:items-center container md:space-x-10 md:mx-auto md:flex-row flex-col md:space-y-0 space-y-10 px-1'>

            <a className={`${getColorClass(0)} text-white p-5 text-xl rounded-3xl hover:scale-110 font-medium duration-300 ease transition-all md:w-100 text-center`}
              href="https://bapugkv.ac.in/wp-content/uploads/2023/10/Brochure-2023.pdf" target='_blank'
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}>
              Campus Brochure
            </a>

            <a className={`${getColorClass(1)} text-white p-5 text-xl rounded-3xl hover:scale-110 font-medium duration-300 ease transition-all md:w-100 text-center`}
              href="https://bapugkv.ac.in/wp-content/uploads/2024/11/Aayam-Magazine_Volume-10.pdf"
              target='_blank'
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              Aayam Magazine
            </a>

            <a className={`${getColorClass(2)} text-white p-5 text-xl rounded-3xl hover:scale-110 font-medium duration-300 ease transition-all md:w-100 text-center`}
              href="https://bapugkv.ac.in/wp-content/uploads/2023/04/Youth-Festival-Last-Copy-__6-9-1092122084537.pdf"
              target='_blank'
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              Youth Festival
            </a>

          </div>

        </div>

        <div className='absolute bottom-0 md:static'>

          <Footer />
        </div>

      </div>

    </>
  )
}

export default Download
