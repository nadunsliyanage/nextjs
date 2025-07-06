import React from 'react'

const WidgetLoading = () => {
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 shadow-sm bg-white animate-pulse space-y-4">
      
      {/* Title + Sample Size */}
      <div className="flex justify-between items-center">
        <div className="h-6 w-40 bg-gray-200 rounded" /> {/* Title skeleton */}
        <div className="h-4 w-20 bg-gray-200 rounded" /> {/* Sample size skeleton */}
      </div>

      {/* Content Block for Graph/Table/etc */}
      <div className="h-64 w-full bg-gray-200 rounded-md" />

    </div>
  )
}

export default WidgetLoading