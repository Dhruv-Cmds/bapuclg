import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { CursorEdit01FreeIcons, Email } from '@hugeicons/core-free-icons'

const Library = () => {

    useEffect(() => {
        document.title = "Library | BGKV"
    }, [])

    const photos = [
        "./asset/lib1.webp",
        "./asset/lib2.webp",
        "./asset/lib3.webp",
        "./asset/lib4.webp",
        "./asset/lib5.webp",
        "./asset/lib6.webp",
        "./asset/lib7.webp",
    ]

    const [current, setCurrent] = useState(0);

    return (

        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 mt-10'>

                    <div className='container mx-auto'>

                        <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

                            <div className='relative group'>

                                <img className='w-500 rounded-2xl px-2' src={photos[current]} alt="" />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setCurrent((current - 1 + photos.length) % photos.length)
                                    }
                                    aria-label="Previous library image"
                                    className="
                                        absolute left-3 top-1/2 -translate-y-1/2
                                        px-3 py-3 rounded-full
                                        bg-black/80 text-xl
                                        md:opacity-0 md:pointer-events-none
                                        transition-all duration-200
                                        group-hover:opacity-100
                                        group-hover:pointer-events-auto
                                        hover:scale-110
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setCurrent((current + 1) % photos.length)
                                    }
                                        aria-label="Next library image"
                                        className="
                                        absolute right-3 top-1/2 -translate-y-1/2
                                        px-3 py-3 rounded-full
                                        bg-black
                                        md:opacity-0
                                        md:pointer-events-none
                                        transition-all duration-200
                                        group-hover:opacity-100
                                        group-hover:pointer-events-auto
                                        hover:bg-black/80
                                        hover:scale-110
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                            <div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>Library</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <p className='mt-5 text-lg'>The BGKV Central Library is entirely computerized, utilizing the SOUL 2.0 integrated library management software, which has recently been upgraded to SOUL 3.0. An E­ Library is also accessible on this campus, allowing registered students to utilize library facilities at any time, from any location. The library boasts an extensive collection of over 51,000 books and various national and international journals, covering all subjects.</p>

                                    <p className='mt-5 text-lg font-semibold'>We hold institutional membership with DELNET, which provides us with the following facilities available 24/7:</p>

                                    <div className='mt-5 text-lg'>

                                        <li className='ml-10 mb-5'>
                                            <p>
                                                A Knowledge Gainer portal for accessing full-text e-books, e-journals, and e-articles; the CONCOUR portal for various online courses; JSTOR; a language learning portal; manuscripts; rare books and archival materials; resources for differently-able individuals; the Vision Portal; the GRIP Portal; full-text e-journals across various subjects; e-newspapers; audio books; and various online databases, among others.
                                            </p>
                                        </li>

                                        <li className='ml-10'>
                                            <p>
                                                We are registered with the National Digital Library, which serves as a virtual repository of learning resources. This platform is not merely a repository with search and browse capabilities but also offers a wide range of services for the learner community. It is sponsored and mentored by the Ministry of Education, Government of India, through its National Mission on Education through Information and Communication Technology (NMEICT). The library is developed, operated, and maintained by the Indian Institute of Technology, Kharagpur.
                                            </p>
                                        </li>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <Footer />

            </div>
        </>
    )
}

export default Library
