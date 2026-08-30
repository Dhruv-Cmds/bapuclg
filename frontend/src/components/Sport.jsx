import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Sport = () => {

    useEffect(() => {
        document.title = "Sports | BGKV"
    }, [])

    const sportParticipants = [
        [1, 'HARSH JADAV', 'CRICKET', '2011-12', 'BANARAS UNI (U.P)'],
        [2, 'MALAY PATEL', 'TENNIS', '2011-12', 'UNI. OF MUMBAI'],
        [3, 'PRANAV CHAUDHARY', 'ATHLETIC', '2013', 'PUNJAB UNI6'],
        [4, 'BHARGURAJ RANA', 'BASKETBALL', '2013', 'JAIPUR UNI'],
        [5, 'DIVYA GAMIT', 'BASKETBALL', '2013', 'HEMCHADARACHRYA NORTH GUJ UNI'],
        [6, 'DIMPLE PANWAR', 'HANDBALL', '2013', 'UNI OF RAJASTHAN'],
        [7, 'KRUTIKA DHUMAL', 'HANDBALL', '2013', 'UNI OF RAJASTHAN'],
        [8, 'HIMANI PATEL', 'HANDBALL', '2013', 'UNI OF RAJASTHAN'],
        [9, 'MALAY PATEL', 'TENNIS', '2014', 'VNSGU, SURAT'],
        [10, 'HARDIK SHARMA', 'VOLLEYBALL', '2014', 'SHIVAJI UNI KOLHAPUR'],
        [11, 'MARGEE SUTARIYA', 'BADMINTON', '2014', 'RAJIV GANDHI PRAUDYOGIKI VISHWAVIDYALAYA'],
        [12, 'ILESH PATEL', 'CRICKET', '2014', 'BARAKATULLAH'],
        [13, 'HAESH JADAV', 'CRICKET', '2014', 'BARAKATULLAH'],
        [14, 'ABHISHEK PANDAYAA', 'CRICKET', '2014', 'BARAKATULLAH'],
        [15, 'HARDIK PRAJAPATI', 'HANDBALL', '2014', 'RTM UNI, NAGPUR'],
        [16, 'KRUTIKA DHUMAL', 'HANDBALL', '2014', 'NAGPUR'],
        [17, 'DIMPLE PANWAR', 'HANDBALL', '2014', 'NAGPUR'],
        [18, 'HIMANI PATEL', 'HANDBALL', '2014', 'NAGPUR'],
        [19, 'HIRAL PRAJAPATI', 'HANDBALL', '2014', 'NAGPUR'],
        [20, 'SHIVAGI ARYA', 'HANDBALL', '2014', 'NAGPUR'],
        [21, 'SAJAN SINGH', 'BASKETBALL', '2014-15', 'BHARTIYA VIDYAPITH'],
        [22, 'PRANAV CHAUDHARY', 'ATHLETIC', '2015', 'RAJIVGANDHI UNI OF HEALTH SCIENCE'],
        [23, 'SAVLI HAPPY', 'KABBADI', '2017', 'H.N.G.U. PATAN'],
        [24, 'GOSWAMI AJAY', 'BOXING', '2017', 'LOVELY PROFESSIONAL UNI. JALANDHAR'],
        [25, 'CHAUHAN JANAKRAJSINH', 'BOXING', '2017', 'LOVELY PROFESSIONAL UNI. JALANDHAR'],
        [26, 'SADABKHAN PATHAN', 'FOOTBALL', '2017', 'BARAKATULLAH UNI, BHOPAL'],
        [27, 'VRUSHTI PATEL', 'HANDBALL', '2016', 'THE IIS UNI. JAIPUR'],
        [28, 'MANALI SOLANKI', 'BASKETBALL', '2016', 'H.N.G.U. PATAN'],
        [29, 'MANALI SOLANKI', 'NETBALL', '2016', 'PANJAB UNI CHANDIGHRAH'],
        [30, 'VRUSHTI PATEL', 'NETBALL', '2016', 'PANJAB UNI CHANDIGHRAH'],
        [31, 'DHRUV PARIKH', 'TABLE TENNIS', '2017', 'GUJARAT UNI. AHMEDABAD'],
        [32, 'DHRUV PARIKH', 'TABLE TENNIS', '2016', 'TIT GROUP OF INSTITUTE'],
        [33, 'JINAL PRAJAPATI', 'CHESS', '2016', 'BARAKATULLAH'],
        [34, 'VRUSHTI PATEL', 'FOOTBALL', '2016', 'SWARNIM GUJARAT SPORT'],
        [35, 'DHRUV PARIKH', 'TABLE TENNIS', '2017-18', 'SOLAPUR MAHARASTRA'],
        [36, 'VRUSHTI PATEL', 'VOLLEYBALL', '2017-18', 'JAIPUR UNI RAJASTHAN'],
        [37, 'DEEPAK SAHARAN', 'VOLLEYBALL', '2017-18', 'JABALPUR MP'],
        [38, 'KAMLESH PORIYA', 'KABBADI', '2017-18', 'JUNJUNU RAJASTHAN'],
        [39, 'PRADIPSINH VAGHELA', 'KABBADI', '2017-18', 'JUNJUNU RAJASTHAN'],
        [40, 'DHRUV PATEL', 'KABBADI', '2018-19', 'KOHLAPUR MAHARASTRA'],
        [41, 'BHOOMIKA VASAVA', 'VOLLEYBALL', '2018-19', 'KOHLAPUR MAHARASTRA'],
        [42, 'VRUSHTI PATEL', 'VOLLEYBALL', '2018-19', 'JAIPUR RAJASTHAN'],
        [43, 'HAESHDEEP PARAMAR', 'SOFT TENNIS', '2018-19', 'JAIPUR RAJASTHAN'],
        [44, 'DEEPAK SAHARAN', 'VOLLEYBALL', '2018-19', 'BHUVNESHWAR ORISSA'],
        [45, 'VIJAY PRAJAPATI', 'KABBADI', '2018-19', 'GANGANAGAR RAJASTHAN'],
        [46, 'TWINKAL PARMAR', 'KABBADI', '2019-20', 'AMRAVATI MAHARASTRA'],
        [47, 'GEETANJALI RAJPUT', 'KABBADI', '2019-20', 'AMRAVATI MAHARASTRA'],
        [48, 'SHACHI PRAJAPATI', 'KABBADI', '2019-20', 'AMRAVATI MAHARASTRA'],
        [49, 'HARSHDEEP PARMAR', 'SOFT TENNIS', '2019-20', 'BHUVNESHWAR ORISSA'],
        [50, 'HARSHDEEP PARMAR', 'TENNIS', '2019-20', 'PUNE MAHARASTRA'],
        [51, 'SACHI PRAJAPATI', 'VOLLEYBALL', '2021-22', 'NASHIK MAHARASTRA'],
        [52, 'ANISHA PATEL', 'VOLLEYBALL', '2021-22', 'NASHIK MAHARASTRA'],
        [53, 'DEVARSH CHAUDHARY', 'CRICKET', '2021-22', 'JUNJUNU RAJASTHAN'],
    ];

    return (
        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='border-b mb-10 md:mt-10'>

                    <section class="text-gray-600 body-font">

                        <h2 className='text-2xl sm:text-3xl font-poppins font-medium tracking-wider text-center md:mt-0 mt-10'>Activities</h2>

                        <div className="flex mt-5 justify-center">
                            <div className="w-30 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>

                        <div class="container px-5 md:py-24 py-15 mx-auto">

                            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10 saturate-100">

                                <img className='w-70' src="./asset/sp1.webp" alt="" />

                                <div class="grow sm:text-left text-center mt-6 sm:mt-0">

                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Sports Facilities</h2>

                                    <p class="leading-relaxed text-base">The Campus has synthetic playgrounds for Volleyball,  Lawn Tennis, Basketball. The campus also has well equipped play ground for Cricket and Football and other games. Indoor games facilities have also been provided. Full-fledged gymnasium facility is also available for students. Exquisite landscaped garden, lake view with pleasant sit outs.</p>

                                </div>

                            </div>

                            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10">

                                <div class="grow sm:text-left text-center mt-6 sm:mt-0">

                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">International Sports Achievments</h2>

                                    <p class="leading-relaxed text-base">
                                        Harshdeepsinh Parmar (Civil Engineering) won bronze medal in men’s team event represented India in the world tournament international soft tennis championship 2022 held at Thailand from 21-28 august 2022.</p>

                                </div>

                                <img className='w-70' src="./asset/sp2.webp" alt="" />

                            </div>

                            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10">

                                <img className='w-70' src="./asset/sp3.webp" alt="" />
                                <div class="grow sm:text-left text-center mt-6 sm:mt-0">

                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">International Sports Achievements</h2>

                                    <p class="leading-relaxed text-base">
                                        Krutika Dhumal (Computer Engineering) played in International Handball in Partial Cup held at Sweden in the year 2013. She was the only player from Gujarat in India Handball team.</p>

                                </div>

                            </div>


                            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10">

                                <div class="grow sm:text-left text-center mt-6 sm:mt-0">

                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">International Sports Achievments</h2>

                                    <p class="leading-relaxed text-base">
                                        Our Students Sachi Prajapati and Anisha Patel 8th Sem computer Engenering Participating all India University Vollyball Tournament held at Nasik, Maharastra on 31st december 2021 by GTU.</p>

                                </div>

                                <img className='w-70' src="./asset/sp4.webp" alt="" />

                            </div>

                            <h2 className='text-2xl sm:text-3xl font-poppins font-medium tracking-wider text-center md:mt-20 mt-20'>All India University Games Participants</h2>

                            <div className="flex mt-5 justify-center">
                                <div className="w-30 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>

                            <p className='font-medium text-center mt-10'>
                                BAPU GUJARAT KNOWLEDGE VILLAGE_SPORT DATA-2011 TO 2022 ALL INDIA UNIVERSITY PLAYERS
                            </p>

                            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10 saturate-100">

                                <div className='w-full px-3 sm:px-6 mb-10 mt-10'>
                                    <div className='mx-auto w-full max-w-6xl'>

                            <div className="w-full overflow-x-auto text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full min-w-180 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="w-[10%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                                SR.NO.
                                                            </p>
                                                        </th>
                                                        <th className="w-[23%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                                NAME
                                                            </p>
                                                        </th>
                                                        <th className="w-[17%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                                GAME
                                                            </p>
                                                        </th>
                                                        <th className="w-[15%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                                            <p className="block text-sm font-normal leading-none text-slate-500">YEAR</p>
                                                        </th>
                                                        <th className="w-[35%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                                            <p className="block text-sm font-normal leading-none text-slate-500">HOST university</p>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {sportParticipants.map(([number, name, game, year, university]) => (
                                                        <tr key={number} className="hover:bg-slate-50">
                                                            {[number, name, game, year, university].map((value, index) => (
                                                                <td key={index} className="p-2 sm:p-4 border-b border-slate-200">
                                                                    <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                                        {value}
                                                                    </p>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </section>

                </div>

                <Footer />

            </div>

        </>
    )
}

export default Sport
