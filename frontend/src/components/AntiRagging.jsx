import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { CursorEdit01FreeIcons, Email } from '@hugeicons/core-free-icons'

const AntiRagging = () => {

    useEffect(() => {
        document.title = "AntiRagging | BGKV"
    }, [])

    return (

        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 mt-10'>

                    <div className='container mx-auto'>

                        <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

                            <div className='relative group'>

                                <img className='w-500 rounded-2xl px-2' src="./asset/a1.webp" alt="" />
                    
                            </div>

                            <div className='mb-10'>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>Anti Ragging</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <p className='mt-5 text-lg'>Anti Ragging Committee has been constituted at our institute level as per the direction given by Director Technical Education (DTE), Gujarat state vide letter no./2009/4153/K(4)/12010 dated 20th March, 2009 in line with the Hon. Supreme Court of India’s order dated 28th February 2009. All India Council For Technical Education, New Delhi’s has also published a notification dated 1st July 2009 on “Prevention and prohibition of Ragging in technical Institutions, Universities including Deemed to be Universities imparting technical education”.</p>
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

export default AntiRagging
