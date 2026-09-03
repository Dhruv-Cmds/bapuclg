import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Wdc = () => {

    const photos = [
        {
            src: "./asset/wdc1.webp1",
            title: `"HIVIAIDS Awareness: Empowering through Education" 12/09/2024`,
        },
        {
            src: "./asset/wdc2.webp1",
            title: `A Report on “Women Talent Hunt” 15/03/2023`,
        },
        {
            src: "./asset/wdc3.webp1",
            title: `WDC Report on KITE DECORATION 13/01/2023`,
        },
        {
            src: "./asset/wdc4.webp1",
            title: `A Report on One day Workshop on “HIV/AIDS Awareness & Diwali Thali Decoration 18/06/2022`,
        },
        {
            src: "./asset/wdc5.webp1",
            title: `WDC Report on International Women's Day 08/03/2022`,
        },
        {
            src: "./asset/wdc6.webp1",
            title: `WDC Report on Women Empowerment 26-08-2021`,
        },
        {
            src: "./asset/wdc7.webp1",
            title: `WDC Report on International Yoga Day 21-06-2021`,
        },
        {
            src: "./asset/wdc8.webp1",
            title: `A Report on “International Women’s Day Celebration” on 08/03/2021`,
        },
        {
            src: "./asset/wdc9.webp1",
            title: `Report on GUJCOST Sponsored workshop "Empowering Women: Inspiring Change" 11/02/2020`,
        },
        {
            src: "./asset/wdc10.webp1",
            title: `“International Women’s Day” Celebration on 08/03/2019`,
        },
        {
            src: "./asset/wdc11.webp1",
            title: `Report on Physical Activity & Women Health 30/01/2019`,
        },
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <div className='container mx-auto'>


                        <div className='flex md:flex-row flex-col gap-0 md:gap-20 mb-10'>

                            <div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h2 className='text-2xl tracking-wider font-semibold'>About WDC Cell</h2>

                                </div>

                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h3 className='mt-5 text-xl font-medium'>About Women Development Cell</h3>

                                    <p className='mt-5 text-lg'>The Women Development Cell was established in the BapuGKV campus in the year 2014. The establishment of the WDC is indeed a landmark achievement of the campus in pursuance of the policies of women empowerment. The Cell has both the faculty and students of the College as its members and works with an aim to create a gender sensitized community within campus as well as in the society. It has been organizing varied academic, technical, medical, cultural and social events for the upliftment of women and spread the real importance of gender equality in the society through College students.</p>

                                </div>


                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h3 className='mt-5 text-xl font-medium'>Mission and Vision</h3>

                                    <p className='mt-5 text-lg'>The Women Development Cell (WDC) aims to promote awareness of gender equality and gender sensitization in society and among students in particular. Also it aims at empowering and orienting women to recognize their true potential and to help them attain their own stand in a competing world.</p>

                                    <p className='mt-5 text-lg'>The Women’s Development Cell (WDC) is a statutory body for the prevention of and action against sexual harassment of women.</p>

                                </div>


                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h3 className='mt-5 text-xl font-medium'>Objectives of WDC</h3>

                                    <ul className='list-decimal ml-4 mt-4 flex flex-col gap-2'>
                                        <li>To promote the general well-being of female students and teaching and non-teaching women staff.</li>

                                        <li>To create awareness about health and hygiene among girl students.</li>

                                        <li>To develop skills among the girl students by means of workshops and training programs for their overall personality development.</li>

                                        <li>To create social awareness about the problems of women in general and gender discrimination in particular by means of programs like lectures, workshops and seminars.</li>

                                        <li>To create legal awareness among women by informing them about Women's Welfare Laws.</li>
                                    </ul>

                                </div>


                                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                                    <h3 className='mt-5 text-xl font-medium'>Activities of WDC</h3>

                                    <ul className='list-disc ml-4 mt-4 flex flex-col gap-2'>
                                        <li>Leacture/Seminars/Workshop</li>
                                        <li>Personality Development Programs</li>
                                        <li>Women Health Development Programs</li>
                                        <li>Competition and Games</li>
                                        <li>Women's Day Celebration</li>
                                    </ul>

                                </div>

                            </div>

                        </div>



                        <h2 className='text-2xl sm:text-3xl font-poppins font-medium tracking-wider text-center'>Activities</h2>

                        <div className="flex mt-5 justify-center">
                            <div className="w-30 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-15 mb-10 gap-5 items-start'>

                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="md:bg-white md:pt-0 md:mx-0 rounded-2xl bg-blue-100 pt-2 mx-2"
                                >
                                    <div className="w-full min-w-0 px-2 flex flex-col gap-2 items-center">
                                        <img
                                            className="block w-full h-auto max-w-full object-contain"
                                            src={photo.src}
                                            alt=""
                                        />

                                        <p className='text-center'>{photo.title}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

                <Footer />

            </div >
        </>
    )
}

export default Wdc
