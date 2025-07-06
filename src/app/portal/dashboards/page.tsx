import Export from './components/actions/export';
import WidgetPlaceHolder from '@/components/widget/placeholder';

const Dashboards = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
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

      {/* Widgets Grid */}
      
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WidgetPlaceHolder />
        <WidgetPlaceHolder />
        <WidgetPlaceHolder /> 
      </div>
    </div>
  )
}

export default Dashboards