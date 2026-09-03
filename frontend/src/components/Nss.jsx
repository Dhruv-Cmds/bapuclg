import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Nss = () => {

  useEffect(() => {
    document.title = "Nss Unit | BGKV"
  }, [])

  const photos = [
    {
      src: "./asset/n2.webp1",
      text: 'A Report on “Old Age Home Visit” 09/01/2026',
    },
    {
      src: "./asset/n3.webp1",
      text: '“AIDS Prevention & Awareness” 01/12/24',
    },
    {
      src: "./asset/n4.webp1",
      text: 'A Report on “Temple Cleaning” 21/01/2024',
    },
    {
      src: "./asset/n5.webp1",
      text: 'A Report on “Vibrant@2024” 11/01/2024',
    },
    {
      src: "./asset/n6.webp1",
      text: 'A Report on “Run for Unity” 30/10/2023',
    },
    {
      src: "./asset/n7.webp1",
      text: 'A Report on “Science City Visit” 12/09/2023',
    },
    {
      src: "./asset/n8.webp1",
      text: 'A Report on “Tree Plantation” 23/08/2023',
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col scroll-smooth font-poppins">

        <Navbar />

        <div className='border-b mb-10 mt-10'>

          <div className='container mx-auto'>

            <div className='flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:gap-20'>

              <img className='w-500 md:max-w-max rounded-2xl px-2' src="./asset/n1.webp1" alt="" />

              <div>

                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                  <h2 className='text-2xl tracking-wider font-semibold'>Nss Unit</h2>

                </div>

                <div className='bg-gray-50 mt-10 p-5 rounded-3xl'>

                  <p className='mt-5 text-lg'>The National Service Scheme is primarily stands for channelizing the students youth for building the nation. The youth in all ages has been in the vanguard of progress and social change, thirst for freedom, impatience for quicker pace of progress and a passion for innovation, coupled with idealism and creative fervor, saw the youth in the forefront of the freedom struggle in our own land. If our youth was inspired by the call of the Father of the Nation in the first half of this century, the youth of today faces the challenge of economic development and technological progress with social justice.</p>

                  <p className='mt-5 text-lg'>The scheme now extends to all the states and universities in the country. Students, teachers, parents, guardians, persons in authority in government, universities and colleges and the people in general now realize the need and significance of NSS. It has aroused among the students and youth an awareness of the realities of life, a better understanding and appreciation of the problems of the people. NSS is, thus a concrete attempt in making education relevant to the needs of the society.</p>

                </div>

              </div>

            </div>

            <div className='grid md:grid-cols-3 mt-15 mb-10 gap-5 grid-cols-1 items-center'>

              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="md:bg-white md:pt-0 md:mx-0 rounded-2xl bg-blue-100 pt-2 mx-2"
                >
                  <div className="md:w-120 mx-2 flex flex-col md:gap-0 gap-2 items-center">
                    <img
                      className="w-full h-full object-contain"
                      src={photo.src}
                      alt=""
                    />

                    <p>{photo.text}</p>
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

export default Nss
