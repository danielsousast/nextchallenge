export default function GenerateSection() {
  const tools = [
    {
      id: 1,
      name: "Image",
      tag: "New",
      description: "Generate images with custom styles in Flux and Ideogram.",
      icon: (
        <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-linear-to-t from-gray-200 via-gray-30000 to-cyan-950"
    },
    {
      id: 2,
      name: "Video",
      description: "Generate videos with Halluo, Pika, Runway Luma, and more.",
      icon: (
        <svg className="size-9" fill="white" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-yellow-500"
    },
    {
      id: 3,
      name: "Realtime",
      description: "Realtime AI rendering on a canvas. Instant feedback loops.",
      icon: (
        <svg className="size-9" fill="white" stroke="white" viewBox="0 0 24 24">
          <path d="M4.323 20.346l.19-.443A4.1 4.1 0 0 1 2 16.1c0-2.42 1.895-4.116 3.727-5.756a10.835 10.835 0 0 0 3.21-3.838 7.746 7.746 0 0 0 3.996-3.256l-.866-.5a6.673 6.673 0 0 1-2.95 2.604 2.496 2.496 0 0 0-.433-1.291A2.56 2.56 0 0 0 6.5 3C4.701 3 3 4.336 3 5.75a.996.996 0 0 0 .299.719A3.787 3.787 0 0 0 5.849 7H6a9.083 9.083 0 0 0 1.654-.147A13.965 13.965 0 0 1 5.06 9.599C3.157 11.303 1 13.233 1 16.1a5.075 5.075 0 0 0 3.224 4.772 1.357 1.357 0 0 1 .099-.525zM6 6h-.155c-1.119.006-1.74-.08-1.845-.25C4 4.962 5.154 4 6.5 4a1.589 1.589 0 0 1 1.362.632 1.56 1.56 0 0 1 .246 1.09A7.796 7.796 0 0 1 6 6zm15.536-2.48a.965.965 0 0 0-1.385-.03L6.998 16.644 5.242 20.74a.371.371 0 0 0 .488.487l4.096-1.756L22.979 6.32a.965.965 0 0 0-.03-1.385zM6.78 19.688l.962-2.24 1.28 1.28zm3.015-1.6l-1.413-1.414L18.679 6.376l1.414 1.414zM21.952 5.932L20.8 7.083l-1.414-1.414L20.555 4.5a.42.42 0 0 1 .599.007l.804.838a.42.42 0 0 1-.006.587z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-linear-to-t from-gray-200 via-cyan-400 to-sky-600"
    },
    {
      id: 4,
      name: "Enhancer",
      tag: "New",
      description: "Upscale and enhance images and videos up to 22K.",
      icon: (
        <svg className="size-9" fill="white" viewBox="0 0 24 24">
          <path d="M8.99999 1C8.99999 0.447715 8.55228 0 7.99999 0C7.44771 0 6.99999 0.447715 6.99999 1V1.5C6.99999 2.05228 7.44771 2.5 7.99999 2.5C8.55228 2.5 8.99999 2.05228 8.99999 1.5V1ZM3.7071 2.29289C3.31657 1.90237 2.68341 1.90237 2.29288 2.29289C1.90236 2.68342 1.90236 3.31658 2.29288 3.70711L3.29288 4.70711C3.68341 5.09763 4.31657 5.09763 4.7071 4.70711C5.09762 4.31658 5.09762 3.68342 4.7071 3.29289L3.7071 2.29289ZM13.7071 3.70711C14.0976 3.31658 14.0976 2.68342 13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289L11.2929 3.29289C10.9024 3.68342 10.9024 4.31658 11.2929 4.70711C11.6834 5.09763 12.3166 5.09763 12.7071 4.70711L13.7071 3.70711ZM1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H1.5C2.05228 9 2.5 8.55228 2.5 8C2.5 7.44772 2.05228 7 1.5 7H1ZM15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9H15.5C16.0523 9 16.5 8.55228 16.5 8C16.5 7.44772 16.0523 7 15.5 7H15ZM4.70711 12.7071C5.09763 12.3166 5.09763 11.6834 4.70711 11.2929C4.31658 10.9024 3.68342 10.9024 3.29289 11.2929L2.29289 12.2929C1.90237 12.6834 1.90237 13.3166 2.29289 13.7071C2.68342 14.0976 3.31658 14.0976 3.70711 13.7071L4.70711 12.7071ZM9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15V15.5C7 16.0523 7.44772 16.5 8 16.5C8.55228 16.5 9 16.0523 9 15.5V15ZM9.41421 4.99998C8.63316 4.21894 7.36683 4.21894 6.58579 4.99998L5 6.58577C4.21895 7.36682 4.21895 8.63315 5 9.4142L7.29289 11.7071L18.5858 23C19.3668 23.781 20.6332 23.781 21.4142 23L23 21.4142C23.781 20.6331 23.781 19.3668 23 18.5858L11.7071 7.29288L9.41421 4.99998ZM6.41421 7.99998L8 6.4142L9.58579 7.99998L8 9.58577L6.41421 7.99998ZM9.41421 11L11 9.4142L21.5858 20L20 21.5858L9.41421 11Z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-linear-to-t from-gray-400 via-gray-50000 to-gray-950"
    },
    {
      id: 5,
      name: "Edit",
      tag: "New",
      description: "Add objects, change style, or expand photos and generations.",
      icon: (
        <svg className="size-9" fill="none" stroke="white" viewBox="0 0 33 33">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.8,11.8C13.8,11.3,13,10.2,13,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.2-0.7,2.3-1.8,2.7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="st0" d="M7,18.4c2.3,2.2,5.5,3.6,9,3.6s6.7-1.4,9-3.6" />
          <polyline className="st0" points="8,29 16,9.3 24,29 " strokeWidth={2} />
        </svg>
      ),
      color: "text-white",
      background: "bg-linear-to-t from-gray-200 via-purple-900 to-indigo-950"
    },
    {
      id: 6,
      name: "Video Lipsync",
      tag: "New",
      description: "Lip sync any video to any audio.",
      icon: (
        <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-linear-to-t from-yellow-100 via-cyan-900 to-green-950"
    },
    {
      id: 7,
      name: "Motion Transfer",
      tag: "New",
      description: "Transfer motion to images and animate characters.",
      icon: (
        <svg className="size-9" fill="white" stroke="currentColor" viewBox="0 0 17 15">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z" />
        </svg>
      ),
      color: "text-white",
      background: "bg-gray-950"
    },
    {
      id: 8,
      name: "Train",
      description: "Teach Krea to replicate your style, products, or characters.",
      icon: (
        <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "text-orange-500",
      background: "bg-white"
    }
  ]

  return (
    <section className="py-8 sm:py-10 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Generate</h2>
          <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm sm:text-base">
            <svg className="size-4 cursor-pointer mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span>Show all</span>
          </button>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="min-h-[73px] bg-white dark:bg-gray-900 gap-2 h-fit flex items-center rounded-2xl p-2 sm:py-0 sm:px-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              {/* Icon and tag */}
              <div className="flex items-start justify-between ">
                <div className={`${tool.color} ${tool.background} p-2 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors`}>
                  {tool.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-column">
                <div className="flex">
                  {tool.tag && (
                    <span className="max-h-fit self-center mr-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {tool.tag}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Button */}
              <button className="cursor-pointer ml-auto w-25 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-3xl transition-colors group-hover:bg-gray-300 text-sm">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
