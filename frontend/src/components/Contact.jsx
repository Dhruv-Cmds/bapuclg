import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {

  useEffect(() => {
    document.title = "Contact | BGKV"
  })

    return (

        <>
            <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

                <Navbar />

                <div className="flex flex-col items-center text-center justify-center mt-10 space-y-2 border-b mb-10">

                    <h2 className="font-semibold title-font mt-4 text-gray-900 text-4xl tracking-widest">Contact Us
                    </h2>

                    <div className="w-30 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>


                    <div className='mx-5 rounded-3xl  my-10 bg-slate-100 p-5 flex flex-col space-y-10 justify-center items-center text-2xl tracking-wider'>

                        <p>Bapu Gujarat Knowledge Village</p>

                        <p>Gandhinagar-Mansa Road, PO. Vasan,</p>

                        <p>Gandhinagar District,</p>

                        <p>Gujarat, Pin 382 650</p>

                        <div className='flex flex-col space-y-3'>
                            <span>Phone:</span> 
                            <span>+91 9426679703</span>
                            <span>+91 07923976170</span> 
                            <span>+91 07923976169</span>
                        </div>

                        <p><span>Email:</span> <a className='text-blue-600' href="mailto:director@bapugkv.ac.in">info@bapugkv.ac.in</a>
                        </p>

                        <p><span>Website:</span> <a className='text-blue-600' href="http://www.bapugkv.ac.in">www.bapugkv.ac.in</a></p>

                    </div>

                </div>
                <Footer />

            </div>
        </>
    )
}

export default Contact
