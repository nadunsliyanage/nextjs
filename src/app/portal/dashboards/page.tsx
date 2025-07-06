import Export from './components/actions/export';

const Dashboards = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-start justify-start min-h-screen p-8 bg-white">
      
      <div className="flex items-center space-x-4 mb-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboards
        </h1>

        {/* Export Button - Client Component */}
        <Export/>
      </div>
    </div>
  )
}

export default Dashboards