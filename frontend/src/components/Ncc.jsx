import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Ncc = () => {

    useEffect(() => {
        document.title = "Ncss Unit | BGKV"
    }, [])

    const photos = [
        {
            src: "./asset/nc2.webp",
            text: 'A Report on “Old Age Home Visit” 09/01/2026',
        },
        {
            src: "./asset/nc3.webp",
            text: 'Tree plantation Event on the occasion of World Environment Day',
        },

        {
            src: "./asset/nc4.webp",
            text: 'The National Cadet Corps, a national-level student-oriented and student welfare course, was started in 2019 at the BapuGKV Campus. 31 SD (boys) vacancies and 19 SW (girls) vacancies have been allotted from 2 Gujarat Indep Coy NCC, Sector 15, Gandhinagar. Currently, 50 cadets are undergoing NCC training and are learning the lessons of human values and discipline from this prestigious course.',
        },

        {
            src: "./asset/nc5.webp",
            text1: 'I am delighted to share the wonderful news that our student, Patel Urmi, from the Information Technology Department (En. No. 190750116025), has earned a GOLD Medal in the category of Best SW among a total of 243 students at the National Cadet Corps (NCC) CATC camp held at Headquarters Ahmedabad. This prestigious camp was organized by the 2nd Gujarat Indeep Coy NCC. It is worth mentioning that Patel Urmi holds the position of Senior Under Officer at our college in NCC. Please join me in extending heartfelt congratulations to Patel Urmi for this remarkable achievement.',

            text2: 'Also I am delighted to share the wonderful news that our student, Mistry Khusboo, from the Computer Department (En. No. 210750107021), has earned a GOLD Medal in the category of Best Cultural Group performance among a total of 15 groups at the National Cadet Corps (NCC) CATC camp held at Headquarters Ahmedabad. This prestigious camp was organized by the 2nd Gujarat Indeep Coy NCC. It is worth mentioning that  Mistry Khusboo holds the position of Junior Under Officer at our college in NCC. Please join me in extending heartfelt congratulations to Mistry Khusboo for this remarkable achievement',
        },

    ];

    return (
        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='mt-1'>
                    <img className='w-full' src="/bapuclg/asset/nccbanner.webp" alt="" />
                </div>


                <div className='border-b mb-10 mt-10'>

                    <div className='container mx-auto'>

                        <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

                            <img className='w-800 rounded-2xl px-2' src="./asset/nc1.webp" alt="" />

                            <div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>Ncc Unit</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <p className='mt-5 text-lg'>The National Cadet Corps (NCC) is the Indian military cadet corps. NCC is a Tri-Services Organization, comprising the Army, Navy and Air Force. It is engaged in grooming the youth of the country into disciplined and patriotic citizens. It is the organization which gives the Indian youth a glimpse of what it feels like to be an officer in the Indian armed forces. It is one of the largest reserve forces in the world.</p>

                                    <p className='mt-5 text-lg'>For a student to be part of NCC activities during academic career are not only a matter of pride but also have many advantages in terms of development of overall personality. Participating in various NCC activities, learning its discipline, privileged of wearing the uniform and feeling associated with it, the respect you get in the society, etc. earns reverence for you and makes you distinct among your peers.</p>

                                    <p className='mt-5 text-lg'>
                                        Shankersinh Vaghela Bapu Institute of Technology has been granted 50 Vacancies by 2 Gujarat Indep Coy, Army wing sector 15, Gandhinagar from June, 2019. From academic year 2019-20, 25 cadets are enrolled in NCC programme.</p>

                                </div>

                            </div>

                        </div>

                        <div className='grid lg:grid-cols-2 mt-15 mb-10 gap-5 grid-cols-1 items-center justify-between'>

                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="md:bg-white md:pt-0 md:mx-0 rounded-2xl bg-blue-100 pt-2 mx-2"
                                >
                                    <div className="mx-2 flex flex-col md:gap-0 gap-2 items-center">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={photo.src}
                                            alt=""
                                        />
                                        <div className='flex flex-col gap-5'>

                                            <p className='text-xl mt-5'>{photo.text}</p>
                                            <p className='text-xl'>{photo.text1}</p>
                                            <p className='text-xl'>{photo.text2}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        </>
    )
}

export default Ncc
