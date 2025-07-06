import Table from '@/components/ui/table/table';

interface DataProps {
    data?: Array<PopulationData>;
}

interface PopulationData {
    "Year": number;
    "Population": number;
}

const Widget = async () => {
  
  const res = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`, {
    cache: 'no-store'
  });

  const json: DataProps = await res.json();
  
  
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
    
    {/* Title + Sample Size */}
    <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Population</h2>
        <span className="text-sm text-gray-500">Sample: 12,500</span>
    </div>

    {/* Content Block */}
    <div className="h-64 w-full bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
      { 
        json.data && <Table data={json.data} />
      } 
    </div>
    </div>
  )
}

export default Widget