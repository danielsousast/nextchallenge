export default function GenerateSection() {
  const tools = [
    {
      id: 1,
      name: "Image",
      tag: "New",
      description: "Generate images with custom styles in Flux and Ideogram.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-blue-500"
    },
    {
      id: 2,
      name: "Edit",
      tag: "New",
      description: "Add objects, change style, or expand photos and generations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "text-green-500"
    },
    {
      id: 3,
      name: "Video",
      description: "Generate videos with Halluo, Pika, Runway Luma, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-purple-500"
    },
    {
      id: 4,
      name: "Video Lipsync",
      tag: "New",
      description: "Lip sync any video to any audio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "text-red-500"
    },
    {
      id: 5,
      name: "Realtime",
      description: "Realtime AI rendering on a canvas. Instant feedback loops.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-yellow-500"
    },
    {
      id: 6,
      name: "Motion Transfer",
      tag: "New",
      description: "Transfer motion to images and animate characters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-indigo-500"
    },
    {
      id: 7,
      name: "Enhancer",
      tag: "New",
      description: "Upscale and enhance images and videos up to 22K.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      ),
      color: "text-pink-500"
    },
    {
      id: 8,
      name: "Train",
      description: "Teach Krea to replicate your style, products, or characters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-orange-500"
    }
  ]

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Generate</h2>
          <button className="text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base">
            Show all
          </button>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group border border-gray-100"
            >
              {/* Icon and tag */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`${tool.color} p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                  {tool.icon}
                </div>
                {tool.tag && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {tool.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Button */}
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors group-hover:bg-gray-300 text-sm">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
