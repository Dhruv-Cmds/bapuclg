import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'About', 'Admission', 'Programs', 'Campus', 'Career', 'Contact Us']

  return (
    <>
      <div className='relative mt-1 flex min-h-16 items-center justify-between border-b px-4 sm:px-6 lg:px-8'>

        <div className='w-40 sm:w-56 lg:w-70 mb-1'>
          <img className='w-full' src="./asset/BapuCollage.webp" alt="Bapu Gujarat Knowledge Village" />
        </div>

        <button
          className='rounded-md border px-3 py-2 text-sm md:hidden'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle navigation menu'
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`${menuOpen ? 'block' : 'hidden'} absolute right-4 top-full z-10 w-[calc(100%-2rem)] rounded-xl border bg-white p-3 shadow-lg md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <ul className="flex flex-col items-stretch gap-1 text-base font-light font-poppins md:flex-row md:items-center md:gap-1 lg:gap-2">
            {links.map((link) => (
              <li key={link} className="cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                {link}
              </li>
            ))}
            <li className="cursor-pointer rounded-full border p-2 text-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
              ENQUIRE NOW
            </li>
          </ul>
        </nav>

      </div>

    </>
  )
}

export default Navbar
