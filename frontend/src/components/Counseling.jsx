import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { CursorEdit01FreeIcons, Email } from '@hugeicons/core-free-icons'

const Counseling = () => {

    useEffect(() => {
        document.title = "Counseling | BGKV"
    }, [])

    return (

        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 mt-10'>

                    <div className='container mx-auto'>

                        <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

                            <div className='relative group'>

                                <img className='w-500 rounded-2xl px-2' src="./asset/c1.webp1" alt="" />
                    
                            </div>

                            <div className='mb-10'>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>Career Counseling</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <p className='mt-5 text-lg'>With an aim to spread the awareness among the students and to consolidate their career path, the faculty of Shankersinh Vaghela Bapu of Technology and Shankersinh Vaghela Bapu of Pharmacy organized a career counseling programme. Through this noble cause of making the students acquaint about various vocational courses, its contemporary significance and to enable them for plausible understanding of university education, a team of academicians visited St. Joseph Higher secondary school, Gnadhinagar. There were 70 students of 12 science stream, who took keen interest and interacted with faculty for detailed information. Mr. Ashwin Patel, Principal of Shree Krishna School of Science expressed his earnest concern for the same.</p>

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

export default Counseling
