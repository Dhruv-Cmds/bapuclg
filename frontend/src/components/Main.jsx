import React from 'react'
import { HugeiconsIcon } from "@hugeicons/react";
import { GraduationCapIcon } from "@hugeicons/core-free-icons";
import Footer from './Footer'
import Navbar from './Navbar'

function Main() {

  const companies = [
    ["/bapuclg/asset/Abbott.webp", "Abbott"],
    ["/bapuclg/asset/INTAS.webp", "Intas"],
    ["/bapuclg/asset/ZYDUS.webp", "Zydus"],
    ["/bapuclg/asset/Mankind.webp", "Mankind"],
    ["/bapuclg/asset/Torrent.webp", "Torrent Pharma"],
  ];

  const marqueeCompanies = Array.from({ length: 12 }, () => companies).flat();

  return (


    <>

      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

        <Navbar />

        <div className='mt-1'>
          <img className='w-full' src="/bapuclg/asset/banner.webp" alt="" />
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row mt-12 sm:mt-20 mb-12 sm:mb-20 items-stretch'>


          <div className='lg:w-1/2 lg:pr-10 hover:scale-102 transition-all duration-300'>

            <div className='gap-6 sm:gap-10 flex flex-col font-poppins bg-gray-50 p-5 sm:p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 ease'>

              <h3 className='text-xl sm:text-2xl font-medium tracking-widest'>WELCOME TO</h3>

              <h1 className='text-2xl sm:text-3xl font-semibold'>Bapu Gujarat Knowledge Village</h1>

              <p className='font-medium'>
                The Bapu Gujarat Knowledge Village (Bapu GKV) established in 2009 to promote professional education in Gujarat and particularly in and around Ahmedabad-Gandhinagar region. The trust and educational institute under the umbrella of Bapu GKV managed and promoted under the guidance of Chairman Shri.Shankersinh Vaghela Bapu, a popular leader known for his pioneering efforts for social development.
              </p>

            </div>

          </div>

          <div className='lg:w-1/2 mt-8 lg:mt-0 lg:pl-10 lg:border-l border-gray-300 flex justify-center items-center'>

            <iframe className='w-full aspect-video rounded-3xl'
              src="https://www.youtube.com/embed/lkIKLeONKcA"
              title="Bapu Gujarat Knowledge Village video"
              allowFullScreen>
            </iframe>

          </div>

        </div>

        <div className='border-b'>

          <div className='max-w-7xl mx-auto mt-12 sm:mt-20 mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-stretch gap-8'>

            <div className='w-full lg:w-2/3 flex flex-col md:flex-row justify-between items-stretch bg-gray-50 p-5 sm:p-8 lg:p-10 rounded-3xl gap-8'>

              <div>

                <div className='border-l py-4 sm:py-10'>

                  <h3 className='ml-5 text-2xl sm:text-3xl font-semibold font-poppins'>A Word</h3>
                  <div className='ml-5 text-3xl sm:text-5xl font-medium tracking-wide'>
                    From Our <span className='font-semibold text-indigo-500 tracking-wider'>Chairman</span>
                    <div>
                      and Managing <span className='font-semibold text-indigo-500 tracking-wider'>Trustee</span>
                    </div>
                  </div>

                </div>

              </div>

              <div className='md:ml-5 flex flex-col gap-5'>

                <p className='tracking-wide text-xl font-medium'>
                  Welcome to Bapu GKV campus, where educational excellence meets a world of possibilities. Our campus offers a diverse range of programs, providing students with opportunities to specialize in fields of Engineering, Pharmacy, Nursing, Law, Commerce and Science.
                </p>

                <div>

                  <p className='font-semibold text-lg'>
                    Shri Shankersinh L. Vaghela
                  </p>
                  <p>
                    Chairman and Managing Trustee
                  </p>

                </div>

              </div>

            </div>

            <div className='w-full lg:w-1/3 flex justify-center'>
              <img className='w-full max-w-md rounded-3xl object-cover' src="./asset/shankersinh_vaghela.jpg" alt="Shri Shankersinh L. Vaghela" />
            </div>

          </div>

        </div>

        <div className='mt-12 sm:mt-20 mb-12 sm:mb-20 border-b'>

          <div className='flex flex-wrap justify-center items-center gap-2 px-4 text-center'>

            <HugeiconsIcon
              icon={GraduationCapIcon}
              size={48}
              color="gray"
              strokeWidth={1}
            />

            <h2 className='text-2xl sm:text-3xl font-poppins font-medium tracking-wider'>Student Testimonial</h2>

          </div>

          <div className="flex mt-5 justify-center">
            <div className="w-30 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>


          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl overflow-hidden px-5 py-24">
              <div className="flex w-max animate-testimonial-marquee will-change-transform">
                {[...Array(12)].flatMap(() => [
                  {
                    image: '/bapuclg/asset/Ms.-Sneha-Amin-1.png',
                    name: 'Ms. Sneha Amin',
                    course: '3rd Semester B. Pharmacy, Batch 2024',
                    feedback: 'My experience at SVBIP has been very wonderful. It has been one year since I joined the college, and I have learned a lot, not only academically but also in many aspects of career development. Faculty members have been supportive throughout my journey.',
                  },
                  {
                    image: '/bapuclg/asset/Patel-Shreya-Pravinbhai-2023-2024.png',
                    name: 'Patel Shreya Pravinbhai',
                    course: 'Department of MLT, 2023-2024',
                    feedback: 'I feel very fortunate to be a part of the Department of MLT. The well-equipped and efficient laboratories have been a great assistance in my learning. The faculty members have always supported me and helped clarify my doubts throughout my academic journey.',
                  },
                  {
                    image: '/bapuclg/asset/1._Patil-Komal-Parshuram.png',
                    name: 'Patil Komal Parshuram',
                    course: 'Science & Commerce',
                    feedback: 'It has been my immense luck and fortune to be a part of Shankersinh Vaghela Bapu Institute of Science and Commerce, where I have grown and learned so much. The faculty and department have helped shape my future and supported me throughout my journey.',
                  },
                  {
                    image: '/bapuclg/asset/Patel-Jimmy-Amrutbhai-2023-2024.png',
                    name: 'Patel Jimmy Amrutbhai',
                    course: 'Department of MLT, 2023-2024',
                    feedback: 'The Department of MLT has been a great contributor to the development of my personality. I have established leadership, time management, and teamwork skills and have continued to improve these abilities throughout my academic journey.',
                  },
                  {
                    image: '/bapuclg/asset/Monika-Patel.png',
                    name: 'Monika Patel',
                    course: 'SVBIL, className of 2022-2025',
                    feedback: 'My experience at Bapu College has been great and memorable. The mentors help students enhance their academic and interpersonal skills while providing practical training, valuable guidance, and opportunities to grow throughout their educational journey.',
                  },
                  {
                    image: '/bapuclg/asset/Mr.-Madhav-Kataria.png',
                    name: 'Mr. Madhav Kataria',
                    course: '7th Semester B. Pharmacy, Batch 2022',
                    feedback: 'SVBIP played an important role in my academic and personal growth. The faculty and supportive environment helped me gain knowledge, confidence, and practical experience throughout every semester of my academic journey.',
                  },
                ]).map((testimonial, index) => (
                  <div key={`${testimonial.name}-${index}`} className="flex w-[85vw] sm:w-[32vw] lg:w-md shrink-0 flex-col items-center p-4 text-center">
                    <div className="mb-5 mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-800">
                      <img className="h-full w-full object-cover" src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <h2 className="text-lg font-medium">{testimonial.name}</h2>
                    <p className="text-base">{testimonial.course}</p>
                    <p className="mt-4 hidden leading-relaxed text-base sm:block">{testimonial.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>



        <div className='mt-12 sm:mt-20 mb-12 sm:mb-20 border-b'>

          <div className='flex flex-wrap justify-center items-center gap-2 px-4 text-center'>

            <HugeiconsIcon
              icon={GraduationCapIcon}
              size={48}
              color="gray"
              strokeWidth={1}
            />

            <h2 className='text-2xl sm:text-3xl font-poppins font-medium tracking-wider'>College Placement: Our Associates</h2>

          </div>

          <div className="flex mt-5 justify-center">
            <div className="w-30 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>


          <div className="mt-20 w-full overflow-hidden mb-20">
            <div className="flex w-max items-center animate-[placement-marquee_20s_linear_infinite]">
              {marqueeCompanies.map(([src, alt], index) => (
                <div
                  key={`${alt}-${index}`}
                  className="flex h-24 sm:h-32 w-40 sm:w-60 shrink-0 items-center justify-center px-4 sm:px-6 hover:scale-110 duration-300 transition-all"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="max-h-24 max-w-full object-contain"
                  />
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

export default Main
