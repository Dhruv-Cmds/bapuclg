import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { CursorEdit01FreeIcons, Email } from '@hugeicons/core-free-icons'

const Grievance = () => {

    useEffect(() => {
        document.title = "Grievance | BGKV"
    }, [])

    return (

        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 mt-10'>

                    <div className='container mx-auto'>

                        <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

                            <div className='relative group'>

                                <img className='w-500 rounded-2xl px-2' src="./asset/g1.webp" alt="" />
                    
                            </div>

                            <div className='mb-10'>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>Career Counseling</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <p className='mt-5 text-lg'>We at Bapu Gujarat Knowledge Village (BapuGKV) firmly follow the principles of Transparency and Integrity. Shankersinh Vaghela Bapu Group of Institutions always strives to provide a stimulating environment so that students, faculties, and other contributors can grow. BapuGKV has its complaint redressal team who manages all issues related to students’ complaints, issues related to anti-ragging, harassment, academic, hostel, and others through Grievance Redressal Portal.</p>

                                    <p className='mt-5 text-lg'>We do not disclose the identity of a person who complains. All complaints are redirected to the concerned authorities for the fast resolution and smooth functioning of Institutes.</p>

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

export default Grievance
