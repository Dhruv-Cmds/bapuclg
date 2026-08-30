import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import { useNavigate } from "react-router-dom";

const Admission = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Admission | BGKV"
    }, [])

    return (
        <>

            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className='flex flex-col items-center mb-10'>

                    <h2 className="font-semibold title-font mt-4 text-gray-900 text-4xl tracking-widest">Admission Intake
                    </h2>

                    <div className="w-30 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                </div>


                {/* Table 1 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Technology</p>
                            <p>(UG/Degree)</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme UG/Degree
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                ACPC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                COMPUTER ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                INFORMATION TECHNOLOGY
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                CIVIL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                30
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                MECHENICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                30
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                ELECTRICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                30
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                ELECTRONICS & COMMUNICATION ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                30
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                120
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                120
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                240
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Table 2 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Technology</p>
                            <p>(PG/Masters)</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme PG/Masters
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                ACPC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                ELECTRICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                24
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                MECHENICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                24
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                ELECTRONICS & COMMUNICATION ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                24
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                COMPUTER ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block text-sm text-slate-800">
                                                12
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                24
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                48
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                48
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                96
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Table 3 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Diploma Studies</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                ACPDC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                CIVIL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                MECHENICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                ELECTRICAL ENGINEERING
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                135
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                180
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                {/* Table 4 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Pharmacy</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                ACPC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                B.Pharm
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                M.Pharm
                                            </p>
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                (Pharmaceutics)
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                8
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                7
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                15
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                M.Pharm
                                            </p>
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                (Quality  Assurance)
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                8
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                7
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                15
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                61
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                29
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                90
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>




                {/* Table 5 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Science & Commerce</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                GUAC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                B. Com.
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                130
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                130
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                B. Com.
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                150
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                150
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                280
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                280
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Table 6 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Nursing</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                ACPMC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                Auxiliary Nurse Midwifery(ANM)
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                20
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                20
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                B. Sc. Nursing
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                45
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                60
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                65
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                15
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                80
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                {/* Table 7 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Law (LLB)</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                GUAC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                3 Years LLB Course
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                90
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                120
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                90
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                30
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                120
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Table 8 */}
                <div className='w-full px-3 sm:px-6 mb-10'>
                    <div className='mx-auto w-full max-w-6xl'>
                        <div className='mb-3 text-lg font-semibold text-gray-800'>
                            <p>Institute of Law (LLB)</p>
                        </div>

                        <div className="w-full overflow-hidden text-gray-700 bg-white shadow-md rounded-lg">
                            <table className="w-full table-fixed text-left">
                                <thead>
                                    <tr>
                                        <th className="w-[40%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Programme
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                GUAC
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">
                                                Management Quota
                                            </p>
                                        </th>
                                        <th className="w-[20%] p-2 sm:p-4 border-b border-slate-300 bg-slate-50">
                                            <p className="block text-sm font-normal leading-none text-slate-500">Total Seats</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                Medical Laboratory Technologist (MLT)
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                40
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <p className="block wrap-break-words text-xs sm:text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-black">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                40
                                            </a>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-slate-50">
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                Total Seats
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                40
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block text-sm text-slate-800">
                                                N/A
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block text-sm font-semibold text-slate-800">
                                                40
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center text-center justify-center mt-10 space-y-2 border-b mb-10">

                    <h2 className="font-semibold title-font mt-4 text-gray-900 text-4xl tracking-widest">Useful Link
                    </h2>

                    <div className="w-30 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>


                    <div className='mx-5 rounded-3xl  my-10 bg-slate-100 p-5 flex flex-col space-y-10 justify-center items-center text-2xl tracking-wider'>

                        <p><span>AICTE Website:</span> <a className='text-blue-600' href="https://www.aicte-india.org">Click Here</a></p>

                        <p><span>GTU Website:</span> <a className='text-blue-600' href="https://www.gtu.ac.in">Click Here</a></p>

                        <div><span>ACPC websites:</span>
                            <p></p>
                            <a className='text-blue-600 mr-2 ml-1' href="https://gujacpc.admissions.nic.in">Link 1</a>
                            <span className='border-r'></span>
                            <a className='text-blue-600 ml-2' href="https://acpc.gujarat.gov.in">Link 2</a>
                        </div>

                        <p><span>ACPC website for Nursing:</span> <a className='text-blue-600' href="http://www.medadmgujarat.org/">Click Here</a></p>

                    </div>

                    <p>Want to Apply For Admission ? <a className='text-blue-600' onClick={() => navigate("/enquiry")}>Click Here</a></p>

                    <p>Check the Management Quota admission notification, eligibility, and important dates.<a className='text-blue-600' href="https://bapugkv.ac.in/wp-content/uploads/2023/07/MQ-Notification.pdf" target='_blank' >Click Here</a></p>

                </div>

                <Footer />

            </div>

        </>
    )
}

export default Admission
