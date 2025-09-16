export default function Footer() {
  return (
    <footer className="dark:bg-neutral-900 bg-white pb-6 sm:pb-5 px-4 sm:px-6">
      <div className="border-t dark:border-neutral-700 border-gray-200 pt-5 mx-auto">
        {/* Gallery section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="dark:text-white text-base sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Gallery</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4">
            {/* Placeholder gallery items */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating buttons */}
        <div className="flex fixed gap-2 bottom-5 right-10">
          <button className="flex items-center cursor-pointer dark:bg-gray-600 dark:shadow-gray-700 dark:text-white dark:hover:text-gray-300 bg-gray-200 shadow-md shadow-gray-400 transition-all rounded-lg p-1 text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium">
            <svg className="size-4 mr-1" fill="currentColor" stroke="currentColor" viewBox="0 0 46 46">
              <path d="M44,5H12a2,2,0,0,0-2,2V17H4a2,2,0,0,0-2,2V37a6,6,0,0,0,6,6H40a6,6,0,0,0,6-6V7A2,2,0,0,0,44,5ZM10,37a2,2,0,0,1-4,0V21h4Zm8-21.2A1.8,1.8,0,0,1,19.8,14h4.4A1.8,1.8,0,0,1,26,15.8v8.4A1.8,1.8,0,0,1,24.2,26H19.8A1.8,1.8,0,0,1,18,24.2ZM37.4,33.4A2,2,0,0,1,36,34H20a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2H36a2,2,0,0,1,2,2A2,2,0,0,1,37.4,33.4Zm0-8A2,2,0,0,1,36,26H32a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2h4a2,2,0,0,1,2,2A2,2,0,0,1,37.4,25.4Zm0-8A2,2,0,0,1,36,18H32a2,2,0,0,1-2-2,2.1,2.1,0,0,1,2-2h4a2,2,0,0,1,2,2A2,2,0,0,1,37.4,17.4Z" />
            </svg>
            <span>Legal</span>
          </button>
          <button className="flex items-center cursor-pointer dark:bg-gray-600 dark:shadow-gray-700 dark:text-white dark:hover:text-gray-300 bg-gray-200 shadow-md shadow-gray-400 transition-all rounded-lg p-1 text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium">
            <svg className="size-4 mr-1" fill="currentColor" stroke="currentColor" viewBox="0 2 16 16">
              <path d="M15.982 7.895H1.076V6.867A1.112 1.112 0 0 1 2.184 5.76h12.69a1.112 1.112 0 0 1 1.108 1.108zM1.076 9.003h14.906v5.109a1.112 1.112 0 0 1-1.108 1.108H2.184a1.112 1.112 0 0 1-1.108-1.108zm2.24 4.064h4.868v-1.109H3.316z" />
            </svg>
            <span>Pricing</span>
          </button>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t dark:border-neutral-700 border-gray-200">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2 mb-3 sm:mb-0">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-gray-900 font-semibold text-sm sm:text-base">Krea AI</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center space-x-4 sm:space-x-6 mr-auto sm:mr-45">
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-500 text-xs sm:text-sm">
              <span>curated by</span>
              <div className="w-12 sm:w-16 h-3 sm:h-4 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">Mobbin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
