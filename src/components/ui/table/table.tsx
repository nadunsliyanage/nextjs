'use client'

interface PopulationData {
  Year: number
  Population: number
}

interface TableProps {
  data: PopulationData[]
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left">
          <th className="font-medium text-gray-900">Year</th>
          <th className="font-medium text-gray-900">Population</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((entry) => (
          <tr key={entry.Year} className="py-1 text-sm text-gray-700">
            <td className="font-medium text-gray-900">{entry.Year}:</td>
            <td>{entry.Population.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
