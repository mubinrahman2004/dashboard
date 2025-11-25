'use client'
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

export default function SourceCard({ isAnimationActive = true }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Traffic Sources</h2>
          <p className="text-gray-600 text-sm mt-1">Distribution by groups</p>
        </div>
      </div>

      <div className="w-full h-[220px] sm:h-[250px] md:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="55%"
              outerRadius="75%"
              cornerRadius="50%"
              paddingAngle={2}
              dataKey="value"
              isAnimationActive={isAnimationActive}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}`, 'Value']}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                fontSize: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: item.fill }} />
                <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{item.name}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}