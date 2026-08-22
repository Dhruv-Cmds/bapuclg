import React from 'react'

function Footer() {
  return (
    <>
      <footer class="text-gray-600 font-poppins ">

        <div class="container px-5 mx-auto md:flex flex-row items-center hidden">

          <img className='w-50 mb-30' src="./asset/footer.webp" alt="" />

          <div class="flex-grow flex justify-between flex-wrap pl-20">

            <div class="w-1/6 px-4">

              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 border-b text-center">ACADEMIES:</h2>

              <nav class="list-none mb-10">

                <li>
                  <a class="text-gray-600 hover:text-gray-800">FACILITIES</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">LIBRARY</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">OLD WEBSITE</a>
                </li>

              </nav>

            </div>

            <div class="w-1/6  px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 border-b text-center">QUICK LINKS:</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">CAREER</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">PLACEMENT</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">STUDENT ACTIVITY</a>
                </li>
              </nav>
            </div>

            <div class="w-1/4  px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 border-b text-center">ADDRESS:</h2>
              <nav class="list-none mb-10">
                <h3>Bapu Gujarat Knowledge Village</h3>
                <p>Gandhinagar-Mansa Road,</p>
                <p>PO. Vasan, Gandhinagar District,</p>
                <p>Gujarat, Pin 382 650</p>
                <p>Phone: +91 9426679703,</p>
                <p>+91 07923976170</p>
                <p>Email: info@bapugkv.ac.in</p>
              </nav>
            </div>
          </div>

        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex items-center flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2026 Shankersinh Vaghela Bapu Charitable trust (SVBCT) —
            </p>
            <a href="https://dhruvcore.com" rel="noopener noreferrer" class="  ml-1" target="_blank"> <span className='text-blue-600 font-semibold text-lg hover:text-cyan-500'>@Dhruv</span></a>

            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://www.facebook.com/bgkvofficial?rdid=0QY8QhNYPS2LjZtJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DbgYfRNbA%2F#" target='_blank' class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>

              </a>
              <a href='https://www.youtube.com/@BapuGujaratKnowledgeVillage' target='_blank' class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.998 2.998 0 0 0-2.11-2.12C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.566a2.998 2.998 0 0 0-2.11 2.12C0 8.057 0 12 0 12s0 3.943.502 5.814a2.998 2.998 0 0 0 2.11 2.12C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.566a2.998 2.998 0 0 0 2.11-2.12C24 15.943 24 12 24 12s0-3.943-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>

              </a>
              <a href='https://www.instagram.com/bapugkv_official' target='_blank' class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href='https://www.linkedin.com/company/bapu-gkv/?viewAsMember=true' target='_blank' class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
