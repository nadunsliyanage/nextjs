import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col gap-6 items-start justify-start min-h-screen p-8 animate-pulse bg-white">
      {/* Icon + Title Row */}
      <div className="flex items-center space-x-4">
        {/* Icon Skeleton */}
        <div className="h-12 w-12 rounded-full bg-gray-200" />

        {/* Title Skeleton */}
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>

      {/* Dashboard Container Skeleton */}
      <div className="w-full h-96 bg-gray-200 rounded-lg" />
    </div>
  )
}

export default Loading