
'use client'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
  { name: 'Jul', sales: 3490, profit: 4300 },
  { name: 'Aug', sales: 4000, profit: 2400 },
  { name: 'Sep', sales: 3000, profit: 1398 },
  { name: 'Oct', sales: 2000, profit: 9800 },
  { name: 'Nov', sales: 2780, profit: 3908 },
  { name: 'Dec', sales: 1890, profit: 4800 },
];

export default function IndexLineChart() {
  return (
    <div className="w-full max-w-full p-3 sm:p-4 bg-gray-700 dark:bg-gray-800 rounded-xl sm:rounded-2xl">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
        <h1 className="text-gray-300 cursor-pointer hover:text-blue-300 transition-all duration-400 text-lg sm:text-xl font-semibold">
          Sales Performance
        </h1>
        <div className="flex flex-wrap gap-2 ">
          {['Completed', 'Pending', 'Unpaid', 'Delivered'].map((status) => (
            <button
              key={status}
              className="px-3 py-1.5 text-xs cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#F3F4F6'
              }}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '10px',
                fontSize: '14px',
                color: '#9CA3AF'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#8884d8" 
              strokeWidth={2}
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
              stroke="#82ca9d" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}