'use client'

interface ErrorProps {
  error?: Error
}

export default function ErrorPanel({ error }: ErrorProps) {
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
      
      {/* Title + Sample Size */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-red-400 flex items-center gap-2">
          Boom! <span>💥</span> Something went wrong
        </h2>
      </div>

      {/* Content Block for Graph/Table/etc */}
      <div className="h-64 w-full bg-red-50 border border-dashed border-red-300 rounded-md flex items-center justify-center text-red-600 text-sm text-center px-4">
        <p className="font-medium">
          {error?.message || 'An unexpected error occurred while loading the widget.'}
        </p>
      </div>
    </div>
  )
}
