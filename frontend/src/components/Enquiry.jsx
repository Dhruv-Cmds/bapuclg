import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { UserStar } from '@hugeicons/core-free-icons'

function Enquiry() {

  useEffect(() => {
    document.title = "Enquiry | BGKV"
  }, [])

  const [a] = useState(Math.floor(Math.random() * 9));
  const [b] = useState(Math.floor(Math.random() * 9));

  const [answer, setAnswer] = useState("");

  const c = a + b;

  function checkAnswer() {

    if (Number(answer) === c) {
      alert("Correct!");
    }

    else {
      alert("Wrong answer");
    }

  }

  return (

    <>

      <div className="min-h-screen flex flex-col scroll-smooth">

        <Navbar />

        <div className='bg-mauve-200 border-b mb-10 py-10 flex-1'>

          <div className='mx-2 md:mx-auto md:w-xl md:flex md:justify-between items-center bg-gray-300 rounded-2xl p-10 md:flex-col'>

            <div>

              <div className='p-2 m-1 mb-6 bg-white rounded-3xl'>
                <input className='w-full outline-none' type="text" placeholder='Name' id='name' />
              </div>

              <div className='md:flex space-x-10'>
                <input type="email" placeholder='Email Address' id="email" className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full' />
                <input type="number" placeholder='Mobile Number' id="number" className='outline-none appearance-none bg-white rounded-3xl p-2 m-1 mb-6 w-full' />
              </div>

              <div className='md:flex space-x-10'>
                <input type="text" placeholder='City' id="city" className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full' />
                <input type="text" placeholder='State' id="state" className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full' />
              </div>

              <div>

                <select className='outline-none bg-white text-[#858585] rounded-3xl p-2 m-1 mb-6 w-full' name="institute">
                  <option value="">Institute Applying For</option>
                  <option value="Technology">Technology</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Science & Commerce">Science & Commerce</option>
                  <option value="Law">Law</option>
                  <option value="Nursing">Nursing</option>
                </select>

              </div>

              <div>
                <textarea className='w-full outline-none bg-white rounded-3xl p-2 m-1 mb-6' id="" placeholder='Type your enquiry here'></textarea>
              </div>

            </div>

            <div className='flex justify-center'>

              <div className='flex justify-center items-center space-x-1.5'>
                <span>{a}</span>
                <span>+</span>
                <span>{b}</span>
                <span>=</span>

                <input value={answer} onChange={(e) => setAnswer(e.target.value)} type="text" className='w-15 h-15 bg-white text-center outline-none rounded-2xl' />

                <button onClick={checkAnswer} className='btn border px-3 py-2.5 rounded-2xl bg-violet-100 font-medium  font-poppins'>Submit</button>

              </div>



            </div>

          </div>

        </div>

        <Footer />

      </div >

    </>
  )
}

export default Enquiry
