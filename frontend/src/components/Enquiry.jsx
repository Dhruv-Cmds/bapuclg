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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    state: "",
    institute: "",
    question: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  async function checkAnswer() {

    if (Number(answer) !== c) {
      alert("Wrong answer");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        number: "",
        city: "",
        state: "",
        institute: "",
        question: ""
      });

      setAnswer("");

    } catch (error) {
      console.log(error);
      alert("Failed to submit enquiry");
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

                <input className='w-full outline-none'
                  name="name"
                  type="text"
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className='md:flex space-x-10'>

                <input
                  name="email"
                  type="email"
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full' />

                <input
                  name="number"
                  type="number"
                  placeholder='Mobile Number'
                  value={formData.number}
                  onChange={handleChange}
                  className='outline-none appearance-none bg-white rounded-3xl p-2 m-1 mb-6 w-full'
                />

              </div>

              <div className='md:flex space-x-10'>
                <input
                  name="city"
                  type="text"
                  placeholder='City'
                  value={formData.city}
                  onChange={handleChange}
                  className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full'
                />

                <input
                  name="state"
                  type="text"
                  placeholder='State'
                  value={formData.state}
                  onChange={handleChange}
                  className='outline-none bg-white rounded-3xl p-2 m-1 mb-6 w-full'
                />

              </div>

              <div>

                <select className='outline-none bg-white text-[#858585] rounded-3xl p-2 m-1 mb-6 w-full'
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}>

                  <option value="">Institute Applying For</option>
                  <option value="Technology">Technology</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Science & Commerce">Science & Commerce</option>
                  <option value="Law">Law</option>
                  <option value="Nursing">Nursing</option>

                </select>

              </div>

              <div>

                <textarea className='w-full outline-none bg-white rounded-3xl p-2 m-1 mb-6'
                  name="question"
                  placeholder='Type your enquiry here'
                  value={formData.question}
                  onChange={handleChange}>

                </textarea>
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
