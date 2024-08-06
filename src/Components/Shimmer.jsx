import React from 'react'


const Shimmer = () => {
  return (
    <>
      {/* Search bar shimmer */}
      <div className="max-w-screen-sm mx-auto mb-8">
        <div className="flex items-center bg-white border-gray-200 px-4 py-2 rounded-b-lg shadow-sm">
          <div className="flex items-center flex-grow">
            <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="ml-3 w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Swiper shimmer */}
      <div className="w-full h-48 bg-gray-200 mb-8 animate-pulse"></div>

      {/* Heading shimmer */}
      <div className="ml-48 my-11">
        <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
      </div>

      {/* Restaurant cards shimmer */}
      <div className="flex flex-wrap justify-center mx-10" data-testid="shimmer">
        {Array(12).fill('').map((e, index) => (
          <div key={index} className="w-64 m-4 pb-4">
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
            <div className="w-3/4 h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Shimmer