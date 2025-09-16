'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  // Use useEffect to set the initial theme
  useEffect(() => {
    if (!theme || theme === 'system') {
      setTheme('light')
    }
  }, [theme, setTheme])

  //Check if its dark theme
  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])

  // Theme toggle function
  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="bg-white px-4 sm:px-6 py-2 dark:bg-neutral-900">
      <div className="flex items-center justify-between w-full">
        {/* Left side - Logo and User */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg cursor-pointer">K</span>
          </div>
          <div className="text-xs text-gray-500">
            Theme: {theme}
          </div>
          <div className="hidden sm:flex items-center space-x-1 pl-7">
            <div className="flex items-center justify-center size-8 rounded-full bg-gray-200 cursor-pointer">
              <svg className="size-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-gray-500 font-medium px-1 cursor-pointer">benevolentnimblebat</span>
            <svg className="size-4 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>


        {/* Center - Navigation Icons */}
        <nav className="hidden dark:bg-neutral-800 lg:flex items-center space-x-2 xl:space-x-4 bg-gray-100 p-2 rounded-2xl">
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer group">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className='size-5' fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.99999 1C8.99999 0.447715 8.55228 0 7.99999 0C7.44771 0 6.99999 0.447715 6.99999 1V1.5C6.99999 2.05228 7.44771 2.5 7.99999 2.5C8.55228 2.5 8.99999 2.05228 8.99999 1.5V1ZM3.7071 2.29289C3.31657 1.90237 2.68341 1.90237 2.29288 2.29289C1.90236 2.68342 1.90236 3.31658 2.29288 3.70711L3.29288 4.70711C3.68341 5.09763 4.31657 5.09763 4.7071 4.70711C5.09762 4.31658 5.09762 3.68342 4.7071 3.29289L3.7071 2.29289ZM13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L11.2929 3.29289C10.9024 3.68342 10.9024 4.31658 11.2929 4.70711C11.6834 5.09763 12.3166 5.09763 12.7071 4.70711L13.7071 3.70711ZM1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H1.5C2.05228 9 2.5 8.55228 2.5 8C2.5 7.44772 2.05228 7 1.5 7H1ZM15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9H15.5C16.0523 9 16.5 8.55228 16.5 8C16.5 7.44772 16.0523 7 15.5 7H15ZM4.70711 12.7071C5.09763 12.3166 5.09763 11.6834 4.70711 11.2929C4.31658 10.9024 3.68342 10.9024 3.29289 11.2929L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L4.70711 12.7071ZM9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15V15.5C7 16.0523 7.44772 16.5 8 16.5C8.55228 16.5 9 16.0523 9 15.5V15ZM9.41421 4.99998C8.63316 4.21894 7.36683 4.21894 6.58579 4.99998L5 6.58577C4.21895 7.36682 4.21895 8.63315 5 9.4142L7.29289 11.7071L18.5858 23C19.3668 23.781 20.6332 23.781 21.4142 23L23 21.4142C23.781 20.6331 23.781 19.3668 23 18.5858L11.7071 7.29288L9.41421 4.99998ZM6.41421 7.99998L8 6.4142L9.58579 7.99998L8 9.58577L6.41421 7.99998ZM9.41421 11L11 9.4142L21.5858 20L20 21.5858L9.41421 11Z" />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className="size-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4.323 20.346l.19-.443A4.1 4.1 0 0 1 2 16.1c0-2.42 1.895-4.116 3.727-5.756a10.835 10.835 0 0 0 3.21-3.838 7.746 7.746 0 0 0 3.996-3.256l-.866-.5a6.673 6.673 0 0 1-2.95 2.604 2.496 2.496 0 0 0-.433-1.291A2.56 2.56 0 0 0 6.5 3C4.701 3 3 4.336 3 5.75a.996.996 0 0 0 .299.719A3.787 3.787 0 0 0 5.849 7H6a9.083 9.083 0 0 0 1.654-.147A13.965 13.965 0 0 1 5.06 9.599C3.157 11.303 1 13.233 1 16.1a5.075 5.075 0 0 0 3.224 4.772 1.357 1.357 0 0 1 .099-.525zM6 6h-.155c-1.119.006-1.74-.08-1.845-.25C4 4.962 5.154 4 6.5 4a1.589 1.589 0 0 1 1.362.632 1.56 1.56 0 0 1 .246 1.09A7.796 7.796 0 0 1 6 6zm15.536-2.48a.965.965 0 0 0-1.385-.03L6.998 16.644 5.242 20.74a.371.371 0 0 0 .488.487l4.096-1.756L22.979 6.32a.965.965 0 0 0-.03-1.385zM6.78 19.688l.962-2.24 1.28 1.28zm3.015-1.6l-1.413-1.414L18.679 6.376l1.414 1.414zM21.952 5.932L20.8 7.083l-1.414-1.414L20.555 4.5a.42.42 0 0 1 .599.007l.804.838a.42.42 0 0 1-.006.587z" />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 30 30">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.8,11.8C13.8,11.3,13,10.2,13,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.2-0.7,2.3-1.8,2.7" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="st0" d="M7,18.4c2.3,2.2,5.5,3.6,9,3.6s6.7-1.4,9-3.6" />
              <polyline className="st0" points="8,29 16,9.3 24,29 " strokeWidth={2} />
            </svg>
          </button>
          <button className="dark:text-white dark:hover:text-gray-700 text-gray-700 py-2 px-3 hover:bg-white hover:shadow-md rounded-xl transition-all cursor-pointer">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" />
            </svg>
          </button>
        </nav>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="hidden sm:flex dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-900 dark:hover:text-gray-400 items-center text-gray-700 hover:text-gray-900 hover:shadow-md font-medium px-2 transition-all cursor-pointer bg-gray-100 p-1 rounded-xl">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 26 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10V6C4 4.89543 4.89543 4 6 4H12M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V15M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8481 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5864L15.7901 12.4679C16.4651 11.9279 17.4053 11.8855 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5301L20 14.1901M20 14.1901V6C20 4.89543 19.1046 4 18 4H17M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" />
            </svg>
            <span>Gallery</span>
          </button>
          <button className="hidden sm:flex dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-900 dark:hover:text-gray-400 items-center text-gray-700 hover:text-gray-900 hover:shadow-md font-medium px-2 transition-all cursor-pointer bg-gray-100 p-1 rounded-xl">
            <svg className="size-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 18">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15.668 6.017c-0.957-3.557-3.863-6.017-7.168-6.017-3.295 0-6.212 2.464-7.168 6.017-0.747 0.082-1.332 0.712-1.332 1.483v4c0 0.625 0.382 1.16 0.924 1.385 0.194 1.747 1.663 3.115 3.461 3.115h2.707c0.207 0.581 0.757 1 1.408 1h3c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-3c-0.651 0-1.201 0.419-1.408 1h-2.707c-1.208 0-2.217-0.86-2.449-2h1.064v-1h1v-5h-1v-1h-0.606c0.913-2.961 3.352-5 6.106-5 2.762 0 5.193 2.037 6.106 5h-0.606v1h-1v5h1v1h1.506c0.824 0 1.494-0.673 1.494-1.5v-4c0-0.771-0.585-1.401-1.332-1.483zM8.5 15h3c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-3c-0.275 0-0.5-0.224-0.5-0.5s0.225-0.5 0.5-0.5zM2 12h-0.506c-0.272 0-0.494-0.224-0.494-0.5v-4c0-0.276 0.222-0.5 0.494-0.5h0.506v5zM16 11.5c0 0.276-0.222 0.5-0.494 0.5h-0.506v-5h0.506c0.272 0 0.494 0.224 0.494 0.5v4z" />
            </svg>
            <span>Support</span>
          </button>
          <button className="p-2 dark:hover:bg-neutral-800 hover:bg-gray-100 hover:shadow-md rounded-lg transition-all cursor-pointer">
            <svg className="size-5 dark:text-white text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" />
            </svg>
          </button>

          <button
            onClick={handleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:shadow-md rounded-lg transition-all cursor-pointer"
          >
            {isDark ? (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <button className="flex items-center justify-center p-2 bg-gray-200 hover:bg-gray-300 hover:shadow-md size-10 rounded-full transition-all cursor-pointer">
            <svg className="size-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header >
  )
}
