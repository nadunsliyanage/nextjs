
const Widget = async () => {
  const delay = Math.floor(Math.random() * (4000 - 200 + 1)) + 200;
  await new Promise(resolve => setTimeout(resolve, delay));
  
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
    
    {/* Title + Sample Size */}
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">User Growth</h2>
        <span className="text-sm text-gray-500">Sample: 12,500</span>
    </div>

    {/* Content Block */}
    <div className="h-64 w-full bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        (Graph/Table Placeholder)
    </div>
    </div>
  )
}

export default Widget