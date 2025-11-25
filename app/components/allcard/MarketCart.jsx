'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
];

const MarketChart = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="mb-2 sm:mb-0">
          <h2 className="text-lg font-semibold text-gray-900">Market Analytics</h2>
          <p className="text-gray-600 text-sm mt-1">Performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#8884d8] rounded-full"></div>
            <span className="text-xs text-gray-600">PV</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#82ca9d] rounded-full"></div>
            <span className="text-xs text-gray-600">UV</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[220px] sm:h-[250px] md:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
            <XAxis 
              dataKey="name"
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              width={35}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
            <Bar dataKey="pv" fill="#8884d8" radius={[4, 4, 0, 0]} barSize={16} />
            <Bar dataKey="uv" fill="#82ca9d" radius={[4, 4, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-xs text-purple-600">Total PV</p>
            <p className="text-base font-bold text-purple-900">
              {data.reduce((sum, item) => sum + item.pv, 0).toLocaleString()}
            </p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xs text-green-600">Total UV</p>
            <p className="text-base font-bold text-green-900">
              {data.reduce((sum, item) => sum + item.uv, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketChart;