export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Gallery section */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Gallery</h3>
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

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2 mb-3 sm:mb-0">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-gray-900 font-semibold text-sm sm:text-base">Krea AI</span>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium">
              Legal
            </button>
            <button className="text-gray-600 hover:text-gray-900 text-xs sm:text-sm font-medium">
              Pricing
            </button>
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
