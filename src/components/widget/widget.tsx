
const Widget = async () => {
  // Simulating a fetch request to get chart data
  const b1 = Math.floor(Math.random() * (4000 - 200 + 1)) + 200;
  const b2 = Math.floor(Math.random() * (4000 - 200 + 1)) + 200;
  const b3 = Math.floor(Math.random() * (4000 - 200 + 1)) + 200;
  const res = await fetch(`https://quick-chart.io/chart?c={type:'bar',data:{labels:['Q1','Q2','Q3','Q4'], datasets:[{label:'Users',data:[${b1},${b2},${b3}]}]}}`, {
    cache: 'no-store' // Disable caching for this request
  });
  
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
    
    {/* Title + Sample Size */}
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">User Growth</h2>
        <span className="text-sm text-gray-500">Sample: 12,500</span>
    </div>

    {/* Content Block */}
    <div className="h-64 w-full bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        { 
          res.ok ? ( <img src={res.url} alt="Chart" className="object-cover rounded-md" /> ) 
            :  (<span>(Graph/Table Placeholder)</span>) 
        }  
    </div>
    </div>
  )
}

export default Widget